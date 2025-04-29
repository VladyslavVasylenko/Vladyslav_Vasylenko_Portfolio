const buttons = document.querySelectorAll(".lang-button");
const elements = document.querySelectorAll("[data-lang]");

function setLanguage(lang) {
  elements.forEach((el) => {
    el.hidden = el.getAttribute("data-lang") !== lang;
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });
}

setLanguage("en");


