// @todo: DOM узлы
const content = document.querySelector(".places");
const contentList = content.querySelector(".places__list");
const pageContent = document.querySelector(".page__content");
//изменить профиль
const popupEdit = pageContent.querySelector(".popup_type_edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const nameInput = popupEditForm.querySelector(".popup__input_type_name");
const jobInput = popupEditForm.querySelector(".popup__input_type_description");
//добавить карточку
const popupNew = pageContent.querySelector(".popup_type_new-card");
const popupNewForm = popupNew.querySelector(".popup__form");
const placeInput = popupNewForm.querySelector(".popup__input_type_card-name");
const placeLink = popupNewForm.querySelector(".popup__input_type_url");
//изменить аватар
const popupChange = pageContent.querySelector(".popup_type_avatar");
const popupChangeForm = popupChange.querySelector(".popup__form");
const avatarInput = popupChangeForm.querySelector(".popup__input_type_avatar");
//открыть карточку
const popupCard = pageContent.querySelector(".popup_type_image");
const popupImage = popupCard.querySelector(".popup__image");
const popupImageText = popupCard.querySelector(".popup__caption");

const profileInfo = pageContent.querySelector(".profile");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const profileAddButton = profileInfo.querySelector(".profile__add-button");
const profileImg = profileInfo.querySelector(".profile__image");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileJob = profileInfo.querySelector(".profile__description");
const popups = Array.from(document.querySelectorAll(".popup"));
const cardTemplate = document.getElementById("card-template").content;

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-7",
  headers: {
    authorization: "d91bb696-bf7c-4bbc-813c-61c020fbdf72",
    "Content-Type": "application/json",
  },
};

export {
  content,
  contentList,
  pageContent,
  popupEdit,
  popupEditForm,
  nameInput,
  jobInput,
  popupNew,
  popupNewForm,
  placeInput,
  placeLink,
  profileInfo,
  profileEditButton,
  profileAddButton,
  profileTitle,
  profileJob,
  popups,
  popupCard,
  popupImage,
  popupImageText,
  popupChange,
  popupChangeForm,
  avatarInput,
  profileImg,
  validationSettings,
  config,
  cardTemplate,
};
