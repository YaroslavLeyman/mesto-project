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

export { renderLoading }
