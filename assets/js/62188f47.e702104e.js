"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[326],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,p(p({ref:t},d),{},{components:n})):r.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var r=n(3262),a=(n(9231),n(4852));const o='import { Map, ZoomControl } from "react-kakao-maps-sdk"\nimport useKakaoLoader from "./useKakaoLoader"\nimport { useState } from "react"\n\nexport default function AddMapZoomChangedEvent() {\n  useKakaoLoader()\n  const [result, setResult] = useState("")\n\n  return (\n    <>\n      <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n        id="map"\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "350px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        onZoomChanged={(map) => {\n          const level = map.getLevel()\n          setResult(`\ud604\uc7ac \uc9c0\ub3c4 \ub808\ubca8\uc740 ${level} \uc785\ub2c8\ub2e4`)\n        }}\n      >\n        <ZoomControl />\n      </Map>\n      <p>\n        <em>\uc9c0\ub3c4\ub97c \ud655\ub300 \ub610\ub294 \ucd95\uc18c \ud574\uc8fc\uc138\uc694!</em>\n      </p>\n      <p id="result">{result}</p>\n    </>\n  )\n}\n',p={title:"\ud655\ub300, \ucd95\uc18c \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",sidebar_position:18},i=void 0,l={unversionedId:"sample/map/addMapZoomChangedEvent",id:"sample/map/addMapZoomChangedEvent",title:"\ud655\ub300, \ucd95\uc18c \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",description:"\uc9c0\ub3c4\ub97c \ud655\ub300, \ucd95\uc18c\ud558\uac70\ub098, \uc9c0\ub3c4 API\uc758 \ud2b9\uc815 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \uc9c0\ub3c4 \ub808\ubca8\uc774 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 zoom_changed \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/map/addMapZoomChangedEvent.mdx",sourceDirName:"sample/map",slug:"/sample/map/addMapZoomChangedEvent",permalink:"/docs/sample/map/addMapZoomChangedEvent",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/addMapZoomChangedEvent.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"\ud655\ub300, \ucd95\uc18c \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"\uc774\ub3d9 \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/map/addMapDragendEvent"},next:{title:"\uc911\uc2ec\uc88c\ud45c \ubcc0\uacbd \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/map/addMapCenterChangedEvent"}},s={},d=[],c=(m="LiveEditor",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:d},f="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc9c0\ub3c4\ub97c \ud655\ub300, \ucd95\uc18c\ud558\uac70\ub098, \uc9c0\ub3c4 API\uc758 \ud2b9\uc815 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \uc9c0\ub3c4 \ub808\ubca8\uc774 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 zoom_changed \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \uc9c0\ub3c4 \ub808\ubca8\uc774 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \uc9c0\ub3c4 \uc544\ub798\ucabd\uc5d0 \ubcc0\uacbd\ub41c \uc9c0\ub3c4 \ub808\ubca8\uc744 \ubfcc\ub824\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc90c \ucee8\ud2b8\ub864\uc744 \uc774\uc6a9\ud558\uac70\ub098 \ub9c8\uc6b0\uc2a4 \uc2a4\ud06c\ub864\uc744 \uc774\uc6a9\ud558\uc5ec \uc9c0\ub3c4\ub97c \ud655\ub300, \ucd95\uc18c\ud574\ubcf4\uc138\uc694."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"original docs : ",(0,a.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/addMapZoomChangedEvent/"},"https://apis.map.kakao.com/web/sample/addMapZoomChangedEvent/"))),(0,a.kt)(c,{mdxType:"LiveEditor"},o))}v.isMDXComponent=!0}}]);