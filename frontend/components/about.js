export default function About() {
  const section = document.createElement('section');
  section.id = "about";
  section.className = "py-20 fade-in delay-2 bg-gray-50 dark:bg-gray-900";

  section.innerHTML = `
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-900 dark:text-blue-400">
      Tim GAJIKU
    </h2>

    <div class="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6">
      <!-- Card 1 -->
      <div class="about-card bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <img src="./img/AidFawwaz.jpeg" alt="" class="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 hover:scale-110">
        <h4 class="font-semibold text-xl mb-1 text-blue-900 dark:text-blue-400">Aid Fawwaz</h4>
        <p class="text-gray-800 dark:text-gray-200 font-medium mb-3">Developer</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="#" target="_blank" class="text-pink-500 hover:scale-125 transition-transform transform">
            <!-- Instagram Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 19.32 5.68 21 7.75 21h8.5C18.32 21 20 19.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm4.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg>
          </a>
          <a href="#" target="_blank" class="text-blue-600 hover:scale-125 transition-transform transform">
            <!-- LinkedIn Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.6-.9 1.9-1.3 2.9-1.3 2.21 0 4 1.79 4 4v5z"/></svg>
          </a>
          <a href="#" target="_blank" class="text-gray-800 dark:text-white hover:scale-125 transition-transform transform">
            <!-- GitHub Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.91.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
      
       <!-- Card 2 -->
      <div class="about-card bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <img src="./images/Ricky.jpeg" alt="" class="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg transition-transform duration-300 hover:scale-110">
        <h4 class="font-semibold text-xl mb-1 text-blue-900 dark:text-blue-400">Ricky Nugraha</h4>
        <p class="text-gray-800 dark:text-gray-200 font-medium mb-3">Full Stack Developer</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/rricky_nugraha?igsh=aWdkbjdtYXQyMjdn" target="_blank" class="text-pink-500 hover:scale-125 transition-transform transform">
            <!-- Instagram Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 19.32 5.68 21 7.75 21h8.5C18.32 21 20 19.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm4.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg>
          </a>
          <a href="https://www.instagram.com/rricky_nugraha?igsh=aWdkbjdtYXQyMjdn" target="_blank" class="text-blue-600 hover:scale-125 transition-transform transform">
            <!-- LinkedIn Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.6-.9 1.9-1.3 2.9-1.3 2.21 0 4 1.79 4 4v5z"/></svg>
          </a>
          <a href="https://github.com/ricky-codes12" target="_blank" class="text-gray-800 dark:text-white hover:scale-125 transition-transform transform">
            <!-- GitHub Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.91.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>

       <!-- Card 3 -->
      <div class="about-card bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <img src="./img/AidFawwaz.jpeg" alt="" class="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 hover:scale-110">
        <h4 class="font-semibold text-xl mb-1 text-blue-900 dark:text-blue-400">Jevon Ariel Putra</h4>
        <p class="text-gray-800 dark:text-gray-200 font-medium mb-3">Developer</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="#" target="_blank" class="text-pink-500 hover:scale-125 transition-transform transform">
            <!-- Instagram Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 19.32 5.68 21 7.75 21h8.5C18.32 21 20 19.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm4.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg>
          </a>
          <a href="#" target="_blank" class="text-blue-600 hover:scale-125 transition-transform transform">
            <!-- LinkedIn Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.6-.9 1.9-1.3 2.9-1.3 2.21 0 4 1.79 4 4v5z"/></svg>
          </a>
          <a href="#" target="_blank" class="text-gray-800 dark:text-white hover:scale-125 transition-transform transform">
            <!-- GitHub Icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.91.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;

  return section;
}
