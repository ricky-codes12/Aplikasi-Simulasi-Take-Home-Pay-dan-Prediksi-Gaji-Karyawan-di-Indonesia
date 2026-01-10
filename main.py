from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import tensorflow as tf
import joblib
import os
import pandas as pd
from sklearn.utils.validation import check_is_fitted

# -----------------------------
# Load environment variables
# -----------------------------
load_dotenv()

HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8000))

MODEL_PATH = os.getenv("MODEL_PATH")
FULL_PIPELINE_PATH = os.getenv("FULL_PIPELINE_PATH")
SALARY_SCALER_PATH = os.getenv("SALARY_SCALER_PATH")

origins_env = os.getenv("ALLOWED_ORIGINS")
ALLOWED_ORIGINS = origins_env.split(",") if origins_env else ["*"]

# -----------------------------
# Validate env vars
# -----------------------------
if not all([MODEL_PATH, FULL_PIPELINE_PATH, SALARY_SCALER_PATH]):
    raise RuntimeError("MODEL_PATH, FULL_PIPELINE_PATH, dan SALARY_SCALER_PATH wajib diatur.")

# -----------------------------
# Initialize FastAPI
# -----------------------------
app = FastAPI(
    title="Salary Prediction API",
    description="Predict salary using trained ML pipeline",
    version="2.0.1"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Load artifacts
# -----------------------------
try:
    model = tf.keras.models.load_model(MODEL_PATH, compile=False)
    full_pipeline = joblib.load(FULL_PIPELINE_PATH)
    salary_scaler = joblib.load(SALARY_SCALER_PATH)

    # Pastikan pipeline sudah fitted
    check_is_fitted(full_pipeline)

except Exception as e:
    raise RuntimeError(f"Gagal memuat model atau artifacts: {e}")

# -----------------------------
# Request schema
# -----------------------------
class SalaryRequest(BaseModel):
    nama: str
    provinsi: str
    pendidikan: str
    pekerjaan: str
    pengalaman: int = Field(ge=0)

# -----------------------------
# Response schema
# -----------------------------
class SalaryResponse(BaseModel):
    nama: str
    predicted_salary: int

# -----------------------------
# Prediction endpoint
# -----------------------------
@app.post("/predict", response_model=SalaryResponse)
def predict_salary(data: SalaryRequest):
    try:
        # ⚠️ Urutan kolom HARUS SAMA seperti training
        input_df = pd.DataFrame([{
            "provinsi": data.provinsi,
            "pendidikan": data.pendidikan,
            "pekerjaan": data.pekerjaan,
            "pengalaman": data.pengalaman
        }])

        X_processed = full_pipeline.transform(input_df)

        pred_scaled = model.predict(X_processed, verbose=0)
        pred_real = salary_scaler.inverse_transform(pred_scaled)[0][0]

        salary = max(0, int(round(pred_real)))

        return {
            "nama": data.nama,
            "predicted_salary": salary
        }

    except ValueError as ve:
        raise HTTPException(
            status_code=400,
            detail=f"Input tidak valid: {ve}"
        )

    except Exception as e:
        print("Prediction error:", e)
        raise HTTPException(
            status_code=500,
            detail="Gagal memproses prediksi"
        )

# -----------------------------
# Health check
# -----------------------------
@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "model_loaded": True
    }
# -----------------------------