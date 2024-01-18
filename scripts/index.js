// @todo: Темплейт карточки


// @todo: DOM узлы
const content = document.querySelector('.places');
const contentList = content.querySelector('.places__list');



// @todo: Функция создания карточки

function createCard(item) {
  const cardTemplate = document.getElementById('card-template').content;;
  const cardElement = cardTemplate.cloneNode(true);
  
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.alt = item.name;
  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  const likeBtn = cardElement.querySelector('.card__like-button')
  likeBtn.addEventListener('click', function(evt){
    if(evt.target.classList.contains('card__like-button_is-active') === false) {
     evt.target.classList.add('card__like-button_is-active'); 
    } else {
      evt.target.classList.remove('card__like-button_is-active'); 
    };
     
  });

  delBtn = cardElement.querySelector('.card__delete-button');
  delBtn.addEventListener('click',  cardDel);
  
  return cardElement;

}

// @todo: Функция удаления карточки
function cardDel(evt) {
  const removeCard = evt.target.closest('.card');
  removeCard.remove();
}
// @todo: Вывести карточки на страницу

initialCards.forEach(function addCard(element){ 
  contentList.append(createCard(element, cardDel));
});


