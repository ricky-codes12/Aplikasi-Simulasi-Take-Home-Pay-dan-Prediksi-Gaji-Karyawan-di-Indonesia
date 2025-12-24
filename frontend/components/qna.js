export default function FAQBrand() {
  const section = document.createElement('section');
  section.id = "faq-brand";
  section.className = "py-20 px-6 fade-in delay-3 bg-gray-50 dark:bg-gray-900";
  section.className =
  "py-32 bg-gray-50 dark:bg-gray-900";

  section.innerHTML = `
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-900 dark:text-blue-400">
      FAQ Seputar Gajiku
    </h2>
    <div class="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
      ${[
        ["Apa tujuan GAJIKU?", "GAJIKU hadir untuk menghilangkan kebingungan soal gaji & potongan, memberi kejelasan, dan memberdayakan pengguna."],
        ["Siapa target GAJIKU?", "Terutama mahasiswa, fresh graduate, dan pekerja muda."],
        ["Apa filosofi utama GAJIKU?", "Keputusan finansial yang baik dimulai dari pemahaman gaji yang jelas."],
        ["Apa nilai inti (brand values) GAJIKU?", "Transparansi, Inklusif, Edukasi, Realistis."],
        ["Mengapa bahasa GAJIKU penting?", "Bahasa Indonesia yang inklusif & lokal memudahkan pemahaman."],
        ["Apa cerita di balik lahirnya GAJIKU?", "Banyak fresh graduate menerima job offer tanpa tahu gaji bersih, GAJIKU hadir menjawab pertanyaan sederhana: berapa gaji bersih saya?"]
      ].map(([q, a]) => `
        <div class="faq-card bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
          <div class="flex justify-between items-center">
            <h4 class="font-semibold text-lg">${q}</h4>
            <span class="arrow transition-transform duration-300 text-blue-700 dark:text-blue-300">&#9654;</span>
          </div>
          <p class="text-gray-800 dark:text-gray-200 max-h-0 overflow-hidden opacity-0 transition-all duration-300 mt-2 whitespace-pre-line">
            ${a}
          </p>
        </div>
      `).join('')}
    </div>
  `;

  const cards = section.querySelectorAll('.faq-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const p = card.querySelector('p');
      const arrow = card.querySelector('.arrow');
      const isOpen = p.style.maxHeight && p.style.maxHeight !== "0px";

      cards.forEach(c => {
        const content = c.querySelector('p');
        const arr = c.querySelector('.arrow');
        content.style.maxHeight = "0px";
        content.style.opacity = 0;
        arr.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        p.style.maxHeight = p.scrollHeight + "px";
        p.style.opacity = 1;
        arrow.style.transform = "rotate(90deg)";
      }
    });
  });

  return section;
}
