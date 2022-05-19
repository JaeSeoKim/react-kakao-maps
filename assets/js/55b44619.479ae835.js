"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3384],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var o=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),k=i,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||a;return t?o.createElement(u,r(r({ref:n},s),{},{components:t})):o.createElement(u,r({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4455:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var o=t(7462),i=t(3366),a=(t(7378),t(3905)),r=["components"],p={id:"RoadviewInfoWindowProps",title:"Interface: RoadviewInfoWindowProps",sidebar_label:"RoadviewInfoWindowProps",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"api/interfaces/RoadviewInfoWindowProps",id:"api/interfaces/RoadviewInfoWindowProps",isDocsHomePage:!1,title:"Interface: RoadviewInfoWindowProps",description:"Properties",source:"@site/docs/api/interfaces/RoadviewInfoWindowProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/RoadviewInfoWindowProps",permalink:"/docs/api/interfaces/RoadviewInfoWindowProps",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RoadviewInfoWindowProps",title:"Interface: RoadviewInfoWindowProps",sidebar_label:"RoadviewInfoWindowProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RectangleProps",permalink:"/docs/api/interfaces/RectangleProps"},next:{title:"RoadviewMarkerProps",permalink:"/docs/api/interfaces/RoadviewMarkerProps"}},s=[{value:"Properties",id:"properties",children:[{value:"altitude",id:"altitude",children:[]},{value:"className",id:"classname",children:[]},{value:"disableAutoPan",id:"disableautopan",children:[]},{value:"id",id:"id",children:[]},{value:"position",id:"position",children:[]},{value:"range",id:"range",children:[]},{value:"removable",id:"removable",children:[]},{value:"style",id:"style",children:[]},{value:"zIndex",id:"zindex",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onCreate",id:"oncreate",children:[]}]}],c={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"altitude"},"altitude"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"altitude"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\ub85c\ub4dc\ubdf0\uc5d0 \uc62c\ub77c\uc788\ub294 \uc778\ud3ec\uc708\ub3c4\uc6b0\uc758 \ub192\uc774 \uac12(m \ub2e8\uc704)"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L66"},"components/RoadviewInfoWindow.tsx:66")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"classname"},"className"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"className"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Contianer className\uc5d0 \ub300\ud574\uc11c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L14"},"components/RoadviewInfoWindow.tsx:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disableautopan"},"disableAutoPan"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"disableAutoPan"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0\ub97c \uc5f4 \ub54c \uc9c0\ub3c4\uac00 \uc790\ub3d9\uc73c\ub85c \ud328\ub2dd\ud558\uc9c0 \uc54a\uc744\uc9c0\uc758 \uc5ec\ubd80 (\uae30\ubcf8\uac12: false)"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L51"},"components/RoadviewInfoWindow.tsx:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Contianer id\uc5d0 \ub300\ud574\uc11c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L9"},"components/RoadviewInfoWindow.tsx:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"position"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"lat"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"lng"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"pan"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"panoId?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"tilt"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,a.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L24"},"components/RoadviewInfoWindow.tsx:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"range"},"range"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"range"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\ub85c\ub4dc\ubdf0 \uc0c1\uc5d0\uc11c \uc778\ud3ec\uc708\ub3c4\uc6b0\uc758 \uac00\uc2dc\ubc18\uacbd(m \ub2e8\uc704), \ub450 \uc9c0\uc810 \uc0ac\uc774\uc758 \uac70\ub9ac\uac00 \uc9c0\uc815\ud55c \uac12\ubcf4\ub2e4 \uba40\uc5b4\uc9c0\uba74 \uc778\ud3ec\uc708\ub3c4\uc6b0\ub294 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ub41c\ub2e4"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L71"},"components/RoadviewInfoWindow.tsx:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removable"},"removable"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"removable"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"\uc0ad\uc81c \uac00\ub2a5\ud55c \uc778\ud3ec\uc708\ub3c4\uc6b0"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L56"},"components/RoadviewInfoWindow.tsx:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"style"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CSSProperties")),(0,a.kt)("p",null,"Contianer style\uc5d0 \ub300\ud574\uc11c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L19"},"components/RoadviewInfoWindow.tsx:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"zindex"},"zIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"zIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0 \uc5d8\ub9ac\uba3c\ud2b8\uc758 z-index \uc18d\uc131 \uac12"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L61"},"components/RoadviewInfoWindow.tsx:61")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"oncreate"},"onCreate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onCreate"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"infoWindow"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"\uc778\ud3ec\uc708\ub3c4\uc6b0 \uac1d\uccb4 \uc0dd\uc131\ud6c4 \ud574\ub2f9 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"infoWindow")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"InfoWindow"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/14c3705/src/components/RoadviewInfoWindow.tsx#L76"},"components/RoadviewInfoWindow.tsx:76")))}m.isMDXComponent=!0}}]);