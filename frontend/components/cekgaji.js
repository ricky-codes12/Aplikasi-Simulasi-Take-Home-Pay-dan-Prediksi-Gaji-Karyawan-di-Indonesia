export default function checkSalary() {
  const section = document.createElement("section");
  section.id = "cek-gaji";
  section.className = "py-32 bg-slate-800 fade-in";

  section.innerHTML = `
    <div class="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 transition-colors duration-500">
      <h3 class="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-blue-400">
        Check Salary
      </h3>

      <form class="space-y-5">
        <div>
          <label class="block mb-1 font-semibold">Nama</label>
          <input type="text" placeholder="Misal: Ricky"
            class="w-full rounded-xl px-5 py-3 border bg-white/80 dark:bg-gray-800">
        </div>

        <div>
          <label class="block mb-1 font-semibold">Provinsi</label>
          <select class="w-full rounded-xl px-5 py-3 border bg-white/80 dark:bg-gray-800">
            <option>DKI Jakarta</option>
            <option>Jawa Barat</option>
            <option>Jawa Tengah</option>
            <option>Jawa Timur</option>
            <option>Bali</option>
            <option>Sumatera Utara</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 font-semibold">Pengalaman (tahun)</label>
          <input type="number" min="0" placeholder="Misal: 2"
            class="w-full rounded-xl px-5 py-3 border bg-white/80 dark:bg-gray-800">
        </div>

        <div>
          <label class="block mb-1 font-semibold">Pendidikan</label>
          <select class="w-full rounded-xl px-5 py-3 border bg-white/80 dark:bg-gray-800">
            <option>Tidak Sekolah</option>
            <option>SD</option>
            <option>SMP</option>
            <option>SMA/SMK</option>
            <option>D3</option>
            <option>S1</option>
            <option>S2</option>
            <option>S3</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 font-semibold">Jenis Pekerjaan</label>
          <select class="w-full rounded-xl px-5 py-3 border bg-white/80 dark:bg-gray-800">
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Data Analyst</option>
            <option>Designer</option>
            <option>Lainnya</option>
          </select>
        </div>
      </form>

      <div id="hasil-gaji"
        class="mt-8 text-center text-xl font-semibold text-green-700 dark:text-green-300">
      </div>
    </div>
  `;

  const form = section.querySelector("form");
  const hasilDiv = section.querySelector("#hasil-gaji");

  const API_BASE = __API_BASE_URL__;

  async function fetchSalary(payload) {
    const res = await fetch(`${API_BASE}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Backend error");
    }

    return res.json();
  }

  async function updateGaji() {
    const nama = form.querySelector('input[type="text"]').value.trim();
    const provinsi = form.querySelectorAll("select")[0].value;
    const pengalaman = parseInt(
      form.querySelector('input[type="number"]').value
    );
    const pendidikan = form.querySelectorAll("select")[1].value;
    const pekerjaan = form.querySelectorAll("select")[2].value;

    if (!nama || isNaN(pengalaman)) {
      hasilDiv.innerHTML = "";
      return;
    }

    hasilDiv.innerHTML = "⏳ Menghitung estimasi gaji...";

    try {
      const data = await fetchSalary({
        nama,
        provinsi,
        pengalaman,
        pendidikan,
        pekerjaan,
      });

      hasilDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-green-100 dark:bg-green-900">
          Hai <b>${data.nama}</b> 👋<br>
          Estimasi gaji kamu adalah:<br>
          <span class="text-3xl font-extrabold">
            Rp ${data.predicted_salary.toLocaleString("id-ID")}
          </span>
        </div>
      `;
    } catch (err) {
      hasilDiv.innerHTML = "❌ Gagal mengambil data gaji";
      console.error(err);
    }
  }

  form.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("change", updateGaji);
  });

  return section;
}
