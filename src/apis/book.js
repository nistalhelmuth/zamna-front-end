import Axios from 'axios';
import convertXML from 'xml-js';

export const getAllBooks = (
  title,
) => {
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/search/index.xml?key=FtV2JkeEaiobnja5s890Q&q=${title}`;


  console.log(requestUri)

  return Axios.get(requestUri)
    .then(res => 
      JSON.parse(convertXML.xml2json(res.data, {compact: true, spaces: 4}))
    ).then(r => r.GoodreadsResponse.search.results.work)
}

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

