import "./main/style.css"; // import CSS via Webpack
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import CekGaji from "./components/cekgaji.js";
import QnA from "./components/qna.js";
import About from "./components/about.js";
import Footer from "./components/footer.js";

// Append sections
const app = document.getElementById("app");
app.appendChild(Navbar());
app.appendChild(Home());
app.appendChild(CekGaji());
app.appendChild(QnA());
app.appendChild(About());
app.appendChild(Footer());

// Navbar scroll active & smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// PWA Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./frontend/sw.js")
      .then(reg => console.log("SW registered:", reg))
      .catch(err => console.error("SW failed:", err));
  });
}

