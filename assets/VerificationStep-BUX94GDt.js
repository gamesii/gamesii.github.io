import{u,r as p,j as t}from"./index-Cz72IKi9.js";const h="https://i.postimg.cc/wMy5hFxN/gems-png.png",y=({isOpen:s,onComplete:c,playerId:x,playerName:d,gemPack:selectedReward})=>{const{t:r}=u(),i=r("verification.steps"),[o,l]=p.useState(0);if(p.useEffect(()=>{if(!s){l(0);return}if(o>=i.length-1){const a=setTimeout(()=>{c()},2e3);return()=>clearTimeout(a)}const n=setTimeout(()=>{l(a=>a+1)},600);return()=>clearTimeout(n)},[s,o,c,i]),!s)return null;const e=i[o],g=selectedReward?.itemUrl||selectedReward?.url||h,m=d||x;return t.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4","aria-modal":"true",role:"dialog",style:{fontFamily:"'Luckiest Guy', cursive"},children:[t.jsx("style",{children:`
        /* latin-ext */
        @font-face {
          font-family: 'Luckiest Guy';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hQ952mDo.woff2) format('woff2');
          unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Luckiest Guy';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @keyframes popPulse {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.15); filter: brightness(1.2); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        .animate-pop-pulse {
          animation: popPulse 1.2s ease-in-out infinite;
        }
      `}),t.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-gradient-to-br from-[#007bff] to-[#0056b3] border-4 border-[#197327] shadow-2xl font-bold text-white overflow-hidden",children:[t.jsx("header",{className:"relative flex items-center justify-center bg-black/20 p-4 border-b-2 border-[#197327]/50",children:t.jsx("h2",{className:"text-xl md:text-2xl uppercase tracking-widest",style:{textShadow:"2px 2px 2px #00000080"},children:r("verification.title")})}),t.jsxs("div",{className:"p-6 text-center space-y-5",children:[t.jsx("img",{src:g,alt:selectedReward?.alt||"Selected Gem Pack",className:"w-32 h-32 mx-auto mb-4 object-contain animate-pop-pulse drop-shadow-lg"}),t.jsxs("p",{className:"text-lg text-yellow-300",children:[r("verification.player_found")," ",t.jsx("span",{className:"text-white font-mono",style:{fontFamily:"inherit"},children:m})]}),t.jsx("div",{style:{background:"#343a40",borderRadius:"10px",border:"2px solid #212529",padding:"4px",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.4)",height:"28px"},children:t.jsxs("div",{style:{width:`${e.progress}%`,height:"100%",background:"linear-gradient(to bottom, #28a745, #218838)",borderRadius:"6px",position:"relative",transition:"width 1000ms ease-out",display:"flex",alignItems:"center",justifyContent:"center",borderRight:e.progress>0&&e.progress<100?"3px solid #ffc107":"none",boxShadow:"0 1px 2px rgba(0,0,0,0.2)"},children:[t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"50%",background:"linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))",borderRadius:"6px 6px 0 0"}}),t.jsx("span",{className:"relative text-xs font-bold text-white",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.7)"},children:e.progress>0&&`${e.progress}%`})]})}),t.jsx("p",{className:"text-base md:text-lg h-12 flex items-center justify-center text-yellow-200",style:{textShadow:"1px 1px 1px #000"},children:e.message})]})]})]})};export{y as default};
