"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1088],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7378),t(3905));const o={title:"\uc9c0\ub3c4 \ub808\ubca8 \ubc14\uafb8\uae30",sidebar_position:3},l=void 0,p={unversionedId:"sample/map/changeLevel",id:"sample/map/changeLevel",title:"\uc9c0\ub3c4 \ub808\ubca8 \ubc14\uafb8\uae30",description:"\uc9c0\ub3c4 \ub808\ubca8\uc744 \uc9c0\ub3c4 \uac1d\uccb4 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c \ubcc0\uacbd\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/map/changeLevel.mdx",sourceDirName:"sample/map",slug:"/sample/map/changeLevel",permalink:"/docs/sample/map/changeLevel",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/changeLevel.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\uc9c0\ub3c4 \ub808\ubca8 \ubc14\uafb8\uae30",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/map/moveMap"},next:{title:"\uc9c0\ub3c4 \uc815\ubcf4 \uc5bb\uc5b4\uc624\uae30",permalink:"/docs/sample/map/mapInfo"}},i={},c=[],s={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc9c0\ub3c4 \ub808\ubca8\uc744 \uc9c0\ub3c4 \uac1d\uccb4 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"original docs : ",(0,a.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/changeLevel/"},"https://apis.map.kakao.com/web/sample/changeLevel/"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  const Main = () => {\n    const [level, setLevel] = useState(3);\n\n    return (\n      <>\n        <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n          center={{\n            lat:33.450701,\n            lng:126.570667,\n          }}\n          style={{\n            // \uc9c0\ub3c4\uc758 \ud06c\uae30\n            width: "100%",\n            height: "450px",\n          }}\n          level={level} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        >\n          <div\n            style={{ display: "flex", gap: "10px" }}\n          >\n            <button\n              onClick={() =>\n                setLevel(level - 1)\n              }\n            >\n              \uc9c0\ub3c4 \ub808\ubca8 - 1\n            </button>\n            <button\n              onClick={() =>\n                setLevel(level + 1)\n              }\n            >\n              \uc9c0\ub3c4 \ub808\ubca8 + 1\n            </button>\n            <p>\ud604\uc7ac \uc9c0\ub3c4 \ub808\ubca8\uc740 {level} \ub808\ubca8 \uc785\ub2c8\ub2e4.</p>\n          </div>\n        </Map>\n      </>\n    )\n  }\n  return (<Main />)\n}\n')))}m.isMDXComponent=!0}}]);