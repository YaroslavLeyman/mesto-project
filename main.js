(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}function n(e){"keydown"===e.type&&"Escape"===e.key&&s(document.querySelector(".popup_opened"))}function r(e){"mousedown"===e.type&&e.target.classList.contains("popup")&&s(e.target)}e.d({},{yL:()=>N,Zg:()=>g});var o={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-2",headers:{authorization:"901e5165-7f96-4722-9d58-f599200d55be","Content-Type":"application/json"}};function c(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var a,u=fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then((function(e){return c(e)})),i=fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then((function(e){return c(e)}));function l(e){e.classList.add("popup_opened"),function(e){document.addEventListener("keydown",n),e.addEventListener("mousedown",r)}(e)}function s(e){e.classList.remove("popup_opened"),function(e){document.removeEventListener("keydown",n),e.removeEventListener("mousedown",r)}(e)}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...",r=t.querySelector(".popup__confirm-button");e?(a=r.textContent,r.textContent=n):setTimeout((function(){r.textContent=a}),1e3)}var p=document.querySelector("#popup-add"),f=document.querySelector("#place-form"),v=document.querySelector("#elements-template").content,m=document.querySelector("#popup-add-name"),y=document.querySelector("#popup-add-link"),h=document.querySelector(".popup-card"),_=h.querySelector(".popup-card__description"),S=h.querySelector(".popup-card__image");function b(e){var t=v.querySelector(".new-card__element").cloneNode(!0),n=t.querySelector(".new-card__image");return t.querySelector(".new-card__title").textContent=e.name,n.setAttribute("src",e.link),n.setAttribute("alt",e.name),t.querySelector(".new-card__delete").addEventListener("click",(function(){t.remove()})),n.addEventListener("click",(function(){var t;t=e,l(h),_.textContent=t.name,S.src=t.link,S.alt=t.name})),function(e,t){t.querySelector(".new-card__likes-counter").textContent=e.likes.length,e.likes.length>0&&e.likes.forEach((function(e){e._id===g&&t.querySelector(".new-card__heart").classList.add("new-card__heart_active")}))}(e,t),t.querySelector(".new-card__heart").addEventListener("click",(function(n){return function(e,t,n){var r;e.target.classList.contains("new-card__heart_active")?(r=t._id,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then((function(e){return c(e)}))).then((function(t){e.target.classList.remove("new-card__heart_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){return c(e)}))}(t._id).then((function(t){e.target.classList.add("new-card__heart_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)}))}(n,e,t.querySelector(".new-card__likes-counter"))})),t}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}f.addEventListener("submit",(function(e){e.preventDefault(),N.prepend(b({name:m.value,link:y.value})),f.reset(),s(p)}));var g,L,E=document.querySelector(".profile__button-edit"),C=document.querySelector(".profile__button-add"),k=document.querySelectorAll(".popup__close"),w=document.querySelector("#popup-avatar"),x=document.querySelector(".profile"),A=x.querySelector(".profile__avatar-cover"),U=x.querySelector(".profile__avatar"),O=document.querySelector(".popup"),P=document.querySelector("#heading"),T=document.querySelector("#subheading"),j=document.querySelector(".profile__title"),D=document.querySelector(".profile__description"),B=document.querySelector(".popup__main-container"),I=document.querySelector("#popup-profile"),N=document.querySelector(".elements");function J(e){e.preventDefault(),j.textContent=P.value,D.textContent=T.value,s(O)}L={formSelector:".popup__main-container",inputSelector:".popup__text-input",submitButtonSelector:".popup__confirm-button",inactiveButtonClass:"popup__confirm-button_disabled",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(L.formSelector)).forEach((function(e){!function(e,n){var r=Array.from(e.querySelectorAll(n.inputSelector)),o=e.querySelector(n.submitButtonSelector);t(r,o,n),e.addEventListener("reset",(function(){setTimeout((function(){t(r,o,n)}),0)})),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add("popup__input-error_active")}(e,t,t.validationMessage,n)}(e,c,n),t(r,o,n)}))}))}(e,L)})),Promise.all([u,i]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];g=o._id,U.src=o.avatar,j.textContent=o.name,D.textContent=o.about,c.forEach((function(e){N.append(addCard(e))}))})).catch((function(e){console.log(e)})),C.addEventListener("click",(function(){l(p)})),A.addEventListener("click",(function(){l(w)})),B.addEventListener("submit",J),E.addEventListener("click",(function(){l(O),P.value=j.textContent,T.value=D.textContent})),k.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return s(t)}))})),w.addEventListener("submit",(function(e){var t;e.preventDefault(),d(!0,w),(t=document.querySelector("#popup-avatar-link").value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:t})}).then((function(e){return c(e)}))).then((function(t){U.src=t.avatar,s(w),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){d(!1,w)}))})),I.addEventListener("submit",(function(e){var t,n;e.preventDefault(),d(!0,I),(t=P.value,n=T.value,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return c(e)}))).then((function(e){J(j,e.name,e.about),s(I)})).catch((function(e){console.log(e)})).finally((function(){d(!1,I)}))})),p.addEventListener("submit",(function(e){var t,n;e.preventDefault(),d(!0,p),(t=photoPlaceInput.value,n=photoLinkInput.value,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return c(e)}))).then((function(t){N.prepend(addCard(t)),s(p),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){d(!1,p)}))}))})();