import './localization.js?v=auto-20261025';
const dictionaries = await fetch('/assets/brawl-translations.json').then(r => r.json());
const originals = new WeakMap();
const common = { 'Rewards':'rewards', 'CONTINUE':'continue', 'Back':'back', 'Player ID':'playerId', 'Enter Player ID':'enterId', 'Loading…':'loading', 'COMPLETE AN OFFER':'offers', 'VIEW OFFERS':'view' };
function translate() {
  const dictionary = dictionaries[document.documentElement.lang] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest('script,style,textarea,input,select,[contenteditable],.gems-modal-offer')) continue;
    const previous = originals.get(node);
    const original = previous && node.nodeValue === previous.output ? previous.original : node.nodeValue;
    const key = original.trim();
    const translated = dictionary[key] || (common[key] ? window.siteText(common[key]) : key);
    const output = original.replace(key, translated);
    originals.set(node, {original, output});
    if (node.nodeValue !== output) node.nodeValue = output;
  }
}
const observer = new MutationObserver(() => { observer.disconnect(); translate(); observe(); });
function observe() { observer.observe(document.body, {childList:true,subtree:true,characterData:true}); }
window.addEventListener('site-language-change', translate);
translate(); observe();
