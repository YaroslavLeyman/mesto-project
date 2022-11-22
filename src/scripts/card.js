import { openModalWindow, closeModalWindow, adjustLike, changeLikeState } from "./utils.js"
import { cardLIst } from "../index.js"

const popupAddCard = document.querySelector('#popup-add');
const cardAddForm = document.querySelector('#place-form');
const cardTemplate = document.querySelector('#elements-template').content;
const photoPlaceInput = document.querySelector('#popup-add-name');
const photoLinkInput = document.querySelector('#popup-add-link');
const popPhoto = document.querySelector('.popup-card');
const descrPopup = popPhoto.querySelector('.popup-card__description');
const imagePopup = popPhoto.querySelector('.popup-card__image');

// Функция создания новой карточки
export function createCard(card) {
  const elementCard = cardTemplate.querySelector('.new-card__element').cloneNode(true);
  const photo = elementCard.querySelector('.new-card__image');

  elementCard.querySelector(".new-card__title").textContent = card.name;
  photo.setAttribute('src', card.link);
  photo.setAttribute('alt', card.name);

  const deleteCard = elementCard.querySelector('.new-card__delete');
  deleteCard.addEventListener('click', function() {
    elementCard.remove();
  });

  photo.addEventListener('click', function () {
    openImagePopup(card);
  });

  adjustLike(card, elementCard)

  elementCard.querySelector('.new-card__heart').addEventListener('click', (evt) => changeLikeState(evt, card, elementCard.querySelector('.new-card__likes-counter')))

  return elementCard;
}

// Функция добавления карточки
function handlerAddNewCard (evt) {
  evt.preventDefault();

  cardLIst.prepend(createCard({
    name: photoPlaceInput.value,
    link: photoLinkInput.value
  }));

  cardAddForm.reset();
  closeModalWindow(popupAddCard);
}
cardAddForm.addEventListener('submit', handlerAddNewCard);

// Функция зума карточки
function openImagePopup(el) {

  openModalWindow(popPhoto);

  descrPopup.textContent = el.name;
  imagePopup.src = el.link;
  imagePopup.alt = el.name;
}

export { popupAddCard };
