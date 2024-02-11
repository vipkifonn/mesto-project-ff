// @todo: DOM узлы
const content = document.querySelector('.places');
const contentList = content.querySelector('.places__list');
const pageContent = document.querySelector('.page__content');
const popupEdit = pageContent.querySelector('.popup_type_edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEditForm.querySelector('.popup__input_type_name');
const jobInput = popupEditForm.querySelector('.popup__input_type_description');
const popupNew = pageContent.querySelector('.popup_type_new-card');
const popupNewForm = popupNew.querySelector('.popup__form');
const placeInput = popupNewForm.querySelector('.popup__input_type_card-name');
const placeLink = popupNewForm.querySelector('.popup__input_type_url');
const profileInfo = pageContent.querySelector('.profile');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');
const profileAddButton = profileInfo.querySelector('.profile__add-button');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__description');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupCard = pageContent.querySelector('.popup_type_image');
const popupImage = popupCard.querySelector('.popup__image');
const popupImageText = popupCard.querySelector('.popup__caption');

export {content,contentList,pageContent,popupEdit,popupEditForm,nameInput,jobInput,popupNew,
  popupNewForm,placeInput,placeLink,profileInfo,profileEditButton,profileAddButton
  ,profileTitle,profileJob,popups,popupCard,popupImage,popupImageText}