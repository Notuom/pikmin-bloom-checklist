(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4297)}])},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,s=void 0!==o&&o,h=e.priority,d=void 0!==h&&h,g=e.loading,w=e.lazyBoundary,v=void 0===w?"200px":w,k=e.className,j=e.quality,x=e.width,_=e.height,O=e.objectFit,D=e.objectPosition,I=e.onLoadingComplete,C=e.loader,z=void 0===C?A:C,E=e.placeholder,N=void 0===E?"empty":E,R=e.blurDataURL,T=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(q=T.layout),delete T.layout);var L="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var M=b(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(R=R||M.blurDataURL,L=M.src,(!q||"fill"!==q)&&(_=_||M.height,x=x||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:L;var U=S(x),B=S(_),H=S(j),W=!d&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,W=!1);p.has(t)&&(W=!1);0;var F,V=i(u.useIntersection({rootMargin:v,disabled:!W}),2),J=V[0],X=V[1],G=!W||X,Y={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:D},$="blur"===N?{filter:"blur(20px)",backgroundSize:O||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:D||"0% 0%"}:{};if("fill"===q)Y.display="block",Y.position="absolute",Y.top=0,Y.left=0,Y.bottom=0,Y.right=0;else if("undefined"!==typeof U&&"undefined"!==typeof B){var ee=B/U,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===q?(Y.display="block",Y.position="relative",Q=!0,K.paddingTop=te):"intrinsic"===q?(Y.display="inline-block",Y.position="relative",Y.maxWidth="100%",Q=!0,K.maxWidth="100%",F='<svg width="'.concat(U,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(Y.display="inline-block",Y.position="relative",Y.width=U,Y.height=B)}else 0;var ne={src:m,srcSet:void 0,sizes:void 0};G&&(ne=P({src:t,unoptimized:s,layout:q,width:U,quality:H,sizes:n,loader:z}));var re=t;0;0;var ie=(r(y={},"imagesrcset",ne.srcSet),r(y,"imagesizes",ne.sizes),y);return a.default.createElement("span",{style:Y},Q?a.default.createElement("span",{style:K},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(l.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},T,ne,{decoding:"async","data-nimg":q,className:k,ref:function(e){J(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==m&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,re,0,N,I)},style:f({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},T,P({src:t,unoptimized:s,layout:q,width:U,quality:H,sizes:n,loader:z}),{decoding:"async","data-nimg":q,style:Z,className:k,loading:g||"lazy"}))),d?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ie))):null)};var a=d(n(7294)),c=d(n(5443)),l=n(6978),s=n(5809),u=n(7190);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){h(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var p=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(O(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var y,w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"custom"}||s.imageConfigDefault,v=w.deviceSizes,k=w.imageSizes,j=w.loader,x=w.path,_=(w.domains,o(v).concat(o(k)));function P(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,l=.01*(c=Math).min.apply(c,o(a));return{widths:_.filter((function(e){return e>=v[0]*l})),kind:"w"}}return{widths:_,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return _.find((function(t){return t>=e}))||_[_.length-1]})))),kind:"x"}}(i,r,c),u=s.widths,h=s.kind,d=u.length-1;return{sizes:c||"w"!==h?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===h?e:n+1).concat(h)})).join(", "),src:l({src:t,quality:a,width:u[d]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=g.get(j);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(j))}function O(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),_.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=i.useRef(),s=r(i.useState(!1),2),u=s[0],h=s[1],d=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},4297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),i=n(9008),o=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{children:"What is this?"}),(0,r.jsx)("p",{children:"This web app is a checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game available for Android and iOS."}),(0,r.jsx)("h3",{children:"How does it work?"}),(0,r.jsx)("p",{children:"Click on the icon corresponding to the collected Decor Pikmin to change its status: \u274c \u27a1 \ud83c\udf3f \u27a1 \ud83e\udd5a \u27a1 \u2705."}),(0,r.jsx)("p",{children:"It will be saved on this device until you clear your browser's storage."}),(0,r.jsx)("p",{children:"Legend:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"\u274c: Not acquired"}),(0,r.jsx)("li",{children:"\ud83c\udf3f: Seedling acquired/growing"}),(0,r.jsx)("li",{children:"\ud83e\udd5a: Pikmin acquired/growing"}),(0,r.jsx)("li",{children:"\u2705: Decor Pikmin Acquired"})]}),(0,r.jsx)("p",{children:'You can also share your progress between devices by using the "Share" button which will generate a URL containing your collection to be sent to the other device, and clear your progress with the "Clear" button.'}),(0,r.jsx)("h3",{children:"Why?"}),(0,r.jsx)("p",{children:"The collection screen in Pikmin is hard to browse. This web app makes it easier to quickly see which Decor Pikmin you are missing. Additionally, the in game collection screen does not allow you to keep track of individual alphabet stickers."}),(0,r.jsx)("h3",{children:"Decor Pikmin?"}),(0,r.jsxs)("p",{children:["If you have no idea how Decor Pikmin work, I'd suggest starting here:"," ",(0,r.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})," ","or reading the sections below."]}),(0,r.jsx)("h4",{children:"How do I get Decor Pikmin?"}),(0,r.jsx)("p",{children:'In Pikmin Bloom, every Pikmin you get has the potential to become a "Decor Pikmin". This can happen two different ways:'}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"You get the Pikmin from a Huge Seedling. Once it is grown into a Pikmin, it will have decor based on the type of place it was found in."}),(0,r.jsx)("li",{children:"You get up to the maximum level of friendship (4 full hearts). Once this happens, a special expedition will be available for this Pikmin to go on by itself, and it will come back with a decor matching the type of place it was found in."})]}),(0,r.jsxs)("h4",{children:["What are the stickers (",(0,r.jsx)("span",{className:"sticker",children:"A"})," .."," ",(0,r.jsx)("span",{className:"sticker",children:"Z"}),")?"]}),(0,r.jsx)("p",{children:"Roadside Pikmin get a sticker\u2014undeniably the most boring decor out of them all. However, each of the sticker has a letter which is the first letter from the name of the place the Pikmin was found."}),(0,r.jsx)("p",{children:"If you'd like, you can track which stickers you have for each Pikmin using the sticker rows, though that is optional. The game doesn't currently track this."}),(0,r.jsx)("h4",{children:"How do I know which Decor Pikmin I have?"}),(0,r.jsx)("p",{children:'In order to know which ones you already have, you can check your "Decor Collector" badge progress. To do so:'}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Tap your user profile from the home screen (the panel that shows your username)"}),(0,r.jsx)("li",{children:"Tap the Decor Collector badge"})]}),(0,r.jsx)("p",{children:"This will show you all the Decor Pikmin you already have. If you want to get all the Decors as swiftly as possible, you could mark the Seedlings and Pikmin of a color and type of Decor you don't already have and prioritize growing and making friends with those first."}),(0,r.jsx)("h4",{children:"How do I know which Decor a Pikmin or Seedling will get?"}),(0,r.jsx)("p",{children:"This depends on the type of location the Seedling was obtained in, which you can find on both the Seedling page and the Pikmin page. The Forest and Supermarket types have two different variations which the Pikmin will randomly get when it is decorated."})]}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Version 1.2.0"})}),(0,r.jsx)("h3",{children:"Credits and licensing"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Disclaimer:"})," This web app is not affiliated with Niantic or Nintendo."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Decor Icons retrieved from"," ",(0,r.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/beetle/396855/",target:"_blank",rel:"noreferrer",children:"Beetle by Erik Jensen from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/banana/2770445/",target:"_blank",rel:"noreferrer",children:"banana by Izwar Muis from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/mushroom/3194002/",target:"_blank",rel:"noreferrer",children:"Mushroom by Adrien Coquet from the Noun Project"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://thenounproject.com/term/acorn/4408016/",target:"_blank",rel:"noreferrer",children:"Acorn by KP Arts from the Noun Project"})})]}),(0,r.jsxs)("p",{children:["Created with"," ",(0,r.jsx)("a",{href:"https://nextjs.org/",target:"_blank",rel:"noreferrer",children:"Next.js"}),"."]}),(0,r.jsx)("h3",{children:"Contributions"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Suggestions, corrections, bug reports?"})," Please"," ",(0,r.jsx)("a",{href:"https://github.com/Notuom/pikmin-bloom-checklist",target:"_blank",rel:"noreferrer",children:"file an issue or open a pull request on GitHub"}),"."]})]})]})},a=n(7294),c=["restaurant","cafe","sweetshop","movie-theater","pharmacy","zoo","forest-1","forest-2","waterside","post-office","art-gallery","airport","station","beach","hamburger-shop","mini-mart","supermarket-1","supermarket-2","bakery","hair-salon","clothing-store","park","roadside","alpha-a","alpha-b","alpha-c","alpha-d","alpha-e","alpha-f","alpha-g","alpha-h","alpha-i","alpha-j","alpha-k","alpha-l","alpha-m","alpha-n","alpha-o","alpha-p","alpha-q","alpha-r","alpha-s","alpha-t","alpha-u","alpha-v","alpha-w","alpha-x","alpha-y","alpha-z"],l=["red","yellow","blue","white","purple","grey","pink"],s={0:3,3:2,2:1,1:0},u=["\u274c","\u2705","\ud83e\udd5a","\ud83c\udf3f"],h=function(e){return"".concat(e,".png")},d=function(e){var t=e.src;return"/decors/".concat(t)},f=function(e,t){return"".concat(e,"~").concat(t)},p=function(e){var t=e.split("~");return{decor:t[0],color:t[1]}};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=n;return t},b=g(c),y=g(l),w=function(e){for(var t=Object.entries(e),n=new Uint8Array(1+2*t.length),r=1;r<n.length;r+=2){var i=m(t.pop(),2),o=i[0],a=i[1],c=p(o),l=c.decor,s=c.color,u=b[l],h=y[s];n[r]=u,n[r+1]=h<<3|a}return btoa(n)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k,j="decorCollection",x=function(){var e,t=(0,a.useState)({}),n=t[0],r=t[1],i=function(e){r(e),localStorage.setItem(j,JSON.stringify(e))};a.useEffect((function(){var e=new URL(window.location.href).searchParams.get("collection"),t=localStorage.getItem(j);e&&confirm("There was a collection in the URL. Do you want to replace your current collection with that one? This can't be undone.")?(i(function(e){for(var t=atob(e).split(",").map(Number),n={},r=1;r<t.length;r+=2){var i=t[r],o=t[r+1]>>3,a=7&t[r+1];n[f(c[i],l[o])]=a}return n}(e)),window.history.pushState({},null,"/")):t&&r(JSON.parse(t))}),[]);return{collection:n,get:function(t){return null!==(e=n[t])&&void 0!==e?e:0},set:function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},n);t>0?r[e]=t:delete r[e],i(r)},clear:function(){return i({})}}},_=n(928),P=n.n(_),S=n(5675),A=function(e){var t=e.decor,n=t.split("-").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),i=t.startsWith("alpha-"),o=i&&t.replace("alpha-","").toUpperCase();return i?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{title:"Roaside Decor Pikmin with sticker: ".concat(o),className:"sticker",children:o})}):(0,r.jsx)(S.default,{loader:d,alt:n,title:"Decor Pikmin for: ".concat(n),src:h(t),width:24,height:24})},O=n(3018),D=n.n(O),I=function(e){var t=e.clear,n=e.collection,i=(0,a.useState)(""),o=i[0],c=i[1],l=(0,a.useState)(""),s=l[0],u=l[1],h=(0,a.useRef)();(0,a.useEffect)((function(){var e,t;h.current&&""!==o&&(null===(e=h.current)||void 0===e||e.focus(),null===(t=h.current)||void 0===t||t.select())}),[h,o,s]);var d=function(e){var t=function(e){var t=w(e),n=new URL(window.location.href);return n.searchParams.set("collection",t),n.toString()}(e);c(t),navigator.clipboard.writeText(t).then((function(){return u("Share URL copied to clipboard!")})).catch((function(){return u("Could not access clipboard. Please try again or copy the URL from the text input above.")}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:D().toolbar,children:[(0,r.jsx)("button",{className:D().button,type:"button",onClick:function(){return confirm("Are you sure you want to proceed with permanently deleting your progress?")&&t()},children:"Clear"}),(0,r.jsx)("button",{className:D().button,type:"button",onClick:function(){return d(n)},children:"Share"}),(0,r.jsx)("input",{type:"text",value:o,readOnly:!0,ref:h})]}),s&&(0,r.jsx)("p",{children:s})]})},C=function(){var e=x(),t=e.collection,n=e.get,i=e.set,o=e.clear;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("table",{className:P().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),l.map((function(e){return(0,r.jsx)("th",{className:P()[e],title:e},e)}))]})}),(0,r.jsx)("tbody",{children:c.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(A,{decor:e})}),l.map((function(t){var o=f(e,t),a=n(o);return(0,r.jsx)("td",{className:P().status,onClick:function(){return i(o,null!==(k=s[a])&&void 0!==k?k:0)},children:u[a]},o)}))]},e)}))})]}),(0,r.jsx)(I,{clear:o,collection:t})]})},z=n(214),E=n.n(z);function N(){return(0,r.jsxs)("div",{className:E().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Pikmin Bloom Decor Checklist"}),(0,r.jsx)("meta",{name:"description",content:"A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:"Pikmin Bloom Decor Checklist"}),(0,r.jsx)(C,{})]}),(0,r.jsx)(o,{})]})}},928:function(e){e.exports={table:"Checklist_table__LGdMA",red:"Checklist_red__nl0x1",yellow:"Checklist_yellow__izWCX",blue:"Checklist_blue__nXE0I",white:"Checklist_white__7_k7X",purple:"Checklist_purple__Huujc",grey:"Checklist_grey__6Fmw5",pink:"Checklist_pink__Phve_",status:"Checklist_status__x3GRJ"}},214:function(e){e.exports={container:"Home_container__bCOhY"}},3018:function(e){e.exports={toolbar:"Toolbar_toolbar__sVihn",button:"Toolbar_button__sVUVr"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);