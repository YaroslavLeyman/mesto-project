export function enableValidation (validationNewData) {
  const formList = Array.from(document.querySelectorAll(validationNewData.formSelector));
  formList.forEach( (formElement) => {
    setEventListeners(formElement, validationNewData);
  });
}

function setEventListeners (formElement, validationNewData) {
  const inputList = Array.from(formElement.querySelectorAll(validationNewData.inputSelector));
  const buttonElement = formElement.querySelector(validationNewData.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationNewData);

  formElement.addEventListener('reset', () => {
    // `setTimeout` нужен для того, чтобы дождаться очищения формы
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, validationNewData);
    }, 0); // 0 миллисекунд, чтобы после `reset` сработало действие
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationNewData);
      toggleButtonState(inputList, buttonElement, validationNewData);
    })
  })
};

function toggleButtonState (inputList, buttonElement, validationNewData) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationNewData.inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(validationNewData.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function checkInputValidity (formElement, inputElement, validationNewData) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationNewData)
  } else {
    hideInputError(formElement, inputElement, validationNewData)
  }
};

function showInputError (formElement, inputElement, errorMessage, validationNewData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationNewData.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add('popup__input-error_active')
};

function hideInputError (formElement, inputElement, validationNewData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationNewData.inputErrorClass)
  errorElement.classList.remove('popup__input-error_active')
  errorElement.textContent = ''
};
