export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = "relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-2xl p-12 mt-20 overflow-hidden transition-colors duration-700";

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 opacity-0 transform translate-y-12 transition-all duration-1000 ease-out footer-content">
      <!-- Logo & Deskripsi -->
      <div class="flex flex-col justify-start">
        <h4 class="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-2">💰 Take Home Pay</h4>
        <p class="text-gray-700 dark:text-gray-300 text-sm">
          Estimasi gaji karyawan secara cepat dan akurat.
        </p>
      </div>

      <!-- Newsletter -->
      <div class="flex flex-col items-center">
        <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">Newsletter</h5>
        <form id="newsletter-form" class="flex gap-2 w-full max-w-xs">
          <input type="email" placeholder="Email Anda" class="flex-1 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400">
          <button type="submit" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white rounded-xl font-semibold">
            Subscribe
          </button>
        </form>
      </div>

      <!-- Kontak & Sosial Media -->
      <div class="flex flex-col items-end">
        <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">Kontak & Sosial Media</h5>
        <p class="text-gray-700 dark:text-gray-300 text-sm">Email: <a href="mailto:CapstoneG005@gmail.com" class="hover:text-blue-500 dark:hover:text-blue-400 transition">CapstoneG005@gmail.com</a></p>
        <p class="text-gray-700 dark:text-gray-300 text-sm mt-1">WA: <a href="https://wa.me/628123456789" target="_blank" class="hover:text-green-500 dark:hover:text-green-400 transition">+62 812-3456-789</a></p>
      </div>
    </div>

    <div class="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
      © 2026 Capstone DB9-G005. 
    </div>
  `;

  // Scroll-triggered animation
  const footerContent = footer.querySelector('.footer-content');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        footerContent.classList.add('show'); // pakai class .show
      }
    });
  }, { threshold: 0.2 });
  observer.observe(footerContent);

  // Newsletter dummy
  const form = footer.querySelector('#newsletter-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Terima kasih telah subscribe! (Demo)');
    form.reset();
  });

  return footer;
}
