"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4760],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,p(p({ref:t},d),{},{components:n})):r.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var r=n(3262),a=(n(9231),n(4852));const o='import { Map } from "react-kakao-maps-sdk"\nimport useKakaoLoader from "./useKakaoLoader"\nimport { useState } from "react"\n\nexport default function AddMapDragendEvent() {\n  useKakaoLoader()\n  const [result, setResult] = useState("")\n\n  return (\n    <>\n      <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n        id="map"\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "350px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        onDragEnd={(map) => {\n          const latlng = map.getCenter()\n          setResult(\n            `\ubcc0\uacbd\ub41c \uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c\ub294 ${latlng.getLat()} \uc774\uace0, \uacbd\ub3c4\ub294 ${latlng.getLng()} \uc785\ub2c8\ub2e4`,\n          )\n        }}\n      />\n      <p>\n        <em>\uc9c0\ub3c4\ub97c \uc6c0\uc9c1\uc5ec \uc8fc\uc138\uc694!</em>\n      </p>\n      <p id="result">{result}</p>\n    </>\n  )\n}\n',p={title:"\uc774\ub3d9 \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",sidebar_position:17},i=void 0,l={unversionedId:"sample/map/addMapDragendEvent",id:"sample/map/addMapDragendEvent",title:"\uc774\ub3d9 \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",description:"\uc9c0\ub3c4\ub97c \ub9c8\uc6b0\uc2a4\ub85c \uc774\ub3d9\uc2dc\ud0ac \uacbd\uc6b0\uc5d0 dragend \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub294 \ub9c8\uc6b0\uc2a4\ub85c \uc9c0\ub3c4 \uc774\ub3d9\uc774 \uc644\ub8cc\ub41c \uc2dc\uc810\uc758 \uc911\uc2ec \uc88c\ud45c\ub97c \ud45c\uc2dc\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4.",source:"@site/docs/sample/map/addMapDragendEvent.mdx",sourceDirName:"sample/map",slug:"/sample/map/addMapDragendEvent",permalink:"/docs/sample/map/addMapDragendEvent",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/addMapDragendEvent.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\uc774\ub3d9 \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"\ud074\ub9ad\ud55c \uc704\uce58\uc5d0 \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",permalink:"/docs/sample/map/addMapClickEventWithMarker"},next:{title:"\ud655\ub300, \ucd95\uc18c \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/map/addMapZoomChangedEvent"}},s={},d=[],c=(m="LiveEditor",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:d},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc9c0\ub3c4\ub97c \ub9c8\uc6b0\uc2a4\ub85c \uc774\ub3d9\uc2dc\ud0ac \uacbd\uc6b0\uc5d0 dragend \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub294 \ub9c8\uc6b0\uc2a4\ub85c \uc9c0\ub3c4 \uc774\ub3d9\uc774 \uc644\ub8cc\ub41c \uc2dc\uc810\uc758 \uc911\uc2ec \uc88c\ud45c\ub97c \ud45c\uc2dc\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"original docs : ",(0,a.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/addMapDragendEvent/"},"https://apis.map.kakao.com/web/sample/addMapDragendEvent/"))),(0,a.kt)(c,{mdxType:"LiveEditor"},o))}g.isMDXComponent=!0}}]);