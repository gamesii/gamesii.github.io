import{r as c,j as e,u as j}from"./index-Cz72IKi9.js";const y=a=>{if(typeof a!="string")return!1;try{const r=new URL(a);return["https:","http:"].includes(r.protocol)&&!r.username&&!r.password}catch{return!1}};function v({onBack:a,onClose:r,gemPack:selectedReward}){const[n,f]=c.useState([]),[o,d]=c.useState(!0),[m,u]=c.useState(""),[b,g]=c.useState(0);return c.useEffect(()=>{const t=new AbortController;let i=!0;const p=window.setTimeout(()=>t.abort(),2e4);d(!0),u(""),f([]),fetch("https://gamesii-api.yassirdouieb100.workers.dev/api/offers.php?game=clash-royale",{signal:t.signal,credentials:"omit",cache:"no-store"}).then(async l=>{if(!l.ok)throw new Error(l.status===429?"Please wait a minute before trying again.":"Offers are temporarily unavailable. Please try again.");const h=await l.json();if(!Array.isArray(h.offers))throw new Error("Offers are temporarily unavailable. Please try again.");i&&f(h.offers.filter(x=>x&&typeof x.name=="string"&&typeof x.description=="string"&&y(x.link)).slice(0,3))}).catch(l=>{i&&u(l.name==="AbortError"?"The request timed out. Please try again.":l.message)}).finally(()=>{clearTimeout(p),i&&d(!1)});const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{i=!1,t.abort(),clearTimeout(p),document.body.style.overflow=w}},[b]),e.jsx("div",{className:"fixed inset-0 z-[250] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onKeyDown:t=>{t.key==="Escape"&&a()},children:e.jsxs("section",{role:"dialog","aria-modal":"true","aria-labelledby":"offer-title",className:"relative w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-[24px] border-4 border-[#ffd83b] bg-[#0f5f35] p-6 text-white shadow-2xl font-sans",children:[e.jsx("button",{autoFocus:!0,onClick:r,"aria-label":"Close offers",className:"absolute right-3 top-2 p-2 text-2xl",children:"×"}),e.jsx("img",{src:selectedReward.itemUrl||selectedReward.url,alt:selectedReward.alt,style:{height:"96px",maxWidth:"140px",objectFit:"contain",display:"block",margin:"0 auto"}}),e.jsx("h2",{id:"offer-title",className:"text-center text-2xl font-black text-[#ffd83b] mt-3",children:window.siteText?.("offers")||"COMPLETE AN OFFER"}),e.jsx("p",{className:"text-center text-sm mt-3 mb-5",children:"Choose an offer and complete its requirements to continue your reward request."}),e.jsxs("div",{"aria-live":"polite",children:[o&&e.jsx("p",{className:"text-center py-8",children:window.siteText?.("loading")||"Loading available offers…"}),!o&&m&&e.jsxs("div",{role:"alert",className:"text-center",children:[e.jsx("p",{children:m}),e.jsx("button",{onClick:()=>g(t=>t+1),className:"mt-4 rounded-lg bg-[#ffd83b] text-[#3a2b0b] px-5 py-3 font-bold",children:"TRY AGAIN"})]}),!o&&!m&&!n.length&&e.jsx("p",{className:"text-center py-6",children:"No offers are currently available for your device and location."})]}),e.jsx("div",{className:"space-y-3",children:n.map((t,i)=>e.jsxs("article",{className:"rounded-xl bg-white text-[#173725] p-4",children:[e.jsxs("div",{className:"flex gap-3 items-start",children:[y(t.picture)&&e.jsx("img",{src:t.picture,alt:"",referrerPolicy:"no-referrer",className:"w-12 h-12 object-contain rounded-lg",onError:p=>{p.currentTarget.style.display="none"}}),e.jsxs("div",{className:"min-w-0 break-words",children:[e.jsx("h3",{className:"font-bold",children:t.name}),e.jsx("p",{className:"text-sm mt-1",children:t.description})]})]}),e.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer sponsored",className:"block text-center rounded-lg bg-[#ffd83b] text-[#3a2b0b] py-3 mt-3 font-bold",children:window.siteText?.("view")||"VIEW OFFER"})]},`${t.id}-${i}`))}),e.jsx("p",{className:"text-xs text-center mt-5",children:"Opening an offer does not confirm completion. Follow the offer’s full requirements."}),e.jsx("button",{onClick:a,className:"block mx-auto mt-3 p-3 underline",children:window.siteText?.("back")||"Back"})]})})}const s=({color:a,top:r,left:n,rotation:f,animationDelay:o})=>e.jsx("div",{className:`absolute w-3 h-5 ${a} animate-fall`,style:{top:r,left:n,transform:`rotate(${f})`,animationDelay:o}}),U=({gemPack:a,playerName:r,onContinue:n})=>{const{t:f}=j(),[o,d]=c.useState(!1),m=()=>d(!0);if(o)return e.jsx(v,{onBack:()=>d(!1),onClose:n,gemPack:a});const b=a.itemUrl||a.url;return e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm","aria-modal":"true",role:"dialog",style:{fontFamily:"'Luckiest Guy', cursive"},children:[e.jsx("style",{children:`
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

        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall 5s linear infinite;
        }
        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            80% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
            animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        /* Entrance Pop for the Image - Bouncier */
        @keyframes imageEntrance {
          0% { transform: scale(0) translateY(50px) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.3) translateY(-20px) rotate(5deg); opacity: 1; }
          70% { transform: scale(0.9) translateY(10px) rotate(-3deg); }
          100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
        }
        /* Continuous Pulse */
        @keyframes pulseCard {
          0% { transform: scale(1); filter: drop-shadow(0 10px 8px rgba(0,0,0,0.2)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 20px 15px rgba(255, 215, 0, 0.5)); }
          100% { transform: scale(1); filter: drop-shadow(0 10px 8px rgba(0,0,0,0.2)); }
        }
        .animate-image-pop {
            animation: imageEntrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, pulseCard 2s ease-in-out infinite 0.8s;
        }
        
        /* Idle Animation: 600ms bounce within a 2.5s loop */
        @keyframes bounce-pop-idle {
          0%, 24%, 100% { transform: scale(1); }
          12% { transform: scale(1.06); }
        }
        
        /* Hover/Active Animation */
        @keyframes bounce-pop-hover {
          0% { transform: scale(0.95); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.00); }
        }
        
        .continue-btn {
          animation: bounce-pop-idle 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        }
        
        .continue-btn:hover, .continue-btn:active {
          animation: bounce-pop-hover 180ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}),e.jsx(s,{color:"bg-red-500",top:"-10%",left:"15%",rotation:"15deg",animationDelay:"0s"}),e.jsx(s,{color:"bg-blue-500",top:"-10%",left:"85%",rotation:"-20deg",animationDelay:"1s"}),e.jsx(s,{color:"bg-pink-400",top:"-10%",left:"10%",rotation:"30deg",animationDelay:"2s"}),e.jsx(s,{color:"bg-red-500",top:"-10%",left:"90%",rotation:"-10deg",animationDelay:"3s"}),e.jsx(s,{color:"bg-blue-500",top:"-10%",left:"5%",rotation:"45deg",animationDelay:"4s"}),e.jsx(s,{color:"bg-pink-400",top:"-10%",left:"60%",rotation:"-35deg",animationDelay:"0.5s"}),e.jsx(s,{color:"bg-yellow-400",top:"-10%",left:"40%",rotation:"10deg",animationDelay:"1.5s"}),e.jsx(s,{color:"bg-green-500",top:"-10%",left:"75%",rotation:"-5deg",animationDelay:"2.5s"}),e.jsxs("div",{className:"relative w-[85%] max-w-[340px] bg-[#0f5f35] border-4 border-[#ffd83b] rounded-[24px] shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 flex flex-col items-center animate-pop-in",children:[e.jsx("h2",{className:"text-[#ffd83b] text-2xl sm:text-3xl font-extrabold mb-1 text-center uppercase tracking-wide drop-shadow-md",style:{textShadow:"0 3px 0 rgba(0,0,0,1)"},children:window.siteText?.("offers")||"COMPLETE AN OFFER"}),e.jsxs("div",{className:"text-center mb-4 z-10 relative",children:[e.jsx("p",{className:"text-white text-xl sm:text-2xl font-black uppercase tracking-wide drop-shadow-md",style:{textShadow:"2px 2px 0 #000"},children:r||"Player"}),e.jsx("p",{className:"text-[#e2f7e9] text-xs sm:text-sm font-bold leading-tight mt-1 px-2 drop-shadow-sm",children:"Choose an offer and complete its requirements to continue your reward request."})]}),e.jsxs("div",{className:"relative mb-3",children:[e.jsx("div",{className:"absolute inset-0 bg-yellow-400/40 blur-2xl rounded-full transform scale-90 animate-pulse"}),e.jsx("img",{src:b,alt:a.alt,className:"relative w-[180px] h-auto object-contain drop-shadow-2xl animate-image-pop"})]}),e.jsx("button",{onClick:m,className:"continue-btn w-full h-14 rounded-xl bg-gradient-to-b from-[#ffd85a] to-[#ffb700] text-[#3a2b0b] font-black text-xl border-b-4 border-[#d39a00] active:border-b-0 active:translate-y-1 flex items-center justify-center uppercase tracking-widest shadow-lg",children:window.siteText?.("view")||"VIEW OFFERS"})]})]})};export{U as default};
