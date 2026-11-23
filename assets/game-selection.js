const selection = document.getElementById('game-selection');
const root = document.getElementById('root');
const status = document.getElementById('selection-status');
const link = document.getElementById('clash-royale-link');
let application;
let navigation = 0;
async function renderRoute() {
  const current = ++navigation;
  if (location.hash !== '#clash-royale') {
    root.hidden = true;
    selection.hidden = false;
    document.title = 'Game Rewards';
    status.textContent = '';
    link.removeAttribute('aria-busy');
    window.scrollTo(0, 0);
    return;
  }
  status.textContent = 'Loading Clash Royale…';
  link.setAttribute('aria-busy', 'true');
  try {
    application ??= import('./index-Cz72IKi9.js').catch(error => {
      application = undefined;
      throw error;
    });
    await application;
    if (current !== navigation) return;
    selection.hidden = true;
    root.hidden = false;
    document.title = 'Clash Royale Gem Rewards';
    status.textContent = '';
    link.removeAttribute('aria-busy');
    window.scrollTo(0, 0);
  } catch {
    if (current !== navigation) return;
    root.hidden = true;
    selection.hidden = false;
    status.textContent = 'Could not load Clash Royale. Click the card to try again.';
    link.removeAttribute('aria-busy');
  }
}
link.addEventListener('click', event => {
  if (location.hash === '#clash-royale') {
    event.preventDefault();
    renderRoute();
  }
});
window.addEventListener('hashchange', renderRoute);
renderRoute();
