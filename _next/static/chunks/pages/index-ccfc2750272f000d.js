(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4896)}])},8045:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,u=e.priority,d=void 0!==u&&u,m=e.loading,y=e.lazyBoundary,b=void 0===y?"200px":y,w=e.className,v=e.quality,k=e.width,j=e.height,S=e.objectFit,A=e.objectPosition,O=e.onLoadingComplete,C=e.loader,I=void 0===C?P:C,D=e.placeholder,z=void 0===D?"empty":D,E=e.blurDataURL,N=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),R=n?"responsive":"intrinsic";"layout"in N&&(N.layout&&(R=N.layout),delete N.layout);var T="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var L=g(t)?t.default:t;if(!L.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(L)));if(E=E||L.blurDataURL,T=L.src,(!R||"fill"!==R)&&(j=j||L.height,k=k||L.width,!L.height||!L.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(L)))}t="string"===typeof t?t:T;var q=_(k),M=_(j),B=_(v),U=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,U=!1);f.has(t)&&(U=!1);0;var H,W=r(s.useIntersection({rootMargin:b,disabled:!U}),2),F=W[0],J=W[1],X=!U||J,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},V=!1,K={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:A},Q="blur"===z?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(E,'")'),backgroundPosition:A||"0% 0%"}:{};if("fill"===R)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if("undefined"!==typeof q&&"undefined"!==typeof M){var Z=M/q,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===R?(G.display="block",G.position="relative",V=!0,Y.paddingTop=$):"intrinsic"===R?(G.display="inline-block",G.position="relative",G.maxWidth="100%",V=!0,Y.maxWidth="100%",H='<svg width="'.concat(q,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(G.display="inline-block",G.position="relative",G.width=q,G.height=M)}else 0;var ee={src:p,srcSet:void 0,sizes:void 0};X&&(ee=x({src:t,unoptimized:l,layout:R,width:q,quality:B,sizes:n,loader:I}));var te=t;0;return o.default.createElement("span",{style:G},V?o.default.createElement("span",{style:Y},H?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,o.default.createElement("img",Object.assign({},N,ee,{decoding:"async","data-nimg":R,className:w,ref:function(e){F(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==p&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),f.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,te,0,z,O)},style:h({},K,Q)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},N,x({src:t,unoptimized:l,layout:R,width:q,quality:B,sizes:n,loader:I}),{decoding:"async","data-nimg":R,style:K,className:w,loading:m||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imagesrcset:ee.srcSet,imagesizes:ee.sizes})):null)};var o=d(n(7294)),a=d(n(5443)),c=n(6978),l=n(5809),s=n(7190);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function h(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){u(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var f=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"custom"}||l.imageConfigDefault,b=y.deviceSizes,w=y.imageSizes,v=y.loader,k=y.path,j=(y.domains,i(b).concat(i(w)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,l=.01*(c=Math).min.apply(c,i(a));return{widths:j.filter((function(e){return e>=b[0]*l})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(o,r,c),u=s.widths,d=s.kind,h=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:a,width:u[h]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function P(e){var t=m.get(v);if(t)return t(h({root:k},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function S(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=i.useRef(),s=r(i.useState(!1),2),u=s[0],d=s[1],h=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[h,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},4896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5893),i=n(9008),o=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{children:"What is this?"}),(0,r.jsx)("p",{children:"This web app is a checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game available for Android and iOS."}),(0,r.jsx)("h3",{children:"How does it work?"}),(0,r.jsx)("p",{children:"Click on the icon corresponding to the collected Decor Pikmin to change from \u274c to \u2705. It will be saved on this device until you clear your browser's storage."}),(0,r.jsx)("p",{children:"Click on the icon again to change to \ud83e\udd5a, indicating you are currently growing this type/color of Decor Pikmin."}),(0,r.jsx)("p",{children:'You can also share your progress between devices by using the "Share" button which will generate a URL containing your collection to be sent to the other device, and clear your progress with the "Clear" button.'}),(0,r.jsx)("h3",{children:"Why?"}),(0,r.jsx)("p",{children:"The collection screen in Pikmin is hard to browse. This web app makes it easier to quickly see which Decor Pikmin you are missing."}),(0,r.jsx)("h3",{children:"Decor Pikmin?"}),(0,r.jsxs)("p",{children:["If you have no idea how Decor Pikmin work, I'd suggest starting here:"," ",(0,r.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})," ","or reading the sections below."]}),(0,r.jsx)("h4",{children:"How do I get Decor Pikmin?"}),(0,r.jsx)("p",{children:'In Pikmin Bloom, every Pikmin you get has the potential to become a "Decor Pikmin". This can happen two different ways:'}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"You get the Pikmin from a Huge Seedling. Once it is grown into a Pikmin, it will have decor based on the type of place it was found in."}),(0,r.jsx)("li",{children:"You get up to the maximum level of friendship (4 full hearts). Once this happens, a special expedition will be available for this Pikmin to go on by itself, and it will come back with a decor matching the type of place it was found in."})]}),(0,r.jsx)("h4",{children:"How do I know which Decor Pikmin I have?"}),(0,r.jsx)("p",{children:'In order to know which ones you already have, you can check your "Decor Collector" badge progress. To do so:'}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Tap your user profile from the home screen (the panel that shows your username)"}),(0,r.jsx)("li",{children:"Tap the Decor Collector badge"})]}),(0,r.jsx)("p",{children:"This will show you all the Decor Pikmin you already have. If you want to get all the Decors as swiftly as possible, you could mark the Seedlings and Pikmin of a color and type of Decor you don't already have and prioritize growing and making friends with those first."}),(0,r.jsx)("h4",{children:"How do I know which Decor a Pikmin or Seedling will get?"}),(0,r.jsx)("p",{children:"This depends on the type of location the Seedling was obtained in, which you can find on both the Seedling page and the Pikmin page. The Forest and Supermarket types have two different variations which the Pikmin will randomly get when it is decorated."})]}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("h3",{children:"Credits and licensing"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Disclaimer:"})," This web app is not affiliated with Niantic or Nintendo."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Decor Icons retrieved from"," ",(0,r.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/beetle/396855/",target:"_blank",rel:"noreferrer",children:"Beetle by Erik Jensen from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/banana/2770445/",target:"_blank",rel:"noreferrer",children:"banana by Izwar Muis from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/mushroom/3194002/",target:"_blank",rel:"noreferrer",children:"Mushroom by Adrien Coquet from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/acorn/4408016/",target:"_blank",rel:"noreferrer",children:"Acorn by KP Arts from the Noun Project"})})]}),(0,r.jsxs)("p",{children:["Created with"," ",(0,r.jsx)("a",{href:"https://nextjs.org/",target:"_blank",rel:"noreferrer",children:"Next.js"}),"."]}),(0,r.jsx)("h3",{children:"Contributions"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Suggestions, corrections, bug reports?"})," Please"," ",(0,r.jsx)("a",{href:"https://github.com/Notuom/pikmin-bloom-checklist",target:"_blank",rel:"noreferrer",children:"file an issue or open a pull request on GitHub"}),"."]})]})]})},a=n(5675),c=n(7294),l=["restaurant","cafe","sweetshop","movie-theater","pharmacy","zoo","forest-1","forest-2","waterside","post-office","art-gallery","airport","station","beach","mini-mart","supermarket-1","supermarket-2","bakery","hair-salon","clothing-store","park","roadside"],s=["red","yellow","blue","white","purple","grey","pink"],u=["\u274c","\u2705","\ud83e\udd5a"],d=function(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=n;return t},h=d(l),f=d(s),p=function(e){return"".concat(e,".png")},m=function(e){var t=e.src;return"/decors/".concat(t)},g=function(e,t){return"".concat(e,"~").concat(t)},y=function(e){var t=e.split("~");return{decor:t[0],color:t[1]}};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){for(var t=Object.entries(e),n=new Uint8Array(1+2*t.length),r=1;r<n.length;r+=2){var i=b(t.pop(),2),o=i[0],a=i[1],c=y(o),l=c.decor,s=c.color,u=h[l],d=f[s];n[r]=u,n[r+1]=d<<3|a}return btoa(n)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k="decorCollection",j=function(){var e,t=(0,c.useState)({}),n=t[0],r=t[1],i=function(e){r(e),localStorage.setItem(k,JSON.stringify(e))};c.useEffect((function(){var e=new URL(window.location.href).searchParams.get("collection"),t=localStorage.getItem(k);e&&confirm("There was a collection in the URL. Do you want to replace your current collection with that one? This can't be undone.")?(i(function(e){for(var t=atob(e).split(",").map(Number),n={},r=1;r<t.length;r+=2){var i=t[r],o=t[r+1]>>3,a=7&t[r+1];n[g(l[i],s[o])]=a}return n}(e)),window.history.pushState({},null,"/")):t&&r(JSON.parse(t))}),[]);return{collection:n,get:function(t){return null!==(e=n[t])&&void 0!==e?e:0},set:function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},n);t>0?r[e]=t:delete r[e],i(r)},clear:function(){return i({})}}},x=n(5902),_=n.n(x),P=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],i=(0,c.useState)(""),o=i[0],d=i[1],h=(0,c.useRef)(),f=j(),y=f.collection,b=f.get,v=f.set,k=f.clear,x=function(e){var t,r,i=function(e){var t=w(e),n=new URL(window.location.href);return n.searchParams.set("collection",t),n.toString()}(e);n(i),null===(t=h.current)||void 0===t||t.focus(),null===(r=h.current)||void 0===r||r.select(),navigator.clipboard.writeText(i).then((function(){return d("Share URL copied to clipboard!")})).catch((function(){return d("Could not access clipboard. Please try again or copy the URL from the text input above.")}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("table",{className:_().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),s.map((function(e){return(0,r.jsx)("th",{className:_()[e],title:e},e)}))]})}),(0,r.jsx)("tbody",{children:l.map((function(e){var t=e.split("-").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ");return(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(a.default,{loader:m,alt:t,title:t,src:p(e),width:24,height:24})}),s.map((function(t){var n=g(e,t),i=b(n);return(0,r.jsx)("td",{className:_().status,onClick:function(){return v(n,(i+1)%3)},children:u[i]},n)}))]},e)}))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{className:_().button,type:"button",onClick:function(){return confirm("Are you sure you want to proceed with permanently deleting your progress?")&&k()},children:"Clear"}),(0,r.jsx)("button",{className:_().button,type:"button",onClick:function(){return x(y)},children:"Share"}),(0,r.jsx)("input",{type:"text",value:t,readOnly:!0,ref:h})]}),o&&(0,r.jsx)("p",{children:o})]})},S=n(7852),A=n.n(S);function O(){return(0,r.jsxs)("div",{className:A().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Pikmin Bloom Decor Checklist"}),(0,r.jsx)("meta",{name:"description",content:"A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:"Pikmin Bloom Decor Checklist"}),(0,r.jsx)(P,{})]}),(0,r.jsx)(o,{})]})}},5902:function(e){e.exports={table:"Checklist_table__LGdMA",red:"Checklist_red__nl0x1",yellow:"Checklist_yellow__izWCX",blue:"Checklist_blue__nXE0I",white:"Checklist_white__7_k7X",purple:"Checklist_purple__Huujc",grey:"Checklist_grey__6Fmw5",pink:"Checklist_pink__Phve_",status:"Checklist_status__x3GRJ",button:"Checklist_button__ltAC9"}},7852:function(e){e.exports={container:"Home_container__bCOhY"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);