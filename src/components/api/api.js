import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export const tmdb = axios.create({
    baseURL: `${proxy}https://api.themoviedb.org/3/`,
    method: 'GET',
    responseType: 'json',
    headers: {
        accept: 'application/hal+json'
    }
});

