(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1393],{24298:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(94184),u=n.n(a),s=n(41664),c=n.n(s),l=n(54467),d=n.n(l),_=n(24050);function p(e){let{className:t,href:n,color:o,border:i,icon:a,type:s,target:l,buttonType:p,onClickHandler:h,disabled:m,children:f}=e,y=u()(t,d().button,d()["color-".concat(o)],d()[s],{[d().default]:!s,[d().border]:i});return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(c(),{href:n,legacyBehavior:!0,children:(0,r.jsx)("a",{className:y,target:null!=l?l:"_self",rel:l?"noopener":"",children:a?(0,r.jsx)(_.Z,{icon:a}):f})}):(0,r.jsx)("button",{className:y,type:p||"button",disabled:m,onClick:h,children:a?(0,r.jsx)(_.Z,{icon:a}):f})})}p.propTypes={className:i().string,href:i().string,color:i().oneOf(["","default","midnight-blue","border","white","white-border","green","green-border","red"]),border:i().bool,icon:i().string,type:i().oneOf(["","default","small","circle"]),target:i().string,buttonType:i().string,onClickHandler:i().func,disabled:i().bool,children:i().node},t.Z=p},79389:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(9008),u=n.n(a),s=n(12569);function c(e){let{metaTags:t,noIndex:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u(),{children:[(0,s.y)(null!=t?t:[]),n&&(0,r.jsx)("meta",{name:"robots",content:"noindex"})]})})}c.propTypes={metaTags:i().array,noIndex:i().bool},t.Z=c},24050:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(5152),u=n.n(a),s=n(88515);function c(e){let{icon:t,className:o}=e,i=(0,s.ZP)(t),a=u()(()=>n.e(271).then(n.bind(n,10271)).then(e=>e[i],{loading:()=>(0,r.jsx)("i",{className:o}),ssr:!1}),{loadableGenerated:{webpack:()=>[10271]}});return(0,r.jsx)(a,{color:"currentColor",className:o,weight:"thin"})}c.propTypes={icon:i().string,className:i().string},t.Z=c},38271:function(e,t,n){"use strict";var r=n(85893),o=n(88515);function i(e){return(0,o.Ni)(),(0,r.jsx)("div",{})}n(45697),i.propTypes={},t.Z=i},78635:function(e,t,n){"use strict";n.d(t,{Q:function(){return i},y:function(){return a}});var r=n(85893),o=n(67294);let i=(0,o.createContext)(!1);function a(e){let{children:t,initialValue:n=!1,initialType:a="ondemand"}=e,[u,s]=(0,o.useState)(n),[c,l]=(0,o.useState)(a);return(0,r.jsx)(i.Provider,{value:{isVisible:u,setIsVisible:s,type:c,setType:l},children:t})}},88515:function(e,t,n){"use strict";n.d(t,{BF:function(){return d},Dg:function(){return v},JN:function(){return C},Ll:function(){return _},Ni:function(){return w},Wv:function(){return f},ZP:function(){return c},aL:function(){return g},cV:function(){return l},eH:function(){return b},ne:function(){return h},q1:function(){return y},uV:function(){return p}}),n(85893);var r=n(35121),o=n(31665),i=n(37359),a=n(7212),u=n(23050),s=n(67294);function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}let l=e=>e.replace(/(<p[^>]+?>|<p>|<\/p>)/gim,""),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=e?new Date(e):new Date;return n.setTime(n.getTime()+864e5*t),n},_=e=>(0,o.Z)((0,i.Z)((0,a.Z)((0,u.Z)(e),0),0),0),p=(e,t)=>{let n=e.flights[0].departDateTime,r=t.flights[0].departDateTime;return n._seconds<r._seconds?-1:n._seconds>r._seconds?1:0},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t="abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890",n="";for(let r=0;r<e;r++){let e=Math.floor(Math.random()*t.length);n+=t.charAt(e)}return n},m=(e,t)=>{let n;return function(){let r=arguments;n||(e.apply(this,r),n=!0,setTimeout(()=>n=!1,t))}},f=e=>new Intl.NumberFormat("en-EN",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:2}).format(e),y=(e,t,n,r)=>{let o=t||n?"?":"";return t&&(o+="subject=".concat(encodeURIComponent(t))),n&&(o+="".concat(t?"&":"","body=").concat(encodeURIComponent(n))),"mailto:".concat(e).concat(o)},g=e=>e||0!==e.length?fetch("/api/airports",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}).then(e=>e.json()).then(e=>e.map(e=>e.item)).catch(e=>console.log(e)):[],b=e=>e||0!==e.length?new Promise((t,n)=>{m(fetch("/api/airports",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}).then(e=>e.json()).then(e=>{e||t([]),t(e.map(e=>{let{item:t,refIndex:n}=e;return{value:t.ident,name:t.name}}))}).catch(n),200)}):[],v=async e=>{let t,n=await g(e.from),r=await g(e.to);if(!n&&0===n.length&&r&&r.length>0)return[];n=n.shift(),r=r.shift();let o={departAirportId:n.id,departAirportIdent:n.ident,departAirport:n.name,departCity:n.municipality,departCountry:n.iso_country,departDateTime:e.date_outbound,arriveAirportId:r.id,arriveAirportIdent:r.ident,arriveAirport:r.name,arriveCity:r.municipality,arriveCountry:r.iso_country,arriveDateTime:"",seats:e.passengers,seatsTotal:e.seats_total||0,pricePerSeat:e.price_per_seat_outbound||0,discountPrice:e.discount_price_outbound||null,type:e.type,direction:e.direction||"outbound",roundtrip:e.roundtrip||!1};return e.roundtrip&&(t={departAirportId:r.id,departAirportIdent:r.ident,departAirport:r.name,departCity:r.municipality,departCountry:r.iso_country,departDateTime:e.date_inbound,arriveAirportId:n.id,arriveAirportIdent:n.ident,arriveAirport:n.name,arriveCity:n.municipality,arriveCountry:n.iso_country,arriveDateTime:"",seats:e.passengers,seatsTotal:e.seats_total||0,pricePerSeat:e.price_per_seat_inbound||null,discountPrice:e.discount_price_inbound||null,type:e.type,direction:"inbound",roundtrip:e.roundtrip||!1}),[o,t]},w=()=>{(0,s.useLayoutEffect)(()=>(document.body.classList.add("scroll-disabled"),()=>document.body.classList.remove("scroll-disabled")),[])},C=(e,t,n)=>{var o;if(!n.flights)return;if(!(null===(o=n.flights)||void 0===o?void 0:o[0]))return null;n.passengers||(n.passengers=1);let i=n.flights.map(e=>({name:"".concat(e.departCity," → ").concat(e.arriveCity),id:e.id,price:e.pricePerSeat,quantity:parseInt(n.passengers,10),dimension1:e.departAirportIdent,dimension2:e.arriveAirportIdent,category:e.type})),a={};"customize"===t&&"/checkout/customize/[sharedFlightId]"===e?a={event:"checkout",ecommerce:{checkout:{actionField:{step:1},products:i}}}:"purchase"===t&&(a={ecommerce:{purchase:{actionField:{id:n.paymentId,affiliation:"Fly Hyer Checkout",revenue:n.revenue},products:i}}}),(0,r.IL)(a)}},68229:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(94184),u=n.n(a),s=n(67294),c=n(38271),l=n(6805),d=n(6635),_=n.n(d);function p(e){let{children:t,visible:n,setVisible:o}=e,[i,a]=(0,s.useState)({height:"100%"}),d=()=>{a({height:window.innerHeight})};return(0,s.useEffect)(()=>(window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]),(0,r.jsxs)(l.M_,{children:[(0,r.jsxs)("div",{className:u()(_().menuContainer,{[_().isVisible]:n}),style:i,children:[n&&(0,r.jsx)(c.Z,{}),t]}),n&&(0,r.jsx)(l.ww.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:u()(_().area),onKeyDown:e=>{"escape"===e.key&&o(!1)},"aria-label":"Close menu",role:"button",tabIndex:0})]})}p.propTypes={children:i().node,visible:i().bool,setVisible:i().func},t.Z=p},55583:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(94184),u=n.n(a),s=n(67294),c=n(78635),l=n(81556),d=n.n(l),_=n(24298);function p(e){let{className:t,color:n,menuVisible:o,setMenuVisible:i,dashboard:a}=e,{isVisible:l,setIsVisible:p}=(0,s.useContext)(c.Q);return(0,r.jsxs)("div",{className:u()(d().navButtons,t,d()[n]),children:[(0,r.jsx)(_.Z,{type:"circle",icon:"list",color:null!=n?n:"",onClickHandler:()=>i(!o),className:d().menu}),!a&&(0,r.jsx)(_.Z,{type:"circle",icon:"airplane",color:null!=n?n:"",onClickHandler:()=>p(!l),className:d().widget})]})}p.propTypes={className:i().string,color:i().oneOf(["","midnight-blue","white"]),menuVisible:i().bool,setMenuVisible:i().func,dashboard:i().bool},t.Z=p},14273:function(e,t){"use strict";t.Z={SITE_URL:"https://www.flyhyer.com",GRAPHQL_URL:"https://graphql.datocms.com",GRAPHQL_URL_STAGING:"https://graphql.datocms.com/preview",SOCIALS:{facebook:"https://www.facebook.com/HyerAviation",instagram:"https://www.instagram.com/fly_hyer/",linkedin:"https://www.linkedin.com/company/flyhyer/"},INQUIRY_STATUS:["estimate","quote","in progress","rejected","proposed","activated","confirmed","not paid","booked"],INQUIRY_INREQUEST:["estimate","quote","in progress"],ITINERARY_URL:"/dashboard/itinerary",ITINERARY_LIST_URL:"/dashboard",ITINERARY_ADMIN_LIST_URL:"/dashboard/admin/itineraries",ITINERARY_ADMIN_URL:"/dashboard/admin/itineraries",SHARED_ADMIN_URL:"/dashboard/admin/shared",CHECKOUT_URL:"/checkout/customize",CHECKOUT_SUCCESSFUL:"/checkout/success",CHECKOUT_FAILED:"/checkout/failed",SEARCH_RESULTS_URL:"/search/flights",DEFAULT_SEO:[{attributes:{property:"og:image",content:"https://www.datocms-assets.com/40358/1611579548-hyer-social-fallback.jpg"},content:null,tag:"meta"},{attributes:{property:"og:image:width",content:"1200"},content:null,tag:"meta"},{attributes:{property:"og:image:height",content:"630"},content:null,tag:"meta"},{attributes:{property:"og:image:alt",content:"Hyer Aviation"},content:null,tag:"meta"},{attributes:{property:"og:locale",content:"en"},content:null,tag:"meta"},{attributes:{property:"og:type",content:"website"},content:null,tag:"meta"}]}},54467:function(e){e.exports={"u-underline-link":"Button_u-underline-link__ErBJ4","u-white":"Button_u-white__0pEkA","u-h1":"Button_u-h1__cxKcT","u-h2":"Button_u-h2__2jk3A","u-h3":"Button_u-h3__2o_Ms","u-h4":"Button_u-h4__84_EV","u-h5":"Button_u-h5__YybiG","u-h6":"Button_u-h6__xS9vQ",button:"Button_button__OFOdO",default:"Button_default__JoKcn",small:"Button_small__NyCDp",circle:"Button_circle__LY4rX","color-white":"Button_color-white__ZAsqP","color-green":"Button_color-green__mUXoo","color-red":"Button_color-red__eS7y2","color-border":"Button_color-border__XhYzh","color-white-border":"Button_color-white-border__Nb8ws","color-green-border":"Button_color-green-border__Cnn2A"}},6635:function(e){e.exports={"u-underline-link":"MenuContainer_u-underline-link__qCKZE","u-white":"MenuContainer_u-white__1srkM","u-h1":"MenuContainer_u-h1__ZKq7i","u-h2":"MenuContainer_u-h2__S21P1","u-h3":"MenuContainer_u-h3__a07fL","u-h4":"MenuContainer_u-h4__uTr4l","u-h5":"MenuContainer_u-h5__vk1iM","u-h6":"MenuContainer_u-h6__0vuC5",menuContainer:"MenuContainer_menuContainer__mzgmD",isVisible:"MenuContainer_isVisible__vA3eD",area:"MenuContainer_area__FhHub"}},81556:function(e){e.exports={"u-underline-link":"NavButtons_u-underline-link__Sz3kO","u-white":"NavButtons_u-white__418Mk","u-h1":"NavButtons_u-h1__nIXBx","u-h2":"NavButtons_u-h2__XzRnn","u-h3":"NavButtons_u-h3__Bsg9x","u-h4":"NavButtons_u-h4__NJbOf","u-h5":"NavButtons_u-h5__9DDKm","u-h6":"NavButtons_u-h6__wyGGw",navButtons:"NavButtons_navButtons__439Pj",menu:"NavButtons_menu__udqqI",widget:"NavButtons_widget__LJ_HN"}}}]);