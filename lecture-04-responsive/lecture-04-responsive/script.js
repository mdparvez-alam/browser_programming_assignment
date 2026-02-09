/* ---------- Lecture 04 features: theme toggle + click counter ---------- */

/* ---------- Console (3+ messages) ---------- */
console.log("Page loaded: script.js running");

/* ---------- State variables ---------- */
let isDarkMode = false;       // state: current theme
let clickCount = 0;           // state: click counter

/* ---------- DOM references (const & let) ---------- */
const themeToggleBtn = document.getElementById("theme-toggle");
const counterBtn = document.getElementById("click-counter");
const counterDisplay = document.getElementById("click-count");

/* ---------- Inject minimal dark theme CSS so toggle actually changes UI ---------- */
(function injectDarkStyles() {
  const css = `
    body.dark-mode {
      background: linear-gradient(180deg, #0b1220, #071026) !important;
      color: #dbeafe !important;
    }
    body.dark-mode header, body.dark-mode footer {
      background: linear-gradient(135deg,#0f172a,#071026) !important;
      color: #dbeafe !important;
    }
    body.dark-mode section {
      background: #071026 !important;
      color: #cbd5e1 !important;
      box-shadow: none !important;
    }
    body.dark-mode a { color: #93c5fd !important; }
    body.dark-mode figcaption { color: #94a3b8 !important; }
  `;
  const style = document.createElement("style");
  style.setAttribute("data-generated", "dark-mode");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();

/* ---------- Functions (2+) ---------- */
function setTheme(dark) {
  isDarkMode = Boolean(dark);
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeToggleBtn.textContent = isDarkMode ? "Switch to light" : "Switch to dark";
  themeToggleBtn.setAttribute("aria-pressed", String(isDarkMode));
  console.log("Theme set:", isDarkMode ? "dark" : "light");
}

function toggleTheme() {
  setTheme(!isDarkMode);
  console.log("Theme toggled by user to", isDarkMode ? "dark" : "light");
}

function incrementCounter() {
  clickCount += 1;
  counterDisplay.textContent = clickCount;
  console.log(`Click counter: button pressed ${clickCount} time(s)`);
}

/* ---------- Event handlers (2+) ---------- */
themeToggleBtn.addEventListener("click", toggleTheme);
counterBtn.addEventListener("click", incrementCounter);

/* Extra small nicety: keyboard shortcut 't' toggles theme */
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t") {
    toggleTheme();
    console.log("Keyboard shortcut 't' used for theme toggle");
  }
});

/* Initialize initial UI state */
document.addEventListener("DOMContentLoaded", () => {
  // reflect initial states in UI
  setTheme(isDarkMode);
  counterDisplay.textContent = clickCount;
  console.log("UI initialized (DOMContentLoaded)");
});
