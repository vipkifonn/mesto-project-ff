import { config } from "./constants";
//запросы серверу
const checkData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json();
}

 const userData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then(result => checkData(result));
};


 const getCard = () =>  {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(result => checkData(result));
};

 const renameProfile = (nameUser, job) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameUser,
      about: job
    })
  })
  .then(result => checkData(result))
};

 const changeAvatar = (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: `${config.headers.authorization}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarUrl
    })
  })
  .then(result => checkData(result));
}


 const addCard = (place, linkUrl) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: place,
      link: linkUrl
    })
  })
  .then(result => checkData(result));
}

 const deleteCardId = (userId) => {
  return fetch(`${config.baseUrl}/cards/${userId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(result => checkData(result));
};


const toggleLike = (element, isLiked) => {
  return fetch(`${config.baseUrl}/cards/likes/${element}`, {
    method: isLiked ? 'DELETE': 'PUT',
    headers: config.headers
  })
  .then(result => checkData(result));
};

export {checkData,userData, getCard, renameProfile, changeAvatar, addCard, deleteCardId, toggleLike};