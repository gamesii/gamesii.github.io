import{u as w,r,j as e}from"./index-Cz72IKi9.js";const j=()=>e.jsx("img",{src:"https://i.postimg.cc/X7XSzVxM/button-info.webp",alt:"Info",style:{width:"30px",height:"30px",objectFit:"contain",display:"block"}}),m=()=>e.jsx("img",{src:"https://i.postimg.cc/YSWHrzND/close-icon.png",alt:"Close",style:{width:"35px",height:"35px",objectFit:"contain",display:"block"}}),v=({isOpen:n,onClose:p,onContinue:x,playerId:c,setPlayerId:h,error:d,gemPack:selectedReward})=>{const{t:s}=w(),u=r.useRef(null),[i,l]=r.useState(null),[o,a]=r.useState(!1);r.useEffect(()=>{n&&(setTimeout(()=>{var t;return(t=u.current)==null?void 0:t.focus()},100),l(null),a(!1))},[n]),r.useEffect(()=>{if(!o)return;const t=y=>{y.key==="Escape"&&a(!1)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[o]);const g=t=>{h(t.target.value),i&&l(null)},f=()=>{if(!c.trim()){l(s("modal.error"));return}l(null),x("")},b=t=>{t.key==="Enter"&&(t.preventDefault(),f())};return n?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4","aria-modal":"true",role:"dialog",children:[e.jsx("style",{children:`
        @font-face {
          font-family: 'Luckiest Guy';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hQ952mDo.woff2) format('woff2');
        }
        @font-face {
          font-family: 'Luckiest Guy';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2) format('woff2');
        }

        @keyframes infoPulse {
          0%   { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 0 rgba(255,255,255,0)); }
          45%  { transform: scale(1.12) rotate(-4deg); filter: drop-shadow(0 0 10px rgba(255,255,255,0.55)); }
          70%  { transform: scale(1.06) rotate(4deg); }
          100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 0 rgba(255,255,255,0)); }
        }

        .animate-info {
          animation: infoPulse 1.25s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, filter;
        }

        .animate-info:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-info { animation: none !important; }
        }
      `}),o&&e.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",role:"dialog","aria-modal":"true",onClick:()=>a(!1),children:e.jsxs("div",{className:"relative w-full max-w-md",onClick:t=>t.stopPropagation(),children:[e.jsx("button",{onClick:()=>a(!1),className:"absolute -right-3 -top-3","aria-label":"Close guide",children:e.jsx(m,{})}),e.jsx("img",{src:"https://i.postimg.cc/nz0L7Bvm/Step-Guide-for-id-webp.webp",alt:"Guide for Player ID",className:"w-full",style:{display:"block"}})]})}),e.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-[#0dd498] border-1 border-[#0dd498] shadow-2xl font-bold text-white overflow-hidden",style:{fontFamily:"'Luckiest Guy', cursive",boxShadow:"0 0 0 2px #008e67, 0 0 25px rgba(0,142,103,0.95), 0 0 60px rgba(0,142,103,0.7)"},children:[e.jsxs("header",{className:"relative flex items-center justify-center p-3",style:{backgroundImage:"url('https://i.postimg.cc/5twYxqk6/background-header.webp')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("h2",{className:"text-xl uppercase",style:{textShadow:"2px 2px 2px #006546"},children:s("modal.title")}),e.jsx("button",{onClick:p,className:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer","aria-label":"Close",children:e.jsx(m,{})})]}),e.jsxs("div",{className:"p-5 space-y-4 pb-6",style:{backgroundImage:"url('https://store.supercell.com/images/clashroyale/green-offer-bg.png')",backgroundSize:"cover",backgroundPosition:"center"},children:[selectedReward&&e.jsx("img",{src:selectedReward.itemUrl||selectedReward.url,alt:selectedReward.alt,style:{height:"96px",maxWidth:"140px",objectFit:"contain",display:"block",margin:"0 auto"}}),e.jsx("label",{htmlFor:"playerId",className:"text-lg uppercase",style:{textShadow:"2px 2px 2px #000000"},children:s("modal.label")}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:u,id:"playerId",type:"text",className:"w-full bg-white text-black text-lg font-semibold rounded-lg p-3 pr-16 border-2 focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-gray-400",placeholder:s("modal.label"),value:c,onChange:g,onKeyDown:b,autoCapitalize:"characters",style:{fontFamily:"inherit"}}),e.jsx("button",{type:"button",className:`absolute right-3 inset-y-0 flex items-center justify-center cursor-pointer leading-none ${o?"":"animate-info"}`,onClick:()=>a(!0),"aria-label":"Open guide",children:e.jsx(j,{})})]}),(d||i)&&e.jsx("div",{className:"mt-3 flex justify-center",children:e.jsx("div",{className:"bg-[#b8bfbb] rounded-md px-4 py-2 shadow-inner max-w-xs w-full",children:e.jsx("p",{className:"text-[10px] text-red-600 text-center leading-tight max-w-[250px] mx-auto",children:i||d})})}),e.jsxs("button",{onClick:f,className:"relative w-full mt-4 focus:outline-none active:translate-y-[1px] transition-transform duration-100",children:[e.jsx("img",{src:"https://i.postimg.cc/xC0mSdH8/center-button-webp.webp",alt:"Continue",className:"w-[110%] h-[60px] mx-auto"}),e.jsx("span",{className:"absolute inset-0 flex items-center justify-center text-white text-lg font-extrabold uppercase tracking-wide",style:{textShadow:"1px 1px 2px #000000"},children:s("modal.continue")})]}),e.jsxs("p",{className:"mt-1 text-center text-[10px] text-white leading-tight max-w-[250px] mx-auto",children:[s("modal.disclaimer_1"),e.jsx("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-white hover:underline",children:s("privacy")})," ",s("modal.disclaimer_2"),e.jsx("a",{href:"https://policies.google.com/terms",target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 hover:text-white hover:underline",children:s("terms")})," ",s("modal.disclaimer_3")]})]})]})]}):null};export{v as default};
