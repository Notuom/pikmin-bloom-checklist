(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4323)}])},4323:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return pages}});var o,r,n,a,c,l,s,h,d,p,u=i(5893),m=i(7294),w=i(9008),k=i.n(w);let capitalizeDecorTitle=e=>e.split("-").map(e=>e[0].toUpperCase()+e.substring(1)).join(" "),getDecorIcon=e=>"".concat(e,".png"),decorLoader=e=>{let{src:t}=e;return"/decors/".concat(t)},getDecorKey=(e,t)=>"".concat(e,"~").concat(t),parseDecorKey=e=>{let t=e.split("~");return{decor:t[0],color:t[1]}};(o=l||(l={})).Red="red",o.Yellow="yellow",o.Blue="blue",o.White="white",o.Purple="purple",o.Grey="grey",o.Pink="pink",(r=s||(s={})).Green="green",r.Blue="blue",r.Orange="orange",(n=h||(h={}))[n.Uncollected=0]="Uncollected",n[n.Collected=1]="Collected",n[n.Growing=2]="Growing",n[n.Seedling=3]="Seedling",(a=d||(d={})).Simple="simple",a.Advanced="advanced",a.Exhaustive="exhaustive",(c=p||(p={}))[c.Location=0]="Location",c[c.Special=1]="Special",c[c.Roadside=2]="Roadside";let y=[l.Red,l.Yellow,l.Blue,l.White,l.Purple,l.Grey,l.Pink],f="abcdefghijklmnopqrstuvwxyz0123456789".split(""),g=[d.Simple,d.Advanced,d.Exhaustive],v=[s.Green,s.Blue,s.Orange],decorTitle=e=>"Decor Pikmin for: ".concat(e),createLocationDecor=(e,t)=>{var i,o,r;return{key:e,icon:null==t?void 0:t.icon,type:p.Location,title:null!==(i=null==t?void 0:t.title)&&void 0!==i?i:decorTitle(capitalizeDecorTitle(e)),description:null==t?void 0:t.description,colors:null!==(o=null==t?void 0:t.colors)&&void 0!==o?o:y,views:null!==(r=null==t?void 0:t.views)&&void 0!==r?r:g}},b=[createLocationDecor("restaurant"),{key:"restaurant-shiny",colors:[l.Blue,l.Yellow,l.Red],title:decorTitle("Restaurant (Shiny)"),description:"Rare shiny variation for the Restaurant decor",type:p.Special,views:[d.Advanced,d.Exhaustive]},createLocationDecor("cafe"),createLocationDecor("sweetshop",{title:decorTitle("Sweetshop (Macaron)")}),createLocationDecor("sweetshop-2",{title:decorTitle("Sweetshop (Donut)")}),createLocationDecor("movie-theater"),createLocationDecor("pharmacy"),createLocationDecor("zoo"),createLocationDecor("forest-1",{title:decorTitle("Forest (Stag Beetle)")}),createLocationDecor("forest-2",{title:decorTitle("Forest (Acorn)")}),createLocationDecor("waterside"),createLocationDecor("post-office"),createLocationDecor("art-gallery"),createLocationDecor("airport"),createLocationDecor("station",{title:decorTitle("Train station (Paper train)")}),createLocationDecor("station-2",{title:decorTitle("Train station (Ticket)")}),createLocationDecor("beach"),createLocationDecor("hamburger-shop"),createLocationDecor("mini-mart",{title:decorTitle("Corner Store (Bottle Cap)")}),createLocationDecor("mini-mart-2",{title:decorTitle("Corner Store (Snack)")}),createLocationDecor("supermarket-1",{title:decorTitle("Supermarket (Mushroom)")}),createLocationDecor("supermarket-2",{title:decorTitle("Supermarket (Banana)")}),createLocationDecor("bakery"),createLocationDecor("hair-salon"),createLocationDecor("clothing-store"),createLocationDecor("park",{title:decorTitle("Park (Clover)")}),createLocationDecor("park-four-leaf-clover",{title:decorTitle("Park (Four-Leaf Clover)"),description:"This Decor is an extremely rare variation of the regular Clover decor, which shows up more often on St. Patrick's day in Special Event Huge Seedlings."}),createLocationDecor("library"),createLocationDecor("roadside"),createLocationDecor("sushi"),createLocationDecor("mountain",{colors:[l.Red,l.Yellow,l.Blue]}),createLocationDecor("stadium",{colors:[l.Red,l.Yellow,l.Blue]}),createLocationDecor("weather-1",{icon:"weather",colors:[l.Blue]}),createLocationDecor("weather-2",{icon:"weather",colors:[l.Blue]}),createLocationDecor("weather-3",{icon:"weather",colors:[l.Blue]}),createLocationDecor("themepark-1",{title:decorTitle("Theme Park"),icon:"themepark",colors:[l.Red,l.Yellow,l.Blue]}),createLocationDecor("themepark-2",{title:decorTitle("Theme Park (alternative design)"),icon:"themepark",colors:[l.Red,l.Yellow,l.Blue],views:[d.Advanced,d.Exhaustive]}),createLocationDecor("bus-stop"),createLocationDecor("italian-restaurant"),createLocationDecor("ramen-restaurant",{colors:[l.Red,l.Yellow,l.Blue]}),createLocationDecor("bridge",{colors:[l.Red,l.Yellow,l.Blue]}),createLocationDecor("hotel"),createLocationDecor("makeup"),{key:"special-mario",colors:[l.Blue],title:"Mario",description:"This Decor Pikmin wears a replica of Mario's signature red cap. A Huge Seedling for this Pikmin can be obtained when the player links their Nintendo Account to the app.",type:p.Special,views:g},{key:"special-lunar-new-year",colors:[l.Blue,l.Yellow,l.Red],title:"Lunar New Year",description:"On February 1st, 2022, and again in 2023, to coincide with the Lunar New Year event, a new type of special Decor Pikmin was made obtainable for a limited time. These Decor Pikmin wear red decorations with gold patterns.",type:p.Special,views:g},{key:"special-lunar-new-year-2023",colors:[l.Blue,l.Yellow,l.Red],title:"Lunar New Year 2023",description:"On January 21st, 2023, to coincide with the Lunar New Year event, a new type of special Decor Pikmin was made obtainable for a limited time. These Decor Pikmin wear gold decorations with red patterns.",type:p.Special,views:g},{key:"special-chess",colors:y,title:"Chess Piece (Black)",description:"To celebrate the International Chess Day on July 20th, a special Decor Pikmin was made obtainable from July 18th until July 31st, 2022. They will be available in the future again.",type:p.Special,views:g},{key:"special-chess-white",colors:y,title:"Chess Piece (White)",description:"Chess Day 2023. In this event, the time when you collect the gold seedlings influences the chess piece color your Pikmin will wear. Colors rotate weekly.",type:p.Special,views:g},{key:"special-fingerboard",colors:y,title:"Fingerboard",description:"A special Decor Pikmin made obtainable for two weeks from August 15th 2022.",type:p.Special,views:g},{key:"special-flower-card",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:g},{key:"special-flower-card-2",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Design #2. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:[d.Exhaustive]},{key:"special-flower-card-3",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Design #3. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:[d.Exhaustive]},{key:"special-flower-card-4",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Design #4. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:[d.Exhaustive]},{key:"special-flower-card-5",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Design #5. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:[d.Exhaustive]},{key:"special-flower-card-6",icon:"special-flower-card",colors:[l.Red,l.Yellow,l.Blue,l.Purple],title:"Flower card",description:"Design #6. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",type:p.Special,views:[d.Exhaustive]},{key:"special-halloween",colors:y,title:"Jack-o'-lantern",description:"Special Decor Pikmin for the 2022 & 2023 Halloween event.",type:p.Special,views:g},{key:"special-halloween-2",colors:y,title:"Halloween Treat",description:"Special Decor Pikmin for the 2023 Halloween event.",type:p.Special,views:g},{key:"special-anniversary-snack",colors:y,title:"First Anniversary Snack",description:"On November 1st, 2022, for the first anniversary, a new type of special Decor Pikmin was made obtainable for 2 weeks.",type:p.Special,views:g},{key:"special-mitten",colors:[l.Blue,l.Yellow,l.Red],title:"Mitten",description:"From December 12th to December 31st, 2022, a new type of Decor Pikmin was obtainable for an event. These Decor Pikmin wear small mittens on their heads.",type:p.Special,views:g},{key:"special-space-suit",colors:[l.Blue,l.Yellow,l.Red],title:"Koppaite Space Suit",description:"From November 28th to December 9th, 2022, there was an event themed around Pikmin 3 Deluxe, where 3 types of Decor Pikmin could be obtained by completing flower planting missions.",type:p.Special,views:g},{key:"special-2023-glasses",colors:y,title:"2023 glasses",description:"From December 26th, 2022 to January 15th, 2023, for the 2023 New Year event, a new type of Decor Pikmin was obtainable for 3 weeks. These Decor Pikmin wear appropriately sized New Year's glasses on their heads.",type:p.Special,views:g},{key:"special-present-sticker",colors:y,title:"Present Sticker",description:"February 6th 2023 to February 26th 2023. For Valentine's Day 2023, a new type of Decor Pikmin was obtainable for 3 weeks. These decor Pikmin wear pink oversized 'present' stickers.",type:p.Special,views:g},{key:"special-present-sticker-gold",icon:"special-present-sticker",colors:[l.Red,l.Yellow,l.Blue,l.White],title:"Present Sticker (Gold)",description:"Special version of the Present Sticker decor available at Nintendo Live Seattle 2023 and potentially other events.",type:p.Special,views:g},{key:"special-easter-egg",colors:y,title:"Easter Egg",description:"April 1st 2023 to April 30th 2023. For the Easter event, a new set of Decor Pikmin were obtainable. Those Decor Pikmin wore colored egg shells in celebration of Easter.",type:p.Special,views:g},{key:"special-sneakers",colors:y,title:"Sneaker Keychain",description:"May 8th 2023 to May 31st 2023. Gold seedlings from event challenges and referral codes reward players with Sneaker Keychain decor Pikmin.",type:p.Special,views:g},{key:"special-spaceship",colors:y,title:"Pikmin 4 Spaceships",description:"Pikmin 4 Spaceships",type:p.Special,views:g},{key:"special-mahjong",colors:y,title:"Mahjong (1st variant)",description:"August 14th 2023 to September 10th 2023. Complete Event Challenge missions to obtain gold seedlings for Mahjong Tile Decor Pikmin.",type:p.Special,views:g},{key:"special-mahjong-2",colors:y,title:"Mahjong (2nd variant)",description:"August 14th 2023 to September 10th 2023. Complete Event Challenge missions to obtain gold seedlings for Mahjong Tile Decor Pikmin.",type:p.Special,views:g},{key:"special-ice-cream",colors:y,title:"Ice Cream",description:"September 11th to September 30th 2023. Complete Event Challenge missions to obtain gold seedlings.",type:p.Special,views:g},{key:"special-puzzle-2021-fall",colors:y,title:"Puzzle: 2021 fall memories",description:"From November 3rd to November 26th, 2023, for the second Anniversary Event, 2 new sets of Decor Pikmin were obtainable.",type:p.Special,views:g},{key:"special-puzzle-2022-summer",colors:y,title:"Puzzle: 2022 summer memories",description:"From November 3rd to November 26th, 2023, for the second Anniversary Event, 2 new sets of Decor Pikmin were obtainable.",type:p.Special,views:g},{key:"special-holiday-stickers",colors:y,title:"Holiday Sticker",description:"Any Roadside-type Pikmin grown from a seedling that was discovered between December 21st, 2021 to January 11th, 2022 will instead have a Holidays-themed sticker. These stickers are bigger than the regular sticker, with each Pikmin type having a different design.",type:p.Special,views:[d.Advanced,d.Exhaustive]},{key:"special-roadside-coin",colors:y,title:"Roadside Coin",description:"These Pikmin only have 1 type per Pikmin, unlike the sticker type, and the coins present on the Pikmin are from all around the world.",type:p.Special,views:[d.Advanced,d.Exhaustive]},...f.map(e=>({key:"alpha-".concat(e),type:p.Roadside,title:"Roadside Decor Pikmin with sticker: ".concat(e.toUpperCase()),colors:y,views:[d.Advanced]})),...f.flatMap(e=>v.map(t=>({key:"alpha-".concat(e,"-").concat(t),type:p.Roadside,title:"Roadside Decor Pikmin with ".concat(t," sticker: ").concat(e.toUpperCase()),colors:y,views:[d.Exhaustive],roadsideColor:t})))],x={[h.Uncollected]:h.Seedling,[h.Seedling]:h.Growing,[h.Growing]:h.Collected,[h.Collected]:h.Uncollected},j=["❌","✅","\uD83E\uDD5A","\uD83C\uDF3F"],D=[{link:"https://thenounproject.com/icon/checklist-5020438/",text:"Checklist by Mada Creative from NounProject.com"},{link:"https://thenounproject.com/icon/flower-5021607/",text:"Flower by Ria Fitriana from NounProject.com"},{link:"https://thenounproject.com/term/beetle/396855/",text:"Beetle by Erik Jensen from the Noun Project"},{link:"https://thenounproject.com/term/banana/2770445/",text:"banana by Izwar Muis from the Noun Project"},{link:"https://thenounproject.com/term/mushroom/3194002/",text:"Mushroom by Adrien Coquet from the Noun Project"},{link:"https://thenounproject.com/term/acorn/4408016/",text:"Acorn by KP Arts from the Noun Project"},{link:"https://thenounproject.com/icon/chess-piece-2375089/",text:"Chess Piece by Vectors Point from NounProject.com"},{link:"https://thenounproject.com/icon/skateboard-1293915/",text:"Skateboard by Orin zuu from Noun Project"},{link:"https://thenounproject.com/icon/pumpkin-700084/",text:"pumpkin by Yeong Rong Kim from Noun Project"},{link:"https://thenounproject.com/icon/june-of-hwatu-1629155/",text:"june of hwatu by 1516 from Noun Project"},{link:"https://thenounproject.com/icon/candy-4080734/",text:"candy by alfian dwi hartanto from Noun Project"},{link:"https://www.flaticon.com/free-icon/2023-2025_9243079",text:"2023 icons created by muhammad atho from Flaticon"},{link:"https://thenounproject.com/icon/envelope-5393196/",text:"envelope by Icon Market from Noun Project"},{link:"https://thenounproject.com/icon/envelope-5395044/",text:"envelope (inverted) by Icon Market from Noun Project"},{link:"https://thenounproject.com/icon/space-suit-1652614/",text:"space suit by Maxim Kulikov from Noun Project"},{link:"https://thenounproject.com/icon/mitten-2099950/",text:"mitten by Ninejipjip from Noun Project"},{link:"https://www.flaticon.com/free-icons/easter",text:"Easter icons created by Freepik - Flaticon",title:"easter icons"},{link:"https://www.flaticon.com/free-icons/stadium",text:"Stadium icons created by Freepik - Flaticon",title:"stadium icons"},{link:"https://www.flaticon.com/free-icons/money",text:"Money icons created by Freepik - Flaticon",title:"money icons"},{link:"https://www.flaticon.com/free-icons/ramen",text:"Ramen icons created by Tanah Basah - Flaticon",title:"ramen icons"},{link:"https://www.flaticon.com/free-icons/sneaker",text:"Sneaker icons created by Freepik - Flaticon",title:"sneaker icons"},{link:"https://www.flaticon.com/free-icons/donut",text:"Donut icons created by Freepik - Flaticon",title:"donut icons"},{link:"https://www.flaticon.com/free-icons/ufo",text:"Ufo icons created by Freepik - Flaticon",title:"ufo icons"},{link:"https://www.flaticon.com/free-icons/bridge",text:"Bridge icons created by Bartama Graphic - Flaticon",title:"bridge icons"},{link:"https://www.flaticon.com/free-icons/hotel",text:"Hotel icons created by Those Icons - Flaticon",title:"hotel icons"},{link:"https://www.flaticon.com/free-icons/chess",text:"Chess icons created by SBTS2018 - Flaticon",title:"chess icons"},{link:"https://www.flaticon.com/free-icons/mahjong",text:"Mahjong icons created by Freepik - Flaticon",title:"mahjong icons"},{link:"https://www.flaticon.com/free-icons/ice-cream",text:"Ice cream icons created by Freepik - Flaticon",title:"ice cream icons"},{link:"https://www.flaticon.com/free-icons/candy",text:"Candy icons created by pancaza - Flaticon",title:"candy icons"},{link:"https://www.flaticon.com/free-icons/puzzle",text:"Puzzle icons created by Google - Flaticon",title:"puzzle icons"}],About=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("section",{children:[(0,u.jsx)("p",{children:(0,u.jsx)("strong",{children:"Version ".concat("2.2.0")})}),(0,u.jsx)("h3",{children:"What is this?"}),(0,u.jsx)("p",{children:"This web app is a checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game available for Android and iOS."}),(0,u.jsx)("h3",{children:"How does it work?"}),(0,u.jsx)("p",{children:"Click on the icon corresponding to the collected Decor Pikmin to change its status: ❌ ➡ \uD83C\uDF3F ➡ \uD83E\uDD5A ➡ ✅."}),(0,u.jsx)("p",{children:"It will be saved on this device until you clear your browser's storage."}),(0,u.jsx)("p",{children:"Legend:"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"❌: Not acquired"}),(0,u.jsx)("li",{children:"\uD83C\uDF3F: Seedling acquired/growing"}),(0,u.jsx)("li",{children:"\uD83E\uDD5A: Pikmin acquired/growing"}),(0,u.jsx)("li",{children:"✅: Decor Pikmin Acquired"})]}),(0,u.jsx)("p",{children:'You can also share your progress between devices by using the "Share" button which will generate a URL containing your collection to be sent to the other device, and clear your progress with the "Clear" button.'}),(0,u.jsx)("h3",{children:"Why?"}),(0,u.jsx)("p",{children:"The collection screen in Pikmin is hard to browse. This web app makes it easier to quickly see which Decor Pikmin you are missing. Additionally, the in game collection screen does not allow you to keep track of individual alphabet stickers."}),(0,u.jsx)("h3",{children:"Decor Pikmin?"}),(0,u.jsxs)("p",{children:["If you have no idea how Decor Pikmin work, I'd suggest starting here:"," ",(0,u.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})," ","or reading the sections below."]}),(0,u.jsx)("h4",{children:"How do I get Decor Pikmin?"}),(0,u.jsx)("p",{children:'In Pikmin Bloom, every Pikmin you get has the potential to become a "Decor Pikmin". This can happen two different ways:'}),(0,u.jsxs)("ol",{children:[(0,u.jsx)("li",{children:"You get the Pikmin from a Huge Seedling. Once it is grown into a Pikmin, it will have decor based on the type of place it was found in."}),(0,u.jsx)("li",{children:"You get up to the maximum level of friendship (4 full hearts). Once this happens, a special expedition will be available for this Pikmin to go on by itself, and it will come back with a decor matching the type of place it was found in."})]}),(0,u.jsxs)("h4",{children:["What are the stickers (",(0,u.jsx)("span",{className:"sticker",children:"A"}),","," ",(0,u.jsx)("span",{className:"sticker",children:"0"}),")?"]}),(0,u.jsx)("p",{children:"Roadside Pikmin get a sticker—undeniably the most boring decor out of them all. However, each of the sticker has a letter which is the first letter from the name of the place the Pikmin was found."}),(0,u.jsx)("p",{children:"If you'd like, you can track which stickers you have for each Pikmin using the sticker rows, though that is optional. The game doesn't currently track this."}),(0,u.jsx)("h4",{children:"How do I know which Decor Pikmin I have?"}),(0,u.jsx)("p",{children:'In order to know which ones you already have, you can check your "Decor Collector" badge progress. To do so:'}),(0,u.jsxs)("ol",{children:[(0,u.jsx)("li",{children:"Tap your user profile from the home screen (the panel that shows your username)"}),(0,u.jsx)("li",{children:"Tap the Decor Collector badge"})]}),(0,u.jsx)("p",{children:"This will show you all the Decor Pikmin you already have. If you want to get all the Decors as swiftly as possible, you could mark the Seedlings and Pikmin of a color and type of Decor you don't already have and prioritize growing and making friends with those first."}),(0,u.jsx)("h4",{children:"How do I know which Decor a Pikmin or Seedling will get?"}),(0,u.jsx)("p",{children:"This depends on the type of location the Seedling was obtained in, which you can find on both the Seedling page and the Pikmin page. The Forest and Supermarket types have two different variations which the Pikmin will randomly get when it is decorated."})]}),(0,u.jsxs)("footer",{children:[(0,u.jsx)("h3",{children:"Credits and licensing"}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Disclaimer:"})," This web app is not affiliated with Niantic or Nintendo."]}),(0,u.jsxs)("p",{children:["Decor Icons were retrieved from:"," ",(0,u.jsx)("a",{href:"https://www.pikminwiki.com/Decor_Pikmin",target:"_blank",rel:"noreferrer",children:"https://www.pikminwiki.com/Decor_Pikmin"})]}),(0,u.jsx)("p",{children:"The following icons were used under licenses requiring attribution:"}),(0,u.jsx)("ul",{children:D.map((e,t)=>(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:e.link,title:e.title,target:"_blank",rel:"noreferrer",children:e.text})},t))}),(0,u.jsxs)("p",{children:["Created with"," ",(0,u.jsx)("a",{href:"https://nextjs.org/",target:"_blank",rel:"noreferrer",children:"Next.js"}),"."]}),(0,u.jsx)("h3",{children:"Contributions"}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Suggestions, corrections, bug reports?"})," Please"," ",(0,u.jsx)("a",{href:"https://github.com/Notuom/pikmin-bloom-checklist",target:"_blank",rel:"noreferrer",children:"file an issue or open a pull request on GitHub"}),"."]})]})]});var P=i(5401);let S=m.createContext({view:d.Simple,setView:()=>{}}),useViewContext=()=>m.useContext(S),C="decorView",ViewContextProvider=e=>{let{children:t}=e,[i,o]=m.useState(d.Advanced);m.useEffect(()=>{let e=localStorage.getItem(C);e&&o(e)},[o]);let r=m.useCallback(e=>{o(e),localStorage.setItem(C,e)},[o]);return(0,u.jsx)(S.Provider,{value:{view:i,setView:r},children:t})},createLookupMap=e=>{let t={};for(let i=0;i<e.length;i++)t[e[i]]=i;return t},T=createLookupMap(b.map(e=>e.key)),L=createLookupMap(y),getShareURL=e=>{let t=encodeCollection(e),i=new URL(window.location.href);return i.searchParams.set("collection",t),i.toString()},encodeCollection=e=>{let t=Object.entries(e),i=new Uint8Array(1+2*t.length);i[0]=4;for(let e=1;e<i.length;e+=2){let[o,r]=t.pop(),{decor:n,color:a}=parseDecorKey(o),c=T[n],l=L[a];i[e]=c,i[e+1]=l<<3|r}return btoa(i.toString())},decodeCollection=e=>{let t=atob(e).split(",").map(Number),i={},o=t[0];if(4!==o)throw Error("Decoding failed. The collection was encoded with a previous version (".concat(o,"), which is not compatible with the current version (").concat(4,"). Please re-share the collection with the latest version of the site."));for(let e=1;e<t.length;e+=2){let o=t[e],r=t[e+1]>>3,n=7&t[e+1];i[getDecorKey(b[o].key,y[r])]=n}return i},F="decorCollection",useDecorCollection=()=>{let[e,t]=(0,m.useState)({}),setCollectionWithStorage=e=>{t(e),localStorage.setItem(F,JSON.stringify(e))};return m.useEffect(()=>{let e=new URL(window.location.href).searchParams.get("collection"),i=localStorage.getItem(F);if(e&&confirm("There was a collection in the URL. Do you want to import & override your current collection? This cannot be undone.")){try{let t=decodeCollection(e);setCollectionWithStorage(t)}catch(e){alert("Could not import collection from URL.\n"+e.message)}window.history.pushState({},null,"/")}else i&&t(JSON.parse(i))},[]),{collection:e,get:t=>{var i;return null!==(i=e[t])&&void 0!==i?i:0},set:(t,i)=>{let o={...e};i>0?o[t]=i:delete o[t],setCollectionWithStorage(o)},clear:()=>setCollectionWithStorage({})}},cycleStatus=e=>{var t;return null!==(t=x[e])&&void 0!==t?t:h.Uncollected};var _=i(5675),N=i.n(_);let DecorHeader=e=>{var t,i;let{decor:o}=e,r=o.description?": ".concat(o.description):"",n="".concat(o.title).concat(r);return o.type===p.Roadside?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("span",{"data-tip":n,className:"sticker ".concat(null!==(t=o.roadsideColor)&&void 0!==t?t:""),children:o.key.split("-")[1].toUpperCase()})}):(0,u.jsx)(N(),{loader:decorLoader,alt:o.title,"data-tooltip-id":"decor-title-tooltip","data-tooltip-content":n,src:getDecorIcon(null!==(i=o.icon)&&void 0!==i?i:o.key),width:24,height:24})};var R=i(5311),B=i.n(R);let Toolbar=e=>{let{clear:t,collection:i}=e,[o,r]=(0,m.useState)(""),[n,a]=(0,m.useState)(""),c=(0,m.useRef)();(0,m.useEffect)(()=>{if(c.current&&""!==o){var e,t;null===(e=c.current)||void 0===e||e.focus(),null===(t=c.current)||void 0===t||t.select()}},[c,o,n]);let share=e=>{let t=getShareURL(e);r(t),navigator.clipboard.writeText(t).then(()=>a("Share URL copied to clipboard!")).catch(()=>a("Could not access clipboard. Please try again or copy the URL from the text input above."))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:B().toolbar,children:[(0,u.jsx)("button",{className:B().button,type:"button",onClick:()=>confirm("Are you sure you want to proceed with permanently deleting your progress?")&&t(),children:"Clear"}),(0,u.jsx)("button",{className:B().button,type:"button",onClick:()=>share(i),children:"Share"}),(0,u.jsx)("input",{type:"text",value:o,readOnly:!0,ref:c})]}),n&&(0,u.jsx)("p",{children:n})]})},ViewRadioButton=e=>{let{label:t,value:i,view:o,onChange:r}=e;return(0,u.jsxs)("label",{children:[(0,u.jsx)("input",{type:"radio",value:i,checked:i===o,onChange:r}),t]})},A={[d.Simple]:"Track all the decors which the Pikmin Bloom game tracks with the Simple view.",[d.Advanced]:"Track all the decors which the Pikmin Bloom game tracks, plus roadside stickers, with the Advanced view.",[d.Exhaustive]:"Track all the decors which the Pikmin Bloom game tracks, plus roadside stickers in individual colors, with the Exhaustive view."},TopToolbar=()=>{let{view:e,setView:t}=useViewContext(),onChange=e=>t(e.target.value);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{children:["View:",(0,u.jsx)(ViewRadioButton,{label:"Simple",view:e,value:d.Simple,onChange:onChange}),(0,u.jsx)(ViewRadioButton,{label:"Advanced",view:e,value:d.Advanced,onChange:onChange}),(0,u.jsx)(ViewRadioButton,{label:"Exhaustive",view:e,value:d.Exhaustive,onChange:onChange})]}),(0,u.jsx)("p",{children:A[e]})]})};var E=i(5497),Y=i.n(E);let Checklist=()=>{let{collection:e,get:t,set:i,clear:o}=useDecorCollection(),{view:r}=useViewContext();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(TopToolbar,{}),(0,u.jsx)(P.u,{id:"decor-title-tooltip",place:"right",variant:"dark"}),(0,u.jsxs)("table",{className:Y().table,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{}),y.map(e=>(0,u.jsx)("th",{className:Y()[e],title:e},e))]})}),(0,u.jsx)("tbody",{children:b.map(e=>e.views.includes(r)&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:(0,u.jsx)(DecorHeader,{decor:e})}),y.map(o=>{let r=getDecorKey(e.key,o),n=t(r);return e.colors.includes(o)?(0,u.jsx)("td",{className:Y().status,onClick:()=>i(r,cycleStatus(n)),children:j[n]},r):(0,u.jsx)("td",{className:Y().invalid},r)})]},e.key))})]}),(0,u.jsx)(Toolbar,{clear:o,collection:e})]})};var z=i(4871),I=i.n(z),pages=()=>(0,u.jsxs)("div",{className:I().container,children:[(0,u.jsxs)(k(),{children:[(0,u.jsx)("title",{children:"Pikmin Bloom Decor Checklist"}),(0,u.jsx)("meta",{name:"description",content:"A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game."}),(0,u.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),(0,u.jsx)("link",{rel:"mask-icon",href:"/icons/safari-pinned-tab.svg",color:"#5bbad5"}),(0,u.jsx)("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),(0,u.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,u.jsx)("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),(0,u.jsx)("meta",{name:"theme-color",content:"#27cb2e"}),(0,u.jsx)("link",{rel:"manifest",href:"/app.webmanifest"})]}),(0,u.jsxs)("main",{children:[(0,u.jsx)("h1",{children:"Pikmin Bloom Decor Checklist"}),(0,u.jsx)(ViewContextProvider,{children:(0,u.jsx)(Checklist,{})})]}),(0,u.jsx)(About,{})]})},5497:function(e){e.exports={table:"Checklist_table__dGGpy",red:"Checklist_red__rRcp9",yellow:"Checklist_yellow__VcyRv",blue:"Checklist_blue__ho_oM",white:"Checklist_white__MMTRB",purple:"Checklist_purple__W0str",grey:"Checklist_grey__7YgGt",pink:"Checklist_pink__AaISV",status:"Checklist_status__2MFhf",invalid:"Checklist_invalid__XZwLr"}},4871:function(e){e.exports={container:"Home_container__d256j"}},5311:function(e){e.exports={toolbar:"Toolbar_toolbar__uGi3v",button:"Toolbar_button__EHs1j"}}},function(e){e.O(0,[642,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);