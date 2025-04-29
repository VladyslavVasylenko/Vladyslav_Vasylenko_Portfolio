document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.lang-button');
  const elements = document.querySelectorAll('[data-lang]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.lang;
      elements.forEach(el => {
        el.hidden = el.dataset.lang !== selected;
      });
    });
  });
  
  document.querySelector('.lang-button[data-lang="en"]').click();
});
