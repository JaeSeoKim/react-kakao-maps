"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6750],{3905:function(n,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(7378);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},l=Object.keys(n);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var s=r.createContext({}),p=function(n){var e=r.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},c=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var a=n.components,t=n.mdxType,l=n.originalType,s=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),y=p(a),d=t,g=y["".concat(s,".").concat(d)]||y[d]||u[d]||l;return a?r.createElement(g,o(o({ref:e},c),{},{components:a})):r.createElement(g,o({ref:e},c))}));function d(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:t,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8215:function(n,e,a){var r=a(7378);e.Z=function(n){var e=n.children,a=n.hidden,t=n.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:t},e)}},5064:function(n,e,a){a.d(e,{Z:function(){return p}});var r=a(7378),t=a(9443);var l=function(){var n=(0,r.useContext)(t.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},o=a(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var p=function(n){var e,a=n.lazy,t=n.block,p=n.defaultValue,c=n.values,u=n.groupId,y=n.className,d=r.Children.toArray(n.children),g=null!=c?c:d.map((function(n){return{value:n.props.value,label:n.props.label}})),m=null!=p?p:null==(e=d.find((function(n){return n.props.default})))?void 0:e.props.value,b=l(),f=b.tabGroupChoices,k=b.setTabGroupChoices,v=(0,r.useState)(m),O=v[0],w=v[1],h=[];if(null!=u){var C=f[u];null!=C&&C!==O&&g.some((function(n){return n.value===C}))&&w(C)}var T=function(n){var e=n.currentTarget,a=h.indexOf(e),r=g[a].value;w(r),null!=u&&(k(u,r),setTimeout((function(){var n,a,r,t,l,o,i,p;(n=e.getBoundingClientRect(),a=n.top,r=n.left,t=n.bottom,l=n.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&l<=p&&t<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},L=function(n){var e,a=null;switch(n.key){case"ArrowRight":var r=h.indexOf(n.target)+1;a=h[r]||h[0];break;case"ArrowLeft":var t=h.indexOf(n.target)-1;a=h[t]||h[h.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},y)},g.map((function(n){var e=n.value,a=n.label;return r.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":O===e}),key:e,ref:function(n){return h.push(n)},onKeyDown:L,onFocus:T,onClick:T},null!=a?a:e)}))),a?(0,r.cloneElement)(d.filter((function(n){return n.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==O})}))))}},9443:function(n,e,a){var r=(0,a(7378).createContext)(void 0);e.Z=r},7405:function(n,e,a){a.r(e),a.d(e,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return y}});var r=a(7462),t=a(3366),l=(a(7378),a(3905)),o=a(5064),i=a(8215),s=["components"],p={title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",sidebar_position:11},c=void 0,u={unversionedId:"sample/library/basicDrawingLibrary",id:"sample/library/basicDrawingLibrary",isDocsHomePage:!1,title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",description:"Drawing Library\uc758 \uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. Drawing Library\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc26c\uc6b4 \ub3c4\ud615 \uadf8\ub9ac\uae30\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c Drawing Manager\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/library/basicDrawingLibrary.mdx",sourceDirName:"sample/library",slug:"/sample/library/basicDrawingLibrary",permalink:"/docs/sample/library/basicDrawingLibrary",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/library/basicDrawingLibrary.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\ud074\ub7ec\uc2a4\ud130 \ub9c8\ucee4\uc5d0 \ud14d\uc2a4\ud2b8 \ud45c\uc2dc\ud558\uae30",permalink:"/docs/sample/library/chickenClusterer"},next:{title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",permalink:"/docs/sample/library/drawingGetData"}},y=[],d={toc:y};function g(n){var e=n.components,a=(0,t.Z)(n,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Drawing Library\uc758 \uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. Drawing Library\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc26c\uc6b4 \ub3c4\ud615 \uadf8\ub9ac\uae30\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c Drawing Manager\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"original docs : ",(0,l.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/basicDrawingLibrary/"},"https://apis.map.kakao.com/web/sample/basicDrawingLibrary/"))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"jsx",label:"JavaScript (live)",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Main() {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  const managerRef = useRef(null)\n\n  function selectOverlay(type) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.ARROW,\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ARROW)\n          }}\n        >\n          \ud654\uc0b4\ud45c\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n    </>\n  )\n}\n'))),(0,l.kt)(i.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const Main = () => {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  // \ub610\ud55c TypeScript\ub97c \uc0ac\uc6a9\ud558\uae30 \ub584\ubb38\uc5d0 \uc804\ub2ec \ubc1b\ub294 DrawingManager\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 OverlayType\uc5d0 \ub300\ud574\uc11c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4.\n  const managerRef =\n    useRef<\n      kakao.maps.drawing.DrawingManager<\n        | kakao.maps.drawing.OverlayType.ARROW\n        | kakao.maps.drawing.OverlayType.CIRCLE\n        | kakao.maps.drawing.OverlayType.ELLIPSE\n        | kakao.maps.drawing.OverlayType.MARKER\n        | kakao.maps.drawing.OverlayType.POLYLINE\n        | kakao.maps.drawing.OverlayType.RECTANGLE\n        | kakao.maps.drawing.OverlayType.POLYGON\n      >\n    >(null)\n\n  function selectOverlay(type: kakao.maps.drawing.OverlayType) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.ARROW,\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ARROW)\n          }}\n        >\n          \ud654\uc0b4\ud45c\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n    </>\n  )\n}\n')))))}g.isMDXComponent=!0},6010:function(n,e,a){function r(n){var e,a,t="";if("string"==typeof n||"number"==typeof n)t+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(a=r(n[e]))&&(t&&(t+=" "),t+=a);else for(e in n)n[e]&&(t&&(t+=" "),t+=e);return t}function t(){for(var n,e,a=0,t="";a<arguments.length;)(n=arguments[a++])&&(e=r(n))&&(t&&(t+=" "),t+=e);return t}a.d(e,{Z:function(){return t}})}}]);