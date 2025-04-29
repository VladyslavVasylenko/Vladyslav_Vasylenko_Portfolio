document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-button");
  const elements = document.querySelectorAll("[data-lang]");

  function setLanguage(lang) {
    elements.forEach((el) => {
      if (!el.classList.contains('lang-button')) {
        el.hidden = el.getAttribute("data-lang") !== lang;
      }
    });

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Устанавливаем язык по умолчанию
  setLanguage("en");
});
