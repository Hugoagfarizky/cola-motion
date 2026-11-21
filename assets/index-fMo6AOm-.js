(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Us={duration:.5,overwrite:!1,delay:0},Gu,ln,Te,Kn=1e8,Me=1/Kn,Ac=Math.PI*2,Xm=Ac/4,Ym=0,Ad=Math.sqrt,qm=Math.cos,Zm=Math.sin,Qe=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Hi=function(t){return typeof t=="number"},Wu=function(t){return typeof t>"u"},Ei=function(t){return typeof t=="object"},wn=function(t){return t!==!1},Xu=function(){return typeof window<"u"},ra=function(t){return Ie(t)||Qe(t)},Cd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Cc=/(?:-?\.?\d|\.)+/gi,Rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pd=/[+-]=-?[.\d]+/,Dd=/[^,'"\[\]\s]+/gi,$m=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,mi,Rc,Yu,Gn={},sl={},Ld,Id=function(t){return(sl=Gr(t,Gn))&&Pn},qu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},Ud=function(t,e){return t&&(Gn[t]=e)&&sl&&(sl[t]=e)||Gn},Vo=function(){return 0},Jm={suppressEvents:!0,isStart:!0,kill:!1},Ga={suppressEvents:!0,kill:!1},Km={suppressEvents:!0},Zu={},lr=[],Pc={},Nd,Fn={},Ll={},Lh=30,Wa=[],$u="",Ju=function(t){var e=t[0],n,i;if(Ei(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(e););n=Wa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new sp(t[i],n)))||t.splice(i,1);return t},Or=function(t){return t._gsap||Ju(jn(t))[0]._gsap},Od=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Wu(n)&&t.getAttribute&&t.getAttribute(e)||n},An=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},bs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},jm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ol=function(){var t=lr.length,e=lr.slice(0),n,i;for(Pc={},lr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fd=function(t,e,n,i){lr.length&&!ln&&ol(),t.render(e,n,ln&&e<0&&(t._initted||t._startAt)),lr.length&&!ln&&ol()},Bd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dd).length<2?e:Qe(t)?t.trim():t},zd=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Qm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Gr=function(t,e){for(var n in e)t[n]=e[n];return t},Ih=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ei(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},al=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},yo=function(t){var e=t.parent||Ce,n=t.keyframes?Qm(cn(t.keyframes)):ni;if(wn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},t_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},kd=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},dr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},e_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Dc=function(t,e,n,i){return t._startAt&&(ln?t._startAt.revert(Ga):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},n_=function r(t){return!t||t._ts&&r(t.parent)},Uh=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ll=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sl=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},El=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sl(t),n._dirty||Fr(n,t)),t},Vd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ll(t.rawTime(),e),(!e._dur||ta(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),Fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},vi=function(t,e,n,i){return e.parent&&dr(e),e._start=je((Hi(n)?n:n||t!==Ce?qn(t,n,e):t._time)+e._delay),e._end=je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),kd(t,e,"_first","_last",t._sort?"_start":0),Lc(e)||(t._recent=e),i||Vd(t,e),t._ts<0&&El(t,t._tTime),t},Hd=function(t,e){return(Gn.ScrollTrigger||qu("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},Gd=function(t,e,n,i,s){if(ju(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Nd!==Bn.frame)return lr.push(t),t._lazy=[s,i],1},i_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Lc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},r_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&i_(t)&&!(!t._initted&&Lc(t))||(t._ts<0||t._dp._ts<0)&&!Lc(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ta(0,t._tDur,e),u=Ns(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ns(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ln||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&Gd(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Dc(t,e,n,!0),t._onUpdate&&!n&&kn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&dr(t,1),!n&&!ln&&(kn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},s_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Os=function(t,e,n,i){var s=t._repeat,o=je(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:je(o*(s+1)+t._rDelay*s):o,a>0&&!i&&El(t,t._tTime=t._tDur*a),t.parent&&Sl(t),n||Fr(t.parent,t),t},Nh=function(t){return t instanceof yn?Fr(t):Os(t,t._dur)},o_={_start:0,endTime:Vo,totalDuration:Vo},qn=function r(t,e,n){var i=t.labels,s=t._recent||o_,o=t.duration()>=Kn?s.endTime(!1):t._dur,a,l,c;return Qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},So=function(t,e,n){var i=Hi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;o.immediateRender=wn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},vr=function(t,e){return t||t===0?e(t):e},ta=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Qe(t)||!(e=$m.exec(t))?"":e[1]},a_=function(t,e,n){return vr(n,function(i){return ta(t,e,i)})},Ic=[].slice,Wd=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==mi},l_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Qe(i)&&!e||Wd(i,1)?(s=n).push.apply(s,jn(i)):n.push(i)})||n},jn=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):Qe(t)&&!n&&(Rc||!Fs())?Ic.call((e||Yu).querySelectorAll(t),0):cn(t)?l_(t,n):Wd(t)?Ic.call(t,0):t?[t]:[]},Uc=function(t){return t=jn(t)[0]||ko("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return jn(e,n.querySelectorAll?n:n===t?ko("Invalid scope")||Yu.createElement("div"):t)}},Xd=function(t){return t.sort(function(){return .5-Math.random()})},Yd=function(t){if(Ie(t))return t;var e=Ei(t)?t:{each:t},n=Br(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Qe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var g=(m||e).length,_=o[g],p,E,M,v,R,w,S,C,y;if(!_){if(y=e.grid==="auto"?0:(e.grid||[1,Kn])[1],!y){for(S=-Kn;S<(S=m[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(_=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,E=y===Kn?0:l?g*h/y-.5:i/y|0,S=0,C=Kn,w=0;w<g;w++)M=w%y-p,v=E-(w/y|0),_[w]=R=c?Math.abs(c==="y"?v:M):Ad(M*M+v*v),R>S&&(S=R),R<C&&(C=R);i==="random"&&Xd(_),_.max=S-C,_.min=C,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=an(e.amount||e.each)||0,n=n&&g<0?np(n):n}return g=(_[d]-_.min)/_.max||0,je(_.b+(n?n(g):g)*_.v)+_.u}},Nc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hi(n)?0:an(n))}},qd=function(t,e){var n=cn(t),i,s;return!n&&Ei(t)&&(i=n=t.radius||Kn,t.values?(t=jn(t.values),(s=!Hi(t[0]))&&(i*=i)):t=Nc(t.increment)),vr(e,n?Ie(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Kn,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-a,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Hi(o)?u:u+an(o)}:Nc(t))},Zd=function(t,e,n,i){return vr(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},c_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},u_=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},h_=function(t,e,n){return Jd(t,e,0,1,n)},$d=function(t,e,n){return vr(n,function(i){return t[~~e(i)]})},f_=function r(t,e,n){var i=e-t;return cn(t)?$d(t,r(0,t.length),e):vr(n,function(s){return(i+(s-t)%i)%i+t})},d_=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?$d(t,r(0,t.length-1),e):vr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ho=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Dd:Cc),n+=t.substr(e,i-e)+Zd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Jd=function(t,e,n,i,s){var o=e-t,a=i-n;return vr(s,function(l){return n+((l-t)/o*a||0)})},p_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Qe(t),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(m){m*=h;var g=Math.min(d,~~m);return u[g](m-g)},n=e}else i||(t=Gr(cn(t)?[]:{},t));if(!u){for(l in e)Ku.call(a,t,l,"get",e[l]);s=function(m){return eh(m,a)||(o?t.p:t)}}}return vr(n,s)},Oh=function(t,e,n){var i=t.labels,s=Kn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},kn=function(t,e,n){var i=t.vars,s=i[e],o=Te,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&lr.length&&ol(),a&&(Te=a),u=l?s.apply(c,l):s.call(c),Te=o,u},uo=function(t){return dr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ln),t.progress()<1&&kn(t,"onInterrupt"),t},ys,Kd=[],jd=function(t){if(t)if(t=!t.name&&t.default||t,Xu()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Vo,render:eh,add:Ku,kill:P_,modifier:R_,rawVars:0},o={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(Fs(),t!==i){if(Fn[e])return;ni(i,ni(al(t,s),o)),Gr(i.prototype,Gr(s,al(t,o))),Fn[i.prop=e]=i,t.targetTest&&(Wa.push(i),Zu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ud(e,i),t.register&&t.register(Pn,i,Cn)}else Kd.push(t)},ve=255,ho={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},Il=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},Qd=function(t,e,n){var i=t?Hi(t)?[t>>16,t>>8&ve,t&ve]:0:ho.black,s,o,a,l,c,u,h,d,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ho[t])i=ho[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Cc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Il(l+1/3,s,o),i[1]=Il(l,s,o),i[2]=Il(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Rd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Cc)||ho.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/ve,o=i[1]/ve,a=i[2]/ve,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},tp=function(t){var e=[],n=[],i=-1;return t.split(cr).forEach(function(s){var o=s.match(Ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fh=function(t,e,n){var i="",s=(t+i).match(cr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=Qd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=tp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(cr,"1").split(Ms),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(cr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},cr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ho)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),m_=/hsl[a]?\(/,ep=function(t){var e=t.join(" "),n;if(cr.lastIndex=0,cr.test(e))return n=m_.test(e),t[1]=Fh(t[1],n),t[0]=Fh(t[0],n,tp(t[1])),!0},Go,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,m=function g(_){var p=r()-i,E=_===!0,M,v,R,w;if((p>t||p<0)&&(n+=p-e),i+=p,R=i-n,M=R-o,(M>0||E)&&(w=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=M+(M>=s?4:s-M),v=1),E||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](R,d,w,_)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Ld&&(!Rc&&Xu()&&(mi=Rc=window,Yu=mi.document||{},Gn.gsap=Pn,(mi.gsapVersions||(mi.gsapVersions=[])).push(Pn.version),Id(sl||mi.GreenSockGlobals||!mi.gsap&&mi||{}),Kd.forEach(jd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,o-h.time*1e3+1|0)},Go=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Go=0,c=Vo},lagSmoothing:function(_,p){t=_||1/0,e=Math.min(p||33,t)},fps:function(_){s=1e3/(_||240),o=h.time*1e3+s},add:function(_,p,E){var M=p?function(v,R,w,S){_(v,R,w,S),h.remove(M)}:_;return h.remove(_),a[E?"unshift":"push"](M),Fs(),M},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Fs=function(){return!Go&&Bn.wake()},oe={},__=/^[\d.\-M][\d.\-,\s]/,g_=/["']/g,v_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(g_,"").trim():+c,i=l.substr(a+1).trim();return e},x_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},M_=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[v_(e[1])]:x_(t).split(",").map(Bd)):oe._CE&&__.test(t)?oe._CE("",t):n},np=function(t){return function(e){return 1-t(1-e)}},ip=function r(t,e){for(var n=t._first,i;n;)n instanceof yn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Br=function(t,e){return t&&(Ie(t)?t:oe[t]||M_(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return An(t,function(a){oe[a]=Gn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},rp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ul=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ac*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:rp(a);return s=Ac/s,l.config=function(c,u){return r(t,c,u)},l},Nl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:rp(n);return i.config=function(s){return r(t,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Kr("Elastic",Ul("in"),Ul("out"),Ul());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Kr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Kr("Circ",function(r){return-(Ad(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-qm(r*Xm)+1});Kr("Back",Nl("in"),Nl("out"),Nl());oe.SteppedEase=oe.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*ta(0,o,a)|0)+s)*n}}};Us.ease=oe["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $u+=r+","+r+"Params,"});var sp=function(t,e){this.id=Ym++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Od,this.set=e?e.getSetter:th},Wo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Os(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),Go||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||Vd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this._tDur,s),i!==!1),Sl(this),e_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Km);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qn(this,n),wn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ie(n)?n:zd,a=function(){var c=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){uo(this)},r}();ni(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var yn=function(r){wd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wn(n.sortChildren),Ce&&vi(n.parent||Ce,Ii(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Hd(Ii(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return So(0,arguments,this),this},e.from=function(i,s,o){return So(1,arguments,this),this},e.fromTo=function(i,s,o,a){return So(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,yo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,qn(this,o),1),this},e.call=function(i,s,o){return vi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new He(i,o,qn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,yo(o).immediateRender=wn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,yo(a).immediateRender=wn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:je(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,g,_,p,E,M,v,R,w,S;if(this!==Ce&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=je(u%_),u===l?(g=this._repeat,d=c):(g=~~(u/_),g&&g===u/_&&(d=c,g--),d>c&&(d=c)),R=Ns(this._tTime,_),!a&&this._tTime&&R!==g&&this._tTime-R*_-this._dur<=0&&(R=g),w&&g&1&&(d=c-d,S=1),g!==R&&!this._lock){var C=w&&R&1,y=C===(w&&g&1);if(g<R&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(S?0:je(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ip(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=s_(this,je(a),je(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(kn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){E=0,m&&(u+=this._zTime=-Me);break}}f=m}else{f=this._last;for(var x=i<0?i:d;f;){if(m=f._prev,(f._act||x<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||ln&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){E=0,m&&(u+=this._zTime=x?-Me:Me);break}}f=m}}if(E&&!s&&(this.pause(),E.render(d>=a?0:-Me)._zTime=d>=a?1:-1,this._ts))return this._start=v,Sl(this),this.render(i,s,o);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Hi(s)||(s=qn(this,s,i)),!(i instanceof Wo)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qe(i))return this.addLabel(i,s);if(Ie(i))i=He.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Qe(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(yl(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,vi(this,a,qn(this,i))},e.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&dr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)er!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=jn(i),l=this._first,c=Hi(s),u;l;)l instanceof He?jm(l._targets,a)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=He.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&Os(m,_,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},s));return d?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:qn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Kn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Os(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(Fd(Ce,ll(i,Ce)),Nd=Bn.frame),Bn.frame>=Lh){Lh+=Vn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Vn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(Wo);ni(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var y_=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,hp,null,s),c=0,u=0,h,d,f,m,g,_,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ho(i)),o&&(E=[n,i],o(E,t,e),n=E[0],i=E[1]),d=n.match(Dl)||[];h=Dl.exec(i);)m=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:m.charAt(1)==="="?bs(_,m)-_:parseFloat(m)-_,m:f&&f<4?Math.round:0},c=Dl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pd.test(i)||p)&&(l.e=0),this._pt=l,l},Ku=function(t,e,n,i,s,o,a,l,c,u){Ie(i)&&(i=i(s||0,t,o));var h=t[e],d=n!=="get"?n:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=Ie(h)?c?w_:cp:Qu,m;if(Qe(i)&&(~i.indexOf("random(")&&(i=Ho(i)),i.charAt(1)==="="&&(m=bs(d,i)+(an(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Oc)return!isNaN(d*i)&&i!==""?(m=new Cn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?C_:up,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!h&&!(e in t)&&qu(e,i),y_.call(this,t,e,d,i,f,l||Vn.stringFilter,c))},S_=function(t,e,n,i,s){if(Ie(t)&&(t=Eo(t,s,e,n,i)),!Ei(t)||t.style&&t.nodeType||cn(t)||Cd(t))return Qe(t)?Eo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Eo(t[a],s,e,n,i);return o},op=function(t,e,n,i,s,o){var a,l,c,u;if(Fn[t]&&(a=new Fn[t]).init(s,a.rawVars?e[t]:S_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},er,Oc,ju=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=t._dur,g=t._startAt,_=t._targets,p=t.parent,E=p&&p.data==="nested"?p.vars.targets:_,M=t._overwrite==="auto"&&!Gu,v=t.timeline,R,w,S,C,y,x,P,N,U,k,q,V,Y;if(v&&(!d||!s)&&(s="none"),t._ease=Br(s,Us.ease),t._yEase=h?np(Br(h===!0?s:h,Us.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(N=_[0]?Or(_[0]).harness:0,V=N&&i[N.prop],R=al(i,Zu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&m?Ga:Jm),g._lazy=0),o){if(dr(t._startAt=He.set(_,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln||!a&&!f)&&t._startAt.revert(Ga),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!g){if(e&&(a=!1),S=ni({overwrite:!1,data:"isFromStart",lazy:a&&!g&&wn(l),immediateRender:a,stagger:0,parent:p},R),V&&(S[N.prop]=V),dr(t._startAt=He.set(_,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln?t._startAt.revert(Ga):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&wn(l)||l&&!m,w=0;w<_.length;w++){if(y=_[w],P=y._gsap||Ju(_)[w]._gsap,t._ptLookup[w]=k={},Pc[P.id]&&lr.length&&ol(),q=E===_?w:E.indexOf(y),N&&(U=new N).init(y,V||R,t,q,E)!==!1&&(t._pt=C=new Cn(t._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(G){k[G]=C}),U.priority&&(x=1)),!N||V)for(S in R)Fn[S]&&(U=op(S,R,t,q,y,E))?U.priority&&(x=1):k[S]=C=Ku.call(t,y,S,"get",R[S],q,E,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),M&&t._pt&&(er=t,Ce.killTweensOf(y,k,t.globalTime(e)),Y=!t.parent,er=0),t._pt&&l&&(Pc[P.id]=1)}x&&fp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&v.render(Kn,!0,!0)},E_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Oc=1,t.vars[e]="+=0",ju(t,a),Oc=0,l?ko(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ne(n)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},T_=function(t,e){var n=t[0]?Or(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Gr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},b_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Eo=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):Qe(t)&&~t.indexOf("random(")?Ho(t):t},ap=$u+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lp={};An(ap+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lp[r]=1});var He=function(r){wd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:yo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,E=i.parent||Ce,M=(cn(n)||Cd(n)?Hi(n[0]):"length"in i)?[n]:jn(n),v,R,w,S,C,y,x,P;if(a._targets=M.length?Ju(M):ko("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||ra(c)||ra(u)){if(i=a.vars,v=a.timeline=new yn({data:"nested",defaults:g||{},targets:E&&E.data==="nested"?E.vars.targets:M}),v.kill(),v.parent=v._dp=Ii(a),v._start=0,d||ra(c)||ra(u)){if(S=M.length,x=d&&Yd(d),Ei(d))for(C in d)~ap.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(R=0;R<S;R++)w=al(i,lp),w.stagger=0,p&&(w.yoyoEase=p),P&&Gr(w,P),y=M[R],w.duration=+Eo(c,Ii(a),R,y,M),w.delay=(+Eo(u,Ii(a),R,y,M)||0)-a._delay,!d&&S===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(y,w,x?x(R,y,M):0),v._ease=oe.none;v.duration()?c=u=0:a.timeline=0}else if(m){yo(ni(v.vars.defaults,{ease:"none"})),v._ease=Br(m.ease||i.ease||"none");var N=0,U,k,q;if(cn(m))m.forEach(function(V){return v.to(M,V,">")}),v.duration();else{w={};for(C in m)C==="ease"||C==="easeEach"||b_(C,m[C],w,m.easeEach);for(C in w)for(U=w[C].sort(function(V,Y){return V.t-Y.t}),N=0,R=0;R<U.length;R++)k=U[R],q={ease:k.e,duration:(k.t-(R?U[R-1].t:0))/100*c},q[C]=k.v,v.to(M,q,N),N+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Gu&&(er=Ii(a),Ce.killTweensOf(M),er=0),vi(E,Ii(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===je(E._time)&&wn(h)&&n_(Ii(a))&&E.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-u)||0)),_&&Hd(Ii(a),_),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Me&&!u?l:i<Me?0:i,d,f,m,g,_,p,E,M,v;if(!c)r_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=je(h%g),h===l?(m=this._repeat,d=c):(m=~~(h/g),m&&m===je(h/g)&&(d=c,m--),d>c&&(d=c)),p=this._yoyo&&m&1,p&&(v=this._yEase,d=c-d),_=Ns(this._tTime,g),d===a&&!o&&this._initted&&m===_)return this._tTime=h,this;m!==_&&(M&&this._yEase&&ip(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(je(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Gd(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(d/c),this._from&&(this.ratio=E=1-E),d&&!a&&!s&&!m&&(kn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Dc(this,i,s,o),kn(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Go||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ju(this,c),u=this._ease(c/this._dur),E_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(El(this,0),this.parent||kd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,er&&er.vars.overwrite!==!0)._first||uo(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?jn(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,g,_,p;if((!s||s==="all")&&t_(a,l))return s==="all"&&(this._pt=0),uo(this);for(h=this._op=this._op||[],s!=="all"&&(Qe(s)&&(g={},An(s,function(E){return g[E]=1}),s=g),s=T_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,m=d,f={}):(f=h[p]=h[p]||{},m=s);for(g in m)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&yl(this,_,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&uo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return So(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return So(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(Wo);ni(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new yn,e=Ic.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Qu=function(t,e,n){return t[e]=n},cp=function(t,e,n){return t[e](n)},w_=function(t,e,n,i){return t[e](i.fp,n)},A_=function(t,e,n){return t.setAttribute(e,n)},th=function(t,e){return Ie(t[e])?cp:Wu(t[e])&&t.setAttribute?A_:Qu},up=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},C_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},hp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},eh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},R_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},P_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},D_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},fp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||up,this.d=l||this,this.set=c||Qu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=D_,this.m=n,this.mt=s,this.tween=i},r}();An($u+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Zu[r]=1});Gn.TweenMax=Gn.TweenLite=He;Gn.TimelineLite=Gn.TimelineMax=yn;Ce=new yn({sortChildren:!1,defaults:Us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=ep;var zr=[],Xa={},L_=[],Bh=0,I_=0,Ol=function(t){return(Xa[t]||L_).map(function(e){return e()})},Fc=function(){var t=Date.now(),e=[];t-Bh>2&&(Ol("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ol("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bh=t,Ol("matchMedia"))},dp=function(){function r(e,n){this.selector=n&&Uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=I_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var o=this,a=function(){var c=Te,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Uc(s)),Te=o,h=i.apply(o,arguments),Ie(h)&&o._r.push(h),Te=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zr.length;o--;)zr[o].id===this.id&&zr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),U_=function(){function r(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new dp(0,s||this.scope),a=o.conditions={},l,c,u;Te&&!o.selector&&(o.selector=Te.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=mi.matchMedia(n[c]),l&&(zr.indexOf(o)<0&&zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fc):l.addEventListener("change",Fc)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return jd(i)})},timeline:function(t){return new yn(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Qe(t)&&(t=jn(t)[0]);var s=Or(t||{}).get,o=n?zd:Bd;return n==="native"&&(n=""),t&&(e?o((Fn[e]&&Fn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Fn[a]&&Fn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=jn(t),t.length>1){var i=t.map(function(u){return Pn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Fn[e],a=Or(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;ys._pt=0,h.init(t,n?u+n:u,ys,0,[t]),h.render(1,h),ys._pt&&eh(1,ys)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,Gr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Br(t.ease,Us.ease)),Ih(Us,t||{})},config:function(t){return Ih(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fn[a]&&!Gn[a]&&ko(e+" effect requires "+a+" plugin.")}),Ll[e]=function(a,l,c){return n(jn(a),ni(l||{},s),c)},o&&(yn.prototype[e]=function(a,l,c){return this.add(Ll[e](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Br(e)},parseEase:function(t,e){return arguments.length?Br(t,e):oe},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yn(t),i,s;for(n.smoothChildTiming=wn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(Ce,n,0),n},context:function(t,e){return t?new dp(t,e):Te},matchMedia:function(t){return new U_(t)},matchMediaRefresh:function(){return zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Fc()},addEventListener:function(t,e){var n=Xa[t]||(Xa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:f_,wrapYoyo:d_,distribute:Yd,random:Zd,snap:qd,normalize:h_,getUnit:an,clamp:a_,splitColor:Qd,toArray:jn,selector:Uc,mapRange:Jd,pipe:c_,unitize:u_,interpolate:p_,shuffle:Xd},install:Id,effects:Ll,ticker:Bn,updateRoot:yn.updateRoot,plugins:Fn,globalTimeline:Ce,core:{PropTween:Cn,globals:Ud,Tween:He,Timeline:yn,Animation:Wo,getCache:Or,_removeLinkedListItem:yl,reverting:function(){return ln},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return Gu=t}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=He[r]});Bn.add(yn.updateRoot);ys=cl.to({},{duration:0});var N_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},O_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=N_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Fl=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qe(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}O_(a,s)}}}},Pn=cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Fl("roundProps",Nc),Fl("modifiers"),Fl("snap",qd))||cl;He.version=yn.version=Pn.version="3.12.5";Ld=1;Xu()&&Fs();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zh,nr,ws,nh,Ur,kh,ih,F_=function(){return typeof window<"u"},Gi={},Ar=180/Math.PI,As=Math.PI/180,ts=Math.atan2,Vh=1e8,rh=/([A-Z])/g,B_=/(left|right|width|margin|padding|x)/i,z_=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},k_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},V_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},H_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},G_=function(t,e,n){return t.style[e]=n},W_=function(t,e,n){return t.style.setProperty(e,n)},X_=function(t,e,n){return t._gsap[e]=n},Y_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},q_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Z_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Re="transform",Rn=Re+"Origin",$_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Gi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ni(i,a)}):this.tfm[t]=o.x?o[t]:Ni(i,t),t===Rn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},_p=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},J_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(rh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ih(),(!s||!s.isStart)&&!n[Re]&&(_p(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gp=function(t,e){var n={target:t,props:[],revert:J_,save:$_};return t._gsap||Pn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},vp,zc=function(t,e){var n=nr.createElementNS?nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):nr.createElement(t);return n&&n.style?n:nr.createElement(t)},yi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Bs(e)||e,1)||""},Hh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(t,e,n){var i=e||Ur,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Hh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Hh[o]:"")+t},kc=function(){F_()&&window.document&&(zh=window,nr=zh.document,ws=nr.documentElement,Ur=zc("div")||{style:{}},zc("div"),Re=Bs(Re),Rn=Re+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vp=!!Bs("perspective"),ih=Pn.core.reverting,nh=1)},Bl=function r(t){var e=zc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ws.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ws.removeChild(e),this.style.cssText=s,o},Gh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xp=function(t){var e;try{e=t.getBBox()}catch{e=Bl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Bl||(e=Bl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Gh(t,["x","cx","x1"])||0,y:+Gh(t,["y","cy","y1"])||0,width:0,height:0}:e},Mp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xp(t))},Wr=function(t,e){if(e){var n=t.style,i;e in Gi&&e!==Rn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(rh,"-$1").toLowerCase())):n.removeAttribute(e)}},ir=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?mp:pp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Wh={deg:1,rad:1,turn:1},K_={grid:1,flex:1},pr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=B_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,g,_,p;if(i===o||!s||Wh[i]||Wh[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Mp(t),(f||o==="%")&&(Gi[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[u],Ne(f?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===nr||!g.appendChild)&&(g=nr.body),_=g._gsap,_&&f&&_.width&&l&&_.time===Bn.time&&!_.uncache)return Ne(s/_.width*h);if(f&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,m=t[u],E?t.style[e]=E:Wr(t,e)}else(f||o==="%")&&!K_[yi(g,"display")]&&(a.position=yi(t,"position")),g===t&&(a.position="static"),g.appendChild(Ur),m=Ur[u],g.removeChild(Ur),a.position="absolute";return l&&f&&(_=Or(g),_.time=Bn.time,_.width=g[u]),Ne(d?m*s/h:m&&s?h/m*s:0)},Ni=function(t,e,n,i){var s;return nh||kc(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gi[e]&&e!=="transform"?(s=Yo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:hl(yi(t,Rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[e]&&ul[e](t,e,n)||yi(t,e)||Od(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?pr(t,e,s,n)+n:s},j_=function(t,e,n,i){if(!n||n==="none"){var s=Bs(e,t,1),o=s&&yi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=yi(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,hp),l=0,c=0,u,h,d,f,m,g,_,p,E,M,v,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=yi(t,e)||i,g?t.style[e]=g:Wr(t,e)),u=[n,i],ep(u),n=u[0],i=u[1],d=n.match(Ms)||[],R=i.match(Ms)||[],R.length){for(;h=Ms.exec(i);)_=h[0],E=i.substring(l,h.index),m?m=(m+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(m=1),_!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),_.charAt(1)==="="&&(_=bs(f,_)+v),p=parseFloat(_),M=_.substr((p+"").length),l=Ms.lastIndex-M.length,M||(M=M||Vn.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(f=pr(t,e,g,M)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:f,c:p-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?mp:pp;return Pd.test(i)&&(a.e=0),this._pt=a,a},Xh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xh[n]||n,e[1]=Xh[i]||i,e.join(" ")},tg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?Rn:Re),Wr(n,a);l&&(Wr(n,Re),o&&(o.svg&&n.removeAttribute("transform"),Yo(n,1),o.uncache=1,_p(i)))}},ul={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,tg);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Xo=[1,0,0,1,0,0],yp={},Sp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yh=function(t){var e=yi(t,Re);return Sp(e)?Xo:e.substr(7).match(Rd).map(Ne)},sh=function(t,e){var n=t._gsap||Or(t),i=t.style,s=Yh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!t.offsetParent&&t!==ws&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ws.appendChild(t)),s=Yh(t),l?i.display=l:Wr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vc=function(t,e,n,i,s,o){var a=t._gsap,l=s||sh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],g=l[2],_=l[3],p=l[4],E=l[5],M=e.split(" "),v=parseFloat(M[0])||0,R=parseFloat(M[1])||0,w,S,C,y;n?l!==Xo&&(S=f*_-m*g)&&(C=v*(_/S)+R*(-g/S)+(g*E-_*p)/S,y=v*(-m/S)+R*(f/S)-(f*E-m*p)/S,v=C,R=y):(w=xp(t),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(M[1]||M[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(p=v-c,E=R-u,a.xOffset=h+(p*f+E*g)-p,a.yOffset=d+(p*m+E*_)-E):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Rn]="0px 0px",o&&(ir(o,a,"xOrigin",c,v),ir(o,a,"yOrigin",u,R),ir(o,a,"xOffset",h,a.xOffset),ir(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},Yo=function(t,e){var n=t._gsap||new sp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=yi(t,Rn)||"0",u,h,d,f,m,g,_,p,E,M,v,R,w,S,C,y,x,P,N,U,k,q,V,Y,G,rt,L,ct,Ut,$t,$,it;return u=h=d=g=_=p=E=M=v=0,f=m=1,n.svg=!!(t.getCTM&&Mp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),S=sh(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Vc(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,S)),R=n.xOrigin||0,w=n.yOrigin||0,S!==Xo&&(P=S[0],N=S[1],U=S[2],k=S[3],u=q=S[4],h=V=S[5],S.length===6?(f=Math.sqrt(P*P+N*N),m=Math.sqrt(k*k+U*U),g=P||N?ts(N,P)*Ar:0,E=U||k?ts(U,k)*Ar+g:0,E&&(m*=Math.abs(Math.cos(E*As))),n.svg&&(u-=R-(R*P+w*U),h-=w-(R*N+w*k))):(it=S[6],$t=S[7],L=S[8],ct=S[9],Ut=S[10],$=S[11],u=S[12],h=S[13],d=S[14],C=ts(it,Ut),_=C*Ar,C&&(y=Math.cos(-C),x=Math.sin(-C),Y=q*y+L*x,G=V*y+ct*x,rt=it*y+Ut*x,L=q*-x+L*y,ct=V*-x+ct*y,Ut=it*-x+Ut*y,$=$t*-x+$*y,q=Y,V=G,it=rt),C=ts(-U,Ut),p=C*Ar,C&&(y=Math.cos(-C),x=Math.sin(-C),Y=P*y-L*x,G=N*y-ct*x,rt=U*y-Ut*x,$=k*x+$*y,P=Y,N=G,U=rt),C=ts(N,P),g=C*Ar,C&&(y=Math.cos(C),x=Math.sin(C),Y=P*y+N*x,G=q*y+V*x,N=N*y-P*x,V=V*y-q*x,P=Y,q=G),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),f=Ne(Math.sqrt(P*P+N*N+U*U)),m=Ne(Math.sqrt(V*V+it*it)),C=ts(q,V),E=Math.abs(C)>2e-4?C*Ar:0,v=$?1/($<0?-$:$):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sp(yi(t,Re)),Y&&t.setAttribute("transform",Y))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ne(f),n.scaleY=Ne(m),n.rotation=Ne(g)+a,n.rotationX=Ne(_)+a,n.rotationY=Ne(p)+a,n.skewX=E+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Rn]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?ng:vp?Ep:eg,n.uncache=0,n},hl=function(t){return(t=t.split(" "))[0]+" "+t[1]},zl=function(t,e,n){var i=an(e);return Ne(parseFloat(e)+parseFloat(pr(t,"x",n+"px",i)))+i},eg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ep(t,e)},xr="0deg",no="0px",Mr=") ",Ep=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,E=n.target,M=n.zOrigin,v="",R=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==xr||u!==xr)){var w=parseFloat(u)*As,S=Math.sin(w),C=Math.cos(w),y;w=parseFloat(h)*As,y=Math.cos(w),o=zl(E,o,S*y*-M),a=zl(E,a,-Math.sin(w)*-M),l=zl(E,l,C*y*-M+M)}_!==no&&(v+="perspective("+_+Mr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(R||o!==no||a!==no||l!==no)&&(v+=l!==no||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==xr&&(v+="rotate("+c+Mr),u!==xr&&(v+="rotateY("+u+Mr),h!==xr&&(v+="rotateX("+h+Mr),(d!==xr||f!==xr)&&(v+="skew("+d+", "+f+Mr),(m!==1||g!==1)&&(v+="scale("+m+", "+g+Mr),E.style[Re]=v||"translate(0, 0)"},ng=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,E=n.forceCSS,M=parseFloat(o),v=parseFloat(a),R,w,S,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,R=Math.cos(l)*h,w=Math.sin(l)*h,S=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=As,y=Math.tan(c-u),y=Math.sqrt(1+y*y),S*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,w*=y)),R=Ne(R),w=Ne(w),S=Ne(S),C=Ne(C)):(R=h,C=d,w=S=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=pr(f,"x",o,"px"),v=pr(f,"y",a,"px")),(m||g||_||p)&&(M=Ne(M+m-(m*R+g*S)+_),v=Ne(v+g-(m*w+g*C)+p)),(i||s)&&(y=f.getBBox(),M=Ne(M+i/100*y.width),v=Ne(v+s/100*y.height)),y="matrix("+R+","+w+","+S+","+C+","+M+","+v+")",f.setAttribute("transform",y),E&&(f.style[Re]=y)},ig=function(t,e,n,i,s){var o=360,a=Qe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Vh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Vh)%o-~~(c/o)*o)),t._pt=d=new Cn(t._pt,e,n,i,c,k_),d.e=u,d.u="deg",t._props.push(n),d},qh=function(t,e){for(var n in e)t[n]=e[n];return t},rg=function(t,e,n){var i=qh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=Yo(n,1),Wr(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],o[Re]=e,a=Yo(n,1),o[Re]=c);for(l in Gi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=an(c),m=an(u),h=f!==m?pr(n,l,c,m):parseFloat(c),d=parseFloat(u),t._pt=new Cn(t._pt,a,l,h,d-h,Bc),t._pt.u=m||0,t._props.push(l));qh(a,i)};An("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ul[t>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return Ni(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,g){return f[m]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var Tp={name:"css",register:kc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,f,m,g,_,p,E,M,v,R,w,S,C;nh||kc(),this.styles=this.styles||gp(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Fn[g]&&op(g,e,n,i,t,s)))){if(f=typeof u,m=ul[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ho(u)),m)m(this,t,g,u,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",cr.lastIndex=0,cr.test(c)||(_=an(c),p=an(u)),p?_!==p&&(c=pr(t,g,c,p)+p):_&&(u+=_),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Qe(c)&&~c.indexOf("random(")&&(c=Ho(c)),an(c+"")||c==="auto"||(c+=Vn.units[g]||an(Ni(t,g))||""),(c+"").charAt(1)==="="&&(c=Ni(t,g))):c=Ni(t,g),d=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),g in xi&&(g==="autoAlpha"&&(d===1&&Ni(t,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),ir(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Gi,M){if(this.styles.save(g),v||(R=t._gsap,R.renderTransform&&!e.parseTransform||Yo(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new Cn(this._pt,a,Re,0,1,R.renderTransform,R,0,-1),v.dep=1),g==="scale")this._pt=new Cn(this._pt,R,"scaleY",R.scaleY,(E?bs(R.scaleY,E+h):h)-R.scaleY||0,Bc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Rn,0,a[Rn]),u=Q_(u),R.svg?Vc(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&ir(this,R,"zOrigin",R.zOrigin,p),ir(this,a,g,hl(c),hl(u)));continue}else if(g==="svgOrigin"){Vc(t,u,1,w,0,this);continue}else if(g in yp){ig(this,R,g,d,E?bs(d,E+u):u);continue}else if(g==="smoothOrigin"){ir(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){rg(this,u,t);continue}}else g in a||(g=Bs(g)||g);if(M||(h||h===0)&&(d||d===0)&&!z_.test(u)&&g in a)_=(c+"").substr((d+"").length),h||(h=0),p=an(u)||(g in Vn.units?Vn.units[g]:_),_!==p&&(d=pr(t,g,c,p)),this._pt=new Cn(this._pt,M?R:a,g,d,(E?bs(d,E+h):h)-d,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?H_:Bc),this._pt.u=p||0,_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=V_);else if(g in a)j_.call(this,t,g,c,E?E+u:u);else if(g in t)this.add(t,g,c||t[g],E?E+u:u,i,s);else if(g!=="parseTransform"){qu(g,u);continue}M||(g in a?C.push(g,0,a[g]):C.push(g,1,c||t[g])),o.push(g)}}S&&fp(this)},render:function(t,e){if(e.tween._time||!ih())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ni,aliases:xi,getSetter:function(t,e,n){var i=xi[e];return i&&i.indexOf(",")<0&&(e=i),e in Gi&&e!==Rn&&(t._gsap.x||Ni(t,"x"))?n&&kh===n?e==="scale"?Y_:X_:(kh=n||{})&&(e==="scale"?q_:Z_):t.style&&!Wu(t.style[e])?G_:~e.indexOf("-")?W_:th(t,e)},core:{_removeProperty:Wr,_getMatrix:sh}};Pn.utils.checkPrefix=Bs;Pn.core.getStyleSaver=gp;(function(r,t,e,n){var i=An(r+","+t+","+e,function(s){Gi[s]=1});An(t,function(s){Vn.units[s]="deg",yp[s]=1}),xi[i[13]]=r+","+t,An(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Pn.registerPlugin(Tp);var ke=Pn.registerPlugin(Tp)||Pn;ke.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="170",sg=0,Zh=1,og=2,bp=1,ag=2,Li=3,mr=0,Tn=1,ci=2,ur=0,Cs=1,$h=2,Jh=3,Kh=4,wp=5,Lr=100,lg=101,cg=102,ug=103,hg=104,Ap=200,Ya=201,fg=202,dg=203,Hc=204,Gc=205,pg=206,mg=207,_g=208,gg=209,vg=210,xg=211,Mg=212,yg=213,Sg=214,Wc=0,Xc=1,Yc=2,zs=3,qc=4,Zc=5,$c=6,Jc=7,Cp=0,Eg=1,Tg=2,hr=0,bg=1,wg=2,Ag=3,Cg=4,Rg=5,Pg=6,Rp=7,Pp=300,ks=301,Vs=302,Kc=303,jc=304,Tl=306,Hs=1e3,rr=1001,Qc=1002,Hn=1003,Dg=1004,sa=1005,hi=1006,kl=1007,sr=1008,Wi=1009,Dp=1010,Lp=1011,qo=1012,ah=1013,Xr=1014,Fi=1015,ea=1016,lh=1017,ch=1018,Gs=1020,Ip=35902,Up=1021,Np=1022,Qn=1023,Op=1024,Fp=1025,Rs=1026,Ws=1027,Bp=1028,uh=1029,zp=1030,hh=1031,fh=1033,qa=33776,Za=33777,$a=33778,Ja=33779,tu=35840,eu=35841,nu=35842,iu=35843,ru=36196,su=37492,ou=37496,au=37808,lu=37809,cu=37810,uu=37811,hu=37812,fu=37813,du=37814,pu=37815,mu=37816,_u=37817,gu=37818,vu=37819,xu=37820,Mu=37821,Ka=36492,yu=36494,Su=36495,kp=36283,Eu=36284,Tu=36285,bu=36286,Lg=3200,Ig=3201,Vp=0,Ug=1,tr="",Mn="srgb",Zs="srgb-linear",bl="linear",me="srgb",es=7680,jh=519,Ng=512,Og=513,Fg=514,Hp=515,Bg=516,zg=517,kg=518,Vg=519,Qh=35044,tf="300 es",Bi=2e3,fl=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ef=1234567;const To=Math.PI/180,Zo=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ye(r,t,e){return Math.max(t,Math.min(e,r))}function dh(r,t){return(r%t+t)%t}function Hg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Gg(r,t,e){return r!==t?(e-r)/(t-r):0}function bo(r,t,e){return(1-e)*r+e*t}function Wg(r,t,e,n){return bo(r,t,1-Math.exp(-e*n))}function Xg(r,t=1){return t-Math.abs(dh(r,t*2)-t)}function Yg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function qg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Zg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $g(r,t){return r+Math.random()*(t-r)}function Jg(r){return r*(.5-Math.random())}function Kg(r){r!==void 0&&(ef=r);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jg(r){return r*To}function Qg(r){return r*Zo}function t0(r){return(r&r-1)===0&&r!==0}function e0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function n0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function i0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const nf={DEG2RAD:To,RAD2DEG:Zo,generateUUID:jr,clamp:Ye,euclideanModulo:dh,mapLinear:Hg,inverseLerp:Gg,lerp:bo,damp:Wg,pingpong:Xg,smoothstep:Yg,smootherstep:qg,randInt:Zg,randFloat:$g,randFloatSpread:Jg,seededRandom:Kg,degToRad:jg,radToDeg:Qg,isPowerOfTwo:t0,ceilPowerOfTwo:e0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:pn,denormalize:gs};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,i,s,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],g=i[0],_=i[3],p=i[6],E=i[1],M=i[4],v=i[7],R=i[2],w=i[5],S=i[8];return s[0]=o*g+a*E+l*R,s[3]=o*_+a*M+l*w,s[6]=o*p+a*v+l*S,s[1]=c*g+u*E+h*R,s[4]=c*_+u*M+h*w,s[7]=c*p+u*v+h*S,s[2]=d*g+f*E+m*R,s[5]=d*_+f*M+m*w,s[8]=d*p+f*v+m*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vl=new Qt;function Gp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r0(){const r=dl("canvas");return r.style.display="block",r}const rf={};function fo(r){r in rf||(rf[r]=!0,console.warn(r))}function s0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function o0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function a0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?bl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const sf=[.64,.33,.3,.6,.15,.06],of=[.2126,.7152,.0722],af=[.3127,.329],lf=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Zs]:{primaries:sf,whitePoint:af,transfer:bl,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:sf,whitePoint:af,transfer:me,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let ns;class l0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=dl("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let c0=0;class Wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hl(i[o].image)):s.push(Hl(i[o]))}else s=Hl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?l0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u0=0;class un extends $s{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=rr,i=rr,s=hi,o=sr,a=Qn,l=Wi,c=un.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=jr(),this.name="",this.source=new Wp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Pp;un.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,R=(p+1)/2,w=(u+d)/4,S=(h+g)/4,C=(m+_)/4;return M>v&&M>R?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=S/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=S/s,i=C/s),this.set(n,i,s,e),this}let E=Math.sqrt((_-m)*(_-m)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(_-m)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends h0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xp extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class f0 extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==m){let _=1-a;const p=l*d+c*f+u*m+h*g,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,p*E);_=Math.sin(_*w)/R,a=Math.sin(a*w)/R}const v=a*E;if(l=l*_+d*v,c=c*_+f*v,u=u*_+m*v,h=h*_+g*v,_===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new B,uf=new na;class ia{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),aa.subVectors(this.max,io),is.subVectors(t.a,io),rs.subVectors(t.b,io),ss.subVectors(t.c,io),qi.subVectors(rs,is),Zi.subVectors(ss,rs),yr.subVectors(is,ss);let e=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-yr.z,yr.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,yr.z,0,-yr.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-yr.y,yr.x,0];return!Wl(e,is,rs,ss,aa)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,is,rs,ss,aa))?!1:(la.crossVectors(qi,Zi),e=[la.x,la.y,la.z],Wl(e,is,rs,ss,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new B,new B,new B,new B,new B,new B,new B,new B],ri=new B,oa=new ia,is=new B,rs=new B,ss=new B,qi=new B,Zi=new B,yr=new B,io=new B,aa=new B,la=new B,Sr=new B;function Wl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Sr.fromArray(r,s);const a=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const d0=new ia,ro=new B,Xl=new B;class wl{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):d0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);const e=ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ro,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Xl)),this.expandByPoint(ro.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new B,Yl=new B,ca=new B,$i=new B,ql=new B,ua=new B,Zl=new B;class Yp{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yl.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Yl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=$i.dot(this.direction),l=-$i.dot(ca),c=$i.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Yl).addScaledVector(ca,d),f}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,s){ql.subVectors(e,t),ua.subVectors(n,t),Zl.crossVectors(ql,ua);let o=this.direction.dot(Zl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const l=a*this.direction.dot(ua.crossVectors($i,ua));if(l<0)return null;const c=a*this.direction.dot(ql.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Zl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,i,s,o,a,l,c,u,h,d,f,m,g,_){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,g,_)}set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,g,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,g=c*h;e[0]=d+g*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p0,t,m0)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ji.crossVectors(n,In),Ji.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ji.crossVectors(n,In)),Ji.normalize(),ha.crossVectors(In,Ji),i[0]=Ji.x,i[4]=ha.x,i[8]=In.x,i[1]=Ji.y,i[5]=ha.y,i[9]=In.y,i[2]=Ji.z,i[6]=ha.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],g=n[6],_=n[10],p=n[14],E=n[3],M=n[7],v=n[11],R=n[15],w=i[0],S=i[4],C=i[8],y=i[12],x=i[1],P=i[5],N=i[9],U=i[13],k=i[2],q=i[6],V=i[10],Y=i[14],G=i[3],rt=i[7],L=i[11],ct=i[15];return s[0]=o*w+a*x+l*k+c*G,s[4]=o*S+a*P+l*q+c*rt,s[8]=o*C+a*N+l*V+c*L,s[12]=o*y+a*U+l*Y+c*ct,s[1]=u*w+h*x+d*k+f*G,s[5]=u*S+h*P+d*q+f*rt,s[9]=u*C+h*N+d*V+f*L,s[13]=u*y+h*U+d*Y+f*ct,s[2]=m*w+g*x+_*k+p*G,s[6]=m*S+g*P+_*q+p*rt,s[10]=m*C+g*N+_*V+p*L,s[14]=m*y+g*U+_*Y+p*ct,s[3]=E*w+M*x+v*k+R*G,s[7]=E*S+M*P+v*q+R*rt,s[11]=E*C+M*N+v*V+R*L,s[15]=E*y+M*U+v*Y+R*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],g=t[7],_=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+_*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],g=t[13],_=t[14],p=t[15],E=h*_*c-g*d*c+g*l*f-a*_*f-h*l*p+a*d*p,M=m*d*c-u*_*c-m*l*f+o*_*f+u*l*p-o*d*p,v=u*g*c-m*h*c+m*a*f-o*g*f-u*a*p+o*h*p,R=m*h*l-u*g*l-m*a*d+o*g*d+u*a*_-o*h*_,w=e*E+n*M+i*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=E*S,t[1]=(g*d*s-h*_*s-g*i*f+n*_*f+h*i*p-n*d*p)*S,t[2]=(a*_*s-g*l*s+g*i*c-n*_*c-a*i*p+n*l*p)*S,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*S,t[4]=M*S,t[5]=(u*_*s-m*d*s+m*i*f-e*_*f-u*i*p+e*d*p)*S,t[6]=(m*l*s-o*_*s-m*i*c+e*_*c+o*i*p-e*l*p)*S,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*f+e*l*f)*S,t[8]=v*S,t[9]=(m*h*s-u*g*s-m*n*f+e*g*f+u*n*p-e*h*p)*S,t[10]=(o*g*s-m*a*s+m*n*c-e*g*c-o*n*p+e*a*p)*S,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*f-e*a*f)*S,t[12]=R*S,t[13]=(u*g*i-m*h*i+m*n*d-e*g*d-u*n*_+e*h*_)*S,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*_-e*a*_)*S,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,g=o*u,_=o*h,p=a*h,E=l*c,M=l*u,v=l*h,R=n.x,w=n.y,S=n.z;return i[0]=(1-(g+p))*R,i[1]=(f+v)*R,i[2]=(m-M)*R,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(_+E)*w,i[7]=0,i[8]=(m+M)*S,i[9]=(_-E)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],si.copy(this);const c=1/s,u=1/o,h=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,e.setFromRotationMatrix(si),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Bi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===Bi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===fl)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Bi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),d=(e+t)*c,f=(n+i)*u;let m,g;if(a===Bi)m=(o+s)*h,g=-2*h;else if(a===fl)m=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new B,si=new be,p0=new B(0,0,0),m0=new B(1,1,1),Ji=new B,ha=new B,In=new B,hf=new be,ff=new na;class Ti{constructor(t=0,e=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ff.setFromEuler(this),this.setFromQuaternion(ff,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _0=0;const df=new B,as=new na,Ri=new be,fa=new B,so=new B,g0=new B,v0=new na,pf=new B(1,0,0),mf=new B(0,1,0),_f=new B(0,0,1),gf={type:"added"},x0={type:"removed"},ls={type:"childadded",child:null},$l={type:"childremoved",child:null};class en extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new B,e=new Ti,n=new na,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(_f,t)}translateOnAxis(t,e){return df.copy(t).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(_f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(so,fa,this.up):Ri.lookAt(fa,so,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Ri),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gf),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gf),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,g0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,v0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new B(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new B,Pi=new B,Jl=new B,Di=new B,cs=new B,us=new B,vf=new B,Kl=new B,jl=new B,Ql=new B,tc=new Le,ec=new Le,nc=new Le;class ui{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){oi.subVectors(i,e),Pi.subVectors(n,e),Jl.subVectors(t,e);const o=oi.dot(oi),a=oi.dot(Pi),l=oi.dot(Jl),c=Pi.dot(Pi),u=Pi.dot(Jl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(tc,s.x),o.addScaledVector(ec,s.y),o.addScaledVector(nc,s.z),o}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),Pi.subVectors(t,e),oi.cross(Pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),oi.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ui.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;cs.subVectors(i,n),us.subVectors(s,n),Kl.subVectors(t,n);const l=cs.dot(Kl),c=us.dot(Kl);if(l<=0&&c<=0)return e.copy(n);jl.subVectors(t,i);const u=cs.dot(jl),h=us.dot(jl);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(cs,o);Ql.subVectors(t,s);const f=cs.dot(Ql),m=us.dot(Ql);if(m>=0&&f<=m)return e.copy(s);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(us,a);const _=u*m-f*h;if(_<=0&&h-u>=0&&f-m>=0)return vf.subVectors(s,i),a=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(vf,a);const p=1/(_+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(cs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},da={h:0,s:0,l:0};function ic(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=dh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ic(o,s,t+1/3),this.g=ic(o,s,t),this.b=ic(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Zp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return le.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ye(rn.r*255,0,255))*65536+Math.round(Ye(rn.g*255,0,255))*256+Math.round(Ye(rn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Mn){le.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,i=rn.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(da);const n=bo(Ki.h,da.h,e),i=bo(Ki.s,da.s,e),s=bo(Ki.l,da.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new re;re.NAMES=Zp;let M0=0;class Js extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=jr(),this.name="",this.blending=Cs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Gc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xs extends Js{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new B,pa=new dt;class ti{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qh&&(t.usage=this.usage),t}}class $p extends ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jp extends ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends ti{constructor(t,e,n){super(new Float32Array(t),e,n)}}let y0=0;const Xn=new be,rc=new en,hs=new B,Un=new ia,oo=new ia,$e=new B;class hn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?Jp:$p)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Un.min,oo.min),Un.expandByPoint($e),$e.addVectors(Un.max,oo.max),Un.expandByPoint($e)):(Un.expandByPoint(oo.min),Un.expandByPoint(oo.max))}Un.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),$e.add(hs)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,d=new dt,f=new dt,m=new dt,g=new B,_=new B;function p(C,y,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),_.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(g),a[y].add(g),a[x].add(g),l[C].add(_),l[y].add(_),l[x].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,y=E.length;C<y;++C){const x=E[C],P=x.start,N=x.count;for(let U=P,k=P+N;U<k;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new B,v=new B,R=new B,w=new B;function S(C){R.fromBufferAttribute(i,C),w.copy(R);const y=a[C];M.copy(y),M.sub(R.multiplyScalar(R.dot(y))).normalize(),v.crossVectors(w,y);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,y=E.length;C<y;++C){const x=E[C],P=x.start,N=x.count;for(let U=P,k=P+N;U<k;U+=3)S(t.getX(U+0)),S(t.getX(U+1)),S(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),g=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new ti(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new be,Er=new Yp,ma=new wl,Mf=new B,_a=new B,ga=new B,va=new B,sc=new B,xa=new B,yf=new B,Ma=new B;class Oe extends en{constructor(t=new hn,e=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(sc.fromBufferAttribute(h,t),o?xa.addScaledVector(sc,u):xa.addScaledVector(sc.sub(e),u))}e.add(xa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Er.copy(t.ray).recast(t.near),!(ma.containsPoint(Er.origin)===!1&&(Er.intersectSphere(ma,Mf)===null||Er.origin.distanceToSquared(Mf)>(t.far-t.near)**2))&&(xf.copy(s).invert(),Er.copy(t.ray).applyMatrix4(xf),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=o[_.materialIndex],E=Math.max(_.start,f.start),M=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let v=E,R=M;v<R;v+=3){const w=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);i=ya(this,p,t,n,c,u,h,w,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const E=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);i=ya(this,o,t,n,c,u,h,E,M,v),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=o[_.materialIndex],E=Math.max(_.start,f.start),M=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let v=E,R=M;v<R;v+=3){const w=v,S=v+1,C=v+2;i=ya(this,p,t,n,c,u,h,w,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const E=_,M=_+1,v=_+2;i=ya(this,o,t,n,c,u,h,E,M,v),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function S0(r,t,e,n,i,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:r}}function ya(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_a),r.getVertexPosition(l,ga),r.getVertexPosition(c,va);const u=S0(r,t,e,n,_a,ga,va,yf);if(u){const h=new B;ui.getBarycoord(yf,_a,ga,va,h),i&&(u.uv=ui.getInterpolatedAttribute(i,a,l,c,h,new dt)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,h,new dt)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};ui.getNormal(_a,ga,va,d.normal),u.face=d,u.barycoord=h}return u}class Ks extends hn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function m(g,_,p,E,M,v,R,w,S,C,y){const x=v/S,P=R/C,N=v/2,U=R/2,k=w/2,q=S+1,V=C+1;let Y=0,G=0;const rt=new B;for(let L=0;L<V;L++){const ct=L*P-U;for(let Ut=0;Ut<q;Ut++){const $t=Ut*x-N;rt[g]=$t*E,rt[_]=ct*M,rt[p]=k,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[_]=0,rt[p]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Ut/S),h.push(1-L/C),Y+=1}}for(let L=0;L<C;L++)for(let ct=0;ct<S;ct++){const Ut=d+ct+q*L,$t=d+ct+q*(L+1),$=d+(ct+1)+q*(L+1),it=d+(ct+1)+q*L;l.push(Ut,$t,it),l.push($t,$,it),G+=6}a.addGroup(f,G,y),f+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _n(r){const t={};for(let e=0;e<r.length;e++){const n=Ys(r[e]);for(const i in n)t[i]=n[i]}return t}function E0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Kp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const T0={clone:Ys,merge:_n};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Js{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jp extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new B,Sf=new dt,Ef=new dt;class Zn extends jp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Sf,Ef),e.subVectors(Ef,Sf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class A0 extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn(fs,ds,t,e);i.layers=this.layers,this.add(i);const s=new Zn(fs,ds,t,e);s.layers=this.layers,this.add(s);const o=new Zn(fs,ds,t,e);o.layers=this.layers,this.add(o);const a=new Zn(fs,ds,t,e);a.layers=this.layers,this.add(a);const l=new Zn(fs,ds,t,e);l.layers=this.layers,this.add(l);const c=new Zn(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qp extends un{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class C0 extends Yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ks(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ur});s.uniforms.tEquirect.value=e;const o=new Oe(i,s),a=e.minFilter;return e.minFilter===sr&&(e.minFilter=hi),new A0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const oc=new B,R0=new B,P0=new Qt;class Cr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oc.subVectors(n,e).cross(R0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||P0.getNormalMatrix(t),i=this.coplanarPoint(oc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new wl,Sa=new B;class ph{constructor(t=new Cr,e=new Cr,n=new Cr,i=new Cr,s=new Cr,o=new Cr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],g=i[10],_=i[11],p=i[12],E=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,_-f,v-p).normalize(),n[1].setComponents(l+s,d+c,_+f,v+p).normalize(),n[2].setComponents(l+o,d+u,_+m,v+E).normalize(),n[3].setComponents(l-o,d-u,_-m,v-E).normalize(),n[4].setComponents(l-a,d-h,_-g,v-M).normalize(),e===Bi)n[5].setComponents(l+a,d+h,_+g,v+M).normalize();else if(e===fl)n[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Sa.x=i.normal.x>0?t.max.x:t.min.x,Sa.y=i.normal.y>0?t.max.y:t.min.y,Sa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function D0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],g=h[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class js extends hn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],g=[],_=[];for(let p=0;p<u;p++){const E=p*d-o;for(let M=0;M<c;M++){const v=M*h-s;m.push(v,-E,0),g.push(0,0,1),_.push(M/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const M=E+c*p,v=E+c*(p+1),R=E+1+c*(p+1),w=E+1+c*p;f.push(M,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.widthSegments,t.heightSegments)}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ev=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:L0,alphahash_pars_fragment:I0,alphamap_fragment:U0,alphamap_pars_fragment:N0,alphatest_fragment:O0,alphatest_pars_fragment:F0,aomap_fragment:B0,aomap_pars_fragment:z0,batching_pars_vertex:k0,batching_vertex:V0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:J0,color_fragment:K0,color_pars_fragment:j0,color_pars_vertex:Q0,color_vertex:tv,common:ev,cube_uv_reflection_fragment:nv,defaultnormal_vertex:iv,displacementmap_pars_vertex:rv,displacementmap_vertex:sv,emissivemap_fragment:ov,emissivemap_pars_fragment:av,colorspace_fragment:lv,colorspace_pars_fragment:cv,envmap_fragment:uv,envmap_common_pars_fragment:hv,envmap_pars_fragment:fv,envmap_pars_vertex:dv,envmap_physical_pars_fragment:Tv,envmap_vertex:pv,fog_vertex:mv,fog_pars_vertex:_v,fog_fragment:gv,fog_pars_fragment:vv,gradientmap_pars_fragment:xv,lightmap_pars_fragment:Mv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:Sv,lights_pars_begin:Ev,lights_toon_fragment:bv,lights_toon_pars_fragment:wv,lights_phong_fragment:Av,lights_phong_pars_fragment:Cv,lights_physical_fragment:Rv,lights_physical_pars_fragment:Pv,lights_fragment_begin:Dv,lights_fragment_maps:Lv,lights_fragment_end:Iv,logdepthbuf_fragment:Uv,logdepthbuf_pars_fragment:Nv,logdepthbuf_pars_vertex:Ov,logdepthbuf_vertex:Fv,map_fragment:Bv,map_pars_fragment:zv,map_particle_fragment:kv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Gv,morphinstance_vertex:Wv,morphcolor_vertex:Xv,morphnormal_vertex:Yv,morphtarget_pars_vertex:qv,morphtarget_vertex:Zv,normal_fragment_begin:$v,normal_fragment_maps:Jv,normal_pars_fragment:Kv,normal_pars_vertex:jv,normal_vertex:Qv,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:rx,opaque_fragment:sx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:ux,roughnessmap_fragment:hx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:_x,skinbase_vertex:gx,skinning_pars_vertex:vx,skinning_vertex:xx,skinnormal_vertex:Mx,specularmap_fragment:yx,specularmap_pars_fragment:Sx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Tx,transmission_fragment:bx,transmission_pars_fragment:wx,uv_pars_fragment:Ax,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Dx,background_frag:Lx,backgroundCube_vert:Ix,backgroundCube_frag:Ux,cube_vert:Nx,cube_frag:Ox,depth_vert:Fx,depth_frag:Bx,distanceRGBA_vert:zx,distanceRGBA_frag:kx,equirect_vert:Vx,equirect_frag:Hx,linedashed_vert:Gx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:Yx,meshlambert_vert:qx,meshlambert_frag:Zx,meshmatcap_vert:$x,meshmatcap_frag:Jx,meshnormal_vert:Kx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:tM,meshphysical_vert:eM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},Et={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},gi={basic:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new re(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:_n([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:_n([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:_n([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new re(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:_n([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:_n([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:_n([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:_n([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:_n([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:_n([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:_n([Et.common,Et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:_n([Et.lights,Et.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};gi.physical={uniforms:_n([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ea={r:0,b:0,g:0},br=new Ti,hM=new be;function fM(r,t,e,n,i,s,o){const a=new re(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function g(E){let M=!1;const v=m(E);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(E,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===Tl)?(u===void 0&&(u=new Oe(new Ks(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Ys(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),br.copy(M.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(br)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==me,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new js(2,2),new _r({name:"BackgroundMaterial",uniforms:Ys(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Ea,Kp(r)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:_}}function dM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,P,N,U,k){let q=!1;const V=h(U,N,P);s!==V&&(s=V,c(s.object)),q=f(x,U,N,k),q&&m(x,U,N,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,P,N,U),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,P,N){const U=N.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let V=q[U];return V===void 0&&(V=d(l()),q[U]=V),V}function d(x){const P=[],N=[],U=[];for(let k=0;k<e;k++)P[k]=0,N[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,P,N,U){const k=s.attributes,q=P.attributes;let V=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){const L=k[G];let ct=q[G];if(ct===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),L===void 0||L.attribute!==ct||ct&&L.data!==ct.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function m(x,P,N,U){const k={},q=P.attributes;let V=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){let L=q[G];L===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ct={};ct.attribute=L,L&&L.data&&(ct.data=L.data),k[G]=ct,V++}s.attributes=k,s.attributesNum=V,s.index=U}function g(){const x=s.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function _(x){p(x,0)}function p(x,P){const N=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;N[x]=1,U[x]===0&&(r.enableVertexAttribArray(x),U[x]=1),k[x]!==P&&(r.vertexAttribDivisor(x,P),k[x]=P)}function E(){const x=s.newAttributes,P=s.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==x[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function M(x,P,N,U,k,q,V){V===!0?r.vertexAttribIPointer(x,P,N,k,q):r.vertexAttribPointer(x,P,N,U,k,q)}function v(x,P,N,U){g();const k=U.attributes,q=N.getAttributes(),V=P.defaultAttributeValues;for(const Y in q){const G=q[Y];if(G.location>=0){let rt=k[Y];if(rt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const L=rt.normalized,ct=rt.itemSize,Ut=t.get(rt);if(Ut===void 0)continue;const $t=Ut.buffer,$=Ut.type,it=Ut.bytesPerElement,Mt=$===r.INT||$===r.UNSIGNED_INT||rt.gpuType===ah;if(rt.isInterleavedBufferAttribute){const st=rt.data,Ct=st.stride,Dt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)p(G.location+Ot,st.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)_(G.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let Ot=0;Ot<G.locationSize;Ot++)M(G.location+Ot,ct/G.locationSize,$,L,Ct*it,(Dt+ct/G.locationSize*Ot)*it,Mt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)p(G.location+st,rt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<G.locationSize;st++)_(G.location+st);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let st=0;st<G.locationSize;st++)M(G.location+st,ct/G.locationSize,$,L,ct*it,ct/G.locationSize*st*it,Mt)}}else if(V!==void 0){const L=V[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(G.location,L);break;case 3:r.vertexAttrib3fv(G.location,L);break;case 4:r.vertexAttrib4fv(G.location,L);break;default:r.vertexAttrib1fv(G.location,L)}}}}E()}function R(){C();for(const x in n){const P=n[x];for(const N in P){const U=P[N];for(const k in U)u(U[k].object),delete U[k];delete P[N]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const N in P){const U=P[N];for(const k in U)u(U[k].object),delete U[k];delete P[N]}delete n[x.id]}function S(x){for(const P in n){const N=n[P];if(N[x.id]===void 0)continue;const U=N[x.id];for(const k in U)u(U[k].object),delete U[k];delete N[x.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:_,disableUnusedAttributes:E}}function pM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*d[g];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==Qn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Wi&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Fi&&!C)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function _M(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Cr,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!_)s?u(null):c();else{const E=s?0:n,M=E*4;let v=p.clippingState||null;l.value=v,v=u(m,d,M,f);for(let R=0;R!==M;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){const g=h!==null?h.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const p=f+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<p)&&(_=new Float32Array(p));for(let M=0,v=f;M!==g;++M,v+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function gM(r){let t=new WeakMap;function e(o,a){return a===Kc?o.mapping=ks:a===jc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kc||a===jc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class em extends jp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,Tf=[.125,.215,.35,.446,.526,.582],Ir=20,ac=new em,bf=new re;let lc=null,cc=0,uc=0,hc=!1;const Rr=(1+Math.sqrt(5))/2,ps=1/Rr,wf=[new B(-Rr,ps,0),new B(Rr,ps,0),new B(-ps,0,Rr),new B(ps,0,Rr),new B(0,Rr,-ps),new B(0,Rr,ps),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ea,format:Qn,colorSpace:Zs,depthBuffer:!1},i=Af(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vM(s)),this._blurMaterial=xM(s,t,e)}return i}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,i){const a=new Zn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bf),u.toneMapping=hr,u.autoClear=!1;const f=new Xs({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new Oe(new Ks,f);let g=!1;const _=t.background;_?_.isColor&&(f.color.copy(_),t.background=null,g=!0):(f.color.copy(bf),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ta(i,E*M,p>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ks||t.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wf[(i-s-1)%wf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ir-1),g=s/m,_=isFinite(s)?1+Math.floor(u*g):Ir;_>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ir}`);const p=[];let E=0;for(let S=0;S<Ir;++S){const C=S/g,y=Math.exp(-C*C/2);p.push(y),S===0?E+=y:S<_&&(E+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/E;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const v=this._sizeLods[i],R=3*v*(i>M-Ss?i-M+Ss:0),w=4*(this._cubeSize-v);Ta(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(h,ac)}}function vM(r){const t=[],e=[],n=[];let i=r;const s=r-Ss+1+Tf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ss?l=Tf[o-r+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,_=2,p=1,E=new Float32Array(g*m*f),M=new Float32Array(_*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const S=w%3*2/3-1,C=w>2?0:-1,y=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];E.set(y,g*m*w),M.set(d,_*m*w);const x=[w,w,w,w,w,w];v.set(x,p*m*w)}const R=new hn;R.setAttribute("position",new ti(E,g)),R.setAttribute("uv",new ti(M,_)),R.setAttribute("faceIndex",new ti(v,p)),t.push(R),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Af(r,t,e){const n=new Yr(r,t,e);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xM(r,t,e){const n=new Float32Array(Ir),i=new B(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Cf(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Rf(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kc||l===jc,u=l===ks||l===Vs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wu(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new wu(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function SM(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let _=0,p=g.length;_<p;_++)t.remove(g[_])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const g=f[m];for(let _=0,p=g.length;_<p;_++)t.update(g[_],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let M=0,v=E.length;M<v;M+=3){const R=E[M+0],w=E[M+1],S=E[M+2];d.push(R,w,w,S,S,R)}}else if(m!==void 0){const E=m.array;g=m.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const R=M+0,w=M+1,S=M+2;d.push(R,w,w,S,S,R)}}else return;const _=new(Gp(d)?Jp:$p)(d,1);_.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,_)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function EM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];e.update(_,n,1)}function h(d,f,m,g){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*g[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function TM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bM(r,t,e){const n=new WeakMap,i=new Le;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const S=new Float32Array(R*w*4*h),C=new Xp(S,R,w,h);C.type=Fi,C.needsUpdate=!0;const y=v*4;for(let P=0;P<h;P++){const N=p[P],U=E[P],k=M[P],q=R*w*4*P;for(let V=0;V<N.count;V++){const Y=V*y;m===!0&&(i.fromBufferAttribute(N,V),S[q+Y+0]=i.x,S[q+Y+1]=i.y,S[q+Y+2]=i.z,S[q+Y+3]=0),g===!0&&(i.fromBufferAttribute(U,V),S[q+Y+4]=i.x,S[q+Y+5]=i.y,S[q+Y+6]=i.z,S[q+Y+7]=0),_===!0&&(i.fromBufferAttribute(k,V),S[q+Y+8]=i.x,S[q+Y+9]=i.y,S[q+Y+10]=i.z,S[q+Y+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new dt(R,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function wM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class nm extends un{constructor(t,e,n,i,s,o,a,l,c,u=Rs){if(u!==Rs&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=Xr),n===void 0&&u===Ws&&(n=Gs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const im=new un,Pf=new nm(1,1),rm=new Xp,sm=new f0,om=new Qp,Df=[],Lf=[],If=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function Qs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Df[i];if(s===void 0&&(s=new Float32Array(i),Df[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Al(r,t){let e=Lf[t];e===void 0&&(e=new Int32Array(t),Lf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function AM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function CM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function RM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function PM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function DM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;Nf.set(n),r.uniformMatrix2fv(this.addr,!1,Nf),Ze(e,n)}}function LM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;Uf.set(n),r.uniformMatrix3fv(this.addr,!1,Uf),Ze(e,n)}}function IM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;If.set(n),r.uniformMatrix4fv(this.addr,!1,If),Ze(e,n)}}function UM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function NM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function OM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function BM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function kM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function VM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function HM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pf.compareFunction=Hp,s=Pf):s=im,e.setTexture2D(t||s,i)}function GM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sm,i)}function WM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||om,i)}function XM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rm,i)}function YM(r){switch(r){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function qM(r,t){r.uniform1fv(this.addr,t)}function ZM(r,t){const e=Qs(t,this.size,2);r.uniform2fv(this.addr,e)}function $M(r,t){const e=Qs(t,this.size,3);r.uniform3fv(this.addr,e)}function JM(r,t){const e=Qs(t,this.size,4);r.uniform4fv(this.addr,e)}function KM(r,t){const e=Qs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jM(r,t){const e=Qs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function QM(r,t){const e=Qs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ty(r,t){r.uniform1iv(this.addr,t)}function ey(r,t){r.uniform2iv(this.addr,t)}function ny(r,t){r.uniform3iv(this.addr,t)}function iy(r,t){r.uniform4iv(this.addr,t)}function ry(r,t){r.uniform1uiv(this.addr,t)}function sy(r,t){r.uniform2uiv(this.addr,t)}function oy(r,t){r.uniform3uiv(this.addr,t)}function ay(r,t){r.uniform4uiv(this.addr,t)}function ly(r,t,e){const n=this.cache,i=t.length,s=Al(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||im,s[o])}function cy(r,t,e){const n=this.cache,i=t.length,s=Al(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sm,s[o])}function uy(r,t,e){const n=this.cache,i=t.length,s=Al(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||om,s[o])}function hy(r,t,e){const n=this.cache,i=t.length,s=Al(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rm,s[o])}function fy(r){switch(r){case 5126:return qM;case 35664:return ZM;case 35665:return $M;case 35666:return JM;case 35674:return KM;case 35675:return jM;case 35676:return QM;case 5124:case 35670:return ty;case 35667:case 35671:return ey;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return sy;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return hy}}class dy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=YM(e.type)}}class py{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fy(e.type)}}class my{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Of(r,t){r.seq.push(t),r.map[t.id]=t}function _y(r,t,e){const n=r.name,i=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Of(e,c===void 0?new dy(a,r,t):new py(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new my(a),Of(e,h)),e=h}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);_y(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ff(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const gy=37297;let vy=0;function xy(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bf=new Qt;function My(r){le._getMatrix(Bf,le.workingColorSpace,r);const t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case bl:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function zf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+xy(r.getShaderSource(t),o)}else return i}function yy(r,t){const e=My(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sy(r,t){let e;switch(t){case bg:e="Linear";break;case wg:e="Reinhard";break;case Ag:e="Cineon";break;case Cg:e="ACESFilmic";break;case Pg:e="AgX";break;case Rp:e="Neutral";break;case Rg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ba=new B;function Ey(){le.getLuminanceCoefficients(ba);const r=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function by(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wy(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function po(r){return r!==""}function kf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(r){return r.replace(Ay,Ry)}const Cy=new Map;function Ry(r,t){let e=te[t];if(e===void 0){const n=Cy.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Au(e)}const Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(r){return r.replace(Py,Dy)}function Dy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ly(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function Iy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case Vs:t="ENVMAP_TYPE_CUBE";break;case Tl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cp:t="ENVMAP_BLENDING_MULTIPLY";break;case Eg:t="ENVMAP_BLENDING_MIX";break;case Tg:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fy(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ly(e),c=Iy(e),u=Uy(e),h=Ny(e),d=Oy(e),f=Ty(e),m=by(s),g=i.createProgram();let _,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(po).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(po).join(`
`),p.length>0&&(p+=`
`)):(_=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hr?"#define TONE_MAPPING":"",e.toneMapping!==hr?te.tonemapping_pars_fragment:"",e.toneMapping!==hr?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,yy("linearToOutputTexel",e.outputColorSpace),Ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(po).join(`
`)),o=Au(o),o=kf(o,e),o=Vf(o,e),a=Au(a),a=kf(a,e),a=Vf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+_+o,v=E+p+a,R=Ff(i,i.VERTEX_SHADER,M),w=Ff(i,i.FRAGMENT_SHADER,v);i.attachShader(g,R),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(R).trim(),k=i.getShaderInfoLog(w).trim();let q=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,w);else{const Y=zf(i,R,"vertex"),G=zf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Y+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||k==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:N,vertexShader:{log:U,prefix:_},fragmentShader:{log:k,prefix:p}})}i.deleteShader(R),i.deleteShader(w),C=new ja(i,g),y=wy(i,g)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,gy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let By=0;class zy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ky(t),e.set(t,n)),n}}class ky{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}}function Vy(r,t,e,n,i,s,o){const a=new qp,l=new zy,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,x,P,N,U){const k=N.fog,q=U.geometry,V=y.isMeshStandardMaterial?N.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),G=Y&&Y.mapping===Tl?Y.image.height:null,rt=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=L!==void 0?L.length:0;let Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let $t,$,it,Mt;if(rt){const bt=gi[rt];$t=bt.vertexShader,$=bt.fragmentShader}else $t=y.vertexShader,$=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),Mt=l.getFragmentShaderID(y);const st=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,kt=!!y.map,et=!!y.matcap,Q=!!Y,D=!!y.aoMap,Tt=!!y.lightMap,nt=!!y.bumpMap,F=!!y.normalMap,at=!!y.displacementMap,Nt=!!y.emissiveMap,St=!!y.metalnessMap,A=!!y.roughnessMap,T=y.anisotropy>0,H=y.clearcoat>0,K=y.dispersion>0,j=y.iridescence>0,J=y.sheen>0,pt=y.transmission>0,ht=T&&!!y.anisotropyMap,gt=H&&!!y.clearcoatMap,Xt=H&&!!y.clearcoatNormalMap,ot=H&&!!y.clearcoatRoughnessMap,ft=j&&!!y.iridescenceMap,zt=j&&!!y.iridescenceThicknessMap,Bt=J&&!!y.sheenColorMap,wt=J&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,Vt=!!y.specularColorMap,ae=!!y.specularIntensityMap,I=pt&&!!y.transmissionMap,_t=pt&&!!y.thicknessMap,Z=!!y.gradientMap,tt=!!y.alphaMap,mt=y.alphaTest>0,vt=!!y.alphaHash,Ht=!!y.extensions;let ce=hr;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=r.toneMapping);const De={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:$,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Zs,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:et,envMap:Q,envMapMode:Q&&Y.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Tt,bumpMap:nt,normalMap:F,displacementMap:d&&at,emissiveMap:Nt,normalMapObjectSpace:F&&y.normalMapType===Ug,normalMapTangentSpace:F&&y.normalMapType===Vp,metalnessMap:St,roughnessMap:A,anisotropy:T,anisotropyMap:ht,clearcoat:H,clearcoatMap:gt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ot,dispersion:K,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:wt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:ae,transmission:pt,transmissionMap:I,thicknessMap:_t,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Cs&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:vt,combine:y.combine,mapUv:kt&&g(y.map.channel),aoMapUv:D&&g(y.aoMap.channel),lightMapUv:Tt&&g(y.lightMap.channel),bumpMapUv:nt&&g(y.bumpMap.channel),normalMapUv:F&&g(y.normalMap.channel),displacementMapUv:at&&g(y.displacementMap.channel),emissiveMapUv:Nt&&g(y.emissiveMap.channel),metalnessMapUv:St&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:ht&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(y.sheenRoughnessMap.channel),specularMapUv:Kt&&g(y.specularMap.channel),specularColorMapUv:Vt&&g(y.specularColorMap.channel),specularIntensityMapUv:ae&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:_t&&g(y.thicknessMap.channel),alphaMapUv:tt&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(kt||tt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&le.getTransfer(y.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&le.getTransfer(y.emissiveMap.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ci,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(x,y),M(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=m[y.type];let P;if(x){const N=gi[x];P=T0.clone(N.uniforms)}else P=y.uniforms;return P}function R(y,x){let P;for(let N=0,U=u.length;N<U;N++){const k=u[N];if(k.cacheKey===x){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Fy(r,x,y,s),u.push(P)),P}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function S(y){l.remove(y)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:S,programs:u,dispose:C}}function Hy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Gy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,m,g,_){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:_},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=_),t++,p}function a(h,d,f,m,g,_){const p=o(h,d,f,m,g,_);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,g,_){const p=o(h,d,f,m,g,_);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Gy),n.length>1&&n.sort(d||Wf),i.length>1&&i.sort(d||Wf)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Wy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xf,r.set(n,[o])):i>=s.length?(o=new Xf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Xy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new re};break;case"SpotLight":e={position:new B,direction:new B,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function Yy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qy=0;function Zy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function $y(r){const t=new Xy,e=Yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new be,o=new be;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,g=0,_=0,p=0,E=0,M=0,v=0,R=0,w=0,S=0;c.sort(Zy);for(let y=0,x=c.length;y<x;y++){const P=c[y],N=P.color,U=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*U,h+=N.g*U,d+=N.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);S++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(U),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=q,v++}g++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(N).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=V,_++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,G=e.get(P);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=V,m++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,C.directionalLength=f,C.pointLength=m,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=S,n.version=qy++)}function l(c,u){let h=0,d=0,f=0,m=0,g=0;const _=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),f++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(M.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),d++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Yf(r){const t=new $y(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Jy(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Yf(r),t.set(i,[a])):s>=o.length?(a=new Yf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ky extends Js{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jy extends Js{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eS(r,t,e){let n=new ph;const i=new dt,s=new dt,o=new Le,a=new Ky({depthPacking:Ig}),l=new jy,c={},u=e.maxTextureSize,h={[mr]:Tn,[Tn]:mr,[ci]:ci},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Qy,fragmentShader:tS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new hn;m.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let p=this.type;this.render=function(w,S,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ur),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==Li&&this.type===Li,k=p===Li&&this.type!==Li;for(let q=0,V=w.length;q<V;q++){const Y=w[q],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,G.mapSize.y=s.y)),G.map===null||U===!0||k===!0){const ct=this.type!==Li?{minFilter:Hn,magFilter:Hn}:{};G.map!==null&&G.map.dispose(),G.map=new Yr(i.x,i.y,ct),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const L=G.getViewportCount();for(let ct=0;ct<L;ct++){const Ut=G.getViewport(ct);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),N.viewport(o),G.updateMatrices(Y,ct),n=G.getFrustum(),v(S,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Li&&E(G,C),G.needsUpdate=!1}p=this.type,_.needsUpdate=!1,r.setRenderTarget(y,x,P)};function E(w,S){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,C,f,g,null)}function M(w,S,C,y){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=x.uuid,U=S.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let q=k[U];q===void 0&&(q=x.clone(),k[U]=q,S.addEventListener("dispose",R)),x=q}if(x.visible=S.visible,x.wireframe=S.wireframe,y===Li?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=C}return x}function v(w,S,C,y,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=t.update(w),k=w.material;if(Array.isArray(k)){const q=U.groups;for(let V=0,Y=q.length;V<Y;V++){const G=q[V],rt=k[G.materialIndex];if(rt&&rt.visible){const L=M(w,rt,y,x);w.onBeforeShadow(r,w,S,C,U,L,G),r.renderBufferDirect(C,null,U,L,w,G),w.onAfterShadow(r,w,S,C,U,L,G)}}}else if(k.visible){const q=M(w,k,y,x);w.onBeforeShadow(r,w,S,C,U,q,null),r.renderBufferDirect(C,null,U,q,w,null),w.onAfterShadow(r,w,S,C,U,q,null)}}const N=w.children;for(let U=0,k=N.length;U<k;U++)v(N[U],S,C,y,x)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const y=c[C],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const nS={[Wc]:Xc,[Yc]:$c,[qc]:Jc,[zs]:Zc,[Xc]:Wc,[$c]:Yc,[Jc]:qc,[Zc]:zs};function iS(r,t){function e(){let I=!1;const _t=new Le;let Z=null;const tt=new Le(0,0,0,0);return{setMask:function(mt){Z!==mt&&!I&&(r.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){I=mt},setClear:function(mt,vt,Ht,ce,De){De===!0&&(mt*=ce,vt*=ce,Ht*=ce),_t.set(mt,vt,Ht,ce),tt.equals(_t)===!1&&(r.clearColor(mt,vt,Ht,ce),tt.copy(_t))},reset:function(){I=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,_t=!1,Z=null,tt=null,mt=null;return{setReversed:function(vt){if(_t!==vt){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ce=mt;mt=null,this.setClear(ce)}_t=vt},getReversed:function(){return _t},setTest:function(vt){vt?st(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(vt){Z!==vt&&!I&&(r.depthMask(vt),Z=vt)},setFunc:function(vt){if(_t&&(vt=nS[vt]),tt!==vt){switch(vt){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case Zc:r.depthFunc(r.GEQUAL);break;case $c:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=vt}},setLocked:function(vt){I=vt},setClear:function(vt){mt!==vt&&(_t&&(vt=1-vt),r.clearDepth(vt),mt=vt)},reset:function(){I=!1,Z=null,tt=null,mt=null,_t=!1}}}function i(){let I=!1,_t=null,Z=null,tt=null,mt=null,vt=null,Ht=null,ce=null,De=null;return{setTest:function(bt){I||(bt?st(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(bt){_t!==bt&&!I&&(r.stencilMask(bt),_t=bt)},setFunc:function(bt,Lt,jt){(Z!==bt||tt!==Lt||mt!==jt)&&(r.stencilFunc(bt,Lt,jt),Z=bt,tt=Lt,mt=jt)},setOp:function(bt,Lt,jt){(vt!==bt||Ht!==Lt||ce!==jt)&&(r.stencilOp(bt,Lt,jt),vt=bt,Ht=Lt,ce=jt)},setLocked:function(bt){I=bt},setClear:function(bt){De!==bt&&(r.clearStencil(bt),De=bt)},reset:function(){I=!1,_t=null,Z=null,tt=null,mt=null,vt=null,Ht=null,ce=null,De=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,E=null,M=null,v=null,R=null,w=null,S=new re(0,0,0),C=0,y=!1,x=null,P=null,N=null,U=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Y>=2);let rt=null,L={};const ct=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),$t=new Le().fromArray(ct),$=new Le().fromArray(Ut);function it(I,_t,Z,tt){const mt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(I,vt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<Z;Ht++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(_t+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return vt}const Mt={};Mt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(zs),nt(!1),F(Zh),st(r.CULL_FACE),D(ur);function st(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Dt(I,_t){return h[I]!==_t?(r.bindFramebuffer(I,_t),h[I]=_t,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=_t),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ot(I,_t){let Z=f,tt=!1;if(I){Z=d.get(_t),Z===void 0&&(Z=[],d.set(_t,Z));const mt=I.textures;if(Z.length!==mt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Ht=mt.length;vt<Ht;vt++)Z[vt]=r.COLOR_ATTACHMENT0+vt;Z.length=mt.length,tt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,tt=!0);tt&&r.drawBuffers(Z)}function kt(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const et={[Lr]:r.FUNC_ADD,[lg]:r.FUNC_SUBTRACT,[cg]:r.FUNC_REVERSE_SUBTRACT};et[ug]=r.MIN,et[hg]=r.MAX;const Q={[Ap]:r.ZERO,[Ya]:r.ONE,[fg]:r.SRC_COLOR,[Hc]:r.SRC_ALPHA,[vg]:r.SRC_ALPHA_SATURATE,[_g]:r.DST_COLOR,[pg]:r.DST_ALPHA,[dg]:r.ONE_MINUS_SRC_COLOR,[Gc]:r.ONE_MINUS_SRC_ALPHA,[gg]:r.ONE_MINUS_DST_COLOR,[mg]:r.ONE_MINUS_DST_ALPHA,[xg]:r.CONSTANT_COLOR,[Mg]:r.ONE_MINUS_CONSTANT_COLOR,[yg]:r.CONSTANT_ALPHA,[Sg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,_t,Z,tt,mt,vt,Ht,ce,De,bt){if(I===ur){g===!0&&(Ct(r.BLEND),g=!1);return}if(g===!1&&(st(r.BLEND),g=!0),I!==wp){if(I!==_||bt!==y){if((p!==Lr||v!==Lr)&&(r.blendEquation(r.FUNC_ADD),p=Lr,v=Lr),bt)switch(I){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $h:r.blendFunc(r.ONE,r.ONE);break;case Jh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $h:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,M=null,R=null,w=null,S.set(0,0,0),C=0,_=I,y=bt}return}mt=mt||_t,vt=vt||Z,Ht=Ht||tt,(_t!==p||mt!==v)&&(r.blendEquationSeparate(et[_t],et[mt]),p=_t,v=mt),(Z!==E||tt!==M||vt!==R||Ht!==w)&&(r.blendFuncSeparate(Q[Z],Q[tt],Q[vt],Q[Ht]),E=Z,M=tt,R=vt,w=Ht),(ce.equals(S)===!1||De!==C)&&(r.blendColor(ce.r,ce.g,ce.b,De),S.copy(ce),C=De),_=I,y=!1}function Tt(I,_t){I.side===ci?Ct(r.CULL_FACE):st(r.CULL_FACE);let Z=I.side===Tn;_t&&(Z=!Z),nt(Z),I.blending===Cs&&I.transparent===!1?D(ur):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function F(I){I!==sg?(st(r.CULL_FACE),I!==P&&(I===Zh?r.cullFace(r.BACK):I===og?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),P=I}function at(I){I!==N&&(V&&r.lineWidth(I),N=I)}function Nt(I,_t,Z){I?(st(r.POLYGON_OFFSET_FILL),(U!==_t||k!==Z)&&(r.polygonOffset(_t,Z),U=_t,k=Z)):Ct(r.POLYGON_OFFSET_FILL)}function St(I){I?st(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function A(I){I===void 0&&(I=r.TEXTURE0+q-1),rt!==I&&(r.activeTexture(I),rt=I)}function T(I,_t,Z){Z===void 0&&(rt===null?Z=r.TEXTURE0+q-1:Z=rt);let tt=L[Z];tt===void 0&&(tt={type:void 0,texture:void 0},L[Z]=tt),(tt.type!==I||tt.texture!==_t)&&(rt!==Z&&(r.activeTexture(Z),rt=Z),r.bindTexture(I,_t||Mt[I]),tt.type=I,tt.texture=_t)}function H(){const I=L[rt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){$t.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function wt(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Kt(I,_t){let Z=c.get(_t);Z===void 0&&(Z=new WeakMap,c.set(_t,Z));let tt=Z.get(I);tt===void 0&&(tt=r.getUniformBlockIndex(_t,I.name),Z.set(I,tt))}function Vt(I,_t){const tt=c.get(_t).get(I);l.get(_t)!==tt&&(r.uniformBlockBinding(_t,tt,I.__bindingPointIndex),l.set(_t,tt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},rt=null,L={},h={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,E=null,M=null,v=null,R=null,w=null,S=new re(0,0,0),C=0,y=!1,x=null,P=null,N=null,U=null,k=null,$t.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Ct,bindFramebuffer:Dt,drawBuffers:Ot,useProgram:kt,setBlending:D,setMaterial:Tt,setFlipSided:nt,setCullFace:F,setLineWidth:at,setPolygonOffset:Nt,setScissorTest:St,activeTexture:A,bindTexture:T,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:zt,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Bt,viewport:wt,reset:ae}}function qf(r,t,e,n){const i=rS(n);switch(e){case Up:return r*t;case Op:return r*t;case Fp:return r*t*2;case Bp:return r*t/i.components*i.byteLength;case uh:return r*t/i.components*i.byteLength;case zp:return r*t*2/i.components*i.byteLength;case hh:return r*t*2/i.components*i.byteLength;case Np:return r*t*3/i.components*i.byteLength;case Qn:return r*t*4/i.components*i.byteLength;case fh:return r*t*4/i.components*i.byteLength;case qa:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case eu:case iu:return Math.max(r,16)*Math.max(t,8)/4;case tu:case nu:return Math.max(r,8)*Math.max(t,8)/2;case ru:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case uu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case fu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case mu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case _u:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case xu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ka:case yu:case Su:return Math.ceil(r/4)*Math.ceil(t/4)*16;case kp:case Eu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Tu:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rS(r){switch(r){case Wi:case Dp:return{byteLength:1,components:1};case qo:case Lp:case ea:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Xr:case ah:case Fi:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function sS(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,T){return f?new OffscreenCanvas(A,T):dl("canvas")}function g(A,T,H){let K=1;const j=St(A);if((j.width>H||j.height>H)&&(K=H/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(K*j.width),pt=Math.floor(K*j.height);h===void 0&&(h=m(J,pt));const ht=T?m(J,pt):h;return ht.width=J,ht.height=pt,ht.getContext("2d").drawImage(A,0,0,J,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+pt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function _(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(A,T,H,K,j=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=T;if(T===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8)),T===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),T===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8)),T===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),T===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),T===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),T===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),T===r.RGBA){const pt=j?bl:le.getTransfer(K);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=pt===me?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,T){let H;return A?T===null||T===Xr||T===Gs?H=r.DEPTH24_STENCIL8:T===Fi?H=r.DEPTH32F_STENCIL8:T===qo&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xr||T===Gs?H=r.DEPTH_COMPONENT24:T===Fi?H=r.DEPTH_COMPONENT32F:T===qo&&(H=r.DEPTH_COMPONENT16),H}function R(A,T){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==Hn&&A.minFilter!==hi?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function w(A){const T=A.target;T.removeEventListener("dispose",w),C(T),T.isVideoTexture&&u.delete(T)}function S(A){const T=A.target;T.removeEventListener("dispose",S),x(T)}function C(A){const T=n.get(A);if(T.__webglInit===void 0)return;const H=A.source,K=d.get(H);if(K){const j=K[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(A),Object.keys(K).length===0&&d.delete(H)}n.remove(A)}function y(A){const T=n.get(A);r.deleteTexture(T.__webglTexture);const H=A.source,K=d.get(H);delete K[T.__cacheKey],o.memory.textures--}function x(A){const T=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let j=0;j<T.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(T.__webglFramebuffer[K][j]);else r.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)r.deleteFramebuffer(T.__webglFramebuffer[K]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=A.textures;for(let K=0,j=H.length;K<j;K++){const J=n.get(H[K]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(A)}let P=0;function N(){P=0}function U(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function k(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function q(A,T){const H=n.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,A,T);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+T)}function V(A,T){const H=n.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+T)}function Y(A,T){const H=n.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,T);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+T)}function G(A,T){const H=n.get(A);if(A.version>0&&H.__version!==A.version){it(H,A,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+T)}const rt={[Hs]:r.REPEAT,[rr]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},L={[Hn]:r.NEAREST,[Dg]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[kl]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},ct={[Ng]:r.NEVER,[Vg]:r.ALWAYS,[Og]:r.LESS,[Hp]:r.LEQUAL,[Fg]:r.EQUAL,[kg]:r.GEQUAL,[Bg]:r.GREATER,[zg]:r.NOTEQUAL};function Ut(A,T){if(T.type===Fi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===hi||T.magFilter===kl||T.magFilter===sa||T.magFilter===sr||T.minFilter===hi||T.minFilter===kl||T.minFilter===sa||T.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,rt[T.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,rt[T.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,rt[T.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Hn||T.minFilter!==sa&&T.minFilter!==sr||T.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function $t(A,T){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",w));const K=T.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const J=k(T);if(J!==A.__cacheKey){j[J]===void 0&&(j[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[J].usedTimes++;const pt=j[A.__cacheKey];pt!==void 0&&(j[A.__cacheKey].usedTimes--,pt.usedTimes===0&&y(T)),A.__cacheKey=J,A.__webglTexture=j[J].texture}return H}function $(A,T,H){let K=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=r.TEXTURE_3D);const j=$t(A,T),J=T.source;e.bindTexture(K,A.__webglTexture,r.TEXTURE0+H);const pt=n.get(J);if(J.version!==pt.__version||j===!0){e.activeTexture(r.TEXTURE0+H);const ht=le.getPrimaries(le.workingColorSpace),gt=T.colorSpace===tr?null:le.getPrimaries(T.colorSpace),Xt=T.colorSpace===tr||ht===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=g(T.image,!1,i.maxTextureSize);ot=Nt(T,ot);const ft=s.convert(T.format,T.colorSpace),zt=s.convert(T.type);let Bt=M(T.internalFormat,ft,zt,T.colorSpace,T.isVideoTexture);Ut(K,T);let wt;const Kt=T.mipmaps,Vt=T.isVideoTexture!==!0,ae=pt.__version===void 0||j===!0,I=J.dataReady,_t=R(T,ot);if(T.isDepthTexture)Bt=v(T.format===Ws,T.type),ae&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Bt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Bt,ot.width,ot.height,0,ft,zt,null));else if(T.isDataTexture)if(Kt.length>0){Vt&&ae&&e.texStorage2D(r.TEXTURE_2D,_t,Bt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)wt=Kt[Z],Vt?I&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,wt.width,wt.height,ft,zt,wt.data):e.texImage2D(r.TEXTURE_2D,Z,Bt,wt.width,wt.height,0,ft,zt,wt.data);T.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(r.TEXTURE_2D,_t,Bt,ot.width,ot.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,ft,zt,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,ot.width,ot.height,0,ft,zt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Bt,Kt[0].width,Kt[0].height,ot.depth);for(let Z=0,tt=Kt.length;Z<tt;Z++)if(wt=Kt[Z],T.format!==Qn)if(ft!==null)if(Vt){if(I)if(T.layerUpdates.size>0){const mt=qf(wt.width,wt.height,T.format,T.type);for(const vt of T.layerUpdates){const Ht=wt.data.subarray(vt*mt/wt.data.BYTES_PER_ELEMENT,(vt+1)*mt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,vt,wt.width,wt.height,1,ft,Ht)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,wt.width,wt.height,ot.depth,ft,wt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Bt,wt.width,wt.height,ot.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,wt.width,wt.height,ot.depth,ft,zt,wt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Bt,wt.width,wt.height,ot.depth,0,ft,zt,wt.data)}else{Vt&&ae&&e.texStorage2D(r.TEXTURE_2D,_t,Bt,Kt[0].width,Kt[0].height);for(let Z=0,tt=Kt.length;Z<tt;Z++)wt=Kt[Z],T.format!==Qn?ft!==null?Vt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,wt.width,wt.height,ft,wt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Bt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?I&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,wt.width,wt.height,ft,zt,wt.data):e.texImage2D(r.TEXTURE_2D,Z,Bt,wt.width,wt.height,0,ft,zt,wt.data)}else if(T.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Bt,ot.width,ot.height,ot.depth),I)if(T.layerUpdates.size>0){const Z=qf(ot.width,ot.height,T.format,T.type);for(const tt of T.layerUpdates){const mt=ot.data.subarray(tt*Z/ot.data.BYTES_PER_ELEMENT,(tt+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,ft,zt,mt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ft,zt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,ot.width,ot.height,ot.depth,0,ft,zt,ot.data);else if(T.isData3DTexture)Vt?(ae&&e.texStorage3D(r.TEXTURE_3D,_t,Bt,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ft,zt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,ot.width,ot.height,ot.depth,0,ft,zt,ot.data);else if(T.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(r.TEXTURE_2D,_t,Bt,ot.width,ot.height);else{let Z=ot.width,tt=ot.height;for(let mt=0;mt<_t;mt++)e.texImage2D(r.TEXTURE_2D,mt,Bt,Z,tt,0,ft,zt,null),Z>>=1,tt>>=1}}else if(Kt.length>0){if(Vt&&ae){const Z=St(Kt[0]);e.texStorage2D(r.TEXTURE_2D,_t,Bt,Z.width,Z.height)}for(let Z=0,tt=Kt.length;Z<tt;Z++)wt=Kt[Z],Vt?I&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ft,zt,wt):e.texImage2D(r.TEXTURE_2D,Z,Bt,ft,zt,wt);T.generateMipmaps=!1}else if(Vt){if(ae){const Z=St(ot);e.texStorage2D(r.TEXTURE_2D,_t,Bt,Z.width,Z.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,zt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Bt,ft,zt,ot);_(T)&&p(K),pt.__version=J.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function it(A,T,H){if(T.image.length!==6)return;const K=$t(A,T),j=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);const J=n.get(j);if(j.version!==J.__version||K===!0){e.activeTexture(r.TEXTURE0+H);const pt=le.getPrimaries(le.workingColorSpace),ht=T.colorSpace===tr?null:le.getPrimaries(T.colorSpace),gt=T.colorSpace===tr||pt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!Xt&&!ot?ft[tt]=g(T.image[tt],!0,i.maxCubemapSize):ft[tt]=ot?T.image[tt].image:T.image[tt],ft[tt]=Nt(T,ft[tt]);const zt=ft[0],Bt=s.convert(T.format,T.colorSpace),wt=s.convert(T.type),Kt=M(T.internalFormat,Bt,wt,T.colorSpace),Vt=T.isVideoTexture!==!0,ae=J.__version===void 0||K===!0,I=j.dataReady;let _t=R(T,zt);Ut(r.TEXTURE_CUBE_MAP,T);let Z;if(Xt){Vt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Kt,zt.width,zt.height);for(let tt=0;tt<6;tt++){Z=ft[tt].mipmaps;for(let mt=0;mt<Z.length;mt++){const vt=Z[mt];T.format!==Qn?Bt!==null?Vt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,Bt,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,Bt,wt,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,vt.width,vt.height,0,Bt,wt,vt.data)}}}else{if(Z=T.mipmaps,Vt&&ae){Z.length>0&&_t++;const tt=St(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,Bt,wt,ft[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,ft[tt].width,ft[tt].height,0,Bt,wt,ft[tt].data);for(let mt=0;mt<Z.length;mt++){const Ht=Z[mt].image[tt].image;Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ht.width,Ht.height,Bt,wt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,Ht.width,Ht.height,0,Bt,wt,Ht.data)}}else{Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,wt,ft[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Bt,wt,ft[tt]);for(let mt=0;mt<Z.length;mt++){const vt=Z[mt];Vt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Bt,wt,vt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,Bt,wt,vt.image[tt])}}}_(T)&&p(r.TEXTURE_CUBE_MAP),J.__version=j.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Mt(A,T,H,K,j,J){const pt=s.convert(H.format,H.colorSpace),ht=s.convert(H.type),gt=M(H.internalFormat,pt,ht,H.colorSpace),Xt=n.get(T),ot=n.get(H);if(ot.__renderTarget=T,!Xt.__hasExternalTextures){const ft=Math.max(1,T.width>>J),zt=Math.max(1,T.height>>J);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,J,gt,ft,zt,T.depth,0,pt,ht,null):e.texImage2D(j,J,gt,ft,zt,0,pt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,ot.__webglTexture,0,nt(T)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,ot.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(A,T,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),T.depthBuffer){const K=T.depthTexture,j=K&&K.isDepthTexture?K.type:null,J=v(T.stencilBuffer,j),pt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=nt(T);F(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,J,T.width,T.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,J,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,J,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,A)}else{const K=T.textures;for(let j=0;j<K.length;j++){const J=K[j],pt=s.convert(J.format,J.colorSpace),ht=s.convert(J.type),gt=M(J.internalFormat,pt,ht,J.colorSpace),Xt=nt(T);H&&F(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,gt,T.width,T.height):F(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,gt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const j=K.__webglTexture,J=nt(T);if(T.depthTexture.format===Rs)F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(T.depthTexture.format===Ws)F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Dt(A){const T=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=K}if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,A)}else if(H){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=r.createRenderbuffer(),st(T.__webglDepthbuffer[K],A,!1);else{const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),st(T.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(A,T,H){const K=n.get(A);T!==void 0&&Mt(K.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Dt(A)}function kt(A){const T=A.texture,H=n.get(A),K=n.get(T);A.addEventListener("dispose",S);const j=A.textures,J=A.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=T.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let gt=0;gt<T.mipmaps.length;gt++)H.__webglFramebuffer[ht][gt]=r.createFramebuffer()}else H.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<T.mipmaps.length;ht++)H.__webglFramebuffer[ht]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(pt)for(let ht=0,gt=j.length;ht<gt;ht++){const Xt=n.get(j[ht]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&F(A)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){const gt=j[ht];H.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);const Xt=s.convert(gt.format,gt.colorSpace),ot=s.convert(gt.type),ft=M(gt.internalFormat,Xt,ot,gt.colorSpace,A.isXRRenderTarget===!0),zt=nt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,ft,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),st(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,T);for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Mt(H.__webglFramebuffer[ht][gt],A,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else Mt(H.__webglFramebuffer[ht],A,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,gt=j.length;ht<gt;ht++){const Xt=j[ht],ot=n.get(Xt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),Ut(r.TEXTURE_2D,Xt),Mt(H.__webglFramebuffer,A,Xt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),_(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),Ut(ht,T),T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Mt(H.__webglFramebuffer[gt],A,T,r.COLOR_ATTACHMENT0,ht,gt);else Mt(H.__webglFramebuffer,A,T,r.COLOR_ATTACHMENT0,ht,0);_(T)&&p(ht),e.unbindTexture()}A.depthBuffer&&Dt(A)}function et(A){const T=A.textures;for(let H=0,K=T.length;H<K;H++){const j=T[H];if(_(j)){const J=E(A),pt=n.get(j).__webglTexture;e.bindTexture(J,pt),p(J),e.unbindTexture()}}}const Q=[],D=[];function Tt(A){if(A.samples>0){if(F(A)===!1){const T=A.textures,H=A.width,K=A.height;let j=r.COLOR_BUFFER_BIT;const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=n.get(A),ht=T.length>1;if(ht)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Xt=n.get(T[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,H,K,0,0,H,K,j,r.NEAREST),l===!0&&(Q.length=0,D.length=0,Q.push(r.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(J),D.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const Xt=n.get(T[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const T=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function nt(A){return Math.min(i.maxSamples,A.samples)}function F(A){const T=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function at(A){const T=o.render.frame;u.get(A)!==T&&(u.set(A,T),A.update())}function Nt(A,T){const H=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Zs&&H!==tr&&(le.getTransfer(H)===me?(K!==Qn||j!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=F}function oS(r,t){function e(n,i=tr){let s;const o=le.getTransfer(i);if(n===Wi)return r.UNSIGNED_BYTE;if(n===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return r.BYTE;if(n===Lp)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===ah)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===ea)return r.HALF_FLOAT;if(n===Up)return r.ALPHA;if(n===Np)return r.RGB;if(n===Qn)return r.RGBA;if(n===Op)return r.LUMINANCE;if(n===Fp)return r.LUMINANCE_ALPHA;if(n===Rs)return r.DEPTH_COMPONENT;if(n===Ws)return r.DEPTH_STENCIL;if(n===Bp)return r.RED;if(n===uh)return r.RED_INTEGER;if(n===zp)return r.RG;if(n===hh)return r.RG_INTEGER;if(n===fh)return r.RGBA_INTEGER;if(n===qa||n===Za||n===$a||n===Ja)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tu||n===eu||n===nu||n===iu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ru||n===su||n===ou)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ru||n===su)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ou)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===au)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===du)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_u)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===yu||n===Su)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ka)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kp||n===Eu||n===Tu||n===bu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class aS extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fi extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lS={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new un,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _r({vertexShader:cS,fragmentShader:uS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fS extends $s{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const g=new hS,_=e.getContextAttributes();let p=null,E=null;const M=[],v=[],R=new dt;let w=null;const S=new Zn;S.viewport=new Le;const C=new Zn;C.viewport=new Le;const y=[S,C],x=new aS;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=M[$];return it===void 0&&(it=new dc,M[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=M[$];return it===void 0&&(it=new dc,M[$]=it),it.getGripSpace()},this.getHand=function($){let it=M[$];return it===void 0&&(it=new dc,M[$]=it),it.getHandSpace()};function U($){const it=v.indexOf($.inputSource);if(it===-1)return;const Mt=M[it];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let $=0;$<M.length;$++){const it=v[$];it!==null&&(v[$]=null,M[$].disconnect(it))}P=null,N=null,g.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Yr(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let it=null,Mt=null,st=null;_.depth&&(st=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Ws:Rs,Mt=_.stencil?Gs:Xr);const Ct={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Yr(d.textureWidth,d.textureHeight,{format:Qn,type:Wi,depthTexture:new nm(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let it=0;it<$.removed.length;it++){const Mt=$.removed[it],st=v.indexOf(Mt);st>=0&&(v[st]=null,M[st].disconnect(Mt))}for(let it=0;it<$.added.length;it++){const Mt=$.added[it];let st=v.indexOf(Mt);if(st===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=v.length){v.push(Mt),st=Dt;break}else if(v[Dt]===null){v[Dt]=Mt,st=Dt;break}if(st===-1)break}const Ct=M[st];Ct&&Ct.connect(Mt)}}const V=new B,Y=new B;function G($,it,Mt){V.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const st=V.distanceTo(Y),Ct=it.projectionMatrix.elements,Dt=Mt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),kt=Ct[14]/(Ct[10]+1),et=(Ct[9]+1)/Ct[5],Q=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],Tt=(Dt[8]+1)/Dt[0],nt=Ot*D,F=Ot*Tt,at=st/(-D+Tt),Nt=at*-D;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const St=Ot+at,A=kt+at,T=nt-Nt,H=F+(st-Nt),K=et*kt/A*St,j=Q*kt/A*St;$.projectionMatrix.makePerspective(T,H,K,j,St,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let it=$.near,Mt=$.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),x.near=C.near=S.near=it,x.far=C.far=S.far=Mt,(P!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far),S.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,x.layers.mask=S.layers.mask|C.layers.mask;const st=$.parent,Ct=x.cameras;rt(x,st);for(let Dt=0;Dt<Ct.length;Dt++)rt(Ct[Dt],st);Ct.length===2?G(x,S,C):x.projectionMatrix.copy(S.projectionMatrix),L($,x,st)};function L($,it,Mt){Mt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ct=null;function Ut($,it){if(u=it.getViewerPose(c||o),m=it,u!==null){const Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let st=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let Dt=0;Dt<Mt.length;Dt++){const Ot=Mt[Dt];let kt=null;if(f!==null)kt=f.getViewport(Ot);else{const Q=h.getViewSubImage(d,Ot);kt=Q.viewport,Dt===0&&(t.setRenderTargetTextures(E,Q.colorTexture,d.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(E))}let et=y[Dt];et===void 0&&(et=new Zn,et.layers.enable(Dt),et.viewport=new Le,y[Dt]=et),et.matrix.fromArray(Ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(kt.x,kt.y,kt.width,kt.height),Dt===0&&(x.matrix.copy(et.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(et)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=h.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,i.renderState)}}for(let Mt=0;Mt<M.length;Mt++){const st=v[Mt],Ct=M[Mt];st!==null&&Ct!==void 0&&Ct.update(st,it,c||o)}ct&&ct($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}const $t=new tm;$t.setAnimationLoop(Ut),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}}const wr=new Ti,dS=new be;function pS(r,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Kp(r)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,E,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&f(_,p,v)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,E,M):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Tn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Tn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,v=E.envMapRotation;M&&(_.envMap.value=M,wr.copy(v),wr.x*=-1,wr.y*=-1,wr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),_.envMapRotation.value.setFromMatrix4(dS.makeRotationFromEuler(wr)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,E,M){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*E,_.scale.value=M*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,E){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const E=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mS(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=i[E.id];v===void 0&&(m(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",_));const R=M.program;n.updateUBOMapping(E,R);const w=t.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const M=h();E.__bindingPointIndex=M;const v=r.createBuffer(),R=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=i[E.id],v=E.uniforms,R=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,S=v.length;w<S;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,x=C.length;y<x;y++){const P=C[y];if(f(P,w,y,R)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<U.length;q++){const V=U[q],Y=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,M,v,R){const w=E.value,S=M+"_"+v;if(R[S]===void 0)return typeof w=="number"||typeof w=="boolean"?R[S]=w:R[S]=w.clone(),!0;{const C=R[S];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[S]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(E){const M=E.uniforms;let v=0;const R=16;for(let S=0,C=M.length;S<C;S++){const y=Array.isArray(M[S])?M[S]:[M[S]];for(let x=0,P=y.length;x<P;x++){const N=y[x],U=Array.isArray(N.value)?N.value:[N.value];for(let k=0,q=U.length;k<q;k++){const V=U[k],Y=g(V),G=v%R,rt=G%Y.boundary,L=G+rt;v+=rt,L!==0&&R-L<Y.storage&&(v+=R-L),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const w=v%R;return w>0&&(v+=R-w),E.__size=v,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function _(E){const M=E.target;M.removeEventListener("dispose",_);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class _S{constructor(t={}){const{canvas:e=r0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let R=!1,w=0,S=0,C=null,y=-1,x=null;const P=new Le,N=new Le;let U=null;const k=new re(0);let q=0,V=e.width,Y=e.height,G=1,rt=null,L=null;const ct=new Le(0,0,V,Y),Ut=new Le(0,0,V,Y);let $t=!1;const $=new ph;let it=!1,Mt=!1;const st=new be,Ct=new be,Dt=new B,Ot=new Le,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Q(){return C===null?G:1}let D=n;function Tt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oh}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),D===null){const O="webgl2";if(D=Tt(O,b),D===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,F,at,Nt,St,A,T,H,K,j,J,pt,ht,gt,Xt,ot,ft,zt,Bt,wt,Kt,Vt,ae,I;function _t(){nt=new yM(D),nt.init(),Vt=new oS(D,nt),F=new mM(D,nt,t,Vt),at=new iS(D,nt),F.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Nt=new TM(D),St=new Hy,A=new sS(D,nt,at,St,F,Vt,Nt),T=new gM(v),H=new MM(v),K=new D0(D),ae=new dM(D,K),j=new SM(D,K,Nt,ae),J=new wM(D,j,K,Nt),Bt=new bM(D,F,A),ot=new _M(St),pt=new Vy(v,T,H,nt,F,ae,ot),ht=new pS(v,St),gt=new Wy,Xt=new Jy(nt),zt=new fM(v,T,H,at,J,f,l),ft=new eS(v,J,F),I=new mS(D,Nt,F,at),wt=new pM(D,nt,Nt),Kt=new EM(D,nt,Nt),Nt.programs=pt.programs,v.capabilities=F,v.extensions=nt,v.properties=St,v.renderLists=gt,v.shadowMap=ft,v.state=at,v.info=Nt}_t();const Z=new fS(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(V,Y,!1))},this.getSize=function(b){return b.set(V,Y)},this.setSize=function(b,O,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Y=O,e.width=Math.floor(b*G),e.height=Math.floor(O*G),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(V*G,Y*G).floor()},this.setDrawingBufferSize=function(b,O,W){V=b,Y=O,G=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ct)},this.setViewport=function(b,O,W,X){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,O,W,X),at.viewport(P.copy(ct).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ut)},this.setScissor=function(b,O,W,X){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,O,W,X),at.scissor(N.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(b){at.setScissorTest($t=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let X=0;if(b){let z=!1;if(C!==null){const lt=C.texture.format;z=lt===fh||lt===hh||lt===uh}if(z){const lt=C.texture.type,ut=lt===Wi||lt===Xr||lt===qo||lt===Gs||lt===lh||lt===ch,xt=zt.getClearColor(),At=zt.getClearAlpha(),Gt=xt.r,qt=xt.g,Pt=xt.b;ut?(m[0]=Gt,m[1]=qt,m[2]=Pt,m[3]=At,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Gt,g[1]=qt,g[2]=Pt,g[3]=At,D.clearBufferiv(D.COLOR,0,g))}else X|=D.COLOR_BUFFER_BIT}O&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),gt.dispose(),Xt.dispose(),St.dispose(),T.dispose(),H.dispose(),J.dispose(),ae.dispose(),I.dispose(),pt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",yt),Z.removeEventListener("sessionend",Yt),It.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Nt.autoReset,O=ft.enabled,W=ft.autoUpdate,X=ft.needsUpdate,z=ft.type;_t(),Nt.autoReset=b,ft.enabled=O,ft.autoUpdate=W,ft.needsUpdate=X,ft.type=z}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){const O=b.target;O.removeEventListener("dispose",Ht),ce(O)}function ce(b){De(b),St.remove(b)}function De(b){const O=St.get(b).programs;O!==void 0&&(O.forEach(function(W){pt.releaseProgram(W)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,X,z,lt){O===null&&(O=kt);const ut=z.isMesh&&z.matrixWorld.determinant()<0,xt=Dn(b,O,W,X,z);at.setMaterial(X,ut);let At=W.index,Gt=1;if(X.wireframe===!0){if(At=j.getWireframeAttribute(W),At===void 0)return;Gt=2}const qt=W.drawRange,Pt=W.attributes.position;let Zt=qt.start*Gt,ue=(qt.start+qt.count)*Gt;lt!==null&&(Zt=Math.max(Zt,lt.start*Gt),ue=Math.min(ue,(lt.start+lt.count)*Gt)),At!==null?(Zt=Math.max(Zt,0),ue=Math.min(ue,At.count)):Pt!=null&&(Zt=Math.max(Zt,0),ue=Math.min(ue,Pt.count));const fe=ue-Zt;if(fe<0||fe===1/0)return;ae.setup(z,X,xt,W,At);let Be,de=wt;if(At!==null&&(Be=K.get(At),de=Kt,de.setIndex(Be)),z.isMesh)X.wireframe===!0?(at.setLineWidth(X.wireframeLinewidth*Q()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(z.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),at.setLineWidth(Ft*Q()),z.isLineSegments?de.setMode(D.LINES):z.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else z.isPoints?de.setMode(D.POINTS):z.isSprite&&de.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,wi=z._multiDrawCounts,pe=z._multiDrawCount,ii=At?K.get(At).bytesPerElement:1,Qr=St.get(X).currentProgram.getUniforms();for(let Ln=0;Ln<pe;Ln++)Qr.setValue(D,"_gl_DrawID",Ln),de.render(Ft[Ln]/ii,wi[Ln])}else if(z.isInstancedMesh)de.renderInstances(Zt,fe,z.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wi=Math.min(W.instanceCount,Ft);de.renderInstances(Zt,fe,wi)}else de.render(Zt,fe)};function bt(b,O,W){b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,_e(b,O,W),b.side=mr,b.needsUpdate=!0,_e(b,O,W),b.side=ci):_e(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),p=Xt.get(W),p.init(O),M.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==W&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const lt=z.material;if(lt)if(Array.isArray(lt))for(let ut=0;ut<lt.length;ut++){const xt=lt[ut];bt(xt,W,z),X.add(xt)}else bt(lt,W,z),X.add(lt)}),M.pop(),p=null,X},this.compileAsync=function(b,O,W=null){const X=this.compile(b,O,W);return new Promise(z=>{function lt(){if(X.forEach(function(ut){St.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){z(b);return}setTimeout(lt,10)}nt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Lt=null;function jt(b){Lt&&Lt(b)}function yt(){It.stop()}function Yt(){It.start()}const It=new tm;It.setAnimationLoop(jt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(b){Lt=b,Z.setAnimationLoop(b),b===null?It.stop():It.start()},Z.addEventListener("sessionstart",yt),Z.addEventListener("sessionend",Yt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,C),p=Xt.get(b,M.length),p.init(O),M.push(p),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,it=ot.init(this.clippingPlanes,Mt),_=gt.get(b,E.length),_.init(),E.push(_),Z.enabled===!0&&Z.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Wt(lt,O,-1/0,v.sortObjects)}Wt(b,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(rt,L),et=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,et&&zt.addToRenderList(_,b),this.info.render.frame++,it===!0&&ot.beginShadows();const W=p.state.shadowsArray;ft.render(W,b,O),it===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,z=_.transmissive;if(p.setupLights(),O.isArrayCamera){const lt=O.cameras;if(z.length>0)for(let ut=0,xt=lt.length;ut<xt;ut++){const At=lt[ut];ee(X,z,b,At)}et&&zt.render(b);for(let ut=0,xt=lt.length;ut<xt;ut++){const At=lt[ut];Ue(_,b,At,At.viewport)}}else z.length>0&&ee(X,z,b,O),et&&zt.render(b),Ue(_,b,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,O),ae.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],it===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function Wt(b,O,W,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){X&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const ut=J.update(b),xt=b.material;xt.visible&&_.push(b,ut,xt,W,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const ut=J.update(b),xt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ot.copy(ut.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(xt)){const At=ut.groups;for(let Gt=0,qt=At.length;Gt<qt;Gt++){const Pt=At[Gt],Zt=xt[Pt.materialIndex];Zt&&Zt.visible&&_.push(b,ut,Zt,W,Ot.z,Pt)}}else xt.visible&&_.push(b,ut,xt,W,Ot.z,null)}}const lt=b.children;for(let ut=0,xt=lt.length;ut<xt;ut++)Wt(lt[ut],O,W,X)}function Ue(b,O,W,X){const z=b.opaque,lt=b.transmissive,ut=b.transparent;p.setupLightsView(W),it===!0&&ot.setGlobalState(v.clippingPlanes,W),X&&at.viewport(P.copy(X)),z.length>0&&xe(z,O,W),lt.length>0&&xe(lt,O,W),ut.length>0&&xe(ut,O,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function ee(b,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Yr(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ea:Wi,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const lt=p.state.transmissionRenderTarget[X.id],ut=X.viewport||P;lt.setSize(ut.z,ut.w);const xt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),et&&zt.render(W);const At=v.toneMapping;v.toneMapping=hr;const Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),it===!0&&ot.setGlobalState(v.clippingPlanes,X),xe(b,W,X),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Pt=0,Zt=O.length;Pt<Zt;Pt++){const ue=O[Pt],fe=ue.object,Be=ue.geometry,de=ue.material,Ft=ue.group;if(de.side===ci&&fe.layers.test(X.layers)){const wi=de.side;de.side=Tn,de.needsUpdate=!0,Ge(fe,W,X,Be,de,Ft),de.side=wi,de.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(xt),v.setClearColor(k,q),Gt!==void 0&&(X.viewport=Gt),v.toneMapping=At}function xe(b,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,lt=b.length;z<lt;z++){const ut=b[z],xt=ut.object,At=ut.geometry,Gt=X===null?ut.material:X,qt=ut.group;xt.layers.test(W.layers)&&Ge(xt,O,W,At,Gt,qt)}}function Ge(b,O,W,X,z,lt){b.onBeforeRender(v,O,W,X,z,lt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,O,W,X,b,lt),z.transparent===!0&&z.side===ci&&z.forceSinglePass===!1?(z.side=Tn,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,b,lt),z.side=mr,z.needsUpdate=!0,v.renderBufferDirect(W,O,X,z,b,lt),z.side=ci):v.renderBufferDirect(W,O,X,z,b,lt),b.onAfterRender(v,O,W,X,z,lt)}function _e(b,O,W){O.isScene!==!0&&(O=kt);const X=St.get(b),z=p.state.lights,lt=p.state.shadowsArray,ut=z.state.version,xt=pt.getParameters(b,z.state,lt,O,W),At=pt.getProgramCacheKey(xt);let Gt=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?H:T).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",Ht),Gt=new Map,X.programs=Gt);let qt=Gt.get(At);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===ut)return he(b,xt),qt}else xt.uniforms=pt.getUniforms(b),b.onBeforeCompile(xt,v),qt=pt.acquireProgram(xt,At),Gt.set(At,qt),X.uniforms=xt.uniforms;const Pt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),he(b,xt),X.needsLights=fn(b),X.lightsStateVersion=ut,X.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function ge(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ja.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function he(b,O){const W=St.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Dn(b,O,W,X,z){O.isScene!==!0&&(O=kt),A.resetTextureUnits();const lt=O.fog,ut=X.isMeshStandardMaterial?O.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zs,At=(X.isMeshStandardMaterial?H:T).get(X.envMap||ut),Gt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let fe=hr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Be=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=Be!==void 0?Be.length:0,Ft=St.get(X),wi=p.state.lights;if(it===!0&&(Mt===!0||b!==x)){const Wn=b===x&&X.id===y;ot.setState(X,b,Wn)}let pe=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==wi.state.version||Ft.outputColorSpace!==xt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==At||X.fog===!0&&Ft.fog!==lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ot.numPlanes||Ft.numIntersection!==ot.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==qt||Ft.morphTargets!==Pt||Ft.morphNormals!==Zt||Ft.morphColors!==ue||Ft.toneMapping!==fe||Ft.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Ft.__version=X.version);let ii=Ft.currentProgram;pe===!0&&(ii=_e(X,O,z));let Qr=!1,Ln=!1,to=!1;const Se=ii.getUniforms(),di=Ft.uniforms;if(at.useProgram(ii.program)&&(Qr=!0,Ln=!0,to=!0),X.id!==y&&(y=X.id,Ln=!0),Qr||x!==b){at.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),o0(st),a0(st),Se.setValue(D,"projectionMatrix",st)):Se.setValue(D,"projectionMatrix",b.projectionMatrix),Se.setValue(D,"viewMatrix",b.matrixWorldInverse);const Xi=Se.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,Dt.setFromMatrixPosition(b.matrixWorld)),F.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Ln=!0,to=!0)}if(z.isSkinnedMesh){Se.setOptional(D,z,"bindMatrix"),Se.setOptional(D,z,"bindMatrixInverse");const Wn=z.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Se.setValue(D,"boneTexture",Wn.boneTexture,A))}z.isBatchedMesh&&(Se.setOptional(D,z,"batchingTexture"),Se.setValue(D,"batchingTexture",z._matricesTexture,A),Se.setOptional(D,z,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",z._indirectTexture,A),Se.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",z._colorsTexture,A));const eo=W.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&Bt.update(z,W,ii),(Ln||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Se.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(di.envMap.value=At,di.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(di.envMapIntensity.value=O.environmentIntensity),Ln&&(Se.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&ye(di,to),lt&&X.fog===!0&&ht.refreshFogUniforms(di,lt),ht.refreshMaterialUniforms(di,X,G,Y,p.state.transmissionRenderTarget[b.id]),ja.upload(D,ge(Ft),di,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ja.upload(D,ge(Ft),di,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(D,"center",z.center),Se.setValue(D,"modelViewMatrix",z.modelViewMatrix),Se.setValue(D,"normalMatrix",z.normalMatrix),Se.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wn=X.uniformsGroups;for(let Xi=0,Yi=Wn.length;Xi<Yi;Xi++){const Dh=Wn[Xi];I.update(Dh,ii),I.bind(Dh,ii)}}return ii}function ye(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function fn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,W){St.get(b.texture).__webglTexture=O,St.get(b.depthTexture).__webglTexture=W;const X=St.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const W=St.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){C=b,w=O,S=W;let X=!0,z=null,lt=!1,ut=!1;if(b){const At=St.get(b);if(At.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(At.__hasExternalTextures)A.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pt=b.depthTexture;if(At.__boundDepthTexture!==Pt){if(Pt!==null&&St.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ut=!0);const qt=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?z=qt[O][W]:z=qt[O],lt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?z=St.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?z=qt[W]:z=qt,P.copy(b.viewport),N.copy(b.scissor),U=b.scissorTest}else P.copy(ct).multiplyScalar(G).floor(),N.copy(Ut).multiplyScalar(G).floor(),U=$t;if(at.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&at.drawBuffers(b,z),at.viewport(P),at.scissor(N),at.setScissorTest(U),lt){const At=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,W)}else if(ut){const At=St.get(b.texture),Gt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,W||0,Gt)}y=-1},this.readRenderTargetPixels=function(b,O,W,X,z,lt,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){at.bindFramebuffer(D.FRAMEBUFFER,xt);try{const At=b.texture,Gt=At.format,qt=At.type;if(!F.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&W>=0&&W<=b.height-z&&D.readPixels(O,W,X,z,Vt.convert(Gt),Vt.convert(qt),lt)}finally{const At=C!==null?St.get(C).__webglFramebuffer:null;at.bindFramebuffer(D.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,X,z,lt,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const At=b.texture,Gt=At.format,qt=At.type;if(!F.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-X&&W>=0&&W<=b.height-z){at.bindFramebuffer(D.FRAMEBUFFER,xt);const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(O,W,X,z,Vt.convert(Gt),Vt.convert(qt),0);const Zt=C!==null?St.get(C).__webglFramebuffer:null;at.bindFramebuffer(D.FRAMEBUFFER,Zt);const ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await s0(D,ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Pt),D.deleteSync(ue),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(b.image.width*X),lt=Math.floor(b.image.height*X),ut=O!==null?O.x:0,xt=O!==null?O.y:0;A.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ut,xt,z,lt),at.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,X=null,z=0){b.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,W=null);let lt,ut,xt,At,Gt,qt,Pt,Zt,ue;const fe=b.isCompressedTexture?b.mipmaps[z]:b.image;W!==null?(lt=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Gt=W.min.y,qt=W.isBox3?W.min.z:0):(lt=fe.width,ut=fe.height,xt=fe.depth||1,At=0,Gt=0,qt=0),X!==null?(Pt=X.x,Zt=X.y,ue=X.z):(Pt=0,Zt=0,ue=0);const Be=Vt.convert(O.format),de=Vt.convert(O.type);let Ft;O.isData3DTexture?(A.setTexture3D(O,0),Ft=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ft=D.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const wi=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ii=D.getParameter(D.UNPACK_SKIP_PIXELS),Qr=D.getParameter(D.UNPACK_SKIP_ROWS),Ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);const to=b.isDataArrayTexture||b.isData3DTexture,Se=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const di=St.get(b),eo=St.get(O),Wn=St.get(di.__renderTarget),Xi=St.get(eo.__renderTarget);at.bindFramebuffer(D.READ_FRAMEBUFFER,Wn.__webglFramebuffer),at.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Yi=0;Yi<xt;Yi++)to&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(b).__webglTexture,z,qt+Yi),b.isDepthTexture?(Se&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(O).__webglTexture,z,ue+Yi),D.blitFramebuffer(At,Gt,lt,ut,Pt,Zt,lt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST)):Se?D.copyTexSubImage3D(Ft,z,Pt,Zt,ue+Yi,At,Gt,lt,ut):D.copyTexSubImage2D(Ft,z,Pt,Zt,ue+Yi,At,Gt,lt,ut);at.bindFramebuffer(D.READ_FRAMEBUFFER,null),at.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ft,z,Pt,Zt,ue,lt,ut,xt,Be,de,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,z,Pt,Zt,ue,lt,ut,xt,Be,fe.data):D.texSubImage3D(Ft,z,Pt,Zt,ue,lt,ut,xt,Be,de,fe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Pt,Zt,lt,ut,Be,de,fe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Pt,Zt,fe.width,fe.height,Be,fe.data):D.texSubImage2D(D.TEXTURE_2D,z,Pt,Zt,lt,ut,Be,de,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,wi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),z===0&&O.generateMipmaps&&D.generateMipmap(Ft),at.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,X=null,z=0){return b.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,W,X,z)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),at.unbindTexture()},this.resetState=function(){w=0,S=0,C=null,at.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class am extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gS extends un{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Hn,u=Hn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _h extends Js{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zf=new be,Cu=new Yp,wa=new wl,Aa=new B;class lm extends en{constructor(t=new hn,e=new _h){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=s,t.ray.intersectsSphere(wa)===!1)return;Zf.copy(i).invert(),Cu.copy(t.ray).applyMatrix4(Zf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const _=c.getX(m);Aa.fromBufferAttribute(h,_),$f(Aa,_,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,g=f;m<g;m++)Aa.fromBufferAttribute(h,m),$f(Aa,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $f(r,t,e,n,i,s,o){const a=Cu.distanceSqToPoint(r);if(a<e){const l=new B;Cu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class gh extends un{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new dt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],s=[],o=[],a=new B,l=new be;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ye(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ye(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vh extends bi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vS extends vh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ca=new B,pc=new xh,mc=new xh,_c=new xh;class xS extends bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ca.subVectors(i[0],i[1]).add(i[0]),c=Ca);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ca.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),pc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,g,_),mc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,g,_),_c.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,g,_)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),mc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),_c.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(pc.calc(l),mc.calc(l),_c.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function MS(r,t){const e=1-r;return e*e*t}function yS(r,t){return 2*(1-r)*r*t}function SS(r,t){return r*r*t}function wo(r,t,e,n){return MS(r,t)+yS(r,e)+SS(r,n)}function ES(r,t){const e=1-r;return e*e*e*t}function TS(r,t){const e=1-r;return 3*e*e*r*t}function bS(r,t){return 3*(1-r)*r*r*t}function wS(r,t){return r*r*r*t}function Ao(r,t,e,n,i){return ES(r,t)+TS(r,e)+bS(r,n)+wS(r,i)}class cm extends bi{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ao(t,i.x,s.x,o.x,a.x),Ao(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class AS extends bi{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ao(t,i.x,s.x,o.x,a.x),Ao(t,i.y,s.y,o.y,a.y),Ao(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class um extends bi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class CS extends bi{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends bi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wo(t,i.x,s.x,o.x),wo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RS extends bi{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wo(t,i.x,s.x,o.x),wo(t,i.y,s.y,o.y),wo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Jf(a,l.x,c.x,u.x,h.x),Jf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Ru=Object.freeze({__proto__:null,ArcCurve:vS,CatmullRomCurve3:xS,CubicBezierCurve:cm,CubicBezierCurve3:AS,EllipseCurve:vh,LineCurve:um,LineCurve3:CS,QuadraticBezierCurve:hm,QuadraticBezierCurve3:RS,SplineCurve:fm});class PS extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ru[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ru[i.type]().fromJSON(i))}return this}}class Pu extends PS{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new um(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hm(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new cm(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new vh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mh extends hn{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ye(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/e,h=new B,d=new dt,f=new B,m=new B,g=new B;let _=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:_=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-_,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:_=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-_,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(m)}for(let E=0;E<=e;E++){const M=n+E*u*i,v=Math.sin(M),R=Math.cos(M);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*v,h.y=t[w].y,h.z=t[w].x*R,o.push(h.x,h.y,h.z),d.x=E/e,d.y=w/(t.length-1),a.push(d.x,d.y);const S=l[3*w+0]*v,C=l[3*w+1],y=l[3*w+0]*R;c.push(S,C,y)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){const v=M+E*t.length,R=v,w=v+t.length,S=v+t.length+1,C=v+1;s.push(R,w,C),s.push(S,C,w)}this.setIndex(s),this.setAttribute("position",new we(o,3)),this.setAttribute("uv",new we(a,2)),this.setAttribute("normal",new we(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mh(t.points,t.segments,t.phiStart,t.phiLength)}}class yh extends hn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new B,u=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pl extends hn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const g=[],_=n/2;let p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function E(){const v=new B,R=new B;let w=0;const S=(e-t)/n;for(let C=0;C<=s;C++){const y=[],x=C/s,P=x*(e-t)+t;for(let N=0;N<=i;N++){const U=N/i,k=U*l+a,q=Math.sin(k),V=Math.cos(k);R.x=P*q,R.y=-x*n+_,R.z=P*V,h.push(R.x,R.y,R.z),v.set(q,S,V).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-x),y.push(m++)}g.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){const x=g[y][C],P=g[y+1][C],N=g[y+1][C+1],U=g[y][C+1];(t>0||y!==0)&&(u.push(x,P,U),w+=3),(e>0||y!==s-1)&&(u.push(P,N,U),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const R=m,w=new dt,S=new B;let C=0;const y=v===!0?t:e,x=v===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,_*x,0),d.push(0,x,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=i;N++){const k=N/i*l+a,q=Math.cos(k),V=Math.sin(k);S.x=y*V,S.y=_*x,S.z=y*q,h.push(S.x,S.y,S.z),d.push(0,x,0),w.x=q*.5+.5,w.y=V*.5*x+.5,f.push(w.x,w.y),m++}for(let N=0;N<i;N++){const U=R+N,k=P+N;v===!0?u.push(k,k+1,U):u.push(k+1,k,U),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dm extends Pu{constructor(t){super(t),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Pu().fromJSON(i))}return this}}const DS={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=pm(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=OS(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let m=e;m<i;m+=e)h=r[m],d=r[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return $o(s,o,e,a,l,f,0),o}};function pm(r,t,e,n,i){let s,o;if(i===qS(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Kf(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Kf(s,r[s],r[s+1],o);return o&&Cl(o,o.next)&&(Ko(o),o=o.next),o}function qr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Cl(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $o(r,t,e,n,i,s,o){if(!r)return;!o&&s&&VS(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?IS(r,n,i,s):LS(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ko(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=US(qr(r),t,e),$o(r,t,e,n,i,s,2)):o===2&&NS(r,t,e,n,i,s):$o(qr(r),t,e,n,i,s,1);break}}}function LS(r){const t=r.prev,e=r,n=r.next;if(Pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Es(i,a,s,l,o,c,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function IS(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Pe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,g=a>l?a>c?a:c:l>c?l:c,_=u>h?u>d?u:d:h>d?h:d,p=Du(f,m,t,e,n),E=Du(g,_,t,e,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=p&&v&&v.z<=E;){if(M.x>=f&&M.x<=g&&M.y>=m&&M.y<=_&&M!==i&&M!==o&&Es(a,u,l,h,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=g&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&Es(a,u,l,h,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=g&&M.y>=m&&M.y<=_&&M!==i&&M!==o&&Es(a,u,l,h,c,d,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&Es(a,u,l,h,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function US(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Cl(i,s)&&mm(i,n,n.next,s)&&Jo(i,s)&&Jo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ko(n),Ko(n.next),n=r=s),n=n.next}while(n!==r);return qr(n)}function NS(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&WS(o,a)){let l=_m(o,a);o=qr(o,o.next),l=qr(l,l.next),$o(o,t,e,n,i,s,0),$o(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function OS(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=pm(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(GS(c));for(i.sort(FS),s=0;s<i.length;s++)e=BS(i[s],e);return e}function FS(r,t){return r.x-t.x}function BS(r,t){const e=zS(r,t);if(!e)return t;const n=_m(e,r);return qr(n,n.next),qr(e,e.next)}function zS(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Es(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Jo(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&kS(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function kS(r,t){return Pe(r.prev,r,t.prev)<0&&Pe(t.next,r,r.next)<0}function VS(r,t,e,n){let i=r;do i.z===0&&(i.z=Du(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,HS(i)}function HS(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Du(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function GS(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Es(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function WS(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!XS(r,t)&&(Jo(r,t)&&Jo(t,r)&&YS(r,t)&&(Pe(r.prev,r,t.prev)||Pe(r,t.prev,t))||Cl(r,t)&&Pe(r.prev,r,r.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Cl(r,t){return r.x===t.x&&r.y===t.y}function mm(r,t,e,n){const i=Pa(Pe(r,t,e)),s=Pa(Pe(r,t,n)),o=Pa(Pe(e,n,r)),a=Pa(Pe(e,n,t));return!!(i!==s&&o!==a||i===0&&Ra(r,e,t)||s===0&&Ra(r,n,t)||o===0&&Ra(e,r,n)||a===0&&Ra(e,t,n))}function Ra(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Pa(r){return r>0?1:r<0?-1:0}function XS(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&mm(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Jo(r,t){return Pe(r.prev,r,r.next)<0?Pe(r,t,r.next)>=0&&Pe(r,r.prev,t)>=0:Pe(r,t,r.prev)<0||Pe(r,r.next,t)<0}function YS(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function _m(r,t){const e=new Lu(r.i,r.x,r.y),n=new Lu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Kf(r,t,e,n){const i=new Lu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ko(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Lu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qS(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Co{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Co.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];jf(t),Qf(n,t);let o=t.length;e.forEach(jf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Qf(n,e[l]);const a=DS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function jf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Qf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Sh extends hn{constructor(t=new dm([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:ZS;let M,v=!1,R,w,S,C;p&&(M=p.getSpacedPoints(u),v=!0,d=!1,R=p.computeFrenetFrames(u,!1),w=new B,S=new B,C=new B),d||(_=0,f=0,m=0,g=0);const y=a.extractPoints(c);let x=y.shape;const P=y.holes;if(!Co.isClockWise(x)){x=x.reverse();for(let et=0,Q=P.length;et<Q;et++){const D=P[et];Co.isClockWise(D)&&(P[et]=D.reverse())}}const U=Co.triangulateShape(x,P),k=x;for(let et=0,Q=P.length;et<Q;et++){const D=P[et];x=x.concat(D)}function q(et,Q,D){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(Q,D)}const V=x.length,Y=U.length;function G(et,Q,D){let Tt,nt,F;const at=et.x-Q.x,Nt=et.y-Q.y,St=D.x-et.x,A=D.y-et.y,T=at*at+Nt*Nt,H=at*A-Nt*St;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(T),j=Math.sqrt(St*St+A*A),J=Q.x-Nt/K,pt=Q.y+at/K,ht=D.x-A/j,gt=D.y+St/j,Xt=((ht-J)*A-(gt-pt)*St)/(at*A-Nt*St);Tt=J+at*Xt-et.x,nt=pt+Nt*Xt-et.y;const ot=Tt*Tt+nt*nt;if(ot<=2)return new dt(Tt,nt);F=Math.sqrt(ot/2)}else{let K=!1;at>Number.EPSILON?St>Number.EPSILON&&(K=!0):at<-Number.EPSILON?St<-Number.EPSILON&&(K=!0):Math.sign(Nt)===Math.sign(A)&&(K=!0),K?(Tt=-Nt,nt=at,F=Math.sqrt(T)):(Tt=at,nt=Nt,F=Math.sqrt(T/2))}return new dt(Tt/F,nt/F)}const rt=[];for(let et=0,Q=k.length,D=Q-1,Tt=et+1;et<Q;et++,D++,Tt++)D===Q&&(D=0),Tt===Q&&(Tt=0),rt[et]=G(k[et],k[D],k[Tt]);const L=[];let ct,Ut=rt.concat();for(let et=0,Q=P.length;et<Q;et++){const D=P[et];ct=[];for(let Tt=0,nt=D.length,F=nt-1,at=Tt+1;Tt<nt;Tt++,F++,at++)F===nt&&(F=0),at===nt&&(at=0),ct[Tt]=G(D[Tt],D[F],D[at]);L.push(ct),Ut=Ut.concat(ct)}for(let et=0;et<_;et++){const Q=et/_,D=f*Math.cos(Q*Math.PI/2),Tt=m*Math.sin(Q*Math.PI/2)+g;for(let nt=0,F=k.length;nt<F;nt++){const at=q(k[nt],rt[nt],Tt);st(at.x,at.y,-D)}for(let nt=0,F=P.length;nt<F;nt++){const at=P[nt];ct=L[nt];for(let Nt=0,St=at.length;Nt<St;Nt++){const A=q(at[Nt],ct[Nt],Tt);st(A.x,A.y,-D)}}}const $t=m+g;for(let et=0;et<V;et++){const Q=d?q(x[et],Ut[et],$t):x[et];v?(S.copy(R.normals[0]).multiplyScalar(Q.x),w.copy(R.binormals[0]).multiplyScalar(Q.y),C.copy(M[0]).add(S).add(w),st(C.x,C.y,C.z)):st(Q.x,Q.y,0)}for(let et=1;et<=u;et++)for(let Q=0;Q<V;Q++){const D=d?q(x[Q],Ut[Q],$t):x[Q];v?(S.copy(R.normals[et]).multiplyScalar(D.x),w.copy(R.binormals[et]).multiplyScalar(D.y),C.copy(M[et]).add(S).add(w),st(C.x,C.y,C.z)):st(D.x,D.y,h/u*et)}for(let et=_-1;et>=0;et--){const Q=et/_,D=f*Math.cos(Q*Math.PI/2),Tt=m*Math.sin(Q*Math.PI/2)+g;for(let nt=0,F=k.length;nt<F;nt++){const at=q(k[nt],rt[nt],Tt);st(at.x,at.y,h+D)}for(let nt=0,F=P.length;nt<F;nt++){const at=P[nt];ct=L[nt];for(let Nt=0,St=at.length;Nt<St;Nt++){const A=q(at[Nt],ct[Nt],Tt);v?st(A.x,A.y+M[u-1].y,M[u-1].x+D):st(A.x,A.y,h+D)}}}$(),it();function $(){const et=i.length/3;if(d){let Q=0,D=V*Q;for(let Tt=0;Tt<Y;Tt++){const nt=U[Tt];Ct(nt[2]+D,nt[1]+D,nt[0]+D)}Q=u+_*2,D=V*Q;for(let Tt=0;Tt<Y;Tt++){const nt=U[Tt];Ct(nt[0]+D,nt[1]+D,nt[2]+D)}}else{for(let Q=0;Q<Y;Q++){const D=U[Q];Ct(D[2],D[1],D[0])}for(let Q=0;Q<Y;Q++){const D=U[Q];Ct(D[0]+V*u,D[1]+V*u,D[2]+V*u)}}n.addGroup(et,i.length/3-et,0)}function it(){const et=i.length/3;let Q=0;Mt(k,Q),Q+=k.length;for(let D=0,Tt=P.length;D<Tt;D++){const nt=P[D];Mt(nt,Q),Q+=nt.length}n.addGroup(et,i.length/3-et,1)}function Mt(et,Q){let D=et.length;for(;--D>=0;){const Tt=D;let nt=D-1;nt<0&&(nt=et.length-1);for(let F=0,at=u+_*2;F<at;F++){const Nt=V*F,St=V*(F+1),A=Q+Tt+Nt,T=Q+nt+Nt,H=Q+nt+St,K=Q+Tt+St;Dt(A,T,H,K)}}}function st(et,Q,D){l.push(et),l.push(Q),l.push(D)}function Ct(et,Q,D){Ot(et),Ot(Q),Ot(D);const Tt=i.length/3,nt=E.generateTopUV(n,i,Tt-3,Tt-2,Tt-1);kt(nt[0]),kt(nt[1]),kt(nt[2])}function Dt(et,Q,D,Tt){Ot(et),Ot(Q),Ot(Tt),Ot(Q),Ot(D),Ot(Tt);const nt=i.length/3,F=E.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);kt(F[0]),kt(F[1]),kt(F[3]),kt(F[1]),kt(F[2]),kt(F[3])}function Ot(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function kt(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $S(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ru[i.type]().fromJSON(i)),new Sh(n,t.options)}}const ZS={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new dt(s,o),new dt(a,l),new dt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],g=t[s*3],_=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-h),new dt(d,1-m),new dt(g,1-p)]:[new dt(a,1-l),new dt(u,1-h),new dt(f,1-m),new dt(_,1-p)]}};function $S(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Rl extends hn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,f=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(i+w*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(i+w*s)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),_.push(w+v,1-M),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const M=u[p][E+1],v=u[p][E],R=u[p+1][E],w=u[p+1][E+1];(p!==0||o>0)&&f.push(M,v,w),(p!==n-1||l<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Eh extends hn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new B,h=new B,d=new B;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const g=m/i*s,_=f/n*Math.PI*2;h.x=(t+e*Math.cos(_))*Math.cos(g),h.y=(t+e*Math.cos(_))*Math.sin(g),h.z=e*Math.sin(_),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const g=(i+1)*f+m-1,_=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,E=(i+1)*f+m;o.push(g,_,E),o.push(_,p,E)}this.setIndex(o),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class JS extends Js{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ml extends JS{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gm extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const gc=new be,td=new B,ed=new B;class KS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jS extends KS{constructor(){super(new em(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nd extends gm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new jS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class QS extends gm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=id();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function id(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);const vm={original:{base:"#e3000b",shade:"#a80008",mark:"#ffffff",ribbon:"#ffffff",sub:""},zero:{base:"#151515",shade:"#000000",mark:"#e3000b",ribbon:"#e3000b",sub:"ZERO SUGAR"},diet:{base:"#d4d7dc",shade:"#9aa0a8",mark:"#e3000b",ribbon:"#e3000b",sub:"LIGHT TASTE"},cherry:{base:"#6a001a",shade:"#3a000d",mark:"#ffffff",ribbon:"#ff5c8a",sub:"CHERRY"}},Ui=2048,pi=1024;function eE(r,t,e,n,i){r.beginPath();const s=200;for(let o=0;o<=s;o++){const a=o/s*Ui,l=o/s*Math.PI*4,c=e+Math.sin(l)*n;o===0?r.moveTo(a,c):r.lineTo(a,c)}for(let o=s;o>=0;o--){const a=o/s*Ui,l=o/s*Math.PI*4,c=.55+.45*Math.cos(l),u=e+Math.sin(l)*n+i*c;r.lineTo(a,u)}r.closePath(),r.fillStyle=t,r.fill()}function rd(r,t,e,n){r.save(),r.translate(t,e),r.rotate(-.08),r.fillStyle=n.mark,r.textAlign="center",r.textBaseline="middle",r.font="170px Pacifico, cursive",r.fillText("Coca-Cola",0,0),r.restore(),n.sub&&(r.save(),r.fillStyle=n.mark,r.textAlign="center",r.font="56px Anton, Impact, sans-serif","letterSpacing"in r&&(r.letterSpacing="10px"),r.fillText(n.sub,t,e+170),r.restore())}function nE(r,t){const e=vm[r],n=document.createElement("canvas");n.width=Ui,n.height=pi;const i=n.getContext("2d"),s=i.createLinearGradient(0,0,0,pi);s.addColorStop(0,e.shade),s.addColorStop(.12,e.base),s.addColorStop(.88,e.base),s.addColorStop(1,e.shade),i.fillStyle=s,i.fillRect(0,0,Ui,pi),i.globalAlpha=.05,i.fillStyle="#ffffff";for(let a=0;a<Ui;a+=6)i.fillRect(a,0,1,pi);i.globalAlpha=1,eE(i,e.ribbon,pi*.72,38,46),rd(i,Ui*.25,pi*.44,e),rd(i,Ui*.75,pi*.44,e),i.fillStyle=e.mark,i.globalAlpha=.8,i.font="600 30px Inter, sans-serif",i.textAlign="center",i.fillText("330 ml",Ui*.5,pi*.9),i.fillText("330 ml",0,pi*.9),i.fillText("330 ml",Ui,pi*.9),i.globalAlpha=1;const o=new gh(n);return o.colorSpace=Mn,o.wrapS=Hs,o.offset.x=.25,o.anisotropy=t.capabilities.getMaxAnisotropy(),o}function iE(r=1024){const t=r,e=r,n=new Float32Array(t*e),i=new Float32Array(t*e).fill(1),s=(m,g)=>m+Math.random()*(g-m);function o(m,g,_,p,E=1){const M=Math.floor(m-_-1),v=Math.ceil(m+_+1),R=Math.max(0,Math.floor(g-p-1)),w=Math.min(e-1,Math.ceil(g+p+1));for(let S=R;S<=w;S++){const C=(S-g)/p;for(let y=M;y<=v;y++){const x=(y-m)/_,P=x*x+C*C;if(P>=1)continue;const N=(y%t+t)%t,U=S*t+N,k=Math.sqrt(1-P)*E;k>n[U]&&(n[U]=k);const q=Math.min(1,(1-P)*3);i[U]=Math.min(i[U],1-q)}}}function a(m,g,_){const p=Math.max(0,Math.floor(g-_)),E=Math.min(e-1,Math.ceil(g+_));for(let M=p;M<=E;M++)for(let v=Math.floor(m-_);v<=Math.ceil(m+_);v++){const R=Math.abs(v-m)/_;if(R>=1)continue;const w=(v%t+t)%t,S=M*t+w;i[S]=Math.min(i[S],R*R*.6),n[S]*=.15}}for(let m=0;m<9e3;m++){const g=s(.8,2.6);o(s(0,t),s(0,e),g,g*s(.9,1.15),.35)}for(let m=0;m<26;m++){let g=s(0,t);const _=s(-40,e*.55),p=s(120,520),E=s(2.5,6);for(let R=_;R<_+p&&R<e;R+=1)g+=Math.sin(R*.05+m)*.25+s(-.25,.25),a(g,R,E*2.4),o(g,R,E,2.2,.45);const M=Math.min(e-10,_+p),v=s(7,13);o(g,M,v,v*1.3,1)}for(let m=0;m<1400;m++){const g=s(2.5,7);o(s(0,t),s(0,e),g,g*s(1,1.2),s(.6,.9))}for(let m=0;m<140;m++){const g=s(8,17);o(s(0,t),s(0,e),g,g*s(1.1,1.35),1)}const l=new Uint8Array(t*e*4),c=new Uint8Array(t*e*4),u=new Uint8Array(t*e*4),h=6,d=(m,g)=>{const _=e-1-Math.min(e-1,Math.max(0,g));return n[_*t+(m+t)%t]};for(let m=0;m<e;m++)for(let g=0;g<t;g++){const _=(e-1-m)*t+g,p=(m*t+g)*4,E=(d(g+1,m)-d(g-1,m))*h,M=(d(g,m+1)-d(g,m-1))*h,v=1/Math.sqrt(E*E+M*M+1);l[p]=(-E*v*.5+.5)*255,l[p+1]=(-M*v*.5+.5)*255,l[p+2]=(v*.5+.5)*255,l[p+3]=255;const R=n[_],w=i[_],S=Math.min(1,R*6),C=.08+.5*w*(1-S);c[p]=c[p+1]=c[p+2]=C*255,c[p+3]=255;const y=w*(1-S)*255;u[p]=u[p+1]=u[p+2]=y,u[p+3]=255}const f=m=>{const g=new gS(m,t,e,Qn);return g.wrapS=Hs,g.wrapT=rr,g.magFilter=hi,g.minFilter=sr,g.generateMipmaps=!0,g.needsUpdate=!0,g};return{normal:f(l),roughness:f(c),fog:f(u)}}const mo=1,Ro=1.35,Po=-1.45;function sd(r,t=96){return new Mh(r.map(([e,n])=>new dt(e,n)),t)}function rE(r){const t=new dm,e=.26,n=.62;t.moveTo(-e,0),t.lineTo(-e,n-e),t.absarc(0,n-e,e,Math.PI,0,!0),t.lineTo(e,0),t.absarc(0,0,e,0,Math.PI,!0);const i=new Pu;i.absellipse(0,n-e-.02,.16,.13,0,Math.PI*2,!1),t.holes.push(i);const s=new Sh(t,{depth:.025,bevelEnabled:!0,bevelSize:.012,bevelThickness:.01,bevelSegments:2,curveSegments:24});s.rotateX(-Math.PI/2);const o=new Oe(s,r),a=new fi;return a.position.set(0,1.705,.05),a.add(o),a}function sE(r,t=16){const e=new Rl(1,28,20),n=new ml({color:16777215,metalness:0,roughness:.02,transmission:1,thickness:.06,ior:1.33,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,envMapIntensity:1.6}),i=(l,c)=>l+Math.random()*(c-l),s=[];function o(l,c=!1){l.theta=i(-Math.PI,Math.PI),l.y=i(c?Po+.3:.1,Ro-.1),l.v=0,l.size=i(.035,.075),l.hold=i(.5,4),l.grow=c?1:0}for(let l=0;l<t;l++){const c=new Oe(e,n),u={mesh:c};o(u,!0),s.push(u),r.add(c)}const a={rate:1,update(l){for(const c of s){c.grow=Math.min(1,c.grow+l*1.5),c.hold>0?c.hold-=l*a.rate:(c.v=Math.min(1.4,c.v+l*1.6*c.size*18),Math.random()<l*.6&&(c.v*=.2),c.y-=c.v*l,c.y<Po+.02&&o(c));const u=1+c.v*.9,h=c.size*(.2+.8*c.grow),d=mo+h*.08;c.mesh.position.set(Math.sin(c.theta)*d,c.y,Math.cos(c.theta)*d),c.mesh.rotation.y=c.theta,c.mesh.scale.set(h,h*1.15*u,h*.4)}}};return a}function oE(r){const t=new fi,e={};for(const v of Object.keys(vm))e[v]=nE(v,r);const n=iE(1024),i={};for(const[v,R]of Object.entries(n))i[v]=R.clone(),i[v].repeat.set(2,1),i[v].needsUpdate=!0;const s=new ml({map:e.original,metalness:.55,roughness:1,roughnessMap:i.roughness,normalMap:i.normal,normalScale:new dt(.5,.5),clearcoat:1,clearcoatRoughness:.04,clearcoatNormalMap:i.normal,clearcoatNormalScale:new dt(1.4,1.4),sheen:.6,sheenColor:new re(16777215),sheenColorMap:i.fog,sheenRoughness:.55,envMapIntensity:1.2}),o={};for(const v of["normal","roughness"])o[v]=n[v].clone(),o[v].repeat.set(4,.6),o[v].needsUpdate=!0;const a=new ml({color:14672872,metalness:1,roughness:.45,roughnessMap:o.roughness,normalMap:o.normal,normalScale:new dt(.15,.15),clearcoat:.6,clearcoatRoughness:.08,side:ci}),l=a.clone();l.color.set(12172997),l.roughness=.75;const c=new Oe(new pl(mo,mo,Ro-Po,128,1,!0),s);c.position.y=(Ro+Po)/2,t.add(c);const u=new Oe(sd([[mo,Ro],[.99,1.42],[.93,1.55],[.87,1.65],[.855,1.72],[.865,1.76],[.85,1.785],[.82,1.77],[.8,1.72],[.78,1.69],[0,1.69]]),a);t.add(u);const h=new Oe(sd([[0,-1.58],[.55,-1.62],[.72,-1.74],[.78,-1.765],[.86,-1.72],[.95,-1.6],[mo,Po]]),l);t.add(h);const d=new Oe(new pl(.06,.06,.03,24),a);d.position.set(0,1.7,.05),t.add(d);const f=new Oe(new Eh(.22,.008,6,48),l);f.rotation.x=-Math.PI/2,f.scale.set(1,1.35,1),f.position.set(0,1.695,.42),t.add(f);const m=new Oe(new yh(.2,32),new Xs({color:1705219,transparent:!0,opacity:0}));m.rotation.x=-Math.PI/2,m.scale.set(1,1.3,1),m.position.set(0,1.697,.42),t.add(m);const g=rE(a);t.add(g);const _=sE(t);function p(v){s.normalScale.setScalar(.5*v),s.clearcoatNormalScale.setScalar(1.4*v),s.sheen=Math.min(1,.6*v),a.normalScale.setScalar(.15*v),l.normalScale.setScalar(.15*v),_.rate=v}let E="original";function M(v){v===E||!e[v]||(E=v,s.map=e[v],s.needsUpdate=!0)}return{group:t,labelMat:s,tab:g,opening:m,setFlavor:M,setWetness:p,wetMaps:n,update:v=>_.update(v),get flavor(){return E}}}function xm(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64*.4,64*.4,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.35,"rgba(255,255,255,0.35)"),n.addColorStop(.8,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(64/2,64/2,64/2,0,Math.PI*2),e.fill();const i=new gh(t);return i.colorSpace=Mn,i}function aE(r=260){const t=new Float32Array(r*3),e=new Float32Array(r),n=new Float32Array(r),i={x:9,y:6,zMin:-6,zMax:2};for(let u=0;u<r;u++)t[u*3]=(Math.random()*2-1)*i.x,t[u*3+1]=(Math.random()*2-1)*i.y,t[u*3+2]=i.zMin+Math.random()*(i.zMax-i.zMin),e[u]=.4+Math.random()*1.1,n[u]=Math.random()*Math.PI*2;const s=new hn;s.setAttribute("position",new ti(t,3));const o=new _h({size:.14,map:xm(),transparent:!0,depthWrite:!1,opacity:.7,sizeAttenuation:!0}),a=new lm(s,o),l={speed:1};function c(u,h){const d=s.attributes.position.array;for(let f=0;f<r;f++){const m=f*3+1;d[m]+=e[f]*u*l.speed,d[f*3]+=Math.sin(h*1.5+n[f])*u*.15,d[m]>i.y&&(d[m]=-6,d[f*3]=(Math.random()*2-1)*i.x)}s.attributes.position.needsUpdate=!0}return{points:a,material:o,state:l,update:c}}function lE(r=160){const t=new Float32Array(r*3),e=new Float32Array(r*3),n=new Float32Array(r).fill(-1),i=new hn;i.setAttribute("position",new ti(t,3));const s=new _h({size:.1,map:xm(),transparent:!0,depthWrite:!1,opacity:0}),o=new lm(i,s);o.frustumCulled=!1;let a=0;function l(u){for(let h=0;h<r;h++){t[h*3]=u.x+(Math.random()-.5)*.2,t[h*3+1]=u.y,t[h*3+2]=u.z+(Math.random()-.5)*.2;const d=Math.random()*Math.PI*2,f=.6+Math.random()*2.2;e[h*3]=Math.cos(d)*f,e[h*3+1]=3+Math.random()*5,e[h*3+2]=Math.sin(d)*f,n[h]=1}a=1.6,s.opacity=1}function c(u){if(!(a<=0)){a-=u;for(let h=0;h<r;h++)n[h]<=0||(e[h*3+1]-=7*u,t[h*3]+=e[h*3]*u,t[h*3+1]+=e[h*3+1]*u,t[h*3+2]+=e[h*3+2]*u,n[h]-=u*.7);s.opacity=Math.max(0,Math.min(1,a/.8)),i.attributes.position.needsUpdate=!0}}return{points:o,fire:l,update:c}}const ao=new B;function Yn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;ao.copy(t),ao[n]=0,ao.normalize();const c=.5*o/(o+a),u=1-ao.angleTo(r)/l;return Math.sign(ao[e])===1?u*c:a/(o+a)+c+c*(1-u)}class cE extends Ks{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new B,l=new B,c=new B(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,m=new B,g=.5/i;for(let _=0,p=0;_<u.length;_+=3,p+=2)switch(a.fromArray(u,_),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[_+0]=c.x*Math.sign(a.x)+l.x*s,u[_+1]=c.y*Math.sign(a.y)+l.y*s,u[_+2]=c.z*Math.sign(a.z)+l.z*s,h[_+0]=l.x,h[_+1]=l.y,h[_+2]=l.z,Math.floor(_/f)){case 0:m.set(1,0,0),d[p+0]=Yn(m,l,"z","y",s,n),d[p+1]=1-Yn(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),d[p+0]=1-Yn(m,l,"z","y",s,n),d[p+1]=1-Yn(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),d[p+0]=1-Yn(m,l,"x","z",s,t),d[p+1]=Yn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Yn(m,l,"x","z",s,t),d[p+1]=1-Yn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[p+0]=1-Yn(m,l,"x","y",s,t),d[p+1]=1-Yn(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),d[p+0]=Yn(m,l,"x","y",s,t),d[p+1]=1-Yn(m,l,"y","x",s,e);break}}}function uE(r){const t=new cE(1,1,1,4,.16),e=t.attributes.position,n=new B;for(let i=0;i<e.count;i++){n.fromBufferAttribute(e,i);const s=Math.sin(n.x*5.1+r)*Math.cos(n.y*4.3-r)*.035+Math.sin(n.z*6.7+r*2)*.02;n.multiplyScalar(1+s),e.setXYZ(i,n.x,n.y,n.z)}return t.computeVertexNormals(),t}function hE(r){const t=new fi,e=r.clone();e.repeat.set(.6,.6),e.wrapT=Hs,e.needsUpdate=!0;const n=new ml({color:528920,metalness:0,roughness:.04,clearcoat:1,clearcoatRoughness:.02,clearcoatNormalMap:e,clearcoatNormalScale:new dt(.8,.8),normalMap:e,normalScale:new dt(.4,.4),sheen:.6,sheenColor:new re(8177919),sheenRoughness:.3,envMapIntensity:1.3,transparent:!0,depthWrite:!1,blending:wp,blendSrc:Ya,blendDst:Ya,blendSrcAlpha:Ap,blendDstAlpha:Ya}),s=[{p:[-2.25,1.3,.8],s:.62},{p:[2.35,-.9,1.1],s:.72},{p:[1.9,1.9,-1.6],s:.5},{p:[-2,-1.7,-1],s:.55},{p:[-.6,-2.35,1.6],s:.42},{p:[.9,2.5,.6],s:.36}].map(({p:l,s:c},u)=>{const h=new Oe(uE(u*1.7),n);return h.position.set(...l),h.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),t.add(h),{mesh:h,base:new B(...l),size:c,spin:new B(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.6),phase:Math.random()*Math.PI*2}}),o={show:1};function a(l,c,u){if(t.visible=o.show>.001,!!t.visible)for(const h of s){h.mesh.rotation.x+=h.spin.x*l,h.mesh.rotation.y+=h.spin.y*l,h.mesh.rotation.z+=h.spin.z*l;const d=1+h.base.z*.25;h.mesh.position.set(h.base.x*(.6+.4*o.show)+u.x*.25*d,h.base.y*(.6+.4*o.show)+Math.sin(c*.9+h.phase)*.15-u.y*.2*d,h.base.z),h.mesh.scale.setScalar(h.size*o.show)}}return{group:t,state:o,update:a}}function fE(){const r=document.createElement("canvas");r.width=256,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(128,32,0,128,32,128);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.4,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.setTransform(1,0,0,.25,0,24),t.fillRect(0,-96,256,256);const n=new gh(r),i=new Oe(new js(3.2,.8),new Xs({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return i.renderOrder=-1,i}function dE(r){const t=new am;t.add(new Oe(new Rl(30,32,16),new Xs({color:855312,side:Tn})));const e=(s,o,a,l,c,u=[0,0,0])=>{const h=new Xs({color:l,side:ci});h.color.multiplyScalar(a);const d=new Oe(new js(s,o),h);d.position.set(...c),d.lookAt(...u),t.add(d)};e(1.6,14,9,16777215,[-6,0,3]),e(1,14,6,16774380,[6,0,2.5]),e(10,4,2.5,16777215,[0,9,1]),e(8,8,.7,16726832,[0,-1,-9]),e(14,6,.6,12576511,[0,-2,10]);const n=new wu(r),i=n.fromScene(t,.02).texture;return n.dispose(),i}function pE(r,{reducedMotion:t=!1}={}){const e=new _S({canvas:r,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Mn,e.toneMapping=Rp,e.toneMappingExposure=1.05;const n=new am;n.environment=dE(e);const i=new Zn(35,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,0,12);const s=new nd(16777215,1.1);s.position.set(4,6,6),n.add(s);const o=new nd(16769248,2.2);o.position.set(-6,2,-4),n.add(o),n.add(new QS(16777215,.15));const a=oE(e),l=new fi,c=new fi,u=new fi;u.add(a.group),c.add(u),l.add(c),n.add(l);const h=aE(t?0:260);n.add(h.points);const d=lE();n.add(d.points);const f=new fi;n.add(f);const m=hE(a.wetMaps.normal);f.add(m.group);const g=fE();g.position.set(0,-2.3,-.5),f.add(g);const _={amount:1},p={x:0,y:0,rotY:0,rotZ:0,scale:1,spin:0},E={y:0,spin:0,scale:1,ice:1},M={x:0,y:0,tx:0,ty:0};function v(){const U=2*i.position.z*Math.tan(nf.degToRad(i.fov/2));return{w:U*i.aspect,h:U}}function R(){const{w:U}=v();return Math.min(1.25,U/5.2)}window.addEventListener("pointermove",U=>{M.tx=U.clientX/window.innerWidth*2-1,M.ty=U.clientY/window.innerHeight*2-1});function w(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",w);const S=new tE;let C=0;function y(){const U=Math.min(S.getDelta(),.05),k=S.elapsedTime,{w:q,h:V}=v();M.x+=(M.tx-M.x)*.06,M.y+=(M.ty-M.y)*.06,l.position.set(p.x*q/2,p.y*V/2+E.y,0),l.rotation.set(0,p.rotY,p.rotZ),l.scale.setScalar(p.scale*E.scale*R()),f.position.copy(l.position),f.scale.copy(l.scale),t||(C+=U*.35,c.position.y=Math.sin(k*1.2)*.12,c.rotation.x=M.y*.25+Math.sin(k*.8)*.04,c.rotation.z=-M.x*.18),u.rotation.y=C+p.spin+E.spin+M.x*.4;const Y=c.position.y+E.y*.5;g.scale.set(1-Y*.5,1-Y*.5,1),g.material.opacity=nf.clamp(.9-Y*1.5,0,.9)*m.state.show,a.setWetness(_.amount),a.update(t?0:U),m.update(t?0:U,k,M),h.update(U,k),d.update(U),e.render(n,i)}function x(){S.getDelta(),e.setAnimationLoop(y)}function P(){e.setAnimationLoop(null)}document.addEventListener("visibilitychange",()=>document.hidden?P():x());function N(){const U=new B;return a.opening.getWorldPosition(U),U}return{renderer:e,scene:n,camera:i,can:a,bubbles:h,burst:d,ice:m,wet:_,canState:p,intro:E,start:x,openingWorldPosition:N}}function mE(r){const t=r.textContent;r.textContent="";for(const e of t){const n=document.createElement("span");n.className="char",n.textContent=e===" "?" ":e,n.setAttribute("aria-hidden","true"),r.appendChild(n)}}function _E(r,{reducedMotion:t}){if(document.querySelectorAll("[data-split]").forEach(mE),t)return ke.timeline();const e=ke.timeline({defaults:{ease:"expo.out"}});return ke.set(r.intro,{y:9,spin:-Math.PI*3,scale:.6}),e.to(r.intro,{y:0,duration:1.8,ease:"elastic.out(1, 0.55)"},0).to(r.intro,{spin:0,duration:2.2,ease:"power4.out"},0).to(r.intro,{scale:1,duration:1.6,ease:"back.out(1.6)"},.1).fromTo(r.intro,{ice:0},{ice:1,duration:1.6,ease:"back.out(1.4)"},.7),e.from(".hero__line .char",{yPercent:110,rotate:8,duration:1.2,stagger:.04},.25),e.from(".nav, .hero__meta",{opacity:0,y:-16,duration:1,stagger:.1},.9),e}function gE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vE(r,t,e){return t&&gE(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn,Qa,zn,or,ar,Ds,Mm,Pr,Do,ym,zi,ai,Sm,Em=function(){return tn||typeof window<"u"&&(tn=window.gsap)&&tn.registerPlugin&&tn},Tm=1,Ts=[],ie=[],Si=[],Lo=Date.now,Iu=function(t,e){return e},xE=function(){var t=Do.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,Si),ie=n,Si=i,Iu=function(o,a){return e[o](a)}},fr=function(t,e){return~Si.indexOf(t)&&Si[Si.indexOf(t)+1][e]},Io=function(t){return!!~ym.indexOf(t)},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Da="scrollLeft",La="scrollTop",Uu=function(){return zi&&zi.isPressed||ie.cache++},_l=function(t,e){var n=function i(s){if(s||s===0){Tm&&(zn.history.scrollRestoration="manual");var o=zi&&zi.isPressed;s=i.v=Math.round(s)||(zi&&zi.iOS?1:0),t(s),i.cacheID=ie.cache,o&&Iu("ss",s)}else(e||ie.cache!==i.cacheID||Iu("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:Da,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_l(function(r){return arguments.length?zn.scrollTo(r,Xe.sc()):zn.pageXOffset||or[Da]||ar[Da]||Ds[Da]||0})},Xe={s:La,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:_l(function(r){return arguments.length?zn.scrollTo(Sn.sc(),r):zn.pageYOffset||or[La]||ar[La]||Ds[La]||0})},bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||tn.utils.toArray)(t)[0]||(typeof t=="string"&&tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},gr=function(t,e){var n=e.s,i=e.sc;Io(t)&&(t=or.scrollingElement||ar);var s=ie.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=ie.push(t)-1),ie[s+o]||mn(t,"scroll",Uu);var a=ie[s+o],l=a||(ie[s+o]=_l(fr(t,n),!0)||(Io(t)?i:_l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=tn.getProperty(t,"scrollBehavior")==="smooth"),l},Nu=function(t,e,n){var i=t,s=t,o=Lo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(m,g){var _=Lo();g||_-o>l?(s=i,i=m,a=o,o=_):n?i+=m:i=s+(m-s)/(_-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(m){var g=a,_=s,p=Lo();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?_:-_))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},lo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},od=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},bm=function(){Do=tn.core.globals().ScrollTrigger,Do&&Do.core&&xE()},wm=function(t){return tn=t||Em(),!Qa&&tn&&typeof document<"u"&&document.body&&(zn=window,or=document,ar=or.documentElement,Ds=or.body,ym=[zn,or,ar,Ds],tn.utils.clamp,Sm=tn.core.context||function(){},Pr="onpointerenter"in Ds?"pointer":"mouse",Mm=Fe.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Fe.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tm=0},500),bm(),Qa=1),Qa};Sn.op=Xe;ie.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Qa||wm(tn)||console.warn("Please gsap.registerPlugin(Observer)"),Do||bm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,g=n.event,_=n.onDragStart,p=n.onDragEnd,E=n.onDrag,M=n.onPress,v=n.onRelease,R=n.onRight,w=n.onLeft,S=n.onUp,C=n.onDown,y=n.onChangeX,x=n.onChangeY,P=n.onChange,N=n.onToggleX,U=n.onToggleY,k=n.onHover,q=n.onHoverEnd,V=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,rt=n.onGestureStart,L=n.onGestureEnd,ct=n.onWheel,Ut=n.onEnable,$t=n.onDisable,$=n.onClick,it=n.scrollSpeed,Mt=n.capture,st=n.allowClicks,Ct=n.lockAxis,Dt=n.onLockAxis;this.target=a=bn(a)||ar,this.vars=n,f&&(f=tn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(Ds).lineHeight)||22);var Ot,kt,et,Q,D,Tt,nt,F=this,at=0,Nt=0,St=n.passive||!u,A=gr(a,Sn),T=gr(a,Xe),H=A(),K=T(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ai[0]==="pointerdown",J=Io(a),pt=a.ownerDocument||or,ht=[0,0,0],gt=[0,0,0],Xt=0,ot=function(){return Xt=Lo()},ft=function(Lt,jt){return(F.event=Lt)&&f&&~f.indexOf(Lt.target)||jt&&j&&Lt.pointerType!=="touch"||Y&&Y(Lt,jt)},zt=function(){F._vx.reset(),F._vy.reset(),kt.pause(),h&&h(F)},Bt=function(){var Lt=F.deltaX=od(ht),jt=F.deltaY=od(gt),yt=Math.abs(Lt)>=i,Yt=Math.abs(jt)>=i;P&&(yt||Yt)&&P(F,Lt,jt,ht,gt),yt&&(R&&F.deltaX>0&&R(F),w&&F.deltaX<0&&w(F),y&&y(F),N&&F.deltaX<0!=at<0&&N(F),at=F.deltaX,ht[0]=ht[1]=ht[2]=0),Yt&&(C&&F.deltaY>0&&C(F),S&&F.deltaY<0&&S(F),x&&x(F),U&&F.deltaY<0!=Nt<0&&U(F),Nt=F.deltaY,gt[0]=gt[1]=gt[2]=0),(Q||et)&&(V&&V(F),et&&(E(F),et=!1),Q=!1),Tt&&!(Tt=!1)&&Dt&&Dt(F),D&&(ct(F),D=!1),Ot=0},wt=function(Lt,jt,yt){ht[yt]+=Lt,gt[yt]+=jt,F._vx.update(Lt),F._vy.update(jt),c?Ot||(Ot=requestAnimationFrame(Bt)):Bt()},Kt=function(Lt,jt){Ct&&!nt&&(F.axis=nt=Math.abs(Lt)>Math.abs(jt)?"x":"y",Tt=!0),nt!=="y"&&(ht[2]+=Lt,F._vx.update(Lt,!0)),nt!=="x"&&(gt[2]+=jt,F._vy.update(jt,!0)),c?Ot||(Ot=requestAnimationFrame(Bt)):Bt()},Vt=function(Lt){if(!ft(Lt,1)){Lt=lo(Lt,u);var jt=Lt.clientX,yt=Lt.clientY,Yt=jt-F.x,It=yt-F.y,Wt=F.isDragging;F.x=jt,F.y=yt,(Wt||Math.abs(F.startX-jt)>=s||Math.abs(F.startY-yt)>=s)&&(E&&(et=!0),Wt||(F.isDragging=!0),Kt(Yt,It),Wt||_&&_(F))}},ae=F.onPress=function(bt){ft(bt,1)||bt&&bt.button||(F.axis=nt=null,kt.pause(),F.isPressed=!0,bt=lo(bt),at=Nt=0,F.startX=F.x=bt.clientX,F.startY=F.y=bt.clientY,F._vx.reset(),F._vy.reset(),mn(G?a:pt,ai[1],Vt,St,!0),F.deltaX=F.deltaY=0,M&&M(F))},I=F.onRelease=function(bt){if(!ft(bt,1)){dn(G?a:pt,ai[1],Vt,!0);var Lt=!isNaN(F.y-F.startY),jt=F.isDragging,yt=jt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Yt=lo(bt);!yt&&Lt&&(F._vx.reset(),F._vy.reset(),u&&st&&tn.delayedCall(.08,function(){if(Lo()-Xt>300&&!bt.defaultPrevented){if(bt.target.click)bt.target.click();else if(pt.createEvent){var It=pt.createEvent("MouseEvents");It.initMouseEvent("click",!0,!0,zn,1,Yt.screenX,Yt.screenY,Yt.clientX,Yt.clientY,!1,!1,!1,!1,0,null),bt.target.dispatchEvent(It)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&jt&&!G&&kt.restart(!0),p&&jt&&p(F),v&&v(F,yt)}},_t=function(Lt){return Lt.touches&&Lt.touches.length>1&&(F.isGesturing=!0)&&rt(Lt,F.isDragging)},Z=function(){return(F.isGesturing=!1)||L(F)},tt=function(Lt){if(!ft(Lt)){var jt=A(),yt=T();wt((jt-H)*it,(yt-K)*it,1),H=jt,K=yt,h&&kt.restart(!0)}},mt=function(Lt){if(!ft(Lt)){Lt=lo(Lt,u),ct&&(D=!0);var jt=(Lt.deltaMode===1?l:Lt.deltaMode===2?zn.innerHeight:1)*m;wt(Lt.deltaX*jt,Lt.deltaY*jt,0),h&&!G&&kt.restart(!0)}},vt=function(Lt){if(!ft(Lt)){var jt=Lt.clientX,yt=Lt.clientY,Yt=jt-F.x,It=yt-F.y;F.x=jt,F.y=yt,Q=!0,h&&kt.restart(!0),(Yt||It)&&Kt(Yt,It)}},Ht=function(Lt){F.event=Lt,k(F)},ce=function(Lt){F.event=Lt,q(F)},De=function(Lt){return ft(Lt)||lo(Lt,u)&&$(F)};kt=F._dc=tn.delayedCall(d||.25,zt).pause(),F.deltaX=F.deltaY=0,F._vx=Nu(0,50,!0),F._vy=Nu(0,50,!0),F.scrollX=A,F.scrollY=T,F.isDragging=F.isGesturing=F.isPressed=!1,Sm(this),F.enable=function(bt){return F.isEnabled||(mn(J?pt:a,"scroll",Uu),o.indexOf("scroll")>=0&&mn(J?pt:a,"scroll",tt,St,Mt),o.indexOf("wheel")>=0&&mn(a,"wheel",mt,St,Mt),(o.indexOf("touch")>=0&&Mm||o.indexOf("pointer")>=0)&&(mn(a,ai[0],ae,St,Mt),mn(pt,ai[2],I),mn(pt,ai[3],I),st&&mn(a,"click",ot,!0,!0),$&&mn(a,"click",De),rt&&mn(pt,"gesturestart",_t),L&&mn(pt,"gestureend",Z),k&&mn(a,Pr+"enter",Ht),q&&mn(a,Pr+"leave",ce),V&&mn(a,Pr+"move",vt)),F.isEnabled=!0,bt&&bt.type&&ae(bt),Ut&&Ut(F)),F},F.disable=function(){F.isEnabled&&(Ts.filter(function(bt){return bt!==F&&Io(bt.target)}).length||dn(J?pt:a,"scroll",Uu),F.isPressed&&(F._vx.reset(),F._vy.reset(),dn(G?a:pt,ai[1],Vt,!0)),dn(J?pt:a,"scroll",tt,Mt),dn(a,"wheel",mt,Mt),dn(a,ai[0],ae,Mt),dn(pt,ai[2],I),dn(pt,ai[3],I),dn(a,"click",ot,!0),dn(a,"click",De),dn(pt,"gesturestart",_t),dn(pt,"gestureend",Z),dn(a,Pr+"enter",Ht),dn(a,Pr+"leave",ce),dn(a,Pr+"move",vt),F.isEnabled=F.isPressed=F.isDragging=!1,$t&&$t(F))},F.kill=F.revert=function(){F.disable();var bt=Ts.indexOf(F);bt>=0&&Ts.splice(bt,1),zi===F&&(zi=0)},Ts.push(F),G&&Io(a)&&(zi=F),F.enable(g)},vE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.12.5";Fe.create=function(r){return new Fe(r)};Fe.register=wm;Fe.getAll=function(){return Ts.slice()};Fe.getById=function(r){return Ts.filter(function(t){return t.vars.id===r})[0]};Em()&&tn.registerPlugin(Fe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rt,vs,se,Ae,li,Ee,Am,gl,jo,Uo,_o,Ia,sn,Pl,Ou,vn,ad,ld,xs,Cm,vc,Rm,gn,Fu,Pm,Dm,Qi,Bu,Th,Ls,bh,vl,zu,xc,Ua=1,on=Date.now,Mc=on(),ei=0,go=0,cd=function(t,e,n){var i=On(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},ud=function(t,e){return e&&(!On(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ME=function r(){return go&&requestAnimationFrame(r)},hd=function(){return Pl=1},fd=function(){return Pl=0},_i=function(t){return t},vo=function(t){return Math.round(t*1e5)/1e5||0},Lm=function(){return typeof window<"u"},Im=function(){return Rt||Lm()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Zr=function(t){return!!~Am.indexOf(t)},Um=function(t){return(t==="Height"?bh:se["inner"+t])||li["client"+t]||Ee["client"+t]},Nm=function(t){return fr(t,"getBoundingClientRect")||(Zr(t)?function(){return rl.width=se.innerWidth,rl.height=bh,rl}:function(){return Oi(t)})},yE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=fr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Um(s):t["client"+s])||0}},SE=function(t,e){return!e||~Si.indexOf(t)?Nm(t):function(){return rl}},Mi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=fr(t,n))?o()-Nm(t)()[s]:Zr(t)?(li[n]||Ee[n])-Um(i):t[n]-t["offset"+i])},Na=function(t,e){for(var n=0;n<xs.length;n+=3)(!e||~e.indexOf(xs[n+1]))&&t(xs[n],xs[n+1],xs[n+2])},On=function(t){return typeof t=="string"},En=function(t){return typeof t=="function"},xo=function(t){return typeof t=="number"},Dr=function(t){return typeof t=="object"},co=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},yc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ms=Math.abs,Om="left",Fm="top",wh="right",Ah="bottom",kr="width",Vr="height",No="Right",Oo="Left",Fo="Top",Bo="Bottom",Ve="padding",$n="margin",qs="Width",Ch="Height",We="px",Jn=function(t){return se.getComputedStyle(t)},EE=function(t){var e=Jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Oi=function(t,e){var n=e&&Jn(t)[Ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Bm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},TE=function(t){return function(e){return Rt.utils.snap(Bm(t),e)}},Rh=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},bE=function(t){return function(e,n){return Rh(Bm(t))(e,n.direction)}},Oa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Fa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ba={toggleActions:"play",anticipatePin:0},Ml={top:0,left:0,center:.5,bottom:1,right:1},tl=function(t,e){if(On(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ml?Ml[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},za=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,m=Ae.createElement("div"),g=Zr(n)||fr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,p=g?Ee:n,E=t.indexOf("start")!==-1,M=E?c:u,v="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(v+=(i===Xe?wh:Ah)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=E,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],el(m,0,i,E),m},el=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+qs]=1,s["border"+a+qs]=0,s[n.p]=e+"px",Rt.set(t,s)},ne=[],ku={},Qo,md=function(){return on()-ei>34&&(Qo||(Qo=requestAnimationFrame(Vi)))},_s=function(){(!gn||!gn.isPressed||gn.startX>Ee.clientWidth)&&(ie.cache++,gn?Qo||(Qo=requestAnimationFrame(Vi)):Vi(),ei||Jr("scrollStart"),ei=on())},Sc=function(){Dm=se.innerWidth,Pm=se.innerHeight},Mo=function(){ie.cache++,!sn&&!Rm&&!Ae.fullscreenElement&&!Ae.webkitFullscreenElement&&(!Fu||Dm!==se.innerWidth||Math.abs(se.innerHeight-Pm)>se.innerHeight*.25)&&gl.restart(!0)},$r={},wE=[],zm=function r(){return Je(Jt,"scrollEnd",r)||Nr(!0)},Jr=function(t){return $r[t]&&$r[t].map(function(e){return e()})||wE},Nn=[],km=function(t){for(var e=0;e<Nn.length;e+=5)(!t||Nn[e+4]&&Nn[e+4].query===t)&&(Nn[e].style.cssText=Nn[e+1],Nn[e].getBBox&&Nn[e].setAttribute("transform",Nn[e+2]||""),Nn[e+3].uncache=1)},Ph=function(t,e){var n;for(vn=0;vn<ne.length;vn++)n=ne[vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));vl=!0,e&&km(e),e||Jr("revert")},Vm=function(t,e){ie.cache++,(e||!xn)&&ie.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),On(t)&&(se.history.scrollRestoration=Th=t)},xn,Hr=0,_d,AE=function(){if(_d!==Hr){var t=_d=Hr;requestAnimationFrame(function(){return t===Hr&&Nr(!0)})}},Hm=function(){Ee.appendChild(Ls),bh=!gn&&Ls.offsetHeight||se.innerHeight,Ee.removeChild(Ls)},gd=function(t){return jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Nr=function(t,e){if(ei&&!t&&!vl){Ke(Jt,"scrollEnd",zm);return}Hm(),xn=Jt.isRefreshing=!0,ie.forEach(function(i){return En(i)&&++i.cacheID&&(i.rec=i())});var n=Jr("refreshInit");Cm&&Jt.sort(),e||Ph(),ie.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),vl=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),zu=1,gd(!0),ne.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),gd(!1),zu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vm(Th,1),gl.pause(),Hr++,xn=2,Vi(2),ne.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=Jt.isRefreshing=!1,Jr("refresh")},Vu=0,nl=1,zo,Vi=function(t){if(t===2||!xn&&!vl){Jt.isUpdating=!0,zo&&zo.update(0);var e=ne.length,n=on(),i=n-Mc>=50,s=e&&ne[0].scroll();if(nl=Vu>s?-1:1,xn||(Vu=s),i&&(ei&&!Pl&&n-ei>200&&(ei=0,Jr("scrollEnd")),_o=Mc,Mc=n),nl<0){for(vn=e;vn-- >0;)ne[vn]&&ne[vn].update(0,i);nl=1}else for(vn=0;vn<e;vn++)ne[vn]&&ne[vn].update(0,i);Jt.isUpdating=!1}Qo=0},Hu=[Om,Fm,Ah,wh,$n+Bo,$n+No,$n+Fo,$n+Oo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],il=Hu.concat([kr,Vr,"boxSizing","max"+qs,"max"+Ch,"position",$n,Ve,Ve+Fo,Ve+No,Ve+Bo,Ve+Oo]),CE=function(t,e,n){Is(n);var i=t._gsap;if(i.spacerIsNative)Is(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ec=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Hu.length,o=e.style,a=t.style,l;s--;)l=Hu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ah]=a[wh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[kr]=xl(t,Sn)+We,o[Vr]=xl(t,Xe)+We,o[Ve]=a[$n]=a[Fm]=a[Om]="0",Is(i),a[kr]=a["max"+qs]=n[kr],a[Vr]=a["max"+Ch]=n[Vr],a[Ve]=n[Ve],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},RE=/([A-Z])/g,Is=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(RE,"-$1").toLowerCase())}},ka=function(t){for(var e=il.length,n=t.style,i=[],s=0;s<e;s++)i.push(il[s],n[il[s]]);return i.t=t,i},PE=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},rl={left:0,top:0},vd=function(t,e,n,i,s,o,a,l,c,u,h,d,f,m){En(t)&&(t=t(l)),On(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?tl("0"+t.substr(3),n):0));var g=f?f.time():0,_,p,E;if(f&&f.seek(0),isNaN(t)||(t=+t),xo(t))f&&(t=Rt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&el(a,n,i,!0);else{En(e)&&(e=e(l));var M=(t||"0").split(" "),v,R,w,S;E=bn(e,l)||Ee,v=Oi(E)||{},(!v||!v.left&&!v.top)&&Jn(E).display==="none"&&(S=E.style.display,E.style.display="block",v=Oi(E),S?E.style.display=S:E.style.removeProperty("display")),R=tl(M[0],v[i.d]),w=tl(M[1]||"0",n),t=v[i.p]-c[i.p]-u+R+s-w,a&&el(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var C=t+n,y=o._isStart;_="scroll"+i.d2,el(o,C,i,y&&C>20||!y&&(h?Math.max(Ee[_],li[_]):o.parentNode[_])<=C+1),h&&(c=Oi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+We))}return f&&E&&(_=Oi(E),f.seek(d),p=Oi(E),f._caScrollDist=_[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},DE=/(webkit|moz|length|cssText|inset)/i,xd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ee){t._stOrig=s.cssText,a=Jn(t);for(o in a)!+o&&!DE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Gm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Va=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Md=function(t,e){var n=gr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,m={};c=c||n();var g=Gm(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&Vi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Rt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ke(t,"wheel",n.wheelHandler),Jt.isTouch&&Ke(t,"touchmove",n.wheelHandler),s},Jt=function(){function r(e,n){vs||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!go){this.update=this.refresh=this.kill=_i;return}n=dd(On(n)||xo(n)||n.nodeType?{trigger:n}:n,Ba);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,M=s.once,v=s.snap,R=s.pinReparent,w=s.pinSpacer,S=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Xe,P=!h&&h!==0,N=bn(n.scroller||se),U=Rt.core.getCache(N),k=Zr(N),q=("pinType"in n?n.pinType:fr(N,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Ba.markers,rt=k?0:parseFloat(Jn(N)["border"+x.p2+qs])||0,L=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ut=yE(N,k,x),$t=SE(N,k),$=0,it=0,Mt=0,st=gr(N,x),Ct,Dt,Ot,kt,et,Q,D,Tt,nt,F,at,Nt,St,A,T,H,K,j,J,pt,ht,gt,Xt,ot,ft,zt,Bt,wt,Kt,Vt,ae,I,_t,Z,tt,mt,vt,Ht,ce;if(L._startClamp=L._endClamp=!1,L._dir=x,_*=45,L.scroller=N,L.scroll=S?S.time.bind(S):st,kt=st(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cm=1,n.refreshPriority===-9999&&(zo=L)),U.tweenScroll=U.tweenScroll||{top:Md(N,Xe),left:Md(N,Sn)},L.tweenTo=Ct=U.tweenScroll[x.p],L.scrubDuration=function(yt){_t=xo(yt)&&yt,_t?I?I.duration(yt):I=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_t,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Vt=0,l||(l=i.vars.id)),v&&((!Dr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ee.style&&Rt.set(k?[Ee,li]:N,{scrollBehavior:"auto"}),ie.forEach(function(yt){return En(yt)&&yt.target===(k?Ae.scrollingElement||li:N)&&(yt.smooth=!1)}),Ot=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?TE(i):v.snapTo==="labelsDirectional"?bE(i):v.directional!==!1?function(yt,Yt){return Rh(v.snapTo)(yt,on()-it<500?0:Yt.direction)}:Rt.utils.snap(v.snapTo),Z=v.duration||{min:.1,max:2},Z=Dr(Z)?Uo(Z.min,Z.max):Uo(Z,Z),tt=Rt.delayedCall(v.delay||_t/2||.1,function(){var yt=st(),Yt=on()-it<500,It=Ct.tween;if((Yt||Math.abs(L.getVelocity())<10)&&!It&&!Pl&&$!==yt){var Wt=(yt-Q)/A,Ue=i&&!P?i.totalProgress():Wt,ee=Yt?0:(Ue-ae)/(on()-_o)*1e3||0,xe=Rt.utils.clamp(-Wt,1-Wt,ms(ee/2)*ee/.185),Ge=Wt+(v.inertia===!1?0:xe),_e,ge,he=v,Dn=he.onStart,ye=he.onInterrupt,fn=he.onComplete;if(_e=Ot(Ge,L),xo(_e)||(_e=Ge),ge=Math.round(Q+_e*A),yt<=D&&yt>=Q&&ge!==yt){if(It&&!It._initted&&It.data<=ms(ge-yt))return;v.inertia===!1&&(xe=_e-Wt),Ct(ge,{duration:Z(ms(Math.max(ms(Ge-Ue),ms(_e-Ue))*.185/ee/.05||0)),ease:v.ease||"power3",data:ms(ge-yt),onInterrupt:function(){return tt.restart(!0)&&ye&&ye(L)},onComplete:function(){L.update(),$=st(),i&&(I?I.resetTo("totalProgress",_e,i._tTime/i._tDur):i.progress(_e)),Vt=ae=i&&!P?i.totalProgress():L.progress,E&&E(L),fn&&fn(L)}},yt,xe*A,ge-yt-xe*A),Dn&&Dn(L,Ct.tween)}}else L.isActive&&$!==yt&&tt.restart(!0)}).pause()),l&&(ku[l]=L),d=L.trigger=bn(d||f!==!0&&f),ce=d&&d._gsap&&d._gsap.stRevert,ce&&(ce=ce(L)),f=f===!0?d:bn(f),On(a)&&(a={targets:d,className:a}),f&&(m===!1||m===$n||(m=!m&&f.parentNode&&f.parentNode.style&&Jn(f.parentNode).display==="flex"?!1:Ve),L.pin=f,Dt=Rt.core.getCache(f),Dt.spacer?T=Dt.pinState:(w&&(w=bn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Dt.spacerIsNative=!!w,w&&(Dt.spacerState=ka(w))),Dt.spacer=j=w||Ae.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Dt.pinState=T=ka(f)),n.force3D!==!1&&Rt.set(f,{force3D:!0}),L.spacer=j=Dt.spacer,Kt=Jn(f),ot=Kt[m+x.os2],pt=Rt.getProperty(f),ht=Rt.quickSetter(f,x.a,We),Ec(f,j,Kt),K=ka(f)),G){Nt=Dr(G)?dd(G,pd):pd,F=za("scroller-start",l,N,x,Nt,0),at=za("scroller-end",l,N,x,Nt,0,F),J=F["offset"+x.op.d2];var De=bn(fr(N,"content")||N);Tt=this.markerStart=za("start",l,De,x,Nt,J,0,S),nt=this.markerEnd=za("end",l,De,x,Nt,J,0,S),S&&(Ht=Rt.quickSetter([Tt,nt],x.a,We)),!q&&!(Si.length&&fr(N,"fixedMarkers")===!0)&&(EE(k?Ee:N),Rt.set([F,at],{force3D:!0}),zt=Rt.quickSetter(F,x.a,We),wt=Rt.quickSetter(at,x.a,We))}if(S){var bt=S.vars.onUpdate,Lt=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){L.update(0,0,1),bt&&bt.apply(S,Lt||[])})}if(L.previous=function(){return ne[ne.indexOf(L)-1]},L.next=function(){return ne[ne.indexOf(L)+1]},L.revert=function(yt,Yt){if(!Yt)return L.kill(!0);var It=yt!==!1||!L.enabled,Wt=sn;It!==L.isReverted&&(It&&(mt=Math.max(st(),L.scroll.rec||0),Mt=L.progress,vt=i&&i.progress()),Tt&&[Tt,nt,F,at].forEach(function(Ue){return Ue.style.display=It?"none":"block"}),It&&(sn=L,L.update(It)),f&&(!R||!L.isActive)&&(It?CE(f,j,T):Ec(f,j,Jn(f),ft)),It||L.update(It),sn=Wt,L.isReverted=It)},L.refresh=function(yt,Yt,It,Wt){if(!((sn||!L.enabled)&&!Yt)){if(f&&yt&&ei){Ke(r,"scrollEnd",zm);return}!xn&&ct&&ct(L),sn=L,Ct.tween&&!It&&(Ct.tween.kill(),Ct.tween=0),I&&I.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ue=Ut(),ee=$t(),xe=S?S.duration():Mi(N,x),Ge=A<=.01,_e=0,ge=Wt||0,he=Dr(It)?It.end:n.end,Dn=n.endTrigger||d,ye=Dr(It)?It.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),fn=L.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,L),b=d&&Math.max(0,ne.indexOf(L))||0,O=b,W,X,z,lt,ut,xt,At,Gt,qt,Pt,Zt,ue,fe;for(G&&Dr(It)&&(ue=Rt.getProperty(F,x.p),fe=Rt.getProperty(at,x.p));O--;)xt=ne[O],xt.end||xt.refresh(0,1)||(sn=L),At=xt.pin,At&&(At===d||At===f||At===fn)&&!xt.isReverted&&(Pt||(Pt=[]),Pt.unshift(xt),xt.revert(!0,!0)),xt!==ne[O]&&(b--,O--);for(En(ye)&&(ye=ye(L)),ye=cd(ye,"start",L),Q=vd(ye,d,Ue,x,st(),Tt,F,L,ee,rt,q,xe,S,L._startClamp&&"_startClamp")||(f?-.001:0),En(he)&&(he=he(L)),On(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(On(ye)?ye.split(" ")[0]:"")+he:(_e=tl(he.substr(2),Ue),he=On(ye)?ye:(S?Rt.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,Q):Q)+_e,Dn=d)),he=cd(he,"end",L),D=Math.max(Q,vd(he||(Dn?"100% 0":xe),Dn,Ue,x,st()+_e,nt,at,L,ee,rt,q,xe,S,L._endClamp&&"_endClamp"))||-.001,_e=0,O=b;O--;)xt=ne[O],At=xt.pin,At&&xt.start-xt._pinPush<=Q&&!S&&xt.end>0&&(W=xt.end-(L._startClamp?Math.max(0,xt.start):xt.start),(At===d&&xt.start-xt._pinPush<Q||At===fn)&&isNaN(ye)&&(_e+=W*(1-xt.progress)),At===f&&(ge+=W));if(Q+=_e,D+=_e,L._startClamp&&(L._startClamp+=_e),L._endClamp&&!xn&&(L._endClamp=D||-.001,D=Math.min(D,Mi(N,x))),A=D-Q||(Q-=.01)&&.001,Ge&&(Mt=Rt.utils.clamp(0,1,Rt.utils.normalize(Q,D,mt))),L._pinPush=ge,Tt&&_e&&(W={},W[x.a]="+="+_e,fn&&(W[x.p]="-="+st()),Rt.set([Tt,nt],W)),f&&!(zu&&L.end>=Mi(N,x)))W=Jn(f),lt=x===Xe,z=st(),gt=parseFloat(pt(x.a))+ge,!xe&&D>1&&(Zt=(k?Ae.scrollingElement||li:N).style,Zt={style:Zt,value:Zt["overflow"+x.a.toUpperCase()]},k&&Jn(Ee)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Zt.style["overflow"+x.a.toUpperCase()]="scroll")),Ec(f,j,W),K=ka(f),X=Oi(f,!0),Gt=q&&gr(N,lt?Sn:Xe)(),m?(ft=[m+x.os2,A+ge+We],ft.t=j,O=m===Ve?xl(f,x)+A+ge:0,O&&(ft.push(x.d,O+We),j.style.flexBasis!=="auto"&&(j.style.flexBasis=O+We)),Is(ft),fn&&ne.forEach(function(Be){Be.pin===fn&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),q&&st(mt)):(O=xl(f,x),O&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=O+We)),q&&(ut={top:X.top+(lt?z-Q:Gt)+We,left:X.left+(lt?Gt:z-Q)+We,boxSizing:"border-box",position:"fixed"},ut[kr]=ut["max"+qs]=Math.ceil(X.width)+We,ut[Vr]=ut["max"+Ch]=Math.ceil(X.height)+We,ut[$n]=ut[$n+Fo]=ut[$n+No]=ut[$n+Bo]=ut[$n+Oo]="0",ut[Ve]=W[Ve],ut[Ve+Fo]=W[Ve+Fo],ut[Ve+No]=W[Ve+No],ut[Ve+Bo]=W[Ve+Bo],ut[Ve+Oo]=W[Ve+Oo],H=PE(T,ut,R),xn&&st(0)),i?(qt=i._initted,vc(1),i.render(i.duration(),!0,!0),Xt=pt(x.a)-gt+A+ge,Bt=Math.abs(A-Xt)>1,q&&Bt&&H.splice(H.length-2,2),i.render(0,!0,!0),qt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vc(0)):Xt=A,Zt&&(Zt.value?Zt.style["overflow"+x.a.toUpperCase()]=Zt.value:Zt.style.removeProperty("overflow-"+x.a));else if(d&&st()&&!S)for(X=d.parentNode;X&&X!==Ee;)X._pinOffset&&(Q-=X._pinOffset,D-=X._pinOffset),X=X.parentNode;Pt&&Pt.forEach(function(Be){return Be.revert(!1,!0)}),L.start=Q,L.end=D,kt=et=xn?mt:st(),!S&&!xn&&(kt<mt&&st(mt),L.scroll.rec=0),L.revert(!1,!0),it=on(),tt&&($=-1,tt.restart(!0)),sn=0,i&&P&&(i._initted||vt)&&i.progress()!==vt&&i.progress(vt||0,!0).render(i.time(),!0,!0),(Ge||Mt!==L.progress||S||g)&&(i&&!P&&i.totalProgress(S&&Q<-.001&&!Mt?Rt.utils.normalize(Q,D,0):Mt,!0),L.progress=Ge||(kt-Q)/A===Mt?0:Mt),f&&m&&(j._pinOffset=Math.round(L.progress*Xt)),I&&I.invalidate(),isNaN(ue)||(ue-=Rt.getProperty(F,x.p),fe-=Rt.getProperty(at,x.p),Va(F,x,ue),Va(Tt,x,ue-(Wt||0)),Va(at,x,fe),Va(nt,x,fe-(Wt||0))),Ge&&!xn&&L.update(),u&&!xn&&!St&&(St=!0,u(L),St=!1)}},L.getVelocity=function(){return(st()-et)/(on()-_o)*1e3||0},L.endAnimation=function(){co(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||co(i,L.direction<0,1):co(i,i.reversed()))},L.labelToScroll=function(yt){return i&&i.labels&&(Q||L.refresh()||Q)+i.labels[yt]/i.duration()*A||0},L.getTrailing=function(yt){var Yt=ne.indexOf(L),It=L.direction>0?ne.slice(0,Yt).reverse():ne.slice(Yt+1);return(On(yt)?It.filter(function(Wt){return Wt.vars.preventOverlaps===yt}):It).filter(function(Wt){return L.direction>0?Wt.end<=Q:Wt.start>=D})},L.update=function(yt,Yt,It){if(!(S&&!It&&!yt)){var Wt=xn===!0?mt:L.scroll(),Ue=yt?0:(Wt-Q)/A,ee=Ue<0?0:Ue>1?1:Ue||0,xe=L.progress,Ge,_e,ge,he,Dn,ye,fn,b;if(Yt&&(et=kt,kt=S?st():Wt,v&&(ae=Vt,Vt=i&&!P?i.totalProgress():ee)),_&&f&&!sn&&!Ua&&ei&&(!ee&&Q<Wt+(Wt-et)/(on()-_o)*_?ee=1e-4:ee===1&&D>Wt+(Wt-et)/(on()-_o)*_&&(ee=.9999)),ee!==xe&&L.enabled){if(Ge=L.isActive=!!ee&&ee<1,_e=!!xe&&xe<1,ye=Ge!==_e,Dn=ye||!!ee!=!!xe,L.direction=ee>xe?1:-1,L.progress=ee,Dn&&!sn&&(ge=ee&&!xe?0:ee===1?1:xe===1?2:3,P&&(he=!ye&&Y[ge+1]!=="none"&&Y[ge+1]||Y[ge],b=i&&(he==="complete"||he==="reset"||he in i))),y&&(ye||b)&&(b||h||!i)&&(En(y)?y(L):L.getTrailing(y).forEach(function(z){return z.endAnimation()})),P||(I&&!sn&&!Ua?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",ee,i._tTime/i._tDur):(I.vars.totalProgress=ee,I.invalidate().restart())):i&&i.totalProgress(ee,!!(sn&&(it||yt)))),f){if(yt&&m&&(j.style[m+x.os2]=ot),!q)ht(vo(gt+Xt*ee));else if(Dn){if(fn=!yt&&ee>xe&&D+1>Wt&&Wt+1>=Mi(N,x),R)if(!yt&&(Ge||fn)){var O=Oi(f,!0),W=Wt-Q;xd(f,Ee,O.top+(x===Xe?W:0)+We,O.left+(x===Xe?0:W)+We)}else xd(f,j);Is(Ge||fn?H:K),Bt&&ee<1&&Ge||ht(gt+(ee===1&&!fn?Xt:0))}}v&&!Ct.tween&&!sn&&!Ua&&tt.restart(!0),a&&(ye||M&&ee&&(ee<1||!xc))&&jo(a.targets).forEach(function(z){return z.classList[Ge||M?"add":"remove"](a.className)}),o&&!P&&!yt&&o(L),Dn&&!sn?(P&&(b&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(L)),(ye||!xc)&&(c&&ye&&yc(L,c),V[ge]&&yc(L,V[ge]),M&&(ee===1?L.kill(!1,1):V[ge]=0),ye||(ge=ee===1?1:3,V[ge]&&yc(L,V[ge]))),C&&!Ge&&Math.abs(L.getVelocity())>(xo(C)?C:2500)&&(co(L.callbackAnimation),I?I.progress(1):co(i,he==="reverse"?1:!ee,1))):P&&o&&!sn&&o(L)}if(wt){var X=S?Wt/S.duration()*(S._caScrollDist||0):Wt;zt(X+(F._isFlipped?1:0)),wt(X)}Ht&&Ht(-Wt/S.duration()*(S._caScrollDist||0))}},L.enable=function(yt,Yt){L.enabled||(L.enabled=!0,Ke(N,"resize",Mo),k||Ke(N,"scroll",_s),ct&&Ke(r,"refreshInit",ct),yt!==!1&&(L.progress=Mt=0,kt=et=$=st()),Yt!==!1&&L.refresh())},L.getTween=function(yt){return yt&&Ct?Ct.tween:I},L.setPositions=function(yt,Yt,It,Wt){if(S){var Ue=S.scrollTrigger,ee=S.duration(),xe=Ue.end-Ue.start;yt=Ue.start+xe*yt/ee,Yt=Ue.start+xe*Yt/ee}L.refresh(!1,!1,{start:ud(yt,It&&!!L._startClamp),end:ud(Yt,It&&!!L._endClamp)},Wt),L.update()},L.adjustPinSpacing=function(yt){if(ft&&yt){var Yt=ft.indexOf(x.d)+1;ft[Yt]=parseFloat(ft[Yt])+yt+We,ft[1]=parseFloat(ft[1])+yt+We,Is(ft)}},L.disable=function(yt,Yt){if(L.enabled&&(yt!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Yt||I&&I.pause(),mt=0,Dt&&(Dt.uncache=1),ct&&Je(r,"refreshInit",ct),tt&&(tt.pause(),Ct.tween&&Ct.tween.kill()&&(Ct.tween=0)),!k)){for(var It=ne.length;It--;)if(ne[It].scroller===N&&ne[It]!==L)return;Je(N,"resize",Mo),k||Je(N,"scroll",_s)}},L.kill=function(yt,Yt){L.disable(yt,Yt),I&&!Yt&&I.kill(),l&&delete ku[l];var It=ne.indexOf(L);It>=0&&ne.splice(It,1),It===vn&&nl>0&&vn--,It=0,ne.forEach(function(Wt){return Wt.scroller===L.scroller&&(It=1)}),It||xn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,yt&&i.revert({kill:!1}),Yt||i.kill()),Tt&&[Tt,nt,F,at].forEach(function(Wt){return Wt.parentNode&&Wt.parentNode.removeChild(Wt)}),zo===L&&(zo=0),f&&(Dt&&(Dt.uncache=1),It=0,ne.forEach(function(Wt){return Wt.pin===f&&It++}),It||(Dt.spacer=0)),n.onKill&&n.onKill(L)},ne.push(L),L.enable(!1,!1),ce&&ce(L),i&&i.add&&!A){var jt=L.update;L.update=function(){L.update=jt,Q||D||L.refresh()},Rt.delayedCall(.01,L.update),A=.01,Q=D=0}else L.refresh();f&&AE()},r.register=function(n){return vs||(Rt=n||Im(),Lm()&&window.document&&r.enable(),vs=go),vs},r.defaults=function(n){if(n)for(var i in n)Ba[i]=n[i];return Ba},r.disable=function(n,i){go=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Je(se,"wheel",_s),Je(Ae,"scroll",_s),clearInterval(Ia),Je(Ae,"touchcancel",_i),Je(Ee,"touchstart",_i),Oa(Je,Ae,"pointerdown,touchstart,mousedown",hd),Oa(Je,Ae,"pointerup,touchend,mouseup",fd),gl.kill(),Na(Je);for(var s=0;s<ie.length;s+=3)Fa(Je,ie[s],ie[s+1]),Fa(Je,ie[s],ie[s+2])},r.enable=function(){if(se=window,Ae=document,li=Ae.documentElement,Ee=Ae.body,Rt&&(jo=Rt.utils.toArray,Uo=Rt.utils.clamp,Bu=Rt.core.context||_i,vc=Rt.core.suppressOverwrites||_i,Th=se.history.scrollRestoration||"auto",Vu=se.pageYOffset,Rt.core.globals("ScrollTrigger",r),Ee)){go=1,Ls=document.createElement("div"),Ls.style.height="100vh",Ls.style.position="absolute",Hm(),ME(),Fe.register(Rt),r.isTouch=Fe.isTouch,Qi=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fu=Fe.isTouch===1,Ke(se,"wheel",_s),Am=[se,Ae,li,Ee],Rt.matchMedia?(r.matchMedia=function(l){var c=Rt.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Rt.addEventListener("matchMediaInit",function(){return Ph()}),Rt.addEventListener("matchMediaRevert",function(){return km()}),Rt.addEventListener("matchMedia",function(){Nr(0,1),Jr("matchMedia")}),Rt.matchMedia("(orientation: portrait)",function(){return Sc(),Sc})):console.warn("Requires GSAP 3.11.0 or later"),Sc(),Ke(Ae,"scroll",_s);var n=Ee.style,i=n.borderTopStyle,s=Rt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Oi(Ee),Xe.m=Math.round(o.top+Xe.sc())||0,Sn.m=Math.round(o.left+Sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ia=setInterval(md,250),Rt.delayedCall(.5,function(){return Ua=0}),Ke(Ae,"touchcancel",_i),Ke(Ee,"touchstart",_i),Oa(Ke,Ae,"pointerdown,touchstart,mousedown",hd),Oa(Ke,Ae,"pointerup,touchend,mouseup",fd),Ou=Rt.utils.checkPrefix("transform"),il.push(Ou),vs=on(),gl=Rt.delayedCall(.2,Nr).pause(),xs=[Ae,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;Ae.hidden?(ad=l,ld=c):(ad!==l||ld!==c)&&Mo()},Ae,"DOMContentLoaded",Nr,se,"load",Nr,se,"resize",Mo],Na(Ke),ne.forEach(function(l){return l.enable(0,1)}),a=0;a<ie.length;a+=3)Fa(Je,ie[a],ie[a+1]),Fa(Je,ie[a],ie[a+2])}},r.config=function(n){"limitCallbacks"in n&&(xc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ia)||(Ia=i)&&setInterval(md,i),"ignoreMobileResize"in n&&(Fu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Na(Je)||Na(Ke,n.autoRefreshEvents||"none"),Rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=bn(n),o=ie.indexOf(s),a=Zr(s);~o&&ie.splice(o,a?6:2),i&&(a?Si.unshift(se,i,Ee,i,li,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?bn(n):n).getBoundingClientRect(),a=o[s?kr:Vr]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=bn(n));var o=n.getBoundingClientRect(),a=o[s?kr:Vr],l=i==null?a/2:i in Ml?Ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=$r.killAll||[];$r={},i.forEach(function(s){return s()})}},r}();Jt.version="3.12.5";Jt.saveStyles=function(r){return r?jo(r).forEach(function(t){if(t&&t.style){var e=Nn.indexOf(t);e>=0&&Nn.splice(e,5),Nn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Bu())}}):Nn};Jt.revert=function(r,t){return Ph(!r,t)};Jt.create=function(r,t){return new Jt(r,t)};Jt.refresh=function(r){return r?Mo():(vs||Jt.register())&&Nr(!0)};Jt.update=function(r){return++ie.cache&&Vi(r===!0?2:0)};Jt.clearScrollMemory=Vm;Jt.maxScroll=function(r,t){return Mi(r,t?Sn:Xe)};Jt.getScrollFunc=function(r,t){return gr(bn(r),t?Sn:Xe)};Jt.getById=function(r){return ku[r]};Jt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!ei};Jt.snapDirectional=Rh;Jt.addEventListener=function(r,t){var e=$r[r]||($r[r]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(r,t){var e=$r[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Rt.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),s<=h.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&En(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return En(s)&&(s=s(),Ke(Jt,"refresh",function(){return s=t.batchMax()})),jo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Jt.create(c))}),e};var yd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Tc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===li&&r(Ee,e)},Ha={auto:1,scroll:1},LE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Rt.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ha[(l=Jn(s)).overflowY]||Ha[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Zr(s)&&(Ha[(l=Jn(s)).overflowY]||Ha[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Wm=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&LE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ke(Ae,Fe.eventTypes[0],Ed,!1,!0)},onDisable:function(){return Je(Ae,Fe.eventTypes[0],Ed,!0)}})},IE=/(input|label|select|textarea)/i,Sd,Ed=function(t){var e=IE.test(t.target.tagName);(e||Sd)&&(t._gsapAllow=!0,Sd=e)},UE=function(t){Dr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=bn(t.target)||li,u=Rt.core.globals().ScrollSmoother,h=u&&u.get(),d=Qi&&(t.content&&bn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=gr(c,Xe),m=gr(c,Sn),g=1,_=(Fe.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,E=En(i)?function(){return i(a)}:function(){return i||2.8},M,v,R=Wm(c,t.type,!0,s),w=function(){return v=!1},S=_i,C=_i,y=function(){l=Mi(c,Xe),C=Uo(Qi?1:0,l),n&&(S=Uo(0,Mi(c,Sn))),M=Hr},x=function(){d._gsap.y=vo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var G=vo(a.deltaY/2),rt=C(f.v-G);if(d&&rt!==f.v+f.offset){f.offset=rt-f.v;var L=vo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ie.cache,Vi()}return!0}f.offset&&x(),v=!0},N,U,k,q,V=function(){y(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&Rt.set(d,{y:"+=0"}),t.ignoreCheck=function(Y){return Qi&&Y.type==="touchmove"&&P()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){v=!1;var Y=g;g=vo((se.visualViewport&&se.visualViewport.scale||1)/_),N.pause(),Y!==g&&Tc(c,g>1.01?!0:n?!1:"x"),U=m(),k=f(),y(),M=Hr},t.onRelease=t.onGestureStart=function(Y,G){if(f.offset&&x(),!G)q.restart(!0);else{ie.cache++;var rt=E(),L,ct;n&&(L=m(),ct=L+rt*.05*-Y.velocityX/.227,rt*=yd(m,L,ct,Mi(c,Sn)),N.vars.scrollX=S(ct)),L=f(),ct=L+rt*.05*-Y.velocityY/.227,rt*=yd(f,L,ct,Mi(c,Xe)),N.vars.scrollY=C(ct),N.invalidate().duration(rt).play(.01),(Qi&&N.vars.scrollY>=l||L>=l-1)&&Rt.to({},{onUpdate:V,duration:rt})}o&&o(Y)},t.onWheel=function(){N._ts&&N.pause(),on()-p>1e3&&(M=0,p=on())},t.onChange=function(Y,G,rt,L,ct){if(Hr!==M&&y(),G&&n&&m(S(L[2]===G?U+(Y.startX-Y.x):m()+G-L[1])),rt){f.offset&&x();var Ut=ct[2]===rt,$t=Ut?k+Y.startY-Y.y:f()+rt-ct[1],$=C($t);Ut&&$t!==$&&(k+=$-$t),f($)}(rt||G)&&Vi()},t.onEnable=function(){Tc(c,n?!1:"x"),Jt.addEventListener("refresh",V),Ke(se,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),R.enable()},t.onDisable=function(){Tc(c,!0),Je(se,"resize",V),Jt.removeEventListener("refresh",V),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=Qi,Qi&&!f()&&f(1),Qi&&Rt.ticker.add(_i),q=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gm(f,f(),function(){return N.pause()})},onUpdate:Vi,onComplete:q.vars.onComplete}),a};Jt.sort=function(r){return ne.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(r){return new Fe(r)};Jt.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var t=r instanceof Fe?r:UE(r);return gn&&gn.target===t.target&&gn.kill(),Zr(t.target)&&(gn=t),t};Jt.core={_getVelocityProp:Nu,_inputObserver:Wm,_scrollers:ie,_proxies:Si,bridge:{ss:function(){ei||Jr("scrollStart"),ei=on()},ref:function(){return sn}}};Im()&&Rt.registerPlugin(Jt);ke.registerPlugin(Jt);const Td={desktop:{hero:{x:0,y:0,rotY:0,rotZ:0,scale:1},cold:{x:-.42,y:-.02,rotY:Math.PI,rotZ:-.22,scale:.95},flavors:{x:.42,y:0,rotY:Math.PI*2,rotZ:.12,scale:1},story:{x:.58,y:-.05,rotY:Math.PI*3,rotZ:.35,scale:.8},share:{x:.42,y:0,rotY:Math.PI*4,rotZ:-.08,scale:1.1}},mobile:{hero:{x:0,y:-.2,rotY:0,rotZ:0,scale:1},cold:{x:0,y:.4,rotY:Math.PI,rotZ:-.2,scale:.8},flavors:{x:0,y:.38,rotY:Math.PI*2,rotZ:.1,scale:.85},story:{x:.62,y:.66,rotY:Math.PI*3,rotZ:.35,scale:.42},share:{x:0,y:.42,rotY:Math.PI*4,rotZ:-.08,scale:.85}}},bd=["original","zero","diet","cherry"];function bc(r){ke.to(document.body,{backgroundColor:r,duration:.8,ease:"power2.out",overwrite:"auto"})}function NE(r,{reducedMotion:t}){const{canState:e,bubbles:n,wet:i,ice:s,can:o}=r,a=t?!0:1.2;ke.to(".hero__title",{yPercent:-25,opacity:.15,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}});const l=document.querySelector(".flavors__track"),c=()=>l.scrollWidth-window.innerWidth,u=ke.utils.toArray(".flavor");let h=0;const d=S=>{h=S,o.setFlavor(bd[S]),bc(u[S].dataset.bg),t||ke.fromTo(r.intro,{scale:.88},{scale:1,duration:.9,ease:"elastic.out(1, 0.5)",overwrite:!0})};ke.to(l,{x:()=>-c(),ease:"none",scrollTrigger:{trigger:"#flavors",start:"top top",end:()=>"+="+c(),pin:!0,scrub:a,invalidateOnRefresh:!0,onToggle:S=>{S.isActive&&d(Math.round(S.progress*(u.length-1)))},onUpdate:S=>{const C=Math.round(S.progress*(u.length-1));S.isActive&&C!==h&&d(C)},onLeaveBack:()=>o.setFlavor("original")}}),u.forEach((S,C)=>{C===0||t||ke.from(S.querySelectorAll(".eyebrow, .flavor__name, .lead"),{y:80,opacity:0,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:"#flavors",start:()=>`top+=${c()*((C-.6)/(u.length-1))} top`,end:()=>`top+=${c()*((C-.1)/(u.length-1))} top`,scrub:a,invalidateOnRefresh:!0}})}),Jt.create({trigger:"#story",start:"top 60%",end:"bottom bottom",onToggle:S=>{S.isActive&&(o.setFlavor("original"),bc(document.getElementById("story").dataset.bg))},onLeaveBack:()=>o.setFlavor(bd[h])}),document.querySelectorAll("section[data-bg]").forEach(S=>{Jt.create({trigger:S,start:"top 55%",end:"bottom 55%",onToggle:C=>C.isActive&&bc(S.dataset.bg)})}),Jt.create({trigger:"#story",start:"top 40px",end:"bottom 40px",toggleClass:{targets:".nav",className:"is-dark"}});const f=()=>window.innerWidth<=760,m=S=>(f()?Td.mobile:Td.desktop)[S],g=()=>({...m("hero"),spin:0,wet:1,ice:1,bubbles:.7}),_=[{trigger:"#cold",start:"top bottom",end:"top 20%",to:()=>m("cold")},{trigger:"#cold",start:"top 80%",end:"top 20%",to:()=>({wet:1.6})},{trigger:"#flavors",start:"top 70%",end:"top 10%",to:()=>({ice:0})},{trigger:"#flavors",start:"top bottom",end:"top top",to:()=>m("flavors")},{trigger:"#flavors",start:"top 60%",end:"top top",to:()=>({wet:1})},{trigger:"#flavors",start:"top top",end:()=>"+="+c(),linear:!0,to:()=>({spin:Math.PI*2*(u.length-1)})},{trigger:"#story",start:"top bottom",end:"top 25%",to:()=>m("story")},{trigger:"#story",start:"top 70%",end:"top 30%",to:()=>({bubbles:0})},{trigger:"#share",start:"top bottom",end:"top 15%",to:()=>m("share")},{trigger:"#share",start:"top 70%",end:"top 15%",to:()=>({ice:1,bubbles:.7})}],p=_.map(S=>Jt.create({trigger:S.trigger,start:S.start,end:S.end,invalidateOnRefresh:!0})),E=S=>S*S*(3-2*S),M={};function v(){const S=g();Object.assign(M,S),_.forEach((C,y)=>{const x=C.to(),P=p[y].progress,N=C.linear?P:E(P);for(const U in x)P>0&&(M[U]=S[U]+(x[U]-S[U])*N),S[U]=x[U]})}const R={ice:1};let w=!0;if(ke.ticker.add((S,C)=>{v();const y=w||t?1:1-Math.pow(.9,C/16.67||1);w=!1;for(const x of["x","y","rotY","rotZ","scale","spin"])e[x]+=(M[x]-e[x])*y;i.amount+=(M.wet-i.amount)*y,R.ice+=(M.ice-R.ice)*y,s.state.show=R.ice*r.intro.ice,n.material.opacity+=(M.bubbles-n.material.opacity)*y}),t){document.querySelectorAll("[data-count]").forEach(S=>S.textContent=S.dataset.count);return}ke.set(".reveal",{opacity:0,y:50}),Jt.batch(".reveal",{start:"top 88%",once:!0,onEnter:S=>ke.to(S,{opacity:1,y:0,duration:1.1,stagger:.12,ease:"expo.out"})}),document.querySelectorAll("[data-count]").forEach(S=>{const C=Number(S.dataset.count),y={v:0};Jt.create({trigger:S,start:"top 85%",once:!0,onEnter:()=>ke.to(y,{v:C,duration:1.6,ease:"power3.out",onUpdate:()=>S.textContent=Math.round(y.v)})})}),ke.utils.toArray(".timeline__item").forEach(S=>{ke.from(S,{opacity:0,x:-60,duration:1,ease:"expo.out",scrollTrigger:{trigger:S,start:"top 85%",once:!0}}),ke.fromTo(S.querySelector(".timeline__year"),{yPercent:40},{yPercent:-40,ease:"none",scrollTrigger:{trigger:S,start:"top bottom",end:"bottom top",scrub:!0}})})}const wc=window.matchMedia("(prefers-reduced-motion: reduce)").matches;async function OE(){if(!document.fonts)return;const r=Promise.all([document.fonts.load("170px Pacifico"),document.fonts.load("56px Anton"),document.fonts.load("600 30px Inter")]);await Promise.race([r,new Promise(t=>setTimeout(t,2500))])}function FE(r){const t=document.getElementById("popBtn"),e=t.querySelector("span");let n=!1;t.addEventListener("click",()=>{const i=ke.timeline();n||(n=!0,i.to(r.can.tab.rotation,{x:1.15,duration:.35,ease:"back.out(3)"},0).to(r.can.opening.material,{opacity:1,duration:.15},.12).to(r.can.tab.rotation,{x:.15,duration:.6,ease:"power3.inOut"},.55),e.textContent="Cheers!"),i.call(()=>r.burst.fire(r.openingWorldPosition()),null,.15),i.to(r.intro,{y:.6,duration:.22,ease:"power2.out"},.1).to(r.intro,{y:0,duration:1,ease:"bounce.out"}),ke.fromTo(r.bubbles.state,{speed:7},{speed:1,duration:2.4,ease:"power2.out"})})}async function BE(){document.body.classList.add("is-loading"),await OE();const r=pE(document.getElementById("webgl"),{reducedMotion:wc});r.start(),NE(r,{reducedMotion:wc}),FE(r),document.querySelector(".loader").classList.add("is-done"),document.body.classList.remove("is-loading"),_E(r,{reducedMotion:wc})}BE();
