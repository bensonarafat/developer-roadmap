import{h as p,p as S}from"./hooks.module.a845df0c.js";import{a as L,T as b}from"./jwt.f0e0aa9c.js";import{S as x}from"./spinner.164b1eeb.js";import{a as f}from"./http.20668c64.js";import{o}from"./jsxRuntime.module.8b00cb04.js";import{k as E}from"./preact.module.f1575aff.js";const R="/_astro/linkedin.e8891d46.svg",s="linkedInRedirectAt",l="linkedInLastPage";function U(v){const[i,t]=p(!1),[c,n]=p(""),h=i?x:R;return S(()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),w=e.get("state"),u=e.get("provider");!r||!w||u!=="linkedin"||(t(!0),f(`https://api.roadmap.sh/v1-linkedin-callback${window.location.search}`).then(({response:a,error:I})=>{if(!a?.token){n(I?.message||"Something went wrong."),t(!1);return}let d="/";const m=localStorage.getItem(s),g=localStorage.getItem(l);if(m&&g){const k=parseInt(m,10);Date.now()-k<30*1e3&&(d=g)}localStorage.removeItem(s),localStorage.removeItem(l),L.set(b,a.token,{path:"/",expires:30}),window.location.href=d}).catch(a=>{n("Something went wrong. Please try again later."),t(!1)}))},[]),o(E,{children:[o("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:i,onClick:()=>{t(!0),f("https://api.roadmap.sh/v1-linkedin-login").then(({response:e,error:r})=>{if(!e?.loginUrl){n(r?.message||"Something went wrong."),t(!1);return}["/login","/signup"].includes(window.location.pathname)||(localStorage.setItem(s,Date.now().toString()),localStorage.setItem(l,window.location.pathname)),window.location.href=e.loginUrl}).catch(e=>{n("Something went wrong. Please try again later."),t(!1)})},children:[o("img",{src:h,alt:"Google",class:`h-[18px] w-[18px] ${i?"animate-spin":""}`}),"Continue with LinkedIn"]}),c&&o("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:c})]})}export{U as LinkedInButton};
