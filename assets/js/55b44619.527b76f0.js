"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3384],{4852:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(9231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(t),m=i,u=k["".concat(l,".").concat(m)]||k[m]||c[m]||o;return t?a.createElement(u,r(r({ref:n},s),{},{components:t})):a.createElement(u,r({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[k]="string"==typeof e?e:i,r[1]=p;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(3262),i=(t(9231),t(4852));const o={id:"RoadviewInfoWindowProps",title:"Interface: RoadviewInfoWindowProps",sidebar_label:"RoadviewInfoWindowProps",sidebar_position:0,custom_edit_url:null},r=void 0,p={unversionedId:"api/interfaces/RoadviewInfoWindowProps",id:"api/interfaces/RoadviewInfoWindowProps",title:"Interface: RoadviewInfoWindowProps",description:"Properties",source:"@site/docs/api/interfaces/RoadviewInfoWindowProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/RoadviewInfoWindowProps",permalink:"/docs/api/interfaces/RoadviewInfoWindowProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RoadviewInfoWindowProps",title:"Interface: RoadviewInfoWindowProps",sidebar_label:"RoadviewInfoWindowProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RectangleProps",permalink:"/docs/api/interfaces/RectangleProps"},next:{title:"RoadviewMarkerProps",permalink:"/docs/api/interfaces/RoadviewMarkerProps"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"altitude",id:"altitude",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"disableAutoPan",id:"disableautopan",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onCreate",id:"oncreate",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"position",id:"position",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"range",id:"range",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"removable",id:"removable",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"zIndex",id:"zindex",level:3},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:d},k="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"altitude"},"altitude"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"altitude"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\ub85c\ub4dc\ubdf0\uc5d0 \uc62c\ub77c\uc788\ub294 \uc778\ud3ec\uc708\ub3c4\uc6b0\uc758 \ub192\uc774 \uac12(m \ub2e8\uc704)"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L51"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"disableautopan"},"disableAutoPan"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"disableAutoPan"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0\ub97c \uc5f4 \ub54c \uc9c0\ub3c4\uac00 \uc790\ub3d9\uc73c\ub85c \ud328\ub2dd\ud558\uc9c0 \uc54a\uc744\uc9c0\uc758 \uc5ec\ubd80 (\uae30\ubcf8\uac12: false)"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L36"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"oncreate"},"onCreate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onCreate"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"infoWindow"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"InfoWindow"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"infoWindow"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0 \uac1d\uccb4 \uc0dd\uc131\ud6c4 \ud574\ub2f9 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"infoWindow")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"InfoWindow"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L61"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"position"},"position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"position"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"lat"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lng"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"p"},"pan"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"panoId?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"tilt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,i.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L9"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"range"},"range"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"range"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\ub85c\ub4dc\ubdf0 \uc0c1\uc5d0\uc11c \uc778\ud3ec\uc708\ub3c4\uc6b0\uc758 \uac00\uc2dc\ubc18\uacbd(m \ub2e8\uc704), \ub450 \uc9c0\uc810 \uc0ac\uc774\uc758 \uac70\ub9ac\uac00 \uc9c0\uc815\ud55c \uac12\ubcf4\ub2e4 \uba40\uc5b4\uc9c0\uba74 \uc778\ud3ec\uc708\ub3c4\uc6b0\ub294 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ub41c\ub2e4"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L56"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removable"},"removable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"removable"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"\uc0ad\uc81c \uac00\ub2a5\ud55c \uc778\ud3ec\uc708\ub3c4\uc6b0"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L41"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zindex"},"zIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"zIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0 \uc5d8\ub9ac\uba3c\ud2b8\uc758 z-index \uc18d\uc131 \uac12"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/6ab3ba4/packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx#L46"},"packages/react-kakao-maps-sdk/src/components/RoadviewInfoWindow.tsx:46")))}c.isMDXComponent=!0}}]);