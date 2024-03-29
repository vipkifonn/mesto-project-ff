import { getOpenPopup } from "./utils";

// функция для открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleCloseEsc);
}
// функция для закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleCloseEsc);
}
// функция для закрытия попапа по кнопке ESC
function handleCloseEsc(evt) {
  const target = getOpenPopup();
  if (evt.key === "Escape") {
    closePopup(target);
  }
}

//Функция закрытия по оверлею
function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export { openPopup, closePopup, handleCloseEsc, handleOverlayClick };
