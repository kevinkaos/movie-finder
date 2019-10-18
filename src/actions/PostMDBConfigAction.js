import { POST_MDB_CONFIG } from './types.js';
import axios from 'axios';

const saveMDBConfig = payload => ({
  type: POST_MDB_CONFIG,
  payload
});

// const proxy = 'https://cors-anywhere.herokuapp.com/';

// export const tmdb = axios.create({
//     baseURL: `${proxy}https://api.themoviedb.org/3/`,
//     method: 'GET',
//     responseType: 'json',
//     headers: {
//         accept: 'application/hal+json'
//     }
// });

export const postMDBConfig = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMDBConfig(data)))
    .catch(error => console.log(error));
  }
};