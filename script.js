// script.js

document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');
  const sections = document.querySelectorAll('[data-lang-section]');

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;

      sections.forEach(section => {
        section.style.display = section.dataset.langSection === lang ? 'block' : 'none';
      });
    });
  });

  // Set default language (e.g., English)
  const defaultLang = 'en';
  langButtons.forEach(btn => btn.dataset.lang === defaultLang && btn.click());
});
