import {deleteCardId, toggleLike} from './api';
import { cardTemplate } from './constants';
// @todo: Функция создания карточки

const createCard = (card, userId, cardId, myId, deleteCallback, popupImage) => {

  const cardElement = cardTemplate.cloneNode(true);
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__count');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  const renderLikes = (card) => {
    likeCount.textContent = card.likes.length
      if (card.likes.some(user => user._id === myId)) {
        likeBtn.classList.add('card__like-button_is-active')
      }
      else likeBtn.classList.remove('card__like-button_is-active')
  };
  renderLikes(card);

  likeBtn.addEventListener('click',likeCard);

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
// функция лайка 
function likeCard (){
  toggleLike(cardId, likeBtn.classList.contains('card__like-button_is-active'))
  .then((data) => {renderLikes(data);})
  .catch(err => {console.log(err)})
  .finally(() => console.log('Выполнено успешно'))
}


export { createCard, deleteCard,};