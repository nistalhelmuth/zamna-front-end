import Axios from 'axios';
import convertXML from 'xml-js';

export const getAllBooks = (
  title,
) => {
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/search/index.xml?key=FtV2JkeEaiobnja5s890Q&q=${title}`;

  return Axios.get(requestUri)
    .then(res =>
      JSON.parse(convertXML.xml2json(res.data, { compact: true, spaces: 4 }))
    ).then(r => r.GoodreadsResponse.search.results.work)
}

export const getBook = (
  id,
) => {
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/book/show/${id}.xml?key=FtV2JkeEaiobnja5s890Q`;

  return Axios.get(requestUri)
    .then(res =>
      JSON.parse(convertXML.xml2json(res.data, { compact: true, spaces: 4 }))
    ).then(r => r.GoodreadsResponse.book)
}

