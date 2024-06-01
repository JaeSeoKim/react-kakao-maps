"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6974],{9752:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(6437);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(t),f=a,d=l["".concat(i,".").concat(f)]||l[f]||u[f]||o;return t?r.createElement(d,p(p({ref:n},m),{},{components:t})):r.createElement(d,p({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[l]="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=t(2304),a=(t(6437),t(9752));const o='import { useRef, useState } from "react"\nimport { Map, MapTypeControl } from "react-kakao-maps-sdk"\nimport useKakaoLoader from "./useKakaoLoader"\n\nexport default function MapInfo() {\n  useKakaoLoader()\n  const mapRef = useRef<kakao.maps.Map>(null)\n  const [info, setInfo] = useState<string>("")\n\n  const getInfo = () => {\n    const map = mapRef.current\n    if (!map) return\n\n    const center = map.getCenter()\n\n    // \uc9c0\ub3c4\uc758 \ud604\uc7ac \ub808\ubca8\uc744 \uc5bb\uc5b4\uc635\ub2c8\ub2e4\n    const level = map.getLevel()\n\n    // \uc9c0\ub3c4\ud0c0\uc785\uc744 \uc5bb\uc5b4\uc635\ub2c8\ub2e4\n    const mapTypeId = map.getMapTypeId()\n\n    // \uc9c0\ub3c4\uc758 \ud604\uc7ac \uc601\uc5ed\uc744 \uc5bb\uc5b4\uc635\ub2c8\ub2e4\n    const bounds = map.getBounds()\n\n    // \uc601\uc5ed\uc758 \ub0a8\uc11c\ucabd \uc88c\ud45c\ub97c \uc5bb\uc5b4\uc635\ub2c8\ub2e4\n    const swLatLng = bounds.getSouthWest()\n\n    // \uc601\uc5ed\uc758 \ubd81\ub3d9\ucabd \uc88c\ud45c\ub97c \uc5bb\uc5b4\uc635\ub2c8\ub2e4\n    const neLatLng = bounds.getNorthEast()\n\n    // \uc601\uc5ed\uc815\ubcf4\ub97c \ubb38\uc790\uc5f4\ub85c \uc5bb\uc5b4\uc635\ub2c8\ub2e4. ((\ub0a8,\uc11c), (\ubd81,\ub3d9)) \ud615\uc2dd\uc785\ub2c8\ub2e4\n    // const boundsStr = bounds.toString()\n\n    let message = "\uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c\ub294 \uc704\ub3c4 " + center.getLat() + ", <br>"\n    message += "\uacbd\ub3c4 " + center.getLng() + " \uc774\uace0 <br>"\n    message += "\uc9c0\ub3c4 \ub808\ubca8\uc740 " + level + " \uc785\ub2c8\ub2e4 <br> <br>"\n    message += "\uc9c0\ub3c4 \ud0c0\uc785\uc740 " + mapTypeId + " \uc774\uace0 <br> "\n    message +=\n      "\uc9c0\ub3c4\uc758 \ub0a8\uc11c\ucabd \uc88c\ud45c\ub294 " +\n      swLatLng.getLat() +\n      ", " +\n      swLatLng.getLng() +\n      " \uc774\uace0 <br>"\n    message +=\n      "\ubd81\ub3d9\ucabd \uc88c\ud45c\ub294 " +\n      neLatLng.getLat() +\n      ", " +\n      neLatLng.getLng() +\n      " \uc785\ub2c8\ub2e4"\n    setInfo(message)\n  }\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{ lat: 33.450701, lng: 126.570667 }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "350px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      ref={mapRef}\n    >\n      <MapTypeControl position={"TOPRIGHT"} />\n      <button id="getInfoBtn" onClick={getInfo}>\n        \ub9f5\uc815\ubcf4 \uac00\uc838\uc624\uae30\n      </button>\n      <p\n        id="info"\n        dangerouslySetInnerHTML={{\n          __html: info,\n        }}\n      />\n    </Map>\n  )\n}\n',p={title:"\uc9c0\ub3c4 \uc815\ubcf4 \uc5bb\uc5b4\uc624\uae30",sidebar_position:4},s=void 0,i={unversionedId:"sample/map/mapInfo",id:"sample/map/mapInfo",title:"\uc9c0\ub3c4 \uc815\ubcf4 \uc5bb\uc5b4\uc624\uae30",description:"\uc9c0\ub3c4 \ub808\ubca8, \uc911\uc2ec\uc88c\ud45c, \uc9c0\ub3c4 \ud0c0\uc785, \uc9c0\ub3c4 \uc601\uc5ed\uc815\ubcf4\ub97c \uc5bb\uc5b4\uc640 \ud45c\ucd9c\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/map/mapInfo.mdx",sourceDirName:"sample/map",slug:"/sample/map/mapInfo",permalink:"/docs/sample/map/mapInfo",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/mapInfo.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\uc9c0\ub3c4 \uc815\ubcf4 \uc5bb\uc5b4\uc624\uae30",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \ub808\ubca8 \ubc14\uafb8\uae30",permalink:"/docs/sample/map/changeLevel"},next:{title:"\uc9c0\ub3c4\uc5d0 \ucee8\ud2b8\ub864 \uc62c\ub9ac\uae30",permalink:"/docs/sample/map/addMapControl"}},c={},m=[],l=(u="LiveEditor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var u;const f={toc:m},d="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\uc9c0\ub3c4 \ub808\ubca8, \uc911\uc2ec\uc88c\ud45c, \uc9c0\ub3c4 \ud0c0\uc785, \uc9c0\ub3c4 \uc601\uc5ed\uc815\ubcf4\ub97c \uc5bb\uc5b4\uc640 \ud45c\ucd9c\ud569\ub2c8\ub2e4."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/documentation/#MapTypeId"},"\uc9c0\ub3c4 \ud0c0\uc785\uc744 \ubcf4\uc2dc\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc138\uc694!")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"original docs : ",(0,a.yg)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/mapInfo/"},"https://apis.map.kakao.com/web/sample/mapInfo/"))),(0,a.yg)(l,{mdxType:"LiveEditor"},o))}g.isMDXComponent=!0}}]);