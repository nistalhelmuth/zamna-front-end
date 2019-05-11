export const getAllBooks = (
  someparam,
) => fetch(`http://127.0.0.1:8000/api/v1/books/by_something/?something=${someparam}`, {
  method: 'GET',
}).then(resultado => resultado.json())
  .catch(error => console.log(error));

export const getBook = (
  Id,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/books/${Id}/`, {
    method: 'GET',
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => console.log(error));
});