// عناصر اصلی
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggle");
const instagramLink = document.getElementById("instagramLink");
const telegramLink = document.getElementById("telegramLink");

// منوی موبایل
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// حالت روشن و تاریک
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

function updateThemeIcon() {
  if (!themeToggle) return;
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀";
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
    updateThemeIcon();
  });
}

// انیمیشن ظاهر شدن کارت‌ها
const animatedElements = document.querySelectorAll(
  ".skill-card, .project-card, .journey-item"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
} else {
  animatedElements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
}

// لینک‌های شبکه اجتماعی
if (instagramLink) {
  instagramLink.href = "https://www.instagram.com/aarad58224/";
}

if (telegramLink) {
  const telegramUsername = "arad123";
  telegramLink.href = "https://t.me/" + telegramUsername;
}

// افکت هدر هنگام اسکرول
const header = document.querySelector("header");

window.addEventListener(
  "scroll",
  () => {
    if (!header) return;

    header.style.boxShadow =
      window.scrollY > 50
        ? "0 10px 30px rgba(0,0,0,0.15)"
        : "none";
  },
  { passive: true }
);