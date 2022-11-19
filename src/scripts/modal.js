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

//Функции закрытия попапов на Esc и оверлей
function setCloseListener(modalWindow) {
  document.addEventListener('keydown', CloseListenerKeydown);
  modalWindow.addEventListener('mousedown', CloseListenerMousedown);
};

function CloseListenerKeydown(evt) {
  if (evt.type === 'keydown' && evt.key === 'Escape') {
    closeModalWindow(findOpenedPopup());
  };
};

function CloseListenerMousedown(evt) {
  if (evt.type === 'mousedown' && evt.target.classList.contains('popup')) {
    closeModalWindow(evt.target);
  };
}

function findOpenedPopup () {
  return document.querySelector('.popup_opened');
};

function removeCloseListener(modalWindow) {
  document.removeEventListener('keydown', CloseListenerKeydown);
  modalWindow.removeEventListener('mousedown', CloseListenerMousedown);
};
