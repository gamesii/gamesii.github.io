window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
gtag('js', new Date());
gtag('config', 'G-7KMZPBMNBH', { page_location: window.location.href });

// Identify the hash-based game separately without sending extra page_view events.
let lastGame;
function trackGameView() {
  const game = location.pathname.startsWith('/brawl-stars/') ? 'brawl-stars'
    : location.hash === '#clash-royale' ? 'clash-royale' : 'game-selection';
  if (game === lastGame) return;
  lastGame = game;
  gtag('event', 'game_view', { game_name: game, page_location: location.href });
}
trackGameView();
window.addEventListener('hashchange', trackGameView);
