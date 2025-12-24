export default function checkSalary() {
  const section = document.createElement('section');
  section.id = "cek-gaji";
  section.className = "py-20 fade-in";
  section.className = "py-32 bg-slate-800 fade-in";
  section.innerHTML = `
    <div class="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 transition-colors duration-500 neumorphism dark:neumorphism-dark hover:scale-105">
      <h3 class="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-blue-400">Check Salary</h3>
      <form class="space-y-5">
        <div>
          <label class="block mb-1 font-semibold">Nama</label>
          <input type="text" placeholder="Masukkan nama Anda, misal: Ricky" class="w-full rounded-xl px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        </div>
        <div>
          <label class="block mb-1 font-semibold">Provinsi</label>
          <select class="w-full rounded-xl px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
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
          <input type="number" placeholder="Misal: 2" class="w-full rounded-xl px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        </div>
        <div>
          <label class="block mb-1 font-semibold">Lulusan/Pendidikan</label>
          <select class="w-full rounded-xl px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
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
          <select class="w-full rounded-xl px-5 py-3 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Data Analyst</option>
            <option>Designer</option>
            <option>Lainnya</option>
          </select>
        </div>
      </form>
      <div id="hasil-gaji" class="mt-8 text-center text-xl font-semibold text-green-700 dark:text-green-300"></div>
    </div>
  `;

  // UMK/UMR tiap provinsi
  const umkProvinsi = {
    "DKI Jakarta": 4920000,
    "Jawa Barat": 3640000,
    "Jawa Tengah": 3030000,
    "Jawa Timur": 3700000,
    "Bali": 3040000,
    "Sumatera Utara": 3090000,
    "Lainnya": 3000000
  };

  const form = section.querySelector('form');
  const hasilDiv = section.querySelector('#hasil-gaji');

  function hitungGaji(provinsi, pengalaman, pendidikan, pekerjaan) {
    let base = umkProvinsi[provinsi] || 3000000;

    // Bonus pendidikan
    let pendidikanBonus = 0;
    switch(pendidikan){
      case "Tidak Sekolah": pendidikanBonus = 0; break;
      case "SD": pendidikanBonus = 0; break;
      case "SMP": pendidikanBonus = 100000; break;
      case "SMA/SMK": pendidikanBonus = 200000; break;
      case "D3": pendidikanBonus = 500000; break;
      case "S1": pendidikanBonus = 1000000; break;
      case "S2": pendidikanBonus = 1500000; break;
      case "S3": pendidikanBonus = 2000000; break;
    }

    // Bonus pekerjaan
    let pekerjaanBonus = 0;
    switch(pekerjaan){
      case "Frontend Developer": pekerjaanBonus = 500000; break;
      case "Backend Developer": pekerjaanBonus = 700000; break;
      case "Data Analyst": pekerjaanBonus = 600000; break;
      case "Designer": pekerjaanBonus = 400000; break;
      case "Lainnya": pekerjaanBonus = 300000; break;
    }

    return base + pengalaman * 500000 + pendidikanBonus + pekerjaanBonus;
  }

  function updateGaji() {
    const nama = form.querySelector('input[type="text"]').value.trim();
    const provinsi = form.querySelectorAll('select')[0].value;
    const pengalaman = parseInt(form.querySelector('input[type="number"]').value);
    const pendidikan = form.querySelectorAll('select')[1].value;
    const pekerjaan = form.querySelectorAll('select')[2].value;

    if(!nama || !provinsi || isNaN(pengalaman) || !pendidikan || !pekerjaan){
      hasilDiv.innerHTML = '';
      return;
    }

    const gaji = hitungGaji(provinsi, pengalaman, pendidikan, pekerjaan);

    hasilDiv.innerHTML = `
      <div class="p-4 rounded-xl bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 animate-fadeInScale">
        Hai <span class="font-bold">${nama}</span> 👋!<br>
        Dengan pendidikan <span class="font-semibold">${pendidikan}</span>, pengalaman <span class="font-semibold">${pengalaman} tahun</span>, pekerjaan <span class="font-semibold">${pekerjaan}</span>,<br>
        dan berada di <span class="font-semibold">${provinsi}</span>,<br>
        estimasi gaji take home pay kamu adalah:<br>
        <span class="text-3xl font-extrabold">Rp ${gaji.toLocaleString()}</span>
      </div>
    `;
  }

  form.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('input', updateGaji);
  });

  return section;
}
