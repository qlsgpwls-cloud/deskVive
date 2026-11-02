// 휴대폰 메뉴를 열고 닫아요.
(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  if (!button || !menu) return;
  const compact = window.matchMedia('(max-width: 1200px)');
  function setOpen(open) {
    menu.hidden = compact.matches && !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    button.querySelector('span').textContent = open ? '×' : '☰';
  }
  function sync() {
    button.hidden = !compact.matches;
    setOpen(false);
  }
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && compact.matches && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  compact.addEventListener('change', sync);
  sync();
})();
