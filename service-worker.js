if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"2021/08.html",revision:"7bfc492490004b4e12a043a88ecc2c29"},{url:"2021/09.html",revision:"874162bff568b8b29c0dc487baf34214"},{url:"2021/10.html",revision:"b7461e74a19707a113e5c23327379d58"},{url:"2021/11.html",revision:"21b57205912d865233b5be17dd9536ab"},{url:"2021/12.html",revision:"e06d3db5c1600255245714fe2b687415"},{url:"2022/01.html",revision:"eb35646c762a10902011bc41e09603d1"},{url:"2022/02.html",revision:"595e8c15c62db412f03bd962bddfea6c"},{url:"2022/03.html",revision:"11414172c84cb166743459fd9b8df731"},{url:"2022/04.html",revision:"af0ad3ddbeedfaa02fcaa8658052959b"},{url:"404.html",revision:"89f0b3f47b9960186c56e56acc93a5df"},{url:"assets/css/styles.ac1b3965.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/205.100e4ca4.js",revision:null},{url:"assets/js/287.436f3648.js",revision:null},{url:"assets/js/293.53bb0a33.js",revision:null},{url:"assets/js/491.03d8d4fd.js",revision:null},{url:"assets/js/app.31885a8e.js",revision:null},{url:"assets/js/runtime~app.bf1fadba.js",revision:null},{url:"assets/js/v-06916a38.3163cbdf.js",revision:null},{url:"assets/js/v-084642d7.849f83d5.js",revision:null},{url:"assets/js/v-2dd0e081.6f5cfc86.js",revision:null},{url:"assets/js/v-2f85b920.b2437055.js",revision:null},{url:"assets/js/v-313a91bf.3d4c169f.js",revision:null},{url:"assets/js/v-3706649a.8655b880.js",revision:null},{url:"assets/js/v-8daa1a0e.45dbe151.js",revision:null},{url:"assets/js/v-d7fb1286.13dfa491.js",revision:null},{url:"assets/js/v-db64c3c4.4141e025.js",revision:null},{url:"assets/js/v-dece7502.ad26afac.js",revision:null},{url:"assets/js/v-e2382640.7328342c.js",revision:null},{url:"images/icons/android-chrome-192x192.png",revision:"748b59c60560e2df19f229d07f6a9e5f"},{url:"images/icons/android-chrome-512x512.png",revision:"d81acc7f47450a0b1c19b3aff70f9ea3"},{url:"images/logo.png",revision:"6a865536b0e83a89c60276761ae2d214"},{url:"index.html",revision:"ab01a9b9c0008644cca27277c18a0d3a"}],{})}));
