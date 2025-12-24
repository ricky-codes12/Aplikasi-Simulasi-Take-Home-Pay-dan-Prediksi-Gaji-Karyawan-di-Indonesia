export default function Navbar() {
  const header = document.createElement('header');
  header.className =
    "sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-800 transition-colors duration-500";

  header.innerHTML = `
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      
      <!-- Logo -->
      <h1 class="text-2xl font-extrabold tracking-tight text-blue-900 dark:text-blue-400 cursor-pointer hover:scale-105 transition-transform duration-300">
        💰 GAJIKU
      </h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <ul class="flex gap-8 font-medium">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#cek-gaji" class="nav-link">Check Salary</a></li>
          <li><a href="#faq-brand" class="nav-link">QnA</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
        </ul>

        <button id="theme-toggle" aria-label="Toggle theme"
          class="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
          <span id="theme-icon">🌙</span>
        </button>
      </nav>

      <!-- Mobile Hamburger -->
      <div class="md:hidden flex items-center gap-2">
        <button id="mobile-menu-btn" aria-label="Open menu" class="p-2 rounded-md bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu (hidden by default) -->
    <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-6 py-4">
      <ul class="flex flex-col gap-4 font-medium">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#cek-gaji" class="nav-link">Check Salary</a></li>
        <li><a href="#faq-brand" class="nav-link">QnA</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
      </ul>
    </div>
  `;

  // Toggle Dark Mode
  const toggle = header.querySelector('#theme-toggle');
  const icon = header.querySelector('#theme-icon');
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    icon.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Toggle Mobile Menu
  const mobileBtn = header.querySelector('#mobile-menu-btn');
  const mobileMenu = header.querySelector('#mobile-menu');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Optional: close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  return header;
}
