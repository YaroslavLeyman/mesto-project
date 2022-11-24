import { openModalWindow } from "./modal.js"
import { userID } from "../index.js"
import { addLike, removeLike, deleteCard } from './api.js'

const popupAddCard = document.querySelector('#popup-add');
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

  const cardDelete = elementCard.querySelector('.new-card__delete');
  cardDelete.addEventListener('click', function() {
    deleteCard(card._id).then( () => {
      elementCard.remove();
    })
  });

  photo.addEventListener('click', function () {
    openImagePopup(card);
  });

  //Условие появления корзины удаления, если карточку создал пользователь
  if (card.owner._id === userID) {
    cardDelete.classList.remove('new-card__delete_hidden');
  }

  adjustLike(card, elementCard)

  elementCard.querySelector('.new-card__heart').addEventListener('click', (evt) => changeLikeState(evt, card, elementCard.querySelector('.new-card__likes-counter')))

  return elementCard;
}

// Функция зума карточки
function openImagePopup(el) {

  openModalWindow(popPhoto);

  descrPopup.textContent = el.name;
  imagePopup.src = el.link;
  imagePopup.alt = el.name;
}

function adjustLike (card, elementCard) {
  elementCard.querySelector('.new-card__likes-counter').textContent = card.likes.length
  if (card.likes.length > 0) {
    card.likes.forEach( like => {
      if (like._id === userID) {
        elementCard.querySelector('.new-card__heart').classList.add('new-card__heart_active')
      }
    })
  }
}

function changeLikeState (evt, data, likesCounter) {
  if (evt.target.classList.contains('new-card__heart_active')) {
    removeLike(data._id)
    .then( (res) => {
      evt.target.classList.remove('new-card__heart_active')
      likesCounter.textContent = res.likes.length
      evt.target.blur()
    })
    .catch( err => {
      console.log(err)
    })
  } else {
    addLike(data._id)
    .then( (res) => {
      evt.target.classList.add('new-card__heart_active')
      likesCounter.textContent = res.likes.length
      evt.target.blur()
    })
    .catch( err => {
      console.log(err)
    })
  }
};

export { popupAddCard, photoPlaceInput, photoLinkInput };
