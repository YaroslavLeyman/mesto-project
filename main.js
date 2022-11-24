(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}function n(e){e.classList.add("popup_opened"),function(e){document.addEventListener("keydown",o),e.addEventListener("mousedown",c)}(e)}function r(e){e.classList.remove("popup_opened"),function(e){document.removeEventListener("keydown",o),e.removeEventListener("mousedown",c)}(e)}function o(e){"keydown"===e.type&&"Escape"===e.key&&r(document.querySelector(".popup_opened"))}function c(e){"mousedown"===e.type&&e.target.classList.contains("popup")&&r(e.target)}e.d({},{Zg:()=>q});var a={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-2",headers:{authorization:"901e5165-7f96-4722-9d58-f599200d55be","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var i,l=fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then((function(e){return u(e)})),s=fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then((function(e){return u(e)})),d=document.querySelector("#popup-add"),p=(document.querySelector("#place-form"),document.querySelector("#elements-template").content),f=document.querySelector("#popup-add-name"),m=document.querySelector("#popup-add-link"),v=document.querySelector(".popup-card"),y=v.querySelector(".popup-card__description"),_=v.querySelector(".popup-card__image");function h(e){var t=p.querySelector(".new-card__element").cloneNode(!0),r=t.querySelector(".new-card__image");return t.querySelector(".new-card__title").textContent=e.name,r.setAttribute("src",e.link),r.setAttribute("alt",e.name),t.querySelector(".new-card__delete").addEventListener("click",(function(){t.remove()})),r.addEventListener("click",(function(){var t;t=e,n(v),y.textContent=t.name,_.src=t.link,_.alt=t.name})),function(e,t){t.querySelector(".new-card__likes-counter").textContent=e.likes.length,e.likes.length>0&&e.likes.forEach((function(e){e._id===q&&t.querySelector(".new-card__heart").classList.add("new-card__heart_active")}))}(e,t),t.querySelector(".new-card__heart").addEventListener("click",(function(n){return function(e,t,n){var r;e.target.classList.contains("new-card__heart_active")?(r=t._id,fetch("".concat(a.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:a.headers}).then((function(e){return u(e)}))).then((function(t){e.target.classList.remove("new-card__heart_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then((function(e){return u(e)}))}(t._id).then((function(t){e.target.classList.add("new-card__heart_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)}))}(n,e,t.querySelector(".new-card__likes-counter"))})),t}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...",r=t.querySelector(".popup__confirm-button");e?(i=r.textContent,r.textContent=n):setTimeout((function(){r.textContent=i}),1e3)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q,g,L=document.querySelector(".profile__button-edit"),E=document.querySelector(".profile__button-add"),C=document.querySelectorAll(".popup__close"),k=document.querySelector("#popup-avatar"),w=document.querySelector(".profile"),x=w.querySelector(".profile__avatar-cover"),A=w.querySelector(".profile__avatar"),U=document.querySelector("#popup-avatar-link"),O=document.querySelector(".popup"),T=document.querySelector("#heading"),j=document.querySelector("#subheading"),P=document.querySelector(".profile__title"),B=document.querySelector(".profile__description"),D=document.querySelector(".popup__main-container"),N=document.querySelector("#popup-profile"),I=document.querySelector(".elements");function J(e){e.preventDefault(),P.textContent=T.value,B.textContent=j.value,r(O)}g={formSelector:".popup__main-container",inputSelector:".popup__text-input",submitButtonSelector:".popup__confirm-button",inactiveButtonClass:"popup__confirm-button_disabled",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(g.formSelector)).forEach((function(e){!function(e,n){var r=Array.from(e.querySelectorAll(n.inputSelector)),o=e.querySelector(n.submitButtonSelector);t(r,o,n),e.addEventListener("reset",(function(){setTimeout((function(){t(r,o,n)}),0)})),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add("popup__input-error_active")}(e,t,t.validationMessage,n)}(e,c,n),t(r,o,n)}))}))}(e,g)})),Promise.all([l,s]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];q=o._id,A.src=o.avatar,P.textContent=o.name,B.textContent=o.about,c.forEach((function(e){I.append(h(e))}))})).catch((function(e){console.log(e)})),E.addEventListener("click",(function(){n(d)})),x.addEventListener("click",(function(){n(k)})),D.addEventListener("submit",J),L.addEventListener("click",(function(){n(O),T.value=P.textContent,j.value=B.textContent})),C.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return r(t)}))})),k.addEventListener("submit",(function(e){var t;e.preventDefault(),S(!0,k),(t=U.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then((function(e){return u(e)}))).then((function(t){A.src=t.avatar,r(k),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){S(!1,k)}))})),N.addEventListener("submit",(function(e){var t,n;e.preventDefault(),S(!0,N),(t=T.value,n=j.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return u(e)}))).then((function(e){J(P,e.name,e.about),r(N)})).catch((function(e){console.log(e)})).finally((function(){S(!1,N)}))})),d.addEventListener("submit",(function(e){var t,n;e.preventDefault(),S(!0,d),(t=f.value,n=m.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return u(e)}))).then((function(t){I.prepend(h(t)),r(d),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){S(!1,d)}))}))})();