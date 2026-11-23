const languages = await fetch('/assets/translations.json').then(response => {
  if (!response.ok) throw new Error('Translation files unavailable');
  return response.json();
});
const menu = document.getElementById('site-language');
function deviceLanguage() {
  for (const preference of (navigator.languages || [navigator.language])) {
    const tag = preference.toLowerCase();
    const exact = Object.keys(languages).find(code => code.toLowerCase() === tag);
    if (exact) return exact;
    if (tag.startsWith('zh')) return /tw|hk|hant/.test(tag) ? 'zh-TW' : 'zh-CN';
    const base = tag.split('-')[0];
    if (languages[base]) return base;
    if (['nb','nn'].includes(base)) return 'no';
  }
  return 'en';
}
let language = deviceLanguage();
try { const saved = localStorage.getItem('site-language'); if (languages[saved]) language = saved; } catch {}
let country = '';
window.siteText = key => (languages[language] || languages.en)[key] || languages.en[key] || key;
window.siteLanguages = {};
for (const [code, text] of Object.entries(languages)) {
  window.siteLanguages[code] = {
    loading: text.loading, terms: text.terms, privacy: text.privacy, select_pack: text.select,
    banner_line1: `Clash Royale — ${text.rewards}`, banner_line2_1: '', banner_line2_2: text.rewards,
    footer: {follow_us:text.follow,download:text.download,terms:text.terms,privacy:text.privacy,parents:text.parents,safe_play:text.safe,accessibility:text.accessibility,cookies:text.cookies},
    modal: {title:text.playerId,label:text.enterId,placeholder:'#',error:text.enterId,continue:text.continue},
    claim: {title:text.rewards,button:text.continue}
  };
}
function renderCountry() {
  let label = '—';
  if (country) {
    try { label = new Intl.DisplayNames([language], {type:'region'}).of(country) || country; }
    catch { label = country; }
  }
  const countryLabel = document.getElementById('visitor-country');
  if (countryLabel) countryLabel.textContent = label;
}
function applyLanguage(code) {
  language = languages[code] ? code : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = ['ar','he','fa'].includes(language) ? 'rtl' : 'ltr';
  if (menu) menu.value = language;
  try { localStorage.setItem('site-language', language); } catch {}
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = window.siteText(element.dataset.i18n);
  });
  renderCountry();
  window.dispatchEvent(new CustomEvent('site-language-change', {detail:language}));
}
if (menu) menu.addEventListener('change', () => applyLanguage(menu.value));
applyLanguage(language);
fetch('https://gamesii-api.yassirdouieb100.workers.dev/api/location.php', {cache:'no-store'}).then(response => {
  if (!response.ok) throw new Error('Location unavailable');
  return response.json();
}).then(data => { country = /^[A-Z]{2}$/.test(data.country || '') ? data.country : ''; renderCountry(); }).catch(() => renderCountry());
