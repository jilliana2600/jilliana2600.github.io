// script.js
document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* =========================================
     RESUME DROPDOWN SECTIONS
  ========================================= */
  const dropdownSections = document.querySelectorAll(".resume-section");

  dropdownSections.forEach(section => {
    const btn = section.querySelector(".dropdown-btn");
    const content = section.querySelector(".dropdown-content");

    // Add arrow if missing
    if (!btn.querySelector(".arrow")) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "▶";
      btn.appendChild(arrow);
    }

    btn.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      dropdownSections.forEach(s => {
        if (s !== section) {
          s.classList.remove("dropdown-open");
          s.querySelector(".dropdown-content").style.display = "none";
        }
      });

      content.style.display = isOpen ? "none" : "block";
      section.classList.toggle("dropdown-open", !isOpen);
    });
  });

  /* =========================================
     PROJECT IMAGE SLIDES
  ========================================= */
  document.querySelectorAll(".project-slides").forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;

    function updateSlides() {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      prevBtn.classList.toggle("hidden", index === 0);
      nextBtn.classList.toggle("hidden", index === slides.length - 1);
    }

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateSlides();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
        updateSlides();
      }
    });

    updateSlides();
  });

  console.log("Site Loaded and Script Active");
});
