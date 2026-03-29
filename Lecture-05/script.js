/* ============================================================
   script.js — Lecture 05 interactive features
   ============================================================ */

/* ── 1. State ──────────────────────────────────────────────── */
let isDark = false;          // theme state
let clickCount = 0;          // click-counter state

/* ── 2. DOM references ─────────────────────────────────────── */
const body         = document.body;
const themeBtn     = document.getElementById('theme-toggle');
const counterBtn   = document.getElementById('click-counter');
const countDisplay = document.getElementById('click-count');
const lastUpdated  = document.getElementById('last-updated');

/* ── 3. Theme Toggle ───────────────────────────────────────── */
function applyTheme(dark) {
  isDark = dark;
  body.classList.toggle('dark', isDark);
  themeBtn.setAttribute('aria-pressed', String(isDark));
  themeBtn.textContent = isDark ? '☀️ Toggle Theme' : '🌙 Toggle Theme';
}

themeBtn.addEventListener('click', () => {
  applyTheme(!isDark);
  // Feature 4 — persist to localStorage
  localStorage.setItem('portfolio_theme', isDark ? 'dark' : 'light');
});

/* ── 4. Load saved theme on page load ─────────────────────── */
(function loadSavedTheme() {
  const saved = localStorage.getItem('portfolio_theme');
  if (saved === 'dark') {
    applyTheme(true);
  }
})();

/* ── 5. Click Counter ──────────────────────────────────────── */
counterBtn.addEventListener('click', () => {
  clickCount++;
  countDisplay.textContent = clickCount;
});

/* ── 6. Last Updated (auto-generated) ─────────────────────── */
(function setLastUpdated() {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  lastUpdated.textContent = `Last updated: ${yyyy}-${mm}-${dd}`;
})();
