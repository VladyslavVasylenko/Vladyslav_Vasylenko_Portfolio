function setLanguage(lang) {
  const allLangElements = document.querySelectorAll('[data-lang]');
  allLangElements.forEach(el => {
    el.hidden = el.getAttribute('data-lang') !== lang;
  });
}
