import { closeModalWindow } from "./modal.js"
import { createCard } from "./card.js"

const popupEdit = document.querySelector('.popup');
const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileEditForm = document.querySelector('.popup__main-container');
const cardLIst = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Функция загрузки карточек на сайт
function uploadCard(array, cardLIst) {
  array.forEach((card) => cardLIst.prepend(createCard(card)));
}

// Функция сохранения информации в профиле
function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModalWindow(popupEdit);
}
profileEditForm.addEventListener('submit', handleProfileFormSubmit);

// Вызов фукциий
uploadCard(initialCards, cardLIst);

export { popupEdit, nameInput, jobInput, profileName, profileJob, cardLIst };
