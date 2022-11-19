import { openModalWindow, closeModalWindow } from "./modal.js"
import { cardLIst } from "./utils.js"

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

  elementCard.querySelector(".new-card__title").textContent = card.name;
  elementCard.querySelector(".new-card__image").src = card.link;
  elementCard.querySelector(".new-card__image").alt = card.name;

  elementCard.querySelector('.new-card__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('new-card__heart_active');
  });

  const deleteCard = elementCard.querySelector('.new-card__delete');
  deleteCard.addEventListener('click', function() {
    elementCard.remove();
  });

  const photo = elementCard.querySelector('.new-card__image');
  photo.addEventListener('click', function () {
    openImagePopup(card);
  });

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
