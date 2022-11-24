import "./pages/index.css";
import { enableValidation } from "./scripts/validate.js";
import { popupAddCard, createCard, photoPlaceInput, photoLinkInput } from "./scripts/card.js";
import { renderLoading } from "./scripts/utils.js";
import { openModalWindow, closeModalWindow } from "./scripts/modal.js";
import { getInitialCards, getProfileData, patchProfileData, postNewCard, patchAvatar } from './scripts/api.js'


const profileOpenButton = document.querySelector('.profile__button-edit');
const openPopupButtonAdd = document.querySelector('.profile__button-add');
const closePopupButtons = document.querySelectorAll('.popup__close');
const popupAvatar = document.querySelector('#popup-avatar');
const profile = document.querySelector('.profile');
const openPopupAvatar = profile.querySelector('.profile__avatar-cover');
const pfofileAvatar = profile.querySelector('.profile__avatar');
const pfofileAvatarLink = document.querySelector('#popup-avatar-link');

const popupEdit = document.querySelector('.popup');
const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

const popupProfileContainer = document.querySelector('#popup-profile');



export const cardLIst = document.querySelector('.elements');

export const validationNewData = {
  formSelector: '.popup__main-container',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__confirm-button',
  inactiveButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(validationNewData);

export let userID;

Promise.all([getProfileData, getInitialCards])
  .then( ([userData, cardsData]) => {
    userID = userData._id;

    pfofileAvatar.src = userData.avatar;
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;

    cardsData.forEach( card => {
      cardLIst.append(createCard(card))
    });
  })
  .catch( err => {
    console.log(err);
});

// Обработчик открытия окна добавления карточки
openPopupButtonAdd.addEventListener('click',() => {
  openModalWindow(popupAddCard);
});

//Обработчик открытия окна аватара
openPopupAvatar.addEventListener('click',() => {
  openModalWindow(popupAvatar);
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
});

popupAvatar.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupAvatar)
  patchAvatar(pfofileAvatarLink.value)
    .then( data => {
      pfofileAvatar.src = data.avatar
      closeModalWindow(popupAvatar)
      evt.target.reset()
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      renderLoading(false, popupAvatar)
    })
});

popupProfileContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupProfileContainer)
  patchProfileData(nameInput.value, jobInput.value)
    .then( data => {
      profileName.textContent = data.name;
      profileJob.textContent = data.about;
      closeModalWindow(popupProfileContainer)
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      renderLoading(false, popupProfileContainer)
    })
});

popupAddCard.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupAddCard)
  postNewCard(photoPlaceInput.value, photoLinkInput.value)
    .then( card => {
      cardLIst.prepend(createCard(card))
      closeModalWindow(popupAddCard)
      evt.target.reset()
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      renderLoading(false, popupAddCard)
    })
});
