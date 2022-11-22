import { closeModalWindow } from "./utils.js"

//Функции закрытия попапов на Esc и оверлей
function setCloseListener(modalWindow) {
  document.addEventListener('keydown', closeListenerKeydown);
  modalWindow.addEventListener('mousedown', closeListenerMousedown);
};

function closeListenerKeydown(evt) {
  if (evt.type === 'keydown' && evt.key === 'Escape') {
    closeModalWindow(findOpenedPopup());
  };
};

function closeListenerMousedown(evt) {
  if (evt.type === 'mousedown' && evt.target.classList.contains('popup')) {
    closeModalWindow(evt.target);
  };
}

function findOpenedPopup () {
  return document.querySelector('.popup_opened');
};

function removeCloseListener(modalWindow) {
  document.removeEventListener('keydown', closeListenerKeydown);
  modalWindow.removeEventListener('mousedown', closeListenerMousedown);
};

export { setCloseListener, removeCloseListener }
