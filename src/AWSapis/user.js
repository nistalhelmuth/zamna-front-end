
export const postUser = (
  username,
  email,
  password,
) => new Promise((resolve, reject) => {
  fetch('http://ec2-3-81-106-80.compute-1.amazonaws.com:8000/api/v1/user/', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      email,
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
  fetch('http://ec2-3-81-106-80.compute-1.amazonaws.com:8000/api-token-auth/', {//revisar las direcciones
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

export const getAllUsers = () => fetch('http://ec2-3-81-106-80.compute-1.amazonaws.com:8000/api/v1/users/', {
  method: 'GET',
}).then(resultado => resultado.json())
  .catch(error => console.log(error));

export const getUser = (
  Id,
) => new Promise((resolve, reject) => {
  fetch(`http://ec2-3-81-106-80.compute-1.amazonaws.com:8000/api/v1/users/${Id}/`, {
    method: 'GET',
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => console.log(error));
});
