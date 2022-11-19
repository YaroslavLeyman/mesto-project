import "./pages/index.css";
import { enableValidation, hideInputError } from "./scripts/validate.js";
import { popupEdit, nameInput, jobInput, profileName, profileJob  } from "./scripts/utils.js";
import { popupAddCard } from "./scripts/card.js";
import { openModalWindow, closeModalWindow } from "./scripts/modal.js";


const profileOpenButton = document.querySelector('.profile__button-edit');
const openPopupButtonAdd = document.querySelector('.profile__button-add');
const closePopupButtons = document.querySelectorAll('.popup__close');

export const validationNewData = {
  formSelector: '.popup__main-container',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__confirm-button',
  inactiveButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(validationNewData);

// Обработчик открытия окна добавления карточки
openPopupButtonAdd.addEventListener('click',() => {
  openModalWindow(popupAddCard);
});

// Обработчик открытия окна редактирования
profileOpenButton.addEventListener('click',() => {
  openModalWindow(popupEdit);

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closePopupButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closeModalWindow(popup));
  hideInputError(formElement, inputElement, validationNewData);
});
