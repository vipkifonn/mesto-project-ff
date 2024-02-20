
//подключения js
import './pages/index.css';
import {initialCards} from "./components/cards";
import { createCard, deleteCard, likeCard} from './components/card'; 
import { openPopup, closePopup, handleCloseEsc, handleOverlayClick} from './components/modal';
import {content,contentList,pageContent,popupEdit,popupEditForm,
        nameInput,jobInput,popupNew,popupNewForm,placeInput,placeLink,
        profileInfo,profileEditButton,profileAddButton,profileTitle,
        profileJob,popups,popupCard,popupImage,popupImageText
      } from "./components/elements";
      

// @todo: Вывести карточки на страницу
function addCard(element){ 
  contentList.append(createCard(element, deleteCard, openCardImagePopup, likeCard));
};

//Вызываю функцию выведения карточек для всего массива
initialCards.forEach(addCard);

// Функция которая присваевает класс анимации для попапов
function anmationPopup(){
  popups.forEach((popup) => {
    popup.classList.add('popup_is-animated')
  })
};
//Вызываю функцию присваивающую класс необходимый для анимации
anmationPopup();

// функция для определения открытого попапа
export function getOpenPopup() {
	return popups.find(popup => popup.classList.contains('popup_is-opened'));
};
//Функция закрытия по крестику
function handleCloseButtonClick(evt) {
	const popup = evt.target.closest('.popup');
	closePopup(popup);
};
//Функция изменения профиля
function handleEditFormSubmit(evt) {
	evt.preventDefault();
	const name = nameInput.value;
	const job = jobInput.value;
	profileTitle.textContent = name;
	profileJob.textContent = job;
	closePopup(getOpenPopup());
};
//Функция добавления карточки
function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const item = {
		name: placeInput.value,
		link: placeLink.value,
	};
 contentList.prepend(createCard(item, deleteCard, openCardImagePopup, likeCard));
 popupNewForm.reset();
 closePopup(popupNew);
};
//Функция открытия катрочки
function openCardImagePopup({ name, link }) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageText.textContent = name;
  openPopup(popupCard);
};
//слушатели открытия попапов добавления карточки и изменения профиля
profileEditButton.addEventListener('click', function (evt) {
	nameInput.value = profileTitle.textContent;
	jobInput.value = profileJob.textContent;  
	evt.stopPropagation();
	openPopup(popupEdit);
});
profileAddButton.addEventListener('click', function (evt) {
	evt.stopPropagation();
	openPopup(popupNew);
});
//слушатели на крестик и оверлей
popups.forEach(popup => {
	popup
		.querySelector('.popup__close')
		.addEventListener('click', handleCloseButtonClick);
	popup.addEventListener('click', handleOverlayClick);
});

//слушатели на кнопки сохранить
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupNewForm.addEventListener('submit', handleAddFormSubmit);




