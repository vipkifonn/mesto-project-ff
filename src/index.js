
//подключения js
import './pages/index.css';
import {initialCards} from "./cards";
import { createCard, deleteCard, likeCard} from './card'; 
import { anmationPopup, openPopup, closePopup, handleCloseEsc, findOpenPopup,
        handleCloseButtonClick, handleOverlayClick, handleEditFormSubmit,
        handleAddFormSubmit, openCardImagePopup 
      }from './modal';
import {content,contentList,pageContent,popupEdit,popupEditForm,
        nameInput,jobInput,popupNew,popupNewForm,placeInput,placeLink,
        profileInfo,profileEditButton,profileAddButton,profileTitle,
        profileJob,popups,popupCard,popupImage,popupImageText
      } from "./constaints";


const addIconImg = new URL('./images/add-icon.svg', import.meta.url);
const avatarImg = new URL('./images/avatar.jpg', import.meta.url);
const card1Img = new URL('./images/card_1.jpg', import.meta.url);
const card2Img = new URL('./images/card_2.jpg', import.meta.url);
const card3Img = new URL('./images/card_3.jpg', import.meta.url);
const closeImg = new URL('./images/close.svg', import.meta.url);
const deleteIconImg = new URL('./images/delete-icon.svg', import.meta.url);
const editIconImg = new URL('./images/edit-icon.svg', import.meta.url);
const likeActivImg = new URL('./images/like-active.svg', import.meta.url);
const likeInactvImg = new URL('./images/like-inactive.svg', import.meta.url);
const logoImg = new URL('./images/logo.svg', import.meta.url);
const interBlack = new URL('./vendor/fonts/Inter-Black.woff2', import.meta.url);
const interMed = new URL('./vendor/fonts/Inter-Medium.woff2', import.meta.url);
const interReg = new URL('./vendor/fonts/Inter-Regular.woff2', import.meta.url);

const picAndfont = [
  // меняем исходные пути на переменные
  { name: 'add-icon-svg', link: addIconImg },
  { name: 'avatar-jpg', link: avatarImg },
  { name: 'card_1', link: card1Img },
  { name: 'card_2', link: card2Img },
  { name: 'card_3', link: card3Img },
  { name: 'close', link: closeImg },
  { name: 'delete-icon', link: deleteIconImg },
  { name: 'edit-icon', link: editIconImg },
  { name: 'like-active', link: likeActivImg },
  { name: 'like-inactive', link: likeInactvImg },
  { name: 'logo', link: logoImg },
  { name: 'Inter-Black', link: interBlack },
  { name: 'Inter-Medium', link: interMed },
  { name: 'Inter-Regular', link: interReg },

]; 

// @todo: Вывести карточки на страницу
function addCard(element){ 
  contentList.append(createCard(element, deleteCard, openCardImagePopup, likeCard));
};

//Вызываю функцию выведения карточек для всего массива
initialCards.forEach(addCard);

//Вызываю функцию присваивающую класс необходимый для анимации
anmationPopup();

//слушатели открытия попапов добавления карточки и изменения профиля
profileEditButton.addEventListener('click', function (evt) {
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




