import { setCloseListener, removeCloseListener } from "./modal.js"
import { userID } from '../index.js'
import { addLike, removeLike } from './api.js'

// Функция открытия попапа
export function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  setCloseListener(modalWindow);
};

//Функция закрытия попапа
export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  removeCloseListener(modalWindow);
};

let popupBtnText
function renderLoading(isLoading, modalWindow, renderText = "Сохранение...") {
  const btnNode = modalWindow.querySelector('.popup__confirm-button')
  if (isLoading) {
    popupBtnText = btnNode.textContent
    btnNode.textContent = renderText
  } else {
    setTimeout(() => { btnNode.textContent = popupBtnText }, 1000)
  }
};

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

export { renderLoading, adjustLike, changeLikeState }
