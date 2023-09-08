"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3206],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(3262),r=(n(9231),n(4852));const l={title:"Tutorial",sidebar_position:1},o=void 0,i={unversionedId:"intro",id:"intro",title:"Tutorial",description:"Usage",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ZoomControlProps",permalink:"/docs/api/interfaces/ZoomControlProps"},next:{title:"Index",permalink:"/docs/sample/"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Install",id:"install",level:2},{value:"Simple Usage",id:"simple-usage",level:2},{value:"\ub9f5\uc704\uc5d0 \ub9c8\ucee4\uc640 \uc778\ud3ec\uc708\ub3c4\uc6b0 \uc62c\ub9ac\uae30",id:"\ub9f5\uc704\uc5d0-\ub9c8\ucee4\uc640-\uc778\ud3ec\uc708\ub3c4\uc6b0-\uc62c\ub9ac\uae30",level:3},{value:"\ub9f5\uc704\uc5d0 \ucee4\uc2a4\ud140\uc624\ubc84\ub808\uc774 \uc62c\ub9ac\uae30",id:"\ub9f5\uc704\uc5d0-\ucee4\uc2a4\ud140\uc624\ubc84\ub808\uc774-\uc62c\ub9ac\uae30",level:3},{value:"\ub9f5\uc704\uc5d0 \ub9c8\ucee4 \ud074\ub7ec\uc2a4\ud130 \uc62c\ub9ac\uae30",id:"\ub9f5\uc704\uc5d0-\ub9c8\ucee4-\ud074\ub7ec\uc2a4\ud130-\uc62c\ub9ac\uae30",level:3},{value:"etc...",id:"etc",level:3},{value:"Documentation",id:"documentation",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"\uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud544\uc218\uc801"),"\uc73c\ub85c Kakao \uc9c0\ub3c4 API\ub97c \ubd88\ub7ec\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/guide/"},"Kakao \uc9c0\ub3c4 Javscript API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  type="text/javascript"\n  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=\ubc1c\uae09\ubc1b\uc740 APP KEY\ub97c \ub123\uc73c\uc2dc\uba74 \ub429\ub2c8\ub2e4.&libraries=services,clusterer"\n><\/script>\n')),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\uc790\ub97c \uc704\ud574 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JaeSeoKim/kakao.maps.d.ts"},"kakao.maps.d.ts")," \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.types")," \uc18d\uc131\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"kakao.maps.d.ts")," \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...,\n  "compilerOptions": {\n    ...,\n    "types": [\n      ...,\n      "kakao.maps.d.ts"\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-kakao-maps-sdk\n# or\nyarn add react-kakao-maps-sdk\n")),(0,r.kt)("h2",{id:"simple-usage"},"Simple Usage"),(0,r.kt)("h3",{id:"\ub9f5\uc704\uc5d0-\ub9c8\ucee4\uc640-\uc778\ud3ec\uc708\ub3c4\uc6b0-\uc62c\ub9ac\uae30"},"\ub9f5\uc704\uc5d0 \ub9c8\ucee4\uc640 \uc778\ud3ec\uc708\ub3c4\uc6b0 \uc62c\ub9ac\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  return (\n    <Map\n      center={{ lat: 33.5563, lng: 126.79581 }}\n      style={{ width: "100%", height: "360px" }}\n    >\n      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>\n        <div style={{color:"#000"}}>Hello World!</div>\n      </MapMarker>\n    </Map>\n  )\n}\n')),(0,r.kt)("h3",{id:"\ub9f5\uc704\uc5d0-\ucee4\uc2a4\ud140\uc624\ubc84\ub808\uc774-\uc62c\ub9ac\uae30"},"\ub9f5\uc704\uc5d0 \ucee4\uc2a4\ud140\uc624\ubc84\ub808\uc774 \uc62c\ub9ac\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  return (\n    <Map\n      center={{ lat: 33.5563, lng: 126.79581 }}\n      style={{ width: "100%", height: "360px" }}\n    >\n      <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>\n        <div\n          style={{padding:"42px", backgroundColor:"#fff", color:"#000"}}\n        >\n          Custom Overlay!\n        </div>\n      </CustomOverlayMap>\n    </Map>\n  )\n}\n')),(0,r.kt)("h3",{id:"\ub9f5\uc704\uc5d0-\ub9c8\ucee4-\ud074\ub7ec\uc2a4\ud130-\uc62c\ub9ac\uae30"},"\ub9f5\uc704\uc5d0 \ub9c8\ucee4 \ud074\ub7ec\uc2a4\ud130 \uc62c\ub9ac\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  return (\n    <Map\n      center={{ lat: 36.2683, lng: 127.6358 }}\n      style={{ width: "100%", height: "360px" }}\n      level={14}\n    >\n      <MarkerClusterer\n        averageCenter={true}\n        minLevel={10}\n      >\n        {clusterPositionsData.positions.map((pos) => (\n          <MapMarker\n            key={`${pos.lat}-${pos.lng}`}\n            position={pos}\n          />\n        ))}\n      </MarkerClusterer>\n    </Map>\n  )\n}\n')),(0,r.kt)("h3",{id:"etc"},"etc..."),(0,r.kt)("p",null,"\ub354 \ub9ce\uc740 \uc0ac\uc6a9 \uc608\uc2dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/docs/sample"},"Sample")," \ud398\uc774\uc9c0\ub97c \ucc38\uace0 \ud558\uc5ec \ud655\uc778 \ud574\uc8fc\uc138\uc694."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/sample"},"Sample"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api"},"API")))))}m.isMDXComponent=!0}}]);