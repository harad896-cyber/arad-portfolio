// عناصر اصلی
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggle");
const instagramLink = document.getElementById("instagramLink");
const telegramLink = document.getElementById("telegramLink");

// دسترسی سریع به پیام‌ها و پنل مدیریت
if (navLinks) {
  if (!document.getElementById("messageAradLink")) {
    const messageLink = document.createElement("a");
    messageLink.id = "messageAradLink";
    messageLink.href = "#support";
    messageLink.textContent = "💬 پیام دادن به آراد";
    navLinks.insertBefore(messageLink, navLinks.firstElementChild);
  }
  if (!document.getElementById("adminPanelLink")) {
    const adminLink = document.createElement("a");
    adminLink.id = "adminPanelLink";
    adminLink.href = "admin/";
    adminLink.textContent = "🔐 پنل پیام‌ها";
    const messageLink = document.getElementById("messageAradLink");
    if (messageLink) messageLink.insertAdjacentElement("afterend", adminLink);
    else navLinks.insertBefore(adminLink, navLinks.firstElementChild);
  }
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
  document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("active")));
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light-mode");
function updateThemeIcon() { if (!themeToggle) return; themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀"; }
updateThemeIcon();
if (themeToggle) { themeToggle.addEventListener("click", () => { document.body.classList.toggle("light-mode"); const theme = document.body.classList.contains("light-mode") ? "light" : "dark"; localStorage.setItem("theme", theme); updateThemeIcon(); }); }

// خلاصه‌سازی توضیحات نمونه‌کارها
function compactProjectDescriptions() {
  document.querySelectorAll(".project-card p").forEach((description) => {
    const text = description.textContent.trim();
    if (!text) return;
    const firstSentence = text.split(/[.!؟\n]/)[0].trim();
    description.textContent = firstSentence.length > 90 ? firstSentence.slice(0, 87).trimEnd() + "…" : firstSentence;
  });
  if (!document.getElementById("compact-project-style")) {
    const style = document.createElement("style");
    style.id = "compact-project-style";
    style.textContent = `.project-card p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}`;
    document.head.appendChild(style);
  }
}
compactProjectDescriptions();
document.addEventListener("DOMContentLoaded", compactProjectDescriptions);

// نظرات نمونه برای نمایش ظاهر بخش رضایت کاربران؛ این‌ها نظر واقعی نیستند.
function addSampleReviews() {
  if (document.getElementById("sample-reviews")) return;
  const projects = document.getElementById("projects");
  if (!projects) return;
  const style = document.createElement("style");
  style.id = "sample-reviews-style";
  style.textContent = `.reviews-section{padding:70px 20px}.reviews-wrap{max-width:1100px;margin:auto}.reviews-label{display:inline-block;font-size:13px;color:var(--text-soft);margin-bottom:10px}.reviews-title{font-size:clamp(28px,4vw,42px);margin:0 0 10px}.reviews-subtitle{color:var(--text-soft);margin:0 0 30px}.reviews-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.review-card{padding:24px;border:1px solid var(--border);border-radius:20px;background:var(--card);box-shadow:0 12px 30px rgba(0,0,0,.06)}.review-stars{letter-spacing:2px;font-size:18px;margin-bottom:14px}.review-text{line-height:1.9;margin:0 0 18px}.review-name{font-weight:700}.review-tag{font-size:12px;color:var(--text-soft);margin-top:5px}@media(max-width:800px){.reviews-grid{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
  const section = document.createElement("section");
  section.id = "sample-reviews";
  section.className = "reviews-section";
  section.innerHTML = `<div class="reviews-wrap"><span class="reviews-label">⭐ نمونه نظرهای نمایشی</span><h2 class="reviews-title">نظر درباره سایت و کار آراد</h2><p class="reviews-subtitle">این نظرها نمونه‌اند و برای نمایش بخش رضایت کاربران اضافه شده‌اند؛ نظر واقعی کاربران نیستند.</p><div class="reviews-grid"><article class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">سایت خیلی تمیز و حرفه‌ای طراحی شده؛ ظاهرش ساده است ولی حس مدرن و خاصی دارد.</p><div class="review-name">محمد</div><div class="review-tag">نمونه نظر</div></article><article class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">نمونه‌کارها مرتب و قابل فهم هستند و مشخص است که آراد با علاقه روی پروژه‌هایش کار کرده.</p><div class="review-name">سارا</div><div class="review-tag">نمونه نظر</div></article><article class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">طراحی سایت حس خوبی می‌دهد؛ مخصوصاً ترکیب پروژه‌ها، مهارت‌ها و بخش پیام دادن خیلی کاربردی است.</p><div class="review-name">علی</div><div class="review-tag">نمونه نظر</div></article></div></div>`;
  projects.insertAdjacentElement("afterend", section);
}
addSampleReviews();
document.addEventListener("DOMContentLoaded", addSampleReviews);

const animatedElements = document.querySelectorAll(".skill-card, .project-card, .journey-item");
if ("IntersectionObserver" in window) { const observer = new IntersectionObserver((entries, currentObserver) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.opacity = "1"; entry.target.style.transform = "translateY(0)"; currentObserver.unobserve(entry.target); } }); }, { threshold: 0.1 }); animatedElements.forEach((element) => { element.style.opacity = "0"; element.style.transform = "translateY(30px)"; element.style.transition = "opacity 0.6s ease, transform 0.6s ease"; observer.observe(element); }); } else { animatedElements.forEach((element) => { element.style.opacity = "1"; element.style.transform = "translateY(0)"; }); }
if (instagramLink) instagramLink.href = "https://www.instagram.com/aarad58224/";
if (telegramLink) { const telegramUsername = "arad123"; telegramLink.href = "https://t.me/" + telegramUsername; }
const header = document.querySelector("header");
window.addEventListener("scroll", () => { if (!header) return; header.style.boxShadow = window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,0.15)" : "none"; }, { passive: true });

// پشتیبانی و نظر کاربران: فقط نام + پیام، بدون درخواست ایمیل
document.addEventListener("DOMContentLoaded", () => {
  const support = document.getElementById("support");
  if (!support) return;
  const oldForm = support.querySelector("form");
  if (oldForm) {
    const email = oldForm.querySelector('input[name="email"]');
    if (email) email.remove();
    const name = oldForm.querySelector('input[name="name"]');
    if (name) name.placeholder = "نام شما";
    const message = oldForm.querySelector('textarea[name="message"]');
    if (message) message.placeholder = "پیام خود را بنویسید...";
  }
  if (document.getElementById("site-feedback")) return;
  const style = document.createElement("style");
  style.textContent = `.support-review-box{margin-top:24px;padding:28px;border:1px solid var(--border);border-radius:20px;background:var(--card)}.support-review-title{font-size:21px;font-weight:700;margin-bottom:8px}.support-review-box>p{color:var(--text-soft);font-size:14px;margin-bottom:18px}.support-review-box .support-form{margin-top:0}`;
  document.head.appendChild(style);
  const box = document.createElement("div");
  box.id = "site-feedback";
  box.className = "support-review-box";
  box.innerHTML = `<div class="support-review-title">⭐ نظر شما درباره سایت و کار من</div><p>نظرت، پیشنهادت یا انتقادت رو با من در میان بگذار.</p><form action="https://formsubmit.co/rahimi2025kh@gmail.com" method="POST" class="support-form"><input type="hidden" name="_subject" value="نظر جدید درباره سایت آراد"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_template" value="table"><input name="name" type="text" placeholder="نام شما" required><textarea name="message" rows="5" placeholder="نظرت درباره سایت یا کار من..." required></textarea><button type="submit">ثبت نظر ←</button></form>`;
  support.appendChild(box);
});

// اتصال فرم‌ها به Supabase؛ پیام‌ها در پنل خصوصی قابل مشاهده‌اند.
const SUPABASE_URL = "https://bkbdcqequyvubjmrbpqo.supabase.co";
const SUPABASE_KEY = "sb_publishable_-wIHh9FKu-lmXSMHRWBbFw_t9u5KutA";
async function saveSiteMessage(form, type) {
  const name = form.querySelector('[name="name"]')?.value.trim();
  const message = form.querySelector('[name="message"]')?.value.trim();
  const button = form.querySelector('button[type="submit"]');
  if (!name || !message) return;
  const original = button?.textContent;
  if (button) { button.disabled = true; button.textContent = "در حال ارسال..."; }
  try {
    const res = await fetch(SUPABASE_URL + "/rest/v1/site_messages", {
      method: "POST",
      headers: { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY, "Content-Type": "application/json", "Prefer": "return=minimal" },
      body: JSON.stringify({ name, message, type })
    });
    if (!res.ok) throw new Error("ارسال ناموفق بود");
    form.reset();
    if (button) button.textContent = "✓ ارسال شد";
  } catch (err) {
    if (button) button.textContent = "خطا در ارسال، دوباره تلاش کنید";
  } finally {
    setTimeout(() => { if (button) { button.disabled = false; button.textContent = original; } }, 2200);
  }
}
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (!form.matches("#support form, #site-feedback form")) return;
  e.preventDefault();
  saveSiteMessage(form, form.closest("#site-feedback") ? "feedback" : "support");
});
