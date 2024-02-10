import {content,contentList,pageContent,popupEdit,popupEditForm,nameInput,jobInput,popupNew,
  popupNewForm,placeInput,placeLink,profileInfo,profileEditButton,profileAddButton
  ,profileTitle,profileJob,popups,popupCard,popupImage,popupImageText} from "./constaints";
  
// Функция которая присваевает класс анимации для попапов
function anmationPopup(){
  popups.forEach((popup) => {
    popup.classList.add('popup_is-animated')
  })
};
// функция для открытия попапа
function openPopup(popup) {
	popup.classList.add('popup_is-opened');
	document.addEventListener('keydown', handleCloseEsc);
	return popup;
};
// функция для закрытия попапа
function closePopup(popup) {
	popup.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', handleCloseEsc);
};
// функция для закрытия попапа по кнопке ESC
function handleCloseEsc(evt) {
	const ESC_CODE = 27;
  const target = findOpenPopup();
	if (evt.keyCode === ESC_CODE) {
		closePopup(target);
	}
};
// функция для определения открытого попапа
function findOpenPopup() {
	return popups.find(popup => popup.classList.contains('popup_is-opened'));
};
//Функция закрытия по крестику
function handleCloseButtonClick(evt) {
	const popup = evt.target.closest('.popup');
	closePopup(popup);
};
//Функция закрытия по оверлею
function handleOverlayClick(evt) {
	if (evt.target === evt.currentTarget) {
		closePopup(evt.target);
	}
};
//Функция изменения профиля
function handleEditFormSubmit(evt) {
	evt.preventDefault();
	let name = nameInput.value;
	let job = jobInput.value;
	profileTitle.textContent = name;
	profileJob.textContent = job;
	closePopup(findOpenPopup());
};
//Функция добавления карточки
function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const item = {
		name: placeInput.value,
		link: placeLink.value,
	};
 contentList.prepend(createCard(item, deleteCard, openCardImagePopup, likeCard));
	closePopup(popupNew);
	placeInput.value = '';
	placeLink.value = '';
};
//Функция открытия катрочки
function openCardImagePopup({ name, link }) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageText.textContent = name;
  openPopup(popupCard);
};

export { anmationPopup, openPopup, closePopup, handleCloseEsc, findOpenPopup, handleCloseButtonClick, 
  handleOverlayClick, handleEditFormSubmit, handleAddFormSubmit, openCardImagePopup };