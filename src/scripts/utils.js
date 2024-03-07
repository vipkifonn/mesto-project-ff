import { popups } from "./constants";
// функция для определения открытого попапа
function getOpenPopup() {
	return popups.find(popup => popup.classList.contains('popup_is-opened'));
};
 
export {getOpenPopup}