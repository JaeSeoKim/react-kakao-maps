"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4170],{4852:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var n=r(3262),a=(r(9231),r(4852));const o='import { Map } from "react-kakao-maps-sdk"\nimport useKakaoLoader from "./useKakaoLoader"\n\nexport default function BasicMap() {\n  useKakaoLoader()\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      id="map"\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "350px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    />\n  )\n}\n',p={title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},i=void 0,c={unversionedId:"sample/map/basicMap",id:"sample/map/basicMap",title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",description:"\uc9c0\ub3c4\ub97c \uc0dd\uc131\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc608\uc81c\uc785\ub2c8\ub2e4.",source:"@site/docs/sample/map/basicMap.mdx",sourceDirName:"sample/map",slug:"/sample/map/basicMap",permalink:"/docs/sample/map/basicMap",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/basicMap.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/docs/sample/"},next:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/map/moveMap"}},s={},l=[],m=(u="LiveEditor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:l},f="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc9c0\ub3c4\ub97c \uc0dd\uc131\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"original docs : ",(0,a.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/basicMap/"},"https://apis.map.kakao.com/web/sample/basicMap/"))),(0,a.kt)(m,{mdxType:"LiveEditor"},o))}b.isMDXComponent=!0}}]);