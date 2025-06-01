function e(e){return e&&e.__esModule?e.default:e}var t,n,r,i,o,c,a,u,s,f,l,p,v,g,d,b=globalThis,h={},y={},m=function(e){return e&&e.Math===Math&&e};y=m("object"==typeof globalThis&&globalThis)||m("object"==typeof window&&window)||m("object"==typeof self&&self)||m("object"==typeof b&&b)||m("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},S={};S=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;O=S?j.bind(j):function(){return j.apply(j,arguments)};var E={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;r=$&&!E.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:E;var k={};k=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},T={},M={},D=Function.prototype,I=D.call,L=S&&D.bind.bind(I,I),N={},C=(M=S?L:function(e){return function(){return I.apply(e,arguments)}})({}.toString),F=M("".slice);N=function(e){return F(C(e),8,-1)};var x=Object,B=M("".split);T=w(function(){return!x("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?B(e,""):x(e)}:x;var R={},U={};U=function(e){return null==e};var z=TypeError;R=function(e){if(U(e))throw new z("Can't call method on "+e);return e},P=function(e){return T(R(e))};var A={},H={},W={},q={},G="object"==typeof document&&document.all;q=void 0===G&&void 0!==G?function(e){return"function"==typeof e||e===G}:function(e){return"function"==typeof e},W=function(e){return"object"==typeof e?null!==e:q(e)};var K={},V={};V=function(e,t){var n;return arguments.length<2?(n=y[e],q(n)?n:void 0):y[e]&&y[e][t]};var Y={};Y=M({}.isPrototypeOf);var J={},Q={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var en=y.process,er=y.Deno,ei=en&&en.versions||er&&er.version,eo=ei&&ei.v8;eo&&(o=(i=eo.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&Z&&(!(i=Z.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=Z.match(/Chrome\/(\d+)/))&&(o=+i[1]),X=o;var ec=y.String;J=(Q=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;K=J?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return q(t)&&Y(t.prototype,ea(e))};var eu={},es={},ef={},el=String;ef=function(e){try{return el(e)}catch(e){return"Object"}};var ep=TypeError;es=function(e){if(q(e))return e;throw new ep(ef(e)+" is not a function")},eu=function(e,t){var n=e[t];return U(n)?void 0:es(n)};var ev={},eg=TypeError;ev=function(e,t){var n,r;if("string"===t&&q(n=e.toString)&&!W(r=O(n,e))||q(n=e.valueOf)&&!W(r=O(n,e))||"string"!==t&&q(n=e.toString)&&!W(r=O(n,e)))return r;throw new eg("Can't convert object to primitive value")};var ed={},eb={},eh={},ey={};ey=!1;var em={},e_=Object.defineProperty;em=function(e,t){try{e_(y,e,{value:t,configurable:!0,writable:!0})}catch(n){y[e]=t}return t};var ew="__core-js_shared__",eO=eh=y[ew]||em(ew,{});(eO.versions||(eO.versions=[])).push({version:"3.42.0",mode:ey?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return eh[e]||(eh[e]=t||{})};var eS={},ej={},eE=Object;ej=function(e){return eE(R(e))};var e$=M({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return e$(ej(e),t)};var ek={},eP=0,eT=Math.random(),eM=M(1..toString);ek=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eP+eT,36)};var eD=y.Symbol,eI=eb("wks"),eL=J?eD.for||eD:eD&&eD.withoutSetter||ek,eN=TypeError,eC=function(e){return eS(eI,e)||(eI[e]=Q&&eS(eD,e)?eD[e]:eL("Symbol."+e)),eI[e]}("toPrimitive");H=function(e,t){if(!W(e)||K(e))return e;var n,r=eu(e,eC);if(r){if(void 0===t&&(t="default"),n=O(r,e,t),!W(n)||K(n))return n;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},A=function(e){var t=H(e,"string");return K(t)?t:t+""};var eF={},ex={},eB=y.document,eR=W(eB)&&W(eB.createElement);ex=function(e){return eR?eB.createElement(e):{}},eF=!_&&!w(function(){return 7!==Object.defineProperty(ex("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;n=_?eU:function(e,t){if(e=P(e),t=A(t),eF)try{return eU(e,t)}catch(e){}if(eS(e,t))return k(!O(r,e,t),e[t])};var ez={},eA={};eA=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eH={},eW=String,eq=TypeError;eH=function(e){if(W(e))return e;throw new eq(eW(e)+" is not an object")};var eG=TypeError,eK=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eY="enumerable",eJ="configurable",eQ="writable";c=_?eA?function(e,t,n){if(eH(e),t=A(t),eH(n),"function"==typeof e&&"prototype"===t&&"value"in n&&eQ in n&&!n[eQ]){var r=eV(e,t);r&&r[eQ]&&(e[t]=n.value,n={configurable:eJ in n?n[eJ]:r[eJ],enumerable:eY in n?n[eY]:r[eY],writable:!1})}return eK(e,t,n)}:eK:function(e,t,n){if(eH(e),t=A(t),eH(n),eF)try{return eK(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new eG("Accessors not supported");return"value"in n&&(e[t]=n.value),e},ez=_?function(e,t,n){return c(e,t,k(1,n))}:function(e,t,n){return e[t]=n,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e4=eS(e1,"name"),e3=e4&&(!_||_&&e2(e1,"name").configurable),e7={},e8=M(Function.toString);q(eh.inspectSource)||(eh.inspectSource=function(e){return e8(e)}),e7=eh.inspectSource;var e5={},e6={},e9=y.WeakMap;e6=q(e9)&&/native code/.test(String(e9));var te={},tt=eb("keys");te=function(e){return tt[e]||(tt[e]=ek(e))};var tn={};tn={};var tr="Object already initialized",ti=y.TypeError,to=y.WeakMap;if(e6||eh.state){var tc=eh.state||(eh.state=new to);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,a=function(e,t){if(tc.has(e))throw new ti(tr);return t.facade=e,tc.set(e,t),t},u=function(e){return tc.get(e)||{}},s=function(e){return tc.has(e)}}else{var ta=te("state");tn[ta]=!0,a=function(e,t){if(eS(e,ta))throw new ti(tr);return t.facade=e,ez(e,ta,t),t},u=function(e){return eS(e,ta)?e[ta]:{}},s=function(e){return eS(e,ta)}}var tu=(e5={set:a,get:u,has:s,enforce:function(e){return s(e)?u(e):a(e,{})},getterFor:function(e){return function(t){var n;if(!W(t)||(n=u(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return n}}}).enforce,ts=e5.get,tf=String,tl=Object.defineProperty,tp=M("".slice),tv=M("".replace),tg=M([].join),td=_&&!w(function(){return 8!==tl(function(){},"length",{value:8}).length}),tb=String(String).split("String"),th=eZ=function(e,t,n){"Symbol("===tp(tf(t),0,7)&&(t="["+tv(tf(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!eS(e,"name")||e3&&e.name!==t)&&(_?tl(e,"name",{value:t,configurable:!0}):e.name=t),td&&n&&eS(n,"arity")&&e.length!==n.arity&&tl(e,"length",{value:n.arity});try{n&&eS(n,"constructor")&&n.constructor?_&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=tu(e);return eS(r,"source")||(r.source=tg(tb,"string"==typeof t?t:"")),e};Function.prototype.toString=th(function(){return q(this)&&ts(this).source||e7(this)},"toString"),eX=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(q(n)&&eZ(n,o,r),r.global)i?e[t]=n:em(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:c(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var ty={},tm={},t_={},tw={},tO={},tS={},tj={},tE=Math.ceil,t$=Math.floor;tj=Math.trunc||function(e){var t=+e;return(t>0?t$:tE)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tj(t)};var tk=Math.max,tP=Math.min;tO=function(e,t){var n=tS(e);return n<0?tk(n+t,0):tP(n,t)};var tT={},tM={},tD=Math.min;tM=function(e){var t=tS(e);return t>0?tD(t,0x1fffffffffffff):0},tT=function(e){return tM(e.length)};var tI=function(e){return function(t,n,r){var i,o=P(t),c=tT(o);if(0===c)return!e&&-1;var a=tO(r,c);if(e&&n!=n){for(;c>a;)if((i=o[a++])!=i)return!0}else for(;c>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},tL={includes:tI(!0),indexOf:tI(!1)}.indexOf,tN=M([].push);t_=function(e,t){var n,r=P(e),i=0,o=[];for(n in r)!eS(tn,n)&&eS(r,n)&&tN(o,n);for(;t.length>i;)eS(r,n=t[i++])&&(~tL(o,n)||tN(o,n));return o};var tC={},tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return t_(e,tF)},l=Object.getOwnPropertySymbols;var tx=M([].concat);tm=V("Reflect","ownKeys")||function(e){var t=f(eH(e));return l?tx(t,l(e)):t},ty=function(e,t,r){for(var i=tm(t),o=0;o<i.length;o++){var a=i[o];eS(e,a)||r&&eS(r,a)||c(e,a,n(t,a))}};var tB={},tR=/#|\.prototype\./,tU=function(e,t){var n=tA[tz(e)];return n===tW||n!==tH&&(q(t)?w(t):!!t)},tz=tU.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tA=tU.data={},tH=tU.NATIVE="N",tW=tU.POLYFILL="P";tB=tU,h=function(e,t){var r,i,o,c,a,u=e.target,s=e.global,f=e.stat;if(r=s?y:f?y[u]||em(u,{}):y[u]&&y[u].prototype)for(i in t){if(c=t[i],o=e.dontCallGetSet?(a=n(r,i))&&a.value:r[i],!tB(s?i:u+(f?".":"#")+i,e.forced)&&void 0!==o){if(typeof c==typeof o)continue;ty(c,o)}(e.sham||o&&o.sham)&&ez(c,"sham",!0),eX(r,i,c,e)}};var tq={},tG={},tK=Function.prototype,tV=tK.apply,tY=tK.call;tG="object"==typeof Reflect&&Reflect.apply||(S?tY.bind(tV):function(){return tY.apply(tV,arguments)});var tJ={},tQ={},tX=(tQ=function(e){if("Function"===N(e))return M(e)})(tQ.bind);tJ=function(e,t){return es(e),void 0===t?e:S?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=V("document","documentElement");var t0={};t0=M([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t3={},t7={},t8=function(e){return Z.slice(0,e.length)===e};t3="NODE"===(t7=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===N(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t5=y.setImmediate,t6=y.clearImmediate,t9=y.process,ne=y.Dispatch,nt=y.Function,nn=y.MessageChannel,nr=y.String,ni=0,no={},nc="onreadystatechange";w(function(){p=y.location});var na=function(e){if(eS(no,e)){var t=no[e];delete no[e],t()}},nu=function(e){return function(){na(e)}},ns=function(e){na(e.data)},nf=function(e){y.postMessage(nr(e),p.protocol+"//"+p.host)};t5&&t6||(t5=function(e){t1(arguments.length,1);var t=q(e)?e:nt(e),n=t0(arguments,1);return no[++ni]=function(){tG(t,void 0,n)},v(ni),ni},t6=function(e){delete no[e]},t3?v=function(e){t9.nextTick(nu(e))}:ne&&ne.now?v=function(e){ne.now(nu(e))}:nn&&!t4?(d=(g=new nn).port2,g.port1.onmessage=ns,v=tJ(d.postMessage,d)):y.addEventListener&&q(y.postMessage)&&!y.importScripts&&p&&"file:"!==p.protocol&&!w(nf)?(v=nf,y.addEventListener("message",ns,!1)):v=nc in ex("script")?function(e){tZ.appendChild(ex("script"))[nc]=function(){tZ.removeChild(this),na(e)}}:function(e){setTimeout(nu(e),0)});var nl=(tq={set:t5,clear:t6}).clear;h({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==nl},{clearImmediate:nl});var np=tq.set,nv={},ng=y.Function,nd=/MSIE .\./.test(Z)||"BUN"===t7&&((t=y.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));nv=function(e,t){var n=t?2:1;return nd?function(r,i){var o=t1(arguments.length,1)>n,c=q(r)?r:ng(r),a=o?t0(arguments,n):[],u=o?function(){tG(c,this,a)}:c;return t?e(u,i):e(u)}:e};var nb=y.setImmediate?nv(np,!1):np;h({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==nb},{setImmediate:nb});var nh={};nh=import.meta.resolve("eyyUD");const ny=document.querySelector(".recipe");async function nm(){try{let t=`
    <div class="spinner">
        <svg>
          <use href="${e(nh)}#icon-loader"></use>
        </svg>
    </div>  
  `;ny.innerHTML="",ny.insertAdjacentHTML("afterbegin",t);let n=await fetch("https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await n.json();if(!n.ok)throw Error(`${r.message} (${n.status})`);let{recipe:i}=r.data;i={id:i.id,title:i.title,publisher:i.publisher,sourceUrl:i.source_url,image:i.image_url,servings:i.servings,cookingTime:i.cooking_time,ingredients:i.ingredients};let o=`
    <figure class="recipe__fig">
      <img src="${i.image}" alt="${i.title}" class="recipe__img"/>
      <h1 class="recipe__title">
        <span>${i.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(nh)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${i.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(nh)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${i.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(nh)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(nh)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${e(nh)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${e(nh)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${i.ingredients.map(t=>`
           <li class="recipe__ingredient">
             <svg class="recipe__icon">
               <use href="${e(nh)}#icon-check"></use>
             </svg>
             <div class="recipe__quantity">${t.quantity??""}</div>
             <div class="recipe__description">
               <span class="recipe__unit">${t.unit}</span>
               ${t.description}
             </div>
           </li>
        `).join("\n")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${i.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${i.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${e(nh)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;ny.innerHTML="",ny.insertAdjacentHTML("afterbegin",o)}catch(e){alert(e)}return null}(async()=>{await nm()})();
//# sourceMappingURL=starter.384d8dcc.js.map
