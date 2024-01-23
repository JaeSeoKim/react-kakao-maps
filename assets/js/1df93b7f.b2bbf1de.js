"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{7901:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(9231),r=a(9841),o=a(1265),s=a(8272),i=a(1834);const l={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",container:"container_bfhl",map:"map_sQa5"};var c=a(3262);const d={features:"features_xdhU",featureSvg:"featureSvg__8YW"},u=[{title:"Easy to Use",image:"/img/undraw_Map_dark_re_36sy.svg",description:n.createElement(n.Fragment,null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uac04\ub2e8\ud558\uac8c \uad6c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4!")},{title:"Focus on What Matters",image:"/img/undraw_Location_tracking_re_n3ok.svg",description:n.createElement(n.Fragment,null,"\uae30\ub2a5 \uad6c\ud604\uc5d0 \uc9d1\uc911 \ud560 \uc218 \uc788\ub3c4\ub85d KakaoMap\uacfc React Life Cycle\uc744 \uc5f0\uacb0\ud558\uc5ec \uc81c\uacf5 \ud569\ub2c8\ub2e4!")},{title:"Powered by React, TypeScript",image:"/img/undraw_My_current_location_re_whmt.svg",description:n.createElement(n.Fragment,null,"TypeScript\uc758 \ud0c0\uc785 \ucd94\ub860\uacfc \ud568\uaed8 React\ub85c \uc27d\uac8c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4!!")}];function p(e){let{title:t,image:a,description:o}=e;return n.createElement("div",{className:(0,r.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("img",{className:d.featureSvg,alt:t,src:a})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,o)))}function m(){return n.createElement("section",{className:d.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},u.map(((e,t)=>n.createElement(p,(0,c.Z)({key:t},e)))))))}var k=a(7496),h=a(7590),g=a(1395);function f(){const{siteConfig:e}=(0,i.Z)();return n.createElement("header",{className:(0,r.Z)("hero hero--primary",l.heroBanner)},n.createElement("div",{className:(0,r.Z)("container",l.container)},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement(k.D,{className:l.map,center:{lat:33.450701,lng:126.570667}},n.createElement(h.O,{position:{lat:33.450701,lng:126.570667}},n.createElement("div",{style:{margin:"5px",color:"black"}},"React \ud83d\udc99 Kakao Map!")),n.createElement(g.l,{position:{lat:33.4498466026352,lng:126.57066214371602}},n.createElement("div",{className:l.buttons},n.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Tutorial - 5min \u23f1\ufe0f"))))))}function v(){const{siteConfig:e}=(0,i.Z)();return n.createElement(o.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(f,null),n.createElement("main",null,n.createElement(m,null)))}},1395:(e,t,a)=>{a.d(t,{l:()=>l});var n=a(9231),r=a(4151),o=a(3212),s=a(4994),i=a(2272);const l=n.forwardRef((function(e,t){let{position:a,children:l,clickable:c,xAnchor:d,yAnchor:u,zIndex:p,onCreate:m}=e;const k=(0,n.useContext)(s.r),h=(0,o.S)("CustomOverlayMap"),g=(0,n.useRef)(document.createElement("div")),f=(0,n.useMemo)((()=>new kakao.maps.LatLng(a.lat,a.lng)),[a.lat,a.lng]),v=(0,n.useMemo)((()=>{const e=new kakao.maps.CustomOverlay({clickable:c,xAnchor:d,yAnchor:u,zIndex:p,position:f,content:g.current});return g.current.style.display="none",e}),[c,d,u]);return(0,n.useImperativeHandle)(t,(()=>v),[v]),(0,n.useLayoutEffect)((()=>{if(h)return k?k.addMarker(v,!0):v.setMap(h),()=>{k?k.removeMarker(v,!0):v.setMap(null)}}),[h,k,v]),(0,n.useLayoutEffect)((()=>{m&&m(v)}),[v,m]),(0,i.D)(v,"setPosition",f),(0,i.D)(v,"setZIndex",p),g.current.parentElement&&r.createPortal(l,g.current.parentElement)}))},1762:(e,t,a)=>{a.d(t,{n:()=>s});var n=a(9231),r=a(4151),o=a(2272);const s=n.forwardRef((function(e,t){let{map:a,position:s,marker:i,children:l,altitude:c,disableAutoPan:d,range:u,removable:p,zIndex:m,onCreate:k}=e;const h=(0,n.useRef)(document.createElement("div")),g=(0,n.useMemo)((()=>{const e=new kakao.maps.InfoWindow({altitude:c,disableAutoPan:d,range:u,removable:p,zIndex:m,content:h.current,position:s});return h.current.style.display="none",e}),[d,p]);return(0,n.useImperativeHandle)(t,(()=>g),[g]),(0,n.useLayoutEffect)((()=>(g.open(a,i),()=>{g.close()})),[a,i]),(0,n.useLayoutEffect)((()=>{k&&k(g)}),[g,k]),(0,o.D)(g,"setPosition",s),(0,o.D)(g,"setAltitude",c),(0,o.D)(g,"setRange",u),(0,o.D)(g,"setZIndex",m),h.current.parentElement&&r.createPortal(l,h.current.parentElement)}))},7496:(e,t,a)=>{a.d(t,{D:()=>u,W:()=>d});var n=a(3262),r=a(9231),o=a(1881),s=a(7670),i=a(8297),l=a(5260),c=a(2272);const d=r.createContext(void 0),u=r.forwardRef((function(e,t){let{id:a,as:u,children:p,center:m,isPanto:k=!1,padding:h=32,disableDoubleClick:g,disableDoubleClickZoom:f,draggable:v,zoomable:b,keyboardShortcuts:E,level:y,maxLevel:C,minLevel:w,mapTypeId:L,projectionId:D,scrollwheel:I,tileAnimation:M,onBoundsChanged:S,onCenterChanged:T,onClick:x,onDoubleClick:_,onDrag:A,onDragEnd:z,onDragStart:N,onIdle:R,onMaptypeidChanged:Z,onMouseMove:O,onRightClick:P,onTileLoaded:F,onZoomChanged:U,onZoomStart:j,onCreate:$,...H}=e;const q=u||"div",[B,W]=(0,r.useState)(!1),[G,J]=(0,r.useState)(),K=(0,r.useRef)(null);return(0,o.L)((()=>{const e=i.a.addLoadEventLisnter((e=>W(!e)));return()=>{i.a.removeLoadEventLisnter(e)}}),[]),(0,o.L)((()=>{if(!B)return;const e=K.current;if(!e)return;const t="lat"in m?new kakao.maps.LatLng(m.lat,m.lng):new kakao.maps.Coords(m.x,m.y),a=new kakao.maps.Map(e,{center:t,disableDoubleClick:g,disableDoubleClickZoom:f,draggable:v,keyboardShortcuts:E,level:y,mapTypeId:"string"==typeof L?kakao.maps.MapTypeId[L]:L,projectionId:D,scrollwheel:I,tileAnimation:M});return J(a),()=>{e.innerHTML=""}}),[B,g,f,M]),(0,r.useImperativeHandle)(t,(()=>G),[G]),(0,o.L)((()=>{G&&$&&$(G)}),[G,$]),(0,o.L)((()=>{if(!G)return;let e=G.getCenter();e instanceof kakao.maps.Coords&&(e=e.toLatLng());const t="lat"in m?new kakao.maps.LatLng(m.lat,m.lng):new kakao.maps.Coords(m.x,m.y);t instanceof kakao.maps.LatLng&&t.equals(e)||t instanceof kakao.maps.Coords&&t.toLatLng().equals(e)||(k?G.panTo(t,h):G.setCenter(t))}),[G,m.lat,m.lng,m.x,m.y]),(0,c.D)(G,"setDraggable",v),(0,c.D)(G,"setZoomable",b),(0,c.D)(G,"setKeyboardShortcuts",E),(0,c.D)(G,"setLevel",y),(0,c.D)(G,"setMapTypeId",B?"string"==typeof L?kakao.maps.MapTypeId[L]:L:void 0),(0,c.D)(G,"setProjectionId",D),(0,c.D)(G,"setMinLevel",C),(0,c.D)(G,"setMaxLevel",w),(0,s.T)(G,"bounds_changed",S),(0,s.T)(G,"center_changed",T),(0,s.T)(G,"click",x),(0,s.T)(G,"dblclick",_),(0,s.T)(G,"drag",A),(0,s.T)(G,"dragstart",N),(0,s.T)(G,"dragend",z),(0,s.T)(G,"idle",R),(0,s.T)(G,"maptypeid_changed",Z),(0,s.T)(G,"mousemove",O),(0,s.T)(G,"rightclick",P),(0,s.T)(G,"tilesloaded",F),(0,s.T)(G,"zoom_changed",U),(0,s.T)(G,"zoom_start",j),r.createElement(r.Fragment,null,r.createElement(q,(0,n.Z)({id:a||`${l.j}_Map`},H,{ref:K})),G&&r.createElement(d.Provider,{value:G},p))}))},7590:(e,t,a)=>{a.d(t,{O:()=>i});var n=a(3262),r=a(9231),o=a(3212),s=a(664);const i=r.forwardRef((function(e,t){let{position:a,...i}=e;const l=(0,o.S)("MapMarker"),c=(0,r.useMemo)((()=>"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):new kakao.maps.Coords(a.x,a.y).toLatLng()),[a.lat,a.lng,a.x,a.y]);return r.createElement(s.J,(0,n.Z)({map:l,position:c},i,{ref:t}))}))},664:(e,t,a)=>{a.d(t,{J:()=>l});var n=a(9231),r=a(7670),o=a(1762),s=a(4994),i=a(2272);const l=n.forwardRef((function(e,t){let{map:a,position:l,children:c,altitude:d,clickable:u,draggable:p,image:m,infoWindowOptions:k,onCreate:h,onClick:g,onDragEnd:f,onDragStart:v,onMouseOut:b,onMouseOver:E,opacity:y,range:C,title:w,zIndex:L}=e;const D=(0,n.useContext)(s.r),I=(0,n.useMemo)((()=>m&&new kakao.maps.MarkerImage(m.src,new kakao.maps.Size(m.size.width,m.size.height),{alt:m.options?.alt,coords:m.options?.coords,offset:m.options?.offset&&new kakao.maps.Point(m.options?.offset.x,m.options?.offset.y),shape:m.options?.shape,spriteOrigin:m.options?.spriteOrigin&&new kakao.maps.Point(m.options?.spriteOrigin.x,m.options?.spriteOrigin.y),spriteSize:m.options?.spriteSize&&new kakao.maps.Size(m.options?.spriteSize.width,m.options?.spriteSize.height)})),[JSON.stringify(m)]),M=(0,n.useMemo)((()=>new kakao.maps.Marker({altitude:d,clickable:u,draggable:p,image:I,opacity:y,range:C,title:w,zIndex:L,position:l})),[]);return(0,n.useImperativeHandle)(t,(()=>M),[M]),(0,n.useLayoutEffect)((()=>D?(D.addMarker(M,!0),()=>D.removeMarker(M,!0)):(M.setMap(a),()=>M.setMap(null))),[a,D,M]),(0,n.useLayoutEffect)((()=>{h&&h(M)}),[M,h]),(0,i.D)(M,"setPosition",l),(0,i.D)(M,"setImage",I),(0,i.D)(M,"setAltitude",d),(0,i.D)(M,"setClickable",u),(0,i.D)(M,"setDraggable",p),(0,i.D)(M,"setOpacity",y),(0,i.D)(M,"setRange",C),(0,i.D)(M,"setRange",C),(0,i.D)(M,"setTitle",w),(0,i.D)(M,"setTitle",w),(0,i.D)(M,"setZIndex",L),(0,r.T)(M,"click",g),(0,r.T)(M,"dragstart",v),(0,r.T)(M,"dragend",f),(0,r.T)(M,"mouseout",b),(0,r.T)(M,"mouseover",E),c?n.createElement(o.n,{position:l,map:a,marker:M,altitude:k?.altitude,disableAutoPan:k?.disableAutoPan,range:k?.range,removable:k?.removable,zIndex:k?.zIndex},c):null}))},4994:(e,t,a)=>{a.d(t,{X:()=>c,r:()=>l});var n=a(9231),r=a(7670),o=a(3212),s=a(1881),i=a(2272);const l=n.createContext(void 0),c=n.forwardRef((function(e,t){let{onClusterclick:a,onClusterdblclick:s,onClustered:c,onClusterout:u,onClusterover:p,onClusterrightclick:m,onCreate:k,...h}=e;const{children:g,averageCenter:f,calculator:v,clickable:b,disableClickZoom:E,gridSize:y,hoverable:C,minClusterSize:w,minLevel:L,styles:D,texts:I}=h,M=(0,o.S)("MarkerClusterer"),S=(0,n.useMemo)((()=>{if(window.kakao.maps.MarkerClusterer)return new kakao.maps.MarkerClusterer({averageCenter:f,calculator:v,clickable:b,disableClickZoom:E,gridSize:y,hoverable:C,minClusterSize:w,minLevel:L,styles:D,texts:I});console.warn("clusterer \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ubcc4\ub3c4 \ub85c\ub4dc \ud574\uc57c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. `https://apis.map.kakao.com/web/guide/#loadlibrary`")}),[]);return(0,n.useImperativeHandle)(t,(()=>S),[S]),(0,n.useLayoutEffect)((()=>{if(S)return S.setMap(M),()=>{S.setMap(null)}}),[M,S]),(0,n.useLayoutEffect)((()=>{S&&k&&k(S)}),[S,k]),(0,i.D)(S,"setGridSize",y),(0,i.D)(S,"setMinClusterSize",w),(0,i.D)(S,"setAverageCenter",f),(0,i.D)(S,"setAverageCenter",f),(0,i.D)(S,"setMinLevel",L),(0,i.D)(S,"setTexts",I),(0,i.D)(S,"setCalculator",v),(0,i.D)(S,"setStyles",D),(0,r.T)(S,"clustered",c),(0,r.T)(S,"clusterclick",a),(0,r.T)(S,"clusterover",p),(0,r.T)(S,"clusterout",u),(0,r.T)(S,"clusterdblclick",s),(0,r.T)(S,"clusterrightclick",m),S?n.createElement(l.Provider,{value:S},g,n.createElement(d,h)):null})),d=()=>{const e=(0,n.useContext)(l);return(0,s.L)((()=>{e.redraw()})),null}},1881:(e,t,a)=>{a.d(t,{L:()=>r});var n=a(9231);const r="undefined"!=typeof window&&"undefined"!=typeof document?n.useLayoutEffect:n.useEffect},7670:(e,t,a)=>{a.d(t,{T:()=>r});var n=a(1881);const r=(e,t,a)=>{(0,n.L)((()=>{if(!e||!a)return;const n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return void 0===n?a(e):a(e,...n)};return kakao.maps.event.addListener(e,t,n),()=>{kakao.maps.event.removeListener(e,t,n)}}),[e,t,a])}},2272:(e,t,a)=>{a.d(t,{D:()=>r});var n=a(1881);const r=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];(0,n.L)((()=>{e&&!r.every((e=>void 0===e))&&e[t].call(e,...r)}),[e,t,...r])}},3212:(e,t,a)=>{a.d(t,{S:()=>o});var n=a(9231),r=a(7496);const o=e=>{const t=(0,n.useContext)(r.W);if(!t)throw new Error((e?e+" Component":"useMap")+" must exist inside Map Component!");return t}},5260:(e,t,a)=>{a.d(t,{j:()=>n});const n="__react-kakao-maps-sdk__"},8297:(e,t,a)=>{a.d(t,{G:()=>r,a:()=>s});var n=a(5260);let r=function(e){return e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE",e}({});const o=`${n.j}_Loader`;class s{static loadEventCallback=new Set;callbacks=[];done=!1;loading=!1;errors=[];constructor(e){let{appkey:t,id:a=o,libraries:n=[],nonce:i,retries:l=3,url:c="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=a,this.appkey=t,this.libraries=n,this.nonce=i,this.retries=l,this.url=c,s.instance&&!s.equalOptions(this.options,s.instance.options)&&!s.equalOptions(this.options,s.instance.options)){if(s.instance.status===r.FAILURE)throw new Error(`Loader must not be called again with different options. \n${JSON.stringify(this.options,null,2)}\n!==\n${JSON.stringify(s.instance.options,null,2)}`);s.instance.reset(),s.instance=this}return s.instance||(s.instance=this),s.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),s.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return s.loadEventCallback.delete(e)}load(){return new Promise(((e,t)=>{this.loadCallback((a=>{a?t(a):e(window.kakao)}))}))}get status(){return this.onEvent?r.FAILURE:this.done?r.SUCCESS:this.loading?r.LOADING:r.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps)return console.warn("Kakao Maps\uc774 \uc774\ubbf8 \uc678\ubd80 \uc694\uc18c\uc5d0 \uc758\ud574 \ub85c\ub529\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\uc124\uc815\ud55c \uc635\uc158\uacfc \uc77c\uce58 \ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\uba70, \uc774\uc5d0 \ub530\ub978 \uc608\uc0c1\uce58 \ub3d9\uc791\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),void window.kakao.maps.load(this.callback);this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach((e=>{e(this.onEvent)})),this.callbacks=[],s.loadEventCallback.forEach((e=>{e(this.onEvent)}))}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load((()=>{s.instance.done=!0,s.instance.loading=!1,s.instance.callbacks.forEach((e=>{e(s.instance.onEvent)})),s.instance.callbacks=[],s.loadEventCallback.forEach((e=>{e(s.instance.onEvent)}))}))}static equalOptions(e,t){if(e.appkey!==t.appkey)return!1;if(e.id!==t.id)return!1;if(e.libraries.length!==t.libraries.length)return!1;for(let a=0;a<e.libraries.length;++a)if(e.libraries[a]!==t.libraries[a])return!1;return e.nonce===t.nonce&&(e.retries===t.retries&&e.url===t.url)}}}}]);