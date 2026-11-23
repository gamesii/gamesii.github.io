// FreeEgg Shop - Application Logic & Product Catalog

// 1. Fallback High-Quality SVG Graphics
function getFallbackSVG(type) {
  if (type === 'unicorn' || type === 'pet') {
    return `<svg class="w-full h-full drop-shadow-xl" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="unicornGrad" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="120" r="60" fill="url(#unicornGrad)"/>
      <polygon points="100,20 90,70 110,70" fill="#fde047" stroke="#b45309" stroke-width="2"/>
      <circle cx="80" cy="115" r="8" fill="#1e1b4b"/>
      <circle cx="120" cy="115" r="8" fill="#1e1b4b"/>
      <circle cx="82" cy="112" r="3" fill="#ffffff"/>
      <circle cx="122" cy="112" r="3" fill="#ffffff"/>
      <path d="M92 135 Q100 142 108 135" stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>`;
  } else if (type === 'egg' || type === 'temple') {
    return `<svg class="w-full h-full drop-shadow-xl" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="eggT" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#a7f3d0"/>
          <stop offset="60%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#047857"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="130" rx="65" ry="90" fill="url(#eggT)"/>
      <path d="M60 110 L140 110 M50 140 L150 140 M70 80 L130 80" stroke="#d1fae5" stroke-width="4" stroke-dasharray="8 4"/>
      <polygon points="100,60 115,90 85,90" fill="#fef08a"/>
    </svg>`;
  } else if (type === 'dragon') {
    return `<svg class="w-full h-full drop-shadow-xl" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dragonGrad" cx="30%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#e879f9"/>
          <stop offset="50%" stop-color="#9333ea"/>
          <stop offset="100%" stop-color="#3b0764"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="130" rx="65" ry="90" fill="url(#dragonGrad)"/>
      <path d="M60 70 L35 35 L75 60 Z" fill="#9333ea" stroke="#ffffff" stroke-width="2"/>
      <path d="M140 70 L165 35 L125 60 Z" fill="#9333ea" stroke="#ffffff" stroke-width="2"/>
      <circle cx="85" cy="120" r="7" fill="#fbbf24"/>
      <circle cx="115" cy="120" r="7" fill="#fbbf24"/>
      <circle cx="100" cy="150" r="15" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
    </svg>`;
  } else if (type === 'box' || type === 'brawler' || type === 'drop' || type === 'skin' || type === 'currency') {
    return `<svg class="w-full h-full drop-shadow-xl" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bsGrad" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stop-color="#e879f9"/>
          <stop offset="50%" stop-color="#d500f9"/>
          <stop offset="100%" stop-color="#7b1fa2"/>
        </radialGradient>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe082"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>
      ${type === 'brawler' ? `
        <circle cx="100" cy="95" r="45" fill="url(#bsGrad)"/>
        <path d="M55 230 Q55 170 100 170 Q145 170 145 230 Z" fill="url(#bsGrad)"/>
        <circle cx="84" cy="88" r="6" fill="#1e1b4b"/>
        <circle cx="116" cy="88" r="6" fill="#1e1b4b"/>
        <path d="M88 108 Q100 116 112 108" stroke="#3b0764" stroke-width="4" stroke-linecap="round" fill="none"/>
      ` : type === 'box' ? `
        <rect x="38" y="80" width="124" height="90" rx="12" fill="#0ea5e9"/>
        <rect x="38" y="80" width="124" height="34" rx="12" fill="#0284c7"/>
        <circle cx="100" cy="120" r="16" fill="#bae6fd"/>
        <path d="M94 120 L100 108 L106 120 L100 132 Z" fill="#0c4a6e"/>
        <rect x="30" y="155" width="140" height="14" rx="7" fill="#38bdf8"/>
        <circle cx="82" cy="64" r="18" fill="#f59e0b"/>
        <circle cx="124" cy="50" r="13" fill="#10b981"/>
        <circle cx="100" cy="44" r="9" fill="#e879f9"/>
      ` : type === 'drop' ? `
        <path d="M100 40 Q150 120 150 155 A50 50 0 0 1 50 155 Q50 120 100 40 Z" fill="url(#bsGrad)"/>
        <path d="M78 150 Q100 165 122 150" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"/>
        <circle cx="78" cy="140" r="10" fill="#ffea00" opacity="0.95"/>
        <circle cx="112" cy="190" r="8" fill="#00e5ff" opacity="0.9"/>
        <circle cx="140" cy="165" r="6" fill="#ffea00" opacity="0.9"/>
      ` : type === 'skin' ? `
        <path d="M60 90 L140 90 L128 40 Q100 30 72 40 Z" fill="url(#bsGrad)"/>
        <rect x="55" y="90" width="90" height="110" rx="16" fill="url(#bsGrad)"/>
        <circle cx="100" cy="72" r="26" fill="#f59e0b"/>
        <path d="M70 140 L130 140" stroke="#e9d5ff" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
        <rect x="88" y="120" width="24" height="50" rx="8" fill="#ffea00"/>
      ` : `
        <circle cx="100" cy="125" r="65" fill="url(#coinGrad)" stroke="#b45309" stroke-width="4"/>
        <polygon points="100,95 108,117 133,118 113,132 120,155 100,140 80,155 87,132 67,118 92,117" fill="#b45309"/>
        <circle cx="155" cy="70" r="24" fill="#7ee8fa" stroke="#06b6d4" stroke-width="3"/>
        <path d="M147 70 L155 61 L163 70 L155 79 Z" fill="#ffffff" opacity="0.8"/>
        <circle cx="55" cy="185" r="17" fill="#f472b6" stroke="#db2777" stroke-width="3"/>
      `}
    </svg>`;
  }

  return `<svg class="w-full h-full drop-shadow-xl" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="130" rx="65" ry="90" fill="#0ea5e9"/>
    <circle cx="100" cy="130" r="18" fill="#ffffff" opacity="0.6"/>
  </svg>`;
}

// 2. Brawl Stars Free Rewards Catalog (All $0.00 FREE)
const PRODUCTS = [
  {
    id: 'x5-ultra-chaos-drops',
    name: 'X5 ULTRA CHAOS DROPS',
    category: 'Drops',
    rarity: 'legendary',
    gems: 99,
    price: 0,
    stock: 'Unlimited',
    badge: 'HOT DEAL',
    type: 'drop',
    image: 'images/ultra-chaos-drop.png',
    description: 'X5 ULTRA CHAOS DROPS'
  },
  {
    id: 'x5-vince-box',
    name: 'X5 VINCE BOX',
    category: 'Boxes',
    rarity: 'legendary',
    gems: 99,
    price: 0,
    stock: 'Unlimited',
    badge: 'HOT DEAL',
    type: 'box',
    image: 'images/vince-box.png',
    description: 'X5 VINCE BOX'
  },

  {
    id: 'x5-coffin-box',
    name: 'X5 COFFIN BOX',
    category: 'Boxes',
    rarity: 'legendary',
    gems: 69,
    price: 0,
    oldPrice: 19.99,
    stock: 'Unlimited',
    badge: 'NEW',
    type: 'box',
    rating: '5.0',
    image: 'images/coffin-box.webp',
    description: 'The Coffin Box is a special limited-time reward box'
  },
  {
    id: 'thief-pin',
    name: 'THIEF PIN',
    category: 'Pins',
    gems: 5,
    oldPrice: 2.99,
    rarity: 'rare',
    stock: 'Ready',
    image: 'images/Thief Pin.png',
    description: 'Free Thief Pin — Limited reward.',
    claimUrl: 'https://link.brawlstars.com/en/voucher/7bae5a2d-2afa-4e58-8f9b-dab2d987834c/'
  },
  {
    id: 'bulb-pin',
    name: 'BULB PIN',
    category: 'Pins',
    gems: 7,
    oldPrice: 3.99,
    rarity: 'rare',
    stock: 'Ready',
    image: 'images/Bulb Pin.webp',
    description: 'Free Bulb Pin — Limited reward.',
    claimUrl: 'https://link.brawlstars.com/en/voucher/fad039a8-4850-4a09-b1dd-f673afec5aa7/'
  },
  {
    id: 'x15-chaos-drops',
    name: 'x15 CHAOS DROPS',
    category: 'Drops',
    rarity: 'mythic',
    gems: 99,
    price: 0,
    oldPrice: 14.99,
    stock: 'Unlimited',
    badge: 'HOT DEAL',
    type: 'drop',
    rating: '5.0',
    image: 'images/chaos-drop.png',
    description: 'A high-tier drop that contains rare and valuable rewards such as skins, resources, or special items.'
  },
  {
    id: 'cosmo-box',
    name: 'X5 COSMO BOX',
    category: 'Boxes',
    rarity: 'legendary',
    gems: 60,
    price: 0,
    oldPrice: 9.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '4.9',
    image: 'images/cosmo-box.png',
    description: 'A mysterious celestial chest packed with astronomical amounts of premium rewards, coins, and gems!'
  },
  {
    id: 'x15-ultra-box',
    name: 'X15 ULTRA BOX',
    category: 'Boxes',
    rarity: 'legendary',
    gems: 60,
    price: 0,
    oldPrice: 9.99,
    stock: 'Unlimited',
    badge: 'HOT DEAL',
    type: 'box',
    rating: '5.0',
    image: 'images/ultra-box.webp',
    description: 'The ultimate ultra box with 15x rewards! Packed with premium items, exclusive skins, and massive gem bonuses!'
  },
  {
    id: 'cosmo-brawler',
    name: 'COSMO BRAWLER',
    category: 'Brawlers',
    rarity: 'legendary',
    gems: 59,
    price: 0,
    oldPrice: 24.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '5.0',
    image: 'images/cosmo-brawler-2.webp',
    description: 'A cosmic warrior capable of unleashing celestial power in the arena. 100% free to claim!'
  },
  {
    id: 'vince-brawler',
    name: 'VINCE BRAWLER',
    category: 'Brawlers',
    rarity: 'mythic',
    gems: 66,
    price: 0,
    oldPrice: 29.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '5.0',
    image: 'images/vince-brawler-2.webp',
    description: 'An elite high-energy cosmic fighter who dominates battles with astronomical power.'
  },
  {
    id: 'kaze-brawler',
    name: 'KAZE BRAWLER',
    category: 'Brawlers',
    rarity: 'legendary',
    gems: 89,
    price: 0,
    oldPrice: 27.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '5.0',
    image: 'images/Kaze.png',
    description: 'Kaze is an Ultra Legendary master of shadows who zones as a geisha and strikes as a ninja.'
  },
  {
    id: 'sirius-brawler',
    name: 'SIRIUS BRAWLER',
    category: 'Brawlers',
    rarity: 'mythic',
    gems: 99,
    price: 0,
    oldPrice: 22.99,
    stock: 'Unlimited',
    badge: 'PREMIUM',
    type: 'brawler',
    rating: '4.9',
    image: 'images/Sirius-Skin-Default.webp',
    description: 'A premium brawler with a unique visual theme and special effects.'
  },
  {
    id: 'wendy-brawler',
    name: 'WENDY BRAWLER',
    category: 'Brawlers',
    rarity: 'epic',
    gems: 55,
    price: 0,
    oldPrice: 15.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '4.8',
    image: 'images/wendy.webp',
    description: 'A fresh new brawler joining the arena with unique abilities and style.'
  },
  {
    id: 'nori-box',
    name: 'NORI BOX',
    category: 'Boxes',
    rarity: 'epic',
    gems: 30,
    price: 0,
    oldPrice: 7.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '5.0',
    image: 'images/NORI-BOX.webp',
    description: 'Nori Box contains 8 rewards: Coins, Power Points, Credits, Gems, Bling, Nori cosmetics, and a chance to unlock Nori.'
  },
  {
    id: 'starr-nova-box',
    name: 'STARR NOVA BOX',
    category: 'Boxes',
    rarity: 'epic',
    gems: 30,
    price: 0,
    oldPrice: 8.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '4.8',
    image: 'images/starr-nova-box.webp',
    description: 'A themed box that grants random rewards, possibly including the Starr Nova skin or related items.'
  },
  {
    id: 'wendy-box',
    name: 'WENDY BOX',
    category: 'Boxes',
    rarity: 'mythic',
    gems: 50,
    price: 0,
    oldPrice: 11.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '5.0',
    image: 'images/wendy-box.webp',
    description: 'Wendy Box is a limited-time Brawler Box that contains 8 rewards, including Coins, Power Points, Credits, Gems, Bling, XP Doublers, Wendy cosmetics, and a chance to unlock Wendy.'
  },
  {
    id: 'bolt-box',
    name: 'BOLT BOX',
    category: 'Boxes',
    rarity: 'epic',
    gems: 30,
    price: 0,
    oldPrice: 10.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '4.9',
    image: 'images/Bolt-box.webp',
    description: 'A box that contains random rewards, possibly including Bolt-themed items or skins.'
  },
  
  {
    id: 'sirius-box',
    name: 'SIRIUS BOX',
    category: 'Boxes',
    rarity: 'mythic',
    gems: 50,
    price: 0,
    oldPrice: 13.99,
    stock: 'Unlimited',
    badge: '',
    type: 'box',
    rating: '4.9',
    image: 'images/SIRIUS-BOX.webp',
    description: 'A themed box offering random rewards and a chance to unlock Sirius-related content.'
  },
  {
    id: 'x25-nova-drop',
    name: 'x25 NOVA DROP',
    category: 'Drops',
    rarity: 'legendary',
    gems: 40,
    price: 0,
    oldPrice: 12.99,
    stock: 'Unlimited',
    badge: '',
    type: 'drop',
    rating: '4.9',
    image: 'images/Nova-Drop.png',
    description: 'A reward drop containing random items, often themed around the Nova series. Includes 25 drops!'
  },
  {
    id: 'x15-nanodrop',
    name: 'X15 NANODROP',
    category: 'Drops',
    rarity: 'epic',
    gems: 30,
    price: 0,
    oldPrice: 6.99,
    stock: 'Unlimited',
    badge: '',
    type: 'drop',
    rating: '4.7',
    image: 'images/Nano-Drop.webp',
    description: 'A small drop with concentrated rewards and surprises.'
  },
  {
    id: 'starr-nova-skin',
    name: 'STARR NOVA BRAWLER',
    category: 'Brawlers',
    rarity: 'mythic',
    gems: 50,
    price: 0,
    oldPrice: 19.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '5.0',
    image: 'images/Starr-Nova-Skin.webp',
    description: 'A special cosmetic skin that changes the appearance and effects of a brawler. Free claim!'
  },
  {
    id: 'nori-skin',
    name: 'NORI BRAWLER',
    category: 'Brawlers',
    rarity: 'epic',
    gems: 75,
    price: 0,
    oldPrice: 13.99,
    stock: 'Unlimited',
    badge: '',
    type: 'brawler',
    rating: '4.8',
    image: 'images/Nori-Skin-Default.webp',
    description: 'A unique Nori skin for your brawler, straight from the Nori event.'
  },
  {
    id: 'nori-skin-nano',
    name: 'NORI SKIN NANO',
    category: 'Skins',
    rarity: 'epic',
    gems: 30,
    price: 0,
    oldPrice: 8.99,
    stock: 'Unlimited',
    badge: '',
    type: 'skin',
    rating: '4.7',
    image: 'images/Nori-Skin-Nano.webp',
    description: 'A special Nano version of the Nori skin.'
  },
];

// 3. App State
let activeCategory = 'all';
let searchQuery = '';
let viewMode = 'grid'; // 'grid' | 'list'
let currentModalItem = null;

// 3b. Credits System

const STARTING_GEMS = 0;

function getCreditsCost(itemOrRarity) {
  if (itemOrRarity && typeof itemOrRarity === 'object') {
    if (itemOrRarity.gems != null) return itemOrRarity.gems;
    return getCreditsCost(itemOrRarity.rarity);
  }
  switch(itemOrRarity) {
    case 'rare': return 25;
    case 'epic': return 30;
    case 'legendary': return 40;
    case 'mythic': return 50;
    default: return 30;
  }
}

// Safe storage helpers — work even when localStorage is blocked (private mode, strict browser settings)
const MEM_STORE = {};

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return Object.prototype.hasOwnProperty.call(MEM_STORE, key) ? MEM_STORE[key] : null;
  }
}

function storageSet(key, value) {
  MEM_STORE[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // storage unavailable — value stays in memory for this session
  }
}

function getUserGems() {
  const s = storageGet('userGems');
  return s !== null ? parseInt(s, 10) : STARTING_GEMS;
}

function setUserGems(n) {
  storageSet('userGems', String(n));
  updateGemsDisplay();
}

function updateGemsDisplay() {
  const balance = getUserGems();
  document.querySelectorAll('[data-gems-value]').forEach(el => {
    el.textContent = balance;
  });
}

function openGemsModal() {
  updateGemsDisplay();
  const modal = document.getElementById('gemsModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeGemsModal() {
  const modal = document.getElementById('gemsModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function claimItemById(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) openClaimFlow(product);
}

// 4. Product Image Renderer with fallback
function getProductImageHTML(item, extraClass = "max-w-full max-h-full object-contain") {
  return `
    <img src="${item.image}" alt="${item.name}" class="${extraClass}" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <div style="display:none;" class="w-full h-full flex items-center justify-center">
      ${getFallbackSVG(item.type)}
    </div>
  `;
}

// 5. Catalog Renderer (Grid / List)
function renderCatalog() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.className = 'grid grid-cols-1 gap-6';
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-sky-100 shadow-sm p-8">
        <div class="w-16 h-16 mx-auto mb-4 text-sky-300 text-5xl flex items-center justify-center">
          <i class="fas fa-egg"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">No Items Found</h3>
        <p class="text-gray-500 max-w-md mx-auto">Try selecting another category or resetting your search query.</p>
        <button onclick="resetFilters()" class="mt-4 px-6 py-2 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition">
          View All Items
        </button>
      </div>
    `;
    return;
  }

  container.className = viewMode === 'list'
    ? 'flex flex-col gap-4'
    : 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-6';

  container.innerHTML = filtered.map(item => {
    return viewMode === 'list' ? renderListCard(item) : renderGridCard(item);
  }).join('');
}

function renderGridCard(item) {
  return `
    <div class="product-card bg-white rounded-3xl p-3 sm:p-5 border border-sky-100 shadow-lg flex flex-col justify-between relative group hover:border-sky-300">
      <!-- Badges -->
      <div class="flex items-center justify-between gap-1 mb-2 sm:mb-3 z-10">
        <span class="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-sky-100 text-sky-700 border border-sky-200 truncate">
          ${item.category}
        </span>
        ${item.badge ? `<span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-white border-2 border-amber-300 shadow-lg animate-pulse z-10">${item.badge}</span>` : ''}
      </div>

      <!-- Product Image (Large & Clear) -->
      <div onclick="openProductModal('${item.id}')" class="cursor-pointer relative aspect-square rounded-2xl bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 flex items-center justify-center p-2 sm:p-3 mb-2 sm:mb-4 group-hover:bg-sky-100/50 transition overflow-hidden">
        <div class="w-full h-full flex items-center justify-center">
          ${getProductImageHTML(item, "h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md")}
        </div>
        <div class="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 bg-white/95 backdrop-blur-sm px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md flex items-center gap-1">
          <img src="images/icon_gems.webp" alt="GEMS" class="w-4 h-4 sm:w-5 sm:h-5">
          <span class="text-emerald-600 font-extrabold text-[11px] sm:text-sm">${getCreditsCost(item)}</span>
          <span class="text-[8px] sm:text-[10px] font-extrabold uppercase text-emerald-600">GM</span>
        </div>
      </div>

      <!-- Title & Details -->
      <div>
        <h3 onclick="openProductModal('${item.id}')" class="text-sm sm:text-base font-bold text-gray-900 mb-1 hover:text-sky-500 cursor-pointer transition line-clamp-2 sm:line-clamp-1">
          ${item.name}
        </h3>
        <p class="text-xs text-gray-500 mb-3 sm:mb-4 line-clamp-2 hidden sm:block">${item.description}</p>
      </div>

      <!-- Action Button -->
      <div class="pt-2 sm:pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-x-2 gap-y-2 mt-auto">
        <div class="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <img src="images/icon_gems.webp" alt="GEMS" class="w-4 h-4 sm:w-5 sm:h-5">
          <span class="text-emerald-600 font-black text-sm sm:text-base">${getCreditsCost(item)}</span>
          <span class="text-[8px] sm:text-[10px] font-extrabold uppercase px-1 sm:px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">GM</span>
        </div>

        <button onclick="claimItemById('${item.id}')" class="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold flex-1 min-w-[104px] justify-center sm:flex-none sm:min-w-0 sm:justify-start px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md transition transform active:scale-95 flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs whitespace-nowrap">
          <i class="fas fa-bolt text-[9px] sm:text-xs"></i>
          <span>CLAIM NOW</span>
        </button>
      </div>
    </div>
  `;
}

function renderListCard(item) {
  return `
    <div class="product-card bg-white rounded-3xl p-3 sm:p-4 border border-sky-100 shadow-lg group hover:border-sky-300 flex items-center gap-3 sm:gap-5">
      <!-- Product Image -->
      <div onclick="openProductModal('${item.id}')" class="cursor-pointer relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 flex items-center justify-center p-2 group-hover:bg-sky-100/50 transition overflow-hidden">
        <div class="w-full h-full flex items-center justify-center">
          ${getProductImageHTML(item, "h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md")}
        </div>
      </div>

      <!-- Details -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-sky-700 border border-sky-200">
            ${item.category}
          </span>
        </div>

        <h3 onclick="openProductModal('${item.id}')" class="cursor-pointer text-sm sm:text-base font-bold text-gray-900 mb-1 hover:text-sky-500 transition line-clamp-1">
          ${item.name}
        </h3>
        <p class="text-xs text-gray-500 mb-2 line-clamp-2">${item.description}</p>

        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="flex items-center gap-1.5">
            <img src="images/icon_gems.webp" alt="GEMS" class="w-4 h-4">
            <span class="text-base sm:text-lg font-black text-amber-600">${getCreditsCost(item)}</span>
            <span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">GM</span>
          </div>

          <button onclick="claimItemById('${item.id}')" class="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold px-3.5 py-2 rounded-xl shadow-md transition transform active:scale-95 flex items-center gap-1.5 text-xs whitespace-nowrap">
            <i class="fas fa-bolt"></i>
            <span>CLAIM NOW</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function setViewMode(mode) {
  if (mode !== 'grid' && mode !== 'list') return;
  viewMode = mode;

  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  if (gridBtn) gridBtn.classList.toggle('active', mode === 'grid');
  if (listBtn) listBtn.classList.toggle('active', mode === 'list');

  renderCatalog();
}

// 7. Product Modal
function openProductModal(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;
  currentModalItem = item;

  const modal = document.getElementById('productModal');
  document.getElementById('modalImageContainer').innerHTML = `
    <div class="w-full h-full flex items-center justify-center p-4">
      ${getProductImageHTML(item, "max-h-56 max-w-full object-contain drop-shadow-2xl")}
    </div>
  `;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalCategory').textContent = item.category.toUpperCase();
  document.getElementById('modalRarity').textContent = '100% FREE';
  document.getElementById('modalStock').textContent = `Available (Free Claim)`;
  document.getElementById('modalDescription').textContent = item.description;
  document.getElementById('modalOldPrice').textContent = `$${item.oldPrice.toFixed(2)}`;
  document.getElementById('modalCreditsCost').textContent = getCreditsCost(item);

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  currentModalItem = null;
}

let currentWizardItem = null;
let selectedPlatform = 'ios';

function openClaimFlow(item) {
  const targetItem = item || currentModalItem || PRODUCTS[0];
  if (!targetItem) return;

  currentWizardItem = targetItem;
  const selectedPreview = document.getElementById("wizardSelectedItemPreview");
  if (selectedPreview) selectedPreview.innerHTML = getProductImageHTML(targetItem, "w-full h-full object-contain drop-shadow-xl");
  closeProductModal();

  const gemsMsg = document.getElementById('gemsInsufficient');
  if (gemsMsg) gemsMsg.classList.add('hidden');
  const gemsBtn = document.getElementById('getMoreGemsBtn');
  if (gemsBtn) gemsBtn.classList.add('hidden');
  hideTapToUnlockNote();
  const claimPop = document.getElementById('wizardClaimPop');
  if (claimPop) claimPop.classList.add('hidden');
  wizardClaimBtn = null;
  resetClaimButton();
  const step3Img = document.getElementById('wizardItemImgWrap3');
  if (step3Img && targetItem) {
    step3Img.innerHTML = getProductImageHTML(targetItem, "h-full w-full object-contain blur-[3px] scale-110 transition-all duration-500");
  }

  // Reset steps
  document.getElementById('wizardStep1').classList.remove('hidden');
  document.getElementById('wizardStep2').classList.add('hidden');
  document.getElementById('wizardStep3').classList.add('hidden');

  // Reset step indicator
  document.getElementById('wizardStepNum').textContent = '1';
  document.getElementById('wizardStepNum').className = 'w-7 h-7 rounded-full bg-sky-500 text-white font-black text-xs flex items-center justify-center';
  document.getElementById('wizardStepTitle').textContent = 'Player Information';
  document.getElementById('stepBar1').className = 'w-6 h-1.5 rounded-full bg-sky-500 transition-all';
  document.getElementById('stepBar2').className = 'w-6 h-1.5 rounded-full bg-gray-200 transition-all';
  document.getElementById('stepBar3').className = 'w-6 h-1.5 rounded-full bg-gray-200 transition-all';

  // Set Item info
  document.getElementById('wizardItemName').textContent = targetItem.name;
  const costEl = document.getElementById('wizardItemCost');
  if (costEl) costEl.querySelector('span').textContent = `${getCreditsCost(targetItem)} GEMS`;
  const imgWrap = document.getElementById('wizardItemImgWrap');
  if (imgWrap) {
    imgWrap.innerHTML = getProductImageHTML(targetItem, "max-h-11 max-w-full object-contain");
  }

  // Clear username input
  const userInput = document.getElementById('wizardUsernameInput');
  if (userInput) userInput.value = '';

  selectPlatform('ios');

  const modal = document.getElementById('claimWizardModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeClaimWizard() {
  const modal = document.getElementById('claimWizardModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function selectPlatform(plat) {
  selectedPlatform = plat;
  document.querySelectorAll('#platformOptions .platform-btn').forEach(btn => {
    if (btn.dataset.platform === plat) {
      btn.className = 'platform-btn p-3 rounded-2xl border-2 border-sky-500 bg-sky-50 text-sky-700 text-xs font-extrabold flex flex-col items-center gap-1.5 transition';
    } else {
      btn.className = 'platform-btn p-3 rounded-2xl border-2 border-gray-200 bg-white text-gray-600 text-xs font-bold flex flex-col items-center gap-1.5 transition hover:bg-gray-50';
    }
  });
}

function startGenerationProcess() {
  const username = document.getElementById('wizardUsernameInput').value.trim();
  if (!username) {
    showToast('Please enter your Brawl Stars player tag first!', 'error');
    return;
  }

  // Switch to Step 2
  document.getElementById('wizardStep1').classList.add('hidden');
  document.getElementById('wizardStep2').classList.remove('hidden');

  document.getElementById('wizardStepNum').textContent = '2';
  document.getElementById('wizardStepTitle').textContent = 'Generating Free Item';
  document.getElementById('stepBar2').className = 'w-6 h-1.5 rounded-full bg-sky-500 transition-all';

  const bar = document.getElementById('wizardProgressBar');
  const percentText = document.getElementById('wizardPercent');
  const logText = document.getElementById('wizardLogText');
  const logsBox = document.getElementById('wizardLogsBox');

  bar.style.width = '0%';
  percentText.textContent = '0%';
  logsBox.innerHTML = '';

  const steps = [
    {
      progress: 25,
      log: `Connecting to Brawl Stars server network...`,
      status: `Connecting to Server...`
    },
    {
      progress: 55,
      log: `Searching player tag @${username} on [${selectedPlatform.toUpperCase()}]...`,
      status: `User Found: @${username}`
    },
    {
      progress: 85,
      log: `Generating 100% Free ${currentWizardItem ? currentWizardItem.name : 'Item'}...`,
      status: `Generating Free Item...`
    },
    {
      progress: 100,
      log: `Cryptographic delivery token generated successfully!`,
      status: `Delivery Package Ready!`
    }
  ];

  let currentStep = 0;

  function runNextStep() {
    if (currentStep >= steps.length) {
      setTimeout(() => {
        finishStep2(username);
      }, 700);
      return;
    }

    const s = steps[currentStep];
    bar.style.width = `${s.progress}%`;
    percentText.textContent = `${s.progress}%`;
    logText.textContent = s.status;

    const logEntry = document.createElement('div');
    logEntry.className = 'flex items-center gap-2 text-xs';
    logEntry.innerHTML = `
      <span class="text-emerald-400 font-bold">[✓]</span>
      <span class="text-gray-300">${s.log}</span>
    `;
    logsBox.appendChild(logEntry);
    logsBox.scrollTop = logsBox.scrollHeight;

    currentStep++;
    setTimeout(runNextStep, 850);
  }

  runNextStep();
}

function finishStep2(username) {
  // Switch to Step 3
  document.getElementById('wizardStep2').classList.add('hidden');
  document.getElementById('wizardStep3').classList.remove('hidden');

  document.getElementById('wizardStepNum').textContent = '3';
  document.getElementById('wizardStepNum').className = 'w-7 h-7 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center';
  document.getElementById('wizardStepTitle').textContent = 'Claim Ready';
  document.getElementById('stepBar3').className = 'w-6 h-1.5 rounded-full bg-emerald-500 transition-all';

  document.getElementById('wizardSuccessUser').textContent = `@${username}`;
  const codeEl = document.getElementById('wizardTicketCode');
  if (codeEl) codeEl.textContent = 'EGG-' + Math.floor(100000 + Math.random() * 900000);

  const imgWrap3 = document.getElementById('wizardItemImgWrap3');
  if (imgWrap3 && currentWizardItem) {
    imgWrap3.innerHTML = getProductImageHTML(currentWizardItem, "h-full w-full object-contain blur-[3px] scale-110 transition-all duration-500");
  }


  showToast(`Congratulations @${username}! Free claim generated!`, 'success');
}

let wizardClaimBtn = null;

function resetClaimButton() {
  const btn = document.getElementById('wizardClaimButton');
  if (!btn) return;
  btn.setAttribute('onclick', 'showClaimPop(this)');
  btn.classList.remove('from-green-600', 'to-emerald-500', 'opacity-90');
  btn.classList.add('from-orange-500', 'to-amber-500', 'hover:from-orange-600', 'hover:to-amber-600');
  btn.removeAttribute('disabled');
  btn.innerHTML = '<i class="fas fa-lock"></i><span>CLAIM</span>';
}

function showClaimPop(btn) {
  if (!currentWizardItem) return;
  if (btn.getAttribute('disabled')) return;
  wizardClaimBtn = btn;
  const lbl = document.getElementById('wizardClaimCostLabel');
  if (lbl) lbl.textContent = getCreditsCost(currentWizardItem);
  const pop = document.getElementById('wizardClaimPop');
  if (!pop) return;
  pop.classList.remove('pop-in', 'hidden');
  void pop.offsetWidth;
  pop.classList.add('pop-in');
}

function payForClaim() {
  const pop = document.getElementById('wizardClaimPop');
  if (pop) pop.classList.add('hidden');
  claimWizardItem(wizardClaimBtn || document.getElementById('wizardClaimButton'));
}

function claimWizardItem(btn) {
  if (!currentWizardItem) return;
  hideTapToUnlockNote();
  const cost = getCreditsCost(currentWizardItem);
  if (getUserGems() < cost) {
    const msg = document.getElementById('gemsInsufficient');
    if (msg) {
      msg.classList.remove('hidden');
      msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const btn = document.getElementById('getMoreGemsBtn');
    if (btn) btn.classList.remove('hidden');

    return;
  }
  setUserGems(getUserGems() - cost);

  const msg = document.getElementById('gemsInsufficient');
  if (msg) msg.classList.add('hidden');

  const imgWrap3 = document.getElementById('wizardItemImgWrap3');
  if (imgWrap3 && currentWizardItem) {
    imgWrap3.innerHTML = getProductImageHTML(currentWizardItem, "h-full w-full object-contain scale-110 transition-all duration-500");
  }

  const icon = btn.querySelector('i');
  const label = btn.querySelector('span');

  if (currentWizardItem.claimUrl) {
    if (icon) icon.remove();
    label.textContent = 'OPEN REWARD';
    btn.classList.remove('from-orange-500', 'to-amber-500', 'hover:from-orange-600', 'hover:to-amber-600');
    btn.classList.add('from-green-600', 'to-emerald-500');
    btn.removeAttribute('disabled');
    btn.onclick = function() { window.open(currentWizardItem.claimUrl, '_blank'); };
  } else {
    icon.className = 'fas fa-unlock';
    label.textContent = 'CLAIMED';
    btn.classList.remove('from-orange-500', 'to-amber-500', 'hover:from-orange-600', 'hover:to-amber-600');
    btn.classList.add('from-green-600', 'to-emerald-500', 'opacity-90');
    btn.setAttribute('disabled', 'disabled');
  }
  showToast('Item claimed and unlocked on your account!', 'success');
}

function getMoreGEMS() {
  openGemsInfo();
}

function redirectCredits() {
  openGemsInfo();
}

let tapNoteTimer = null;

function showTapToUnlockNote() {
  const note = document.getElementById('tapToUnlockNote');
  if (!note) return;
  clearTimeout(tapNoteTimer);
  note.classList.remove('pop-in', 'fade-out', 'hidden');
  void note.offsetWidth;
  note.classList.add('pop-in');
  tapNoteTimer = setTimeout(() => {
    note.classList.remove('pop-in');
    note.classList.add('fade-out');
    setTimeout(() => note.classList.add('hidden'), 320);
  }, 6000);
}

function hideTapToUnlockNote() {
  const note = document.getElementById('tapToUnlockNote');
  if (!note) return;
  clearTimeout(tapNoteTimer);
  note.classList.remove('pop-in', 'fade-out');
  note.classList.add('hidden');
}

function openGemsInfo() {
  const modal = document.getElementById('gemsInfoModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    loadGemsOffers();
  }
}

function closeGemsInfo() {
  const modal = document.getElementById('gemsInfoModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Offers are supplied by the same server-side account as Clash Royale.
let offersRequest = 0;
function escapeOffer(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
function validOfferUrl(value) {
  if (typeof value !== 'string') return false;
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password; } catch { return false; }
}
async function loadGemsOffers() {
  const container = document.getElementById('gemsOffersContainer');
  if (!container) return;
  const request = ++offersRequest;
  container.innerHTML = '<p role="status" class="text-center p-4">Loading available offers…</p>';
  try {
    const response = await fetch('https://gamesii-api.yassirdouieb100.workers.dev/api/offers.php?game=brawl-stars', {cache:'no-store', credentials:'omit'});
    if (!response.ok) throw new Error('Offer service unavailable');
    const payload = await response.json();
    if (!Array.isArray(payload.offers)) throw new Error('Invalid offer response');
    if (request !== offersRequest) return;
    renderGemsOffers(payload.offers.filter(offer => validOfferUrl(offer.link)).slice(0, 3));
  } catch {
    if (request !== offersRequest) return;
    container.innerHTML = '<div role="alert" class="text-center p-4"><p>Offers are temporarily unavailable. Please try again.</p><button type="button" onclick="loadGemsOffers()" class="mt-3 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold">TRY AGAIN</button></div>';
  }
}
function renderGemsOffers(offers) {
  const container = document.getElementById('gemsOffersContainer');
  if (!container) return;
  if (!offers.length) {
    container.innerHTML = '<p role="status" class="text-center p-4">No offers are currently available for your device and location.</p>';
    return;
  }
  container.innerHTML = offers.map(offer => `
    <a href="${escapeOffer(offer.link)}" target="_blank" rel="noopener noreferrer sponsored" class="gems-modal-offer">
      <div class="gems-modal-offer-icon">
        ${validOfferUrl(offer.picture) ? `<img src="${escapeOffer(offer.picture)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="gems-modal-icon-fb" style="display:none;">🎮</span>` : '<span class="gems-modal-icon-fb">🎮</span>'}
      </div>
      <div class="gems-modal-offer-info">
        <div class="gems-modal-offer-name">${escapeOffer(offer.name)}</div>
        <div class="gems-modal-offer-desc">${escapeOffer(offer.description)}</div>
      </div>
      <div class="gems-modal-offer-cta"><span class="gems-modal-btn-earn">START</span></div>
    </a>
  `).join('');
}

// 3c. First Visit Gift
const GIFT_KEY = 'firstVisitGiftClaimedV2';
const GIFT_AMOUNT = 20;
let giftClaimables = [];

function openGiftModal() {
  const modal = document.getElementById('giftModal');
  if (!modal) return;
  
  // Reset modal state
  resetGiftModal();

  // Grant the gift gems right away so the balance is added even if the
  // window is closed before the animation / button is used.
  grantGift();
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  
  // Start animation sequence
  setTimeout(() => animateGiftSequence(), 100);
}

function closeGiftModal() {
  const modal = document.getElementById('giftModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function resetGiftModal() {
  // Reset all animated elements
  const elements = {
    giftBox: document.getElementById('giftBox'),
    giftLid: document.getElementById('giftLid'),
    giftBow: document.getElementById('giftBow'),
    giftTitle: document.getElementById('giftTitle'),
    giftSubtitle: document.getElementById('giftSubtitle'),
    giftBalanceContainer: document.getElementById('giftBalanceContainer'),
    giftItemsContainer: document.getElementById('giftItemsContainer'),
    giftBalanceCounter: document.getElementById('giftBalanceCounter'),
    giftBalanceProgress: document.querySelector('#giftBalanceProgress .h-full'),
    giftItemsGrid: document.getElementById('giftItemsGrid'),
    giftItemsCount: document.getElementById('giftItemsCount'),
    giftParticles: document.getElementById('giftParticles')
  };
  
  // Reset transforms and opacity
  if (elements.giftLid) {
    elements.giftLid.style.transform = '';
    elements.giftLid.style.opacity = '';
  }
  if (elements.giftBow) elements.giftBow.style.animation = '';
  if (elements.giftTitle) elements.giftTitle.style.opacity = '0';
  if (elements.giftSubtitle) elements.giftSubtitle.style.opacity = '0';
  if (elements.giftBalanceContainer) elements.giftBalanceContainer.style.opacity = '0';
  if (elements.giftItemsContainer) elements.giftItemsContainer.style.opacity = '0';
  if (elements.giftBalanceCounter) elements.giftBalanceCounter.textContent = '0';
  if (elements.giftBalanceProgress) elements.giftBalanceProgress.style.width = '0%';
  if (elements.giftItemsGrid) elements.giftItemsGrid.innerHTML = '';
  if (elements.giftItemsCount) elements.giftItemsCount.textContent = '0 items';
  if (elements.giftParticles) elements.giftParticles.innerHTML = '';
  
  // Remove animation classes
  document.querySelectorAll('.gift-box-float, .gift-lid-open, .gift-bow-pop, .gift-pulse-glow')
    .forEach(el => el.classList.remove('gift-box-float', 'gift-lid-open', 'gift-bow-pop', 'gift-pulse-glow'));
}

function animateGiftSequence() {
  const giftBox = document.getElementById('giftBox');
  const giftLid = document.getElementById('giftLid');
  const giftBow = document.getElementById('giftBow');
  const giftTitle = document.getElementById('giftTitle');
  const giftSubtitle = document.getElementById('giftSubtitle');
  const giftBalanceContainer = document.getElementById('giftBalanceContainer');
  const giftItemsContainer = document.getElementById('giftItemsContainer');
  
  if (!giftBox || !giftLid) return;
  
  // Start box floating
  giftBox.classList.add('gift-box-float', 'gift-pulse-glow');
  
  // Bow pops in
  if (giftBow) giftBow.classList.add('gift-bow-pop');
  
  // Lid opens after delay
  setTimeout(() => {
    giftLid.classList.add('gift-lid-open');
    
    // Create burst particles and confetti
    createGiftBurst();
    createConfetti();
    createCoins();
    
    // Show title and subtitle
    setTimeout(() => {
      if (giftTitle) giftTitle.style.opacity = '1';
      if (giftSubtitle) giftSubtitle.style.opacity = '1';
    }, 200);
    
    // Start balance counter animation
    setTimeout(() => {
      if (giftBalanceContainer) giftBalanceContainer.style.opacity = '1';
      animateGiftBalance(GIFT_AMOUNT);
    }, 600);
    
    // Show claimable items
    setTimeout(() => {
      if (giftItemsContainer) giftItemsContainer.style.opacity = '1';
      renderGiftItems();
    }, 1200);
    
  }, 800);
}

function createGiftBurst() {
  const container = document.getElementById('giftParticles');
  if (!container) return;
  
  const colors = ['#10b981', '#14b8a6', '#fbbf24', '#f59e0b', '#34d399', '#a7f3d0'];
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.width = `${6 + Math.random() * 8}px`;
    particle.style.height = particle.style.width;
    
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const distance = 80 + Math.random() * 120;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 50;
    
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.animationDelay = `${Math.random() * 0.2}s`;
    particle.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;
    
    container.appendChild(particle);
  }
  
  // Cleanup
  setTimeout(() => container.innerHTML = '', 1500);
}

function createConfetti() {
  const container = document.getElementById('giftParticles');
  if (!container) return;
  
  const colors = ['#10b981', '#fbbf24', '#f59e0b', '#34d399', '#a7f3d0', '#ffffff'];
  const shapes = ['square', 'circle', 'rect'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.background = color;
    confetti.style.left = '50%';
    confetti.style.top = '30%';
    confetti.style.width = `${6 + Math.random() * 8}px`;
    confetti.style.height = confetti.style.width;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    
    const angle = (Math.PI * 2 * i) / confettiCount + (Math.random() - 0.5);
    const distance = 100 + Math.random() * 200;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance + 100;
    
    confetti.style.setProperty('--tx', `${tx}px`);
    confetti.style.setProperty('--ty', `${ty}px`);
    confetti.style.animationDelay = `${Math.random() * 0.3}s`;
    confetti.style.animationDuration = `${1.5 + Math.random() * 1}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(confetti);
  }
  
  setTimeout(() => {
    const confettis = container.querySelectorAll('.confetti');
    confettis.forEach(c => c.remove());
  }, 3000);
}

function createCoins() {
  const container = document.getElementById('giftParticles');
  if (!container) return;
  
  const coinCount = 15;
  
  for (let i = 0; i < coinCount; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin-particle';
    coin.innerHTML = '<i class="fas fa-gem" style="font-size: 10px; display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; color: white;"></i>';
    coin.style.left = '50%';
    coin.style.top = '40%';
    coin.style.animationDelay = `${i * 0.05}s`;
    coin.style.animationDuration = `${1.2 + Math.random() * 0.5}s`;
    
    const angle = (Math.PI * 2 * i) / coinCount + (Math.random() - 0.5) * 0.3;
    const distance = 60 + Math.random() * 80;
    coin.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    coin.style.setProperty('--ty', `${Math.sin(angle) * distance - 60}px`);
    
    container.appendChild(coin);
  }
  
  setTimeout(() => {
    const coins = container.querySelectorAll('.coin-particle');
    coins.forEach(c => c.remove());
  }, 2000);
}

function animateGiftBalance(targetAmount) {
  const counter = document.getElementById('giftBalanceCounter');
  const progressBar = document.querySelector('#giftBalanceProgress .h-full');
  if (!counter || !progressBar) return;
  
  const duration = 1500;
  const start = performance.now();
  const startValue = 0;
  
  function step(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(startValue + (targetAmount - startValue) * eased);
    
    counter.textContent = current;
    progressBar.style.width = `${(current / targetAmount) * 100}%`;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counter.textContent = targetAmount;
      progressBar.style.width = '100%';
      grantGift();
      // Trigger items render after balance completes
      setTimeout(renderGiftItems, 300);
    }
  }
  requestAnimationFrame(step);
}

function renderGiftItems() {
  const grid = document.getElementById('giftItemsGrid');
  const countEl = document.getElementById('giftItemsCount');
  if (!grid) return;
  
  const currentBalance = getUserGems();
  const claimable = PRODUCTS.filter(p => getCreditsCost(p) <= currentBalance && !giftClaimables.includes(p.id));
  
  if (countEl) countEl.textContent = `${claimable.length} items`;
  
  if (claimable.length === 0) {
    grid.innerHTML = `
      <div class="col-span-2 text-center py-8 text-gray-500 text-sm">
        <i class="fas fa-gift text-3xl text-gray-300 mb-2"></i>
        <p>No items available with this balance</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = claimable.map((item, index) => `
    <div class="gift-card-enter bg-white rounded-2xl p-3 border border-emerald-100 shadow-sm flex flex-col" style="animation-delay: ${index * 80}ms">
      <div class="relative aspect-square rounded-xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-2 mb-2 overflow-hidden">
        ${getProductImageHTML(item, "h-full w-full object-contain")}
      </div>
      <div class="flex-1 min-h-0">
<div class="flex items-center justify-between gap-1 mb-1">
          <span class="px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 truncate max-w-[60px]">
            ${item.category}
          </span>
        </div>
        <h4 class="text-xs font-bold text-gray-900 mb-1 line-clamp-1">${item.name}</h4>
        <p class="text-[10px] text-gray-500 line-clamp-2">${item.description}</p>
      </div>
      <div class="pt-2 border-t border-emerald-50 flex items-center justify-between gap-2 mt-auto">
        <div class="flex items-center gap-1 shrink-0">
          <img src="images/icon_gems.webp" alt="GEMS" class="w-4 h-4">
          <span class="text-emerald-600 font-extrabold text-xs">${getCreditsCost(item)}</span>
          <span class="text-[7px] font-extrabold uppercase px-1 py-0.5 rounded bg-emerald-100 text-emerald-700">GM</span>
        </div>
        <button onclick="claimGiftItem('${item.id}')" class="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold flex-1 min-w-0 justify-center px-3 py-1.5 rounded-xl shadow-sm transition active:scale-95 flex items-center gap-1 text-[10px] whitespace-nowrap">
          <i class="fas fa-bolt text-[8px]"></i>
          <span>Get It</span>
        </button>
      </div>
    </div>
  `).join('');
}

function claimGiftItem(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;
  
  closeGiftModal();
  openClaimFlow(item);
}

function maybeShowGift() {
  if (storageGet(GIFT_KEY) === '1') return;
  
  setTimeout(() => {
    openGiftModal();
  }, 2000);
}

function grantGift() {
  // Grant the first-visit gift once. Safe to call multiple times.
  if (storageGet(GIFT_KEY) === '1') return;
  setUserGems(getUserGems() + GIFT_AMOUNT);
  storageSet(GIFT_KEY, '1');
}

function claimGift() {
  // Gift gems are granted when the balance counter finishes; this is a safety net.
  grantGift();
  closeGiftModal();
}

function animateCredits(from, to) {
  const ms = 1800;
  const start = performance.now();
  function step(t) {
    const p = Math.min(1, (t - start) / ms);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(from + (to - from) * eased);
document.querySelectorAll('[data-gems-value]').forEach(el => {
      el.textContent = val;
    });
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function copyWizardTicket() {
  const code = document.getElementById('wizardTicketCode').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).catch(() => {});
  }
  const label = document.getElementById('copyLabel');
  const icon = document.getElementById('copyIcon');
  if (label && icon) {
    label.textContent = 'Copied!';
    icon.className = 'fas fa-check text-emerald-500';
    setTimeout(() => {
      label.textContent = 'Copy';
      icon.className = 'fas fa-copy';
    }, 2500);
  }
}

function finishClaimWizard() {
  closeClaimWizard();
  showToast('Claim ticket saved! Have fun in Brawl Stars Rewards!', 'success');
}

function claimFromModal() {
  if (currentModalItem) {
    openClaimFlow(currentModalItem);
  }
}

// 9. Toast Notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-emerald-600 text-white shadow-emerald-500/20',
    info: 'bg-sky-600 text-white shadow-sky-500/20',
    error: 'bg-red-600 text-white shadow-red-500/20'
  }[type] || 'bg-gray-800 text-white';

  toast.className = `${bgColors} px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform transition-all duration-300 translate-y-4 opacity-0 z-50`;
  toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle'} text-lg"></i>
    <div class="text-xs font-semibold">${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 11. Category Filters & Helpers
function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category.toLowerCase() === cat.toLowerCase()) {
      btn.className = 'cat-btn px-5 py-2.5 rounded-xl font-extrabold text-sm transition bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md';
    } else {
      btn.className = 'cat-btn px-5 py-2.5 rounded-xl font-bold text-sm text-gray-600 hover:bg-sky-50 transition bg-white border border-gray-200';
    }
  });
  renderCatalog();
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  setCategory('all');
}

// 12. 24H Offer Countdown Timer (27 Minutes Active Countdown)
function initCountdownTimer() {
  const STORAGE_KEY = 'free_shop_urgency_deadline';
  let deadline = storageGet(STORAGE_KEY);

  // If no deadline or already in the past, set 27 minutes from now
  if (!deadline || parseInt(deadline, 10) <= Date.now()) {
    deadline = Date.now() + 27 * 60 * 1000 + 14 * 1000; // 27m 14s
    storageSet(STORAGE_KEY, deadline.toString());
  } else {
    deadline = parseInt(deadline, 10);
  }

  function update() {
    const now = Date.now();
    let diff = Math.max(0, Math.floor((deadline - now) / 1000));

    if (diff <= 0) {
      // Reset so it keeps looping around 27 mins
      deadline = Date.now() + 27 * 60 * 1000;
      storageSet(STORAGE_KEY, deadline.toString());
      diff = 27 * 60;
    }

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const topTimerEl = document.getElementById('topTimerDisplay');
    if (topTimerEl) {
      topTimerEl.textContent = formatted;
    }

    const modalTimerEl = document.getElementById('modalTimerDisplay');
    if (modalTimerEl) {
      modalTimerEl.textContent = formatted;
    }
  }

  update();
  setInterval(update, 1000);
}

// 13. Hero Background Slideshow
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// 14. Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initCountdownTimer();
  initHeroSlideshow();
  updateGemsDisplay();
  maybeShowGift();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setCategory(btn.dataset.category);
    });
  });

  const navToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('mobileNavMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeClaimWizard();
    }
  });
});
