//подключения js
import '../pages/index.css';
import { getOpenPopup } from './utils';
import { createCard, deleteCard, likeCard} from './card'; 
import { openPopup, closePopup, handleOverlayClick} from './modal';
import {contentList,popupEdit,popupEditForm,nameInput,jobInput,popupNew,
  popupNewForm,placeInput,placeLink,profileEditButton,profileAddButton
  ,profileTitle,profileJob,popups,popupCard,popupImage,popupImageText, popupChange, popupChangeForm,
   avatarInput, profileImg, validationSettings} from './constants';
import {enableValidation, clearValidation,} from './validation';
import {userData, getCard , renameProfile, changeAvatar, addCard} from './api';
let myId

// Функция которая присваевает класс анимации для попапов
function animatePopup(){
  popups.forEach((popup) => {
    popup.classList.add('popup_is-animated')
  })
};
//Вызываю функцию присваивающую класс необходимый для анимации
animatePopup();

//Функция открытия катрочки
function openCardImagePopup(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageText.textContent = evt.target.alt;
  openPopup(popupCard);
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

  evt.submitter.textContent = 'Cохранение...';

  renameProfile(name, job)
  .then(() => {  
    profileTitle.textContent = name;
    profileJob.textContent = job;
  })
  .then(() => closePopup(getOpenPopup()));
};

//Функция добавления карточки
function handleAddFormSubmit(evt) {
	evt.preventDefault();
	const item = {
		name: placeInput.value,
		link: placeLink.value,
	};
 
  addCard(item.name, item.link)
  .then((res) => {
    const cardElements = createCard( res, myId, res._id, myId, deleteCard, openCardImagePopup, likeCard);

    contentList.prepend(cardElements);
  })
  .then(() => popupNewForm.reset())
  .then(() => closePopup(getOpenPopup()))
  .catch(err => {console.log(err)})
  evt.submitter.textContent = "Cохранение...";
};

//функция изменения аватара
function handleFormSubmitAvatar(evt) {
  evt.preventDefault(); 
  const avatarValue = avatarInput.value;

  changeAvatar(avatarValue)
  .then(result => profileImg.style.backgroundImage = `url(${result})`)
  .then(evt.submitter.textContent = "Cохранение...")
  .then(() => closePopup(getOpenPopup()))
  .then(() => {profileImg.style.backgroundImage = `url(${avatarValue})`})
  .catch(err => {console.log(err)});
};

//слушатель открытия попапа изменения профиля
profileEditButton.addEventListener('click', function (evt) {
	nameInput.value = profileTitle.textContent;
	jobInput.value = profileJob.textContent;  
	evt.stopPropagation();
	openPopup(popupEdit);
});

//слушатель открытия попапа добавления корточки
profileAddButton.addEventListener('click', function (evt) {
	evt.stopPropagation();
	clearValidation(popupNew, validationSettings);
  openPopup(popupNew);
});

//слушатель открытия попапа изменения аватара
profileImg.addEventListener('click', function (evt) {
	evt.stopPropagation();
	clearValidation(popupChange, validationSettings);
  openPopup(popupChange);
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
popupChangeForm.addEventListener('submit', handleFormSubmitAvatar);

Promise.all([userData(), getCard()])
.then(([userInfo, cards]) => {
  myId = userInfo._id
  cards.forEach(card => {
    profileTitle.textContent = userInfo.name;
    profileJob.textContent = userInfo.about;
    profileImg.style.backgroundImage = `url('${userInfo.avatar}')`;

    const userId = card.owner._id;
    const cardId = card._id;

    contentList.append(createCard(card, userId, cardId, myId, deleteCard, openCardImagePopup, likeCard))
})
})
.catch(err => {console.log(err)})
.finally(() => console.log('Выполнено успешно'));

//вызов валидации форм
enableValidation(validationSettings);