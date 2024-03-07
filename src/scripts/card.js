import {deleteCardId, toggleLike} from './api';
import { cardTemplate} from './constants';
// @todo: Функция создания карточки

const createCard = (card, userId, cardId, myId, deleteCallback, popupImage, likeCallback) => {
  
  const cardElement = cardTemplate.cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__count');
  
  const renderLikes = (card) => {
    likeCount.textContent = card.likes.length;
  }
  renderLikes(card);
  if (card.likes.some(user => user._id === myId)) {
    likeBtn.classList.add('card__like-button_is-active')
  }
  else likeBtn.classList.remove('card__like-button_is-active')
 
  likeBtn.addEventListener('click', (evt) =>{
    toggleLike(cardId, evt.target.classList.contains('card__like-button_is-active'))
    .then((data) => {renderLikes(data)})
    .then(() => likeCallback(evt))
    .catch(console.error)
    .finally(console.log('Выполнено успешно'))
  })

  if (userId === myId) {
    deleteBtn.classList.add('card__delete-button-visible');
    deleteBtn.disabled = false;
    deleteBtn.addEventListener('click', (evt) => {
      deleteCardId(cardId)
      .then(() => deleteCallback(evt))
      .catch(err => {console.log(err)})
      .finally(() => console.log('Выполнено успешно'))
    });
  };

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  cardImage.addEventListener('click', popupImage)

  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const removeCard = evt.target.closest('.card');
  removeCard.remove();
};
//функция лайка
function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard};