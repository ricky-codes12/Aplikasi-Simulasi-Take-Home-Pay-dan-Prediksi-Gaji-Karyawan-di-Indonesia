export default function Home() {
  const section = document.createElement('section');
  section.id = "home";
  section.className =
    "py-32 text-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800";
  section.className =
    "pt-40 pb-32 text-center relative overflow-hidden ...";

  section.innerHTML = `
    <!-- Background animation -->
    <div class="absolute inset-0 animate-bg-slow -z-10"></div>

    <div class="max-w-3xl mx-auto p-12 rounded-3xl backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 shadow-2xl transform transition-transform duration-500 hover:scale-105 relative z-10">
      
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 dark:text-blue-400 leading-tight">
        <span id="typing-title"></span>
      </h1>

      <p
        id="home-desc"
        class="text-lg md:text-xl mb-10 text-gray-800/90 dark:text-gray-200/90 opacity-0 translate-y-6 transition-all duration-700"
      >
        Dapatkan estimasi gaji bersih berdasarkan provinsi, pengalaman kerja, dan pendidikan.
        Cepat, interaktif, dan akurat!
      </p>

      <button
        id="checkSalaryBtn"
        class="relative overflow-hidden inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 dark:from-yellow-500 dark:to-yellow-400 text-gray-900 px-12 py-4 rounded-full font-semibold shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      >
        Check Salary
      </button>
    </div>
  `;

  /* ===========================
     Typing Effect
  ============================ */
  const titleText = "Prediksi Gaji Karyawan di Indonesia";
  const typingTitle = section.querySelector("#typing-title");
  let index = 0;

  function typeWriter() {
    if (index < titleText.length) {
      typingTitle.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeWriter, 80);
    } else {
      const desc = section.querySelector("#home-desc");
      desc.classList.remove("opacity-0", "translate-y-6");
      desc.classList.add("opacity-100", "translate-y-0");
    }
  }

  typeWriter();

  /* ===========================
     Button Action + Ripple
  ============================ */
  const btn = section.querySelector("#checkSalaryBtn");

  btn.addEventListener("click", (e) => {
    // Ripple Effect
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;
    circle.className =
      "absolute rounded-full bg-white/40 dark:bg-gray-200/20 transform scale-0 animate-ripple pointer-events-none";

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);

    // Scroll ke section cek gaji
    const target = document.getElementById("cek-gaji");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section #cek-gaji tidak ditemukan");
    }
  });

  return section;
}
