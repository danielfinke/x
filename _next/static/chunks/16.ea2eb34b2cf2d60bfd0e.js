(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{bMDe:function(e,i,t){"use strict";t.r(i);var n=t("wx14"),o=t("q1tI"),a=t.n(o),r=t("Oesx"),d=t.n(r),c=t("a6RD"),u=t.n(c),s=t("Evpv"),h=function(e,i){return i.find((function(i){return e.find((function(e){return e.id===i&&!e.minimized}))}))||""},m=t("ZMKu"),l=t("9Z7V"),f=t("m+kb"),w=t("gVB8"),g=a.a.createElement,b=u()((function(){return Promise.all([t.e(7),t.e(15)]).then(t.bind(null,"Kg0h"))}),{loadableGenerated:{webpack:function(){return["Kg0h"]},modules:["@/components/System/WindowManager/Window"]}}),x=s.f+s.h*s.i;i.default=function(e){var i=e.loader,t=i.loader,a=i.loadedAppOptions,r=i.loaderOptions,c=r.width,u=r.height,p=e.bgColor,z=e.height,O=e.icon,v=e.id,j=e.launchElement,k=e.lockAspectRatio,E=e.maximized,M=e.minimized,y=e.name,C=e.taskbarElement,I=e.width,S=e.windowed,W=e.x,_=e.y,A=Object(o.useContext)(f.a),K=A.foreground,N=A.getState,R=A.saveState,B=A.session,D=B.foregroundId,J=B.stackOrder,P=Object(o.useContext)(l.a),T=P.processes,V=P.close,Z=P.maximize,q=P.minimize,F=P.position,G=P.restore,H=P.size,X=Object(o.useState)(!1),Y=X[0],L=X[1],Q=N({id:v}),U=Q.x,$=void 0===U?0:U,ee=Q.y,ie=void 0===ee?0:ee,te=function(e,i){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(e===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)&&i===t){var o=window.innerWidth,a=window.innerHeight-s.d;if(n){var r=Math.min(o,e)*(i/e);r>a?o=a/(i/e):a=r}return{height:Math.floor(Math.min(a,i)),width:Math.floor(Math.min(o,e))}}return{height:i,width:e}}(I,z,c,u,k),ne=te.height,oe=te.width,ae={onMinimize:function(){return q(v)},onMaximize:function(){return E?G(v,"maximized"):Z(v)},onClose:function(){R({height:ne,id:v,width:oe,x:W,y:_}),V(v)},onFocus:function(){return K(v)},onBlur:function(e){e.relatedTarget!==C&&K("")},updatePosition:F(v),zIndex:x+J.slice().reverse().indexOf(v),maximized:Y,minimized:M,id:v,height:ne,width:oe};return Object(o.useEffect)((function(){D===v&&M?K(h(T,J.filter((function(e){return e!==v})))):J.includes(v)||K(h(T,J))}),[D,v,M,T,J]),Object(o.useEffect)((function(){E?L(!0):Y&&setTimeout((function(){return L(!1)}),s.a*s.b)}),[E]),g(m.b.article,Object(n.a)({key:v,className:d.a.animatedWindows,style:{zIndex:D===v?s.g:ae.zIndex,height:ne,width:oe}},Object(w.d)({initialX:$,initialY:ie,animation:(E&&M?"maxmin":E&&"maximized")||M&&"minimized"||"start",height:ne,width:oe,x:W,y:_,taskbarElement:C,launchElement:j})),S?g(b,Object(n.a)({icon:O,name:y,bgColor:p,lockAspectRatio:k,updateSize:H(v)},ae),g(t,Object(n.a)({},a,ae))):g(t,Object(n.a)({},a,ae)))}}}]);