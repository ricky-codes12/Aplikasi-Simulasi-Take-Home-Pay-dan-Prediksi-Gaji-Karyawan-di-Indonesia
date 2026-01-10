import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error
import joblib
import os

# -----------------------------
# 0. Setup Directories
# -----------------------------
os.makedirs("artifacts", exist_ok=True)
os.makedirs("models", exist_ok=True)

# -----------------------------
# 1. Load dataset
# -----------------------------
df = pd.read_csv("data_salary.csv")

# -----------------------------
# 2. Separate features & target
# -----------------------------
categorical_features = ["provinsi", "pendidikan", "pekerjaan"]
numerical_features = ["pengalaman"]

X = df[categorical_features + numerical_features]
y = df["gaji"]

# -----------------------------
# 3. Define Preprocessing Pipeline
# -----------------------------
categorical_transformer = OneHotEncoder(
    handle_unknown="ignore",
    sparse_output=False
)

numerical_transformer = StandardScaler()

preprocessor = ColumnTransformer(
    transformers=[
        ("cat", categorical_transformer, categorical_features),
        ("num", numerical_transformer, numerical_features),
    ]
)

full_pipeline = Pipeline(
    steps=[("preprocessor", preprocessor)]
)

# -----------------------------
# 4. Scaling Target (y)
# -----------------------------
salary_scaler = StandardScaler()
y_scaled = salary_scaler.fit_transform(y.values.reshape(-1, 1))

# -----------------------------
# 5. Train / test split
# -----------------------------
X_train_raw, X_test_raw, y_train_scaled, y_test_scaled = train_test_split(
    X,
    y_scaled,
    test_size=0.2,
    random_state=42
)

print("-" * 40)
print(f"X_train_raw shape: {X_train_raw.shape}")
print("-" * 40)

# -----------------------------
# 6. FIT PIPELINE (INI KUNCI UTAMA)
# -----------------------------
X_train = full_pipeline.fit_transform(X_train_raw)
X_test = full_pipeline.transform(X_test_raw)

INPUT_FEATURES = X_train.shape[1]
print(f"Total input features after preprocessing: {INPUT_FEATURES}")

# -----------------------------
# 7. SAVE PIPELINE & SCALER (SETELAH FIT)
# -----------------------------
joblib.dump(full_pipeline, "artifacts/full_pipeline.pkl")
joblib.dump(salary_scaler, "artifacts/salary_scaler.pkl")

# -----------------------------
# 8. Build & Compile Model
# -----------------------------
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation="relu", input_shape=(INPUT_FEATURES,)),
    tf.keras.layers.Dense(32, activation="relu"),
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(1)
])

model.compile(
    optimizer="adam",
    loss="mse",
    metrics=["mae"]
)

# -----------------------------
# 9. Train model (EarlyStopping)
# -----------------------------
early_stopping = tf.keras.callbacks.EarlyStopping(
    monitor="val_loss",
    patience=15,
    restore_best_weights=True
)

print("\n--- Training model ---")

model.fit(
    X_train,
    y_train_scaled,
    epochs=200,
    batch_size=32,
    validation_split=0.2,
    callbacks=[early_stopping],
    verbose=1
)

# -----------------------------
# 10. Evaluate
# -----------------------------
y_pred_scaled = model.predict(X_test, verbose=0)
y_pred = salary_scaler.inverse_transform(y_pred_scaled)
y_actual = salary_scaler.inverse_transform(y_test_scaled)

mae_real = mean_absolute_error(y_actual, y_pred)

print("\n--- HASIL AKHIR ---")
print(f"Test MAE (Real Salary Scale): {mae_real:,.0f}")

# -----------------------------
# 11. Save Model (H5)
# -----------------------------
MODEL_PATH = "models/salary_model.h5"
model.save(MODEL_PATH)

print("✅ Model saved:", MODEL_PATH)
print("✅ Pipeline & Scaler saved (FITTED)")
