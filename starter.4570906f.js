var e,t,r,n,i,a,o,s,c,u,l,p,f,d,g,h=globalThis;function v(e){return e&&e.__esModule?e.default:e}var _={},b={},y=function(e){return e&&e.Math===Math&&e};b=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof h&&h)||y("object"==typeof b&&b)||function(){return this}()||Function("return this")();var m={},w={};m=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;$=E?S.bind(S):function(){return S.apply(S,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;r=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var k={},P={},T={},I=Function.prototype,N=I.call,q=E&&I.bind.bind(N,N),D={},L=(T=E?q:function(e){return function(){return N.apply(e,arguments)}})({}.toString),F=T("".slice);D=function(e){return F(L(e),8,-1)};var x=Object,C=T("".split);P=w(function(){return!x("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?C(e,""):x(e)}:x;var R={},A={};A=function(e){return null==e};var H=TypeError;R=function(e){if(A(e))throw new H("Can't call method on "+e);return e},k=function(e){return P(R(e))};var B={},U={},z={},W={},Q="object"==typeof document&&document.all;W=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:W(e)};var V={},Y={};Y=function(e,t){var r;return arguments.length<2?(r=b[e],W(r)?r:void 0):b[e]&&b[e][t]};var G={};G=T({}.isPrototypeOf);var K={},J={},X={},Z={},ee=b.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=b.process,en=b.Deno,ei=er&&er.versions||en&&en.version,ea=ei&&ei.v8;ea&&(i=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var eo=b.String;K=(J=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;V=K?function(e){return"symbol"==typeof e}:function(e){var t=Y("Symbol");return W(t)&&G(t.prototype,es(e))};var ec={},eu={},el={},ep=String;el=function(e){try{return ep(e)}catch(e){return"Object"}};var ef=TypeError;eu=function(e){if(W(e))return e;throw new ef(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return A(r)?void 0:eu(r)};var ed={},eg=TypeError;ed=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!z(n=$(r,e))||W(r=e.valueOf)&&!z(n=$(r,e))||"string"!==t&&W(r=e.toString)&&!z(n=$(r,e)))return n;throw new eg("Can't convert object to primitive value")};var eh={},ev={},e_={},eb={};eb=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ew="__core-js_shared__",e$=e_=b[ew]||ey(ew,{});(e$.versions||(e$.versions=[])).push({version:"3.42.0",mode:eb?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return e_[e]||(e_[e]=t||{})};var eE={},eS={},ej=Object;eS=function(e){return ej(R(e))};var eO=T({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eO(eS(e),t)};var eM={},ek=0,eP=Math.random(),eT=T(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++ek+eP,36)};var eI=b.Symbol,eN=ev("wks"),eq=K?eI.for||eI:eI&&eI.withoutSetter||eM,eD=TypeError,eL=function(e){return eE(eN,e)||(eN[e]=J&&eE(eI,e)?eI[e]:eq("Symbol."+e)),eN[e]}("toPrimitive");U=function(e,t){if(!z(e)||V(e))return e;var r,n=ec(e,eL);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!z(r)||V(r))return r;throw new eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),ed(e,t)},B=function(e){var t=U(e,"string");return V(t)?t:t+""};var eF={},ex={},eC=b.document,eR=z(eC)&&z(eC.createElement);ex=function(e){return eR?eC.createElement(e):{}},eF=!m&&!w(function(){return 7!==Object.defineProperty(ex("div"),"a",{get:function(){return 7}}).a});var eA=Object.getOwnPropertyDescriptor;t=m?eA:function(e,t){if(e=k(e),t=B(t),eF)try{return eA(e,t)}catch(e){}if(eE(e,t))return M(!$(r,e,t),e[t])};var eH={},eB={};eB=m&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},ez=String,eW=TypeError;eU=function(e){if(z(e))return e;throw new eW(ez(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eG="enumerable",eK="configurable",eJ="writable";a=m?eB?function(e,t,r){if(eU(e),t=B(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=eY(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eG in r?r[eG]:n[eG],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eU(e),t=B(t),eU(r),eF)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eH=m?function(e,t,r){return a(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=m&&Object.getOwnPropertyDescriptor,e9=eE(e1,"name"),e4=e9&&(!m||m&&e2(e1,"name").configurable),e3={},e7=T(Function.toString);W(e_.inspectSource)||(e_.inspectSource=function(e){return e7(e)}),e3=e_.inspectSource;var e6={},e8={},e5=b.WeakMap;e8=W(e5)&&/native code/.test(String(e5));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=eM(e))};var tr={};tr={};var tn="Object already initialized",ti=b.TypeError,ta=b.WeakMap;if(e8||e_.state){var to=e_.state||(e_.state=new ta);to.get=to.get,to.has=to.has,to.set=to.set,o=function(e,t){if(to.has(e))throw new ti(tn);return t.facade=e,to.set(e,t),t},s=function(e){return to.get(e)||{}},c=function(e){return to.has(e)}}else{var ts=te("state");tr[ts]=!0,o=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eH(e,ts,t),t},s=function(e){return eE(e,ts)?e[ts]:{}},c=function(e){return eE(e,ts)}}var tc=(e6={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e6.get,tl=String,tp=Object.defineProperty,tf=T("".slice),td=T("".replace),tg=T([].join),th=m&&!w(function(){return 8!==tp(function(){},"length",{value:8}).length}),tv=String(String).split("String"),t_=eZ=function(e,t,r){"Symbol("===tf(tl(t),0,7)&&(t="["+td(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e4&&e.name!==t)&&(m?tp(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&eE(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?m&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=tg(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return W(this)&&tu(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(W(r)&&eZ(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},ty={},tm={},tw={},t$={},tE={},tS={},tj=Math.ceil,tO=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tO:tj)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tM=Math.max,tk=Math.min;t$=function(e,t){var r=tE(e);return r<0?tM(r+t,0):tk(r,t)};var tP={},tT={},tI=Math.min;tT=function(e){var t=tE(e);return t>0?tI(t,0x1fffffffffffff):0},tP=function(e){return tT(e.length)};var tN=function(e){return function(t,r,n){var i,a=k(t),o=tP(a);if(0===o)return!e&&-1;var s=t$(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tq={includes:tN(!0),indexOf:tN(!1)}.indexOf,tD=T([].push);tm=function(e,t){var r,n=k(e),i=0,a=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tD(a,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tq(a,r)||tD(a,r));return a};var tL={},tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tm(e,tF)},l=Object.getOwnPropertySymbols;var tx=T([].concat);ty=Y("Reflect","ownKeys")||function(e){var t=u(eU(e));return l?tx(t,l(e)):t},tb=function(e,r,n){for(var i=ty(r),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,t(r,s))}};var tC={},tR=/#|\.prototype\./,tA=function(e,t){var r=tB[tH(e)];return r===tz||r!==tU&&(W(t)?w(t):!!t)},tH=tA.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tB=tA.data={},tU=tA.NATIVE="N",tz=tA.POLYFILL="P";tC=tA,_=function(e,r){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in r){if(o=r[i],a=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tC(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tb(o,a)}(e.sham||a&&a.sham)&&eH(o,"sham",!0),eX(n,i,o,e)}};var tW={},tQ={},tV=Function.prototype,tY=tV.apply,tG=tV.call;tQ="object"==typeof Reflect&&Reflect.apply||(E?tG.bind(tY):function(){return tG.apply(tY,arguments)});var tK={},tJ={},tX=(tJ=function(e){if("Function"===D(e))return T(e)})(tJ.bind);tK=function(e,t){return eu(e),void 0===t?e:E?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=Y("document","documentElement");var t0={};t0=T([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t4={},t3={},t7=function(e){return Z.slice(0,e.length)===e};t4="NODE"===(t3=t7("Bun/")?"BUN":t7("Cloudflare-Workers")?"CLOUDFLARE":t7("Deno/")?"DENO":t7("Node.js/")?"NODE":b.Bun&&"string"==typeof Bun.version?"BUN":b.Deno&&"object"==typeof Deno.version?"DENO":"process"===D(b.process)?"NODE":b.window&&b.document?"BROWSER":"REST");var t6=b.setImmediate,t8=b.clearImmediate,t5=b.process,re=b.Dispatch,rt=b.Function,rr=b.MessageChannel,rn=b.String,ri=0,ra={},ro="onreadystatechange";w(function(){p=b.location});var rs=function(e){if(eE(ra,e)){var t=ra[e];delete ra[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){b.postMessage(rn(e),p.protocol+"//"+p.host)};t6&&t8||(t6=function(e){t1(arguments.length,1);var t=W(e)?e:rt(e),r=t0(arguments,1);return ra[++ri]=function(){tQ(t,void 0,r)},f(ri),ri},t8=function(e){delete ra[e]},t4?f=function(e){t5.nextTick(rc(e))}:re&&re.now?f=function(e){re.now(rc(e))}:rr&&!t9?(g=(d=new rr).port2,d.port1.onmessage=ru,f=tK(g.postMessage,g)):b.addEventListener&&W(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!w(rl)?(f=rl,b.addEventListener("message",ru,!1)):f=ro in ex("script")?function(e){tZ.appendChild(ex("script"))[ro]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rp=(tW={set:t6,clear:t8}).clear;_({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rp},{clearImmediate:rp});var rf=tW.set,rd={},rg=b.Function,rh=/MSIE .\./.test(Z)||"BUN"===t3&&((e=b.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rd=function(e,t){var r=t?2:1;return rh?function(n,i){var a=t1(arguments.length,1)>r,o=W(n)?n:rg(n),s=a?t0(arguments,r):[],c=a?function(){tQ(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rv=b.setImmediate?rd(rf,!1):rf;_({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rv},{setImmediate:rv});const r_="https://forkify-api.jonas.io/api/v2/recipes";async function rb(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}}const ry={recipe:{},search:{query:"",results:[],groupedResults:[],resultsPerPage:10,page:1}};async function rm(e){try{let{recipe:t}=(await rb(`${r_}/${e}`)).data;ry.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw e}return null}async function rw(e){try{let t=await rb(`${r_}/?search=${e}`);ry.search.query=e,ry.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}return null}function r$(e=1){ry.search.page=e;let t=Object.groupBy(ry.search.results,(e,t)=>Math.floor(t/ry.search.resultsPerPage));return ry.search.groupedResults=t,t[e-1]}var rE={};rE=import.meta.resolve("eyyUD");var rS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",rj=function(e){for(var t={},r=0;r<64;r++)t[e.charAt(r)]=r;return t};rj(rS+"+/"),rj(rS+"-_");class rO{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=[...document.createRange().createContextualFragment(t).querySelectorAll("*")],n=[...this._parentEl.querySelectorAll("*")];r.forEach((e,t)=>{let r=n.at(t);e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||[...e.attributes].forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
        <svg>
          <use href="${v(rE)}#icon-loader"></use>
        </svg>
    </div>  
  `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`    
    <div class="error">
        <div>
          <svg>
            <use href="${v(rE)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`    
      <div class="message">
        <div>
          <svg>
            <use href="${v(rE)}#icon-smile"></use>
          </svg>
        </div>
        <p>
         ${e}
        </p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var rM={};function rk(e,t,r,n,i){var a,o,s,c;let u=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&u.push(t);let l=0,p=e,f=t;for(;l<=u.length;)p%u[l]==0&&f%u[l]==0?(u[l],p/=u[l],f/=u[l]):l++;return a=f,o=p,s=r,c=n,1===a&&1===o?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${c}${s}`:"0"==s?`${c}${o}/${a}`:`${c}${s} ${o}/${a}`}rM=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c,u;return s=r,c=a,u=t,rk(parseInt(s,10),Math.pow(10,s.length),c,u,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rk(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rP extends rO{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe, Please try another one";_successMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";addHandlerRender(e){["load","hashchange"].forEach(t=>window.addEventListener(t,e))}addHandlerServing(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");r&&e(+r.dataset.func)})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img"/>
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${v(rE)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${v(rE)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-func="-1" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${v(rE)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-func="+1" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${v(rE)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${v(rE)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${v(rE)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
       <li class="recipe__ingredient">
         <svg class="recipe__icon">
           <use href="${v(rE)}#icon-check"></use>
         </svg>
         <div class="recipe__quantity">${e.quantity?v(rM)(e.quantity):""}</div>
         <div class="recipe__description">
           <span class="recipe__unit">${e.unit}</span>
           ${e.description}
         </div>
       </li>
    `}}var rT=new rP;class rI extends rO{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._parentEl.querySelector(".search__field").value=""}}var rN=new rI;class rq extends rO{_parentEl=document.querySelector(".results");_errorMessage="No recipes were found for your search query! Please try again";_successMessage="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}var rD=new rq;class rL extends rO{_parentEl=document.querySelector(".pagination");_generateMarkup(){return 1===Object.keys(this._data.groupedResults).length?"":this._data.page===Object.keys(this._data.groupedResults).length?`
      <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${v(rE)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page-1}</span>
      </button>
      `:1===this._data.page?`
      <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page+1}</span>
        <svg class="search__icon">
          <use href="${v(rE)}#icon-arrow-right"></use>
        </svg>
      </button>`:`
      <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${v(rE)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page-1}</span>
      </button>
      <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page+1}</span>
        <svg class="search__icon">
          <use href="${v(rE)}#icon-arrow-right"></use>
        </svg>
      </button>`}addHandlerPagination(e){this._parentEl.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rF=new rL;async function rx(){try{let e=window.location.hash.slice(1);if(!e)return;rD.update(r$(ry.search.page)),rT.renderSpinner(),await rm(e),rT.render(ry.recipe)}catch(e){rT.renderError()}return null}async function rC(){try{rD.renderSpinner();let e=rN.getQuery();if(!e)throw Error();await rw(e),rD.render(r$()),rF.render(ry.search)}catch(e){rD.renderError()}return null}rT.addHandlerRender(rx),rT.addHandlerServing(function(e){var t;(t=ry.recipe.servings+e)<=0||(ry.recipe.ingredients.forEach(e=>{e.quantity=e.quantity/ry.recipe.servings*t}),ry.recipe.servings=t),rT.update(ry.recipe)}),rN.addHandlerSearch(rC),rF.addHandlerPagination(function(e){rD.render(r$(e)),rF.render(ry.search)});
//# sourceMappingURL=starter.4570906f.js.map
