document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-button");
  const contentElements = document.querySelectorAll("main [data-lang]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang;

      contentElements.forEach((el) => {
        el.hidden = el.dataset.lang !== selectedLang;
      });
    });
  });
});

