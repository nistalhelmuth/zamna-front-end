
export const postPlaylist = (
  name,
  link,
  user,
  description,
  book,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/playlist/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      link,
      user,
      description,
      book,
    }),
  }).then((resultado) => {
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

export const getAllPlaylists = (
  book_id,
) => fetch(`http://127.0.0.1:8000/api/v1/playlist/book/?book_id=${book_id}`, {
  method: 'GET',
}).then(resultado => resultado.json())
  .catch(error => console.log(error));

export const postRateInPlaylist = (
  playlist_id,
  votes,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/playlist/${playlist_id}/`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      votes,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => reject(error));
});

export const postCommentInPlaylist = (
  comment,
  playlist,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/comment_playlist/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      comment,
      playlist,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => reject(error));
});