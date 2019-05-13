
export const postUser = (
  id,
  username,
  email,
  password,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((resultado) => {
    console.log(resultado);
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  })
    .catch((error) => {
      reject(error);
    });
});

export const logUser = (
  username, 
  password,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api-token-auth/', {//revisar las direcciones
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject(response.statusText);
    }
  });
});

export const getAllUsers = () => fetch('http://127.0.0.1:8000/api/v1/users/', {
  method: 'GET',
}).then(resultado => resultado.json())
  .catch(error => console.log(error));

export const getUser = (
  Id,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/users/${Id}/`, {
    method: 'GET',
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => console.log(error));
});
