(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,r,n){var o=document.querySelector("#card-template").content.cloneNode(!0),p=o.querySelector(".card__title"),c=o.querySelector(".card__image");return c.alt=e.name,c.src=e.link,p.textContent=e.name,o.querySelector(".card__like-button").addEventListener("click",n),o.querySelector(".card__delete-button").addEventListener("click",t),c.addEventListener("click",(function(){return r(e)})),o}function r(e){e.target.closest(".card").remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}e.d({},{_:()=>j});var o=document.querySelector(".places").querySelector(".places__list"),p=document.querySelector(".page__content"),c=p.querySelector(".popup_type_edit"),a=c.querySelector(".popup__form"),i=a.querySelector(".popup__input_type_name"),u=a.querySelector(".popup__input_type_description"),s=p.querySelector(".popup_type_new-card"),l=s.querySelector(".popup__form"),d=l.querySelector(".popup__input_type_card-name"),_=l.querySelector(".popup__input_type_url"),y=p.querySelector(".profile"),f=y.querySelector(".profile__edit-button"),v=y.querySelector(".profile__add-button"),m=y.querySelector(".profile__title"),q=y.querySelector(".profile__description"),S=Array.from(document.querySelectorAll(".popup")),k=p.querySelector(".popup_type_image"),g=k.querySelector(".popup__image"),L=k.querySelector(".popup__caption");function E(e){return e.classList.add("popup_is-opened"),document.addEventListener("keydown",b),e}function h(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",b)}function b(e){var t=j();"Escape"===e.key&&h(t)}function x(e){e.target===e.currentTarget&&h(e.target)}function j(){return S.find((function(e){return e.classList.contains("popup_is-opened")}))}function C(e){h(e.target.closest(".popup"))}function A(e){var t=e.name,r=e.link;g.src=r,g.alt=t,L.textContent=t,E(k)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){o.append(t(e,r,A,n))})),S.forEach((function(e){e.classList.add("popup_is-animated")})),f.addEventListener("click",(function(e){e.stopPropagation(),m.textContent=i.value,q.textContent=u.value,E(c)})),v.addEventListener("click",(function(e){e.stopPropagation(),E(s)})),S.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",C),e.addEventListener("click",x)})),a.addEventListener("submit",(function(e){e.preventDefault();var t=i.value,r=u.value;m.textContent=t,q.textContent=r,h(j())})),l.addEventListener("submit",(function(e){e.preventDefault();var p={name:d.value,link:_.value};o.prepend(t(p,r,A,n)),l.reset(),h(s)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(){evt.preventDefault()})),function(e){Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){t.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),n.textContent=r,n.classList.add("popup__input-error_active")}(e,t,t.validationMessage)}(e,t)}))}))}(e)}))})();