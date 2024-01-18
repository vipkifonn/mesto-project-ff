"use strict";
// @todo: Темплейт карточки
// @todo: DOM узлы
const content = document.querySelector('.places');
const contentList = content.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(item, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.alt = item.name;
  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  const likeButton = cardElement.querySelector('.card__like-button')
  likeButton.addEventListener('click', function(evt){
    if(evt.target.classList.contains('card__like-button_is-active') === false) {
     evt.target.classList.add('card__like-button_is-active'); 
    } else {
      evt.target.classList.remove('card__like-button_is-active'); 
    };
     
  });

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  
  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const removeCard = evt.target.closest('.card');
  removeCard.remove();
};
// @todo: Вывести карточки на страницу

function addCard(element){ 
  contentList.append(createCard(element, deleteCard));
};

initialCards.forEach(addCard);


