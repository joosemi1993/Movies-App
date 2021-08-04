import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'af71b59aeacb26b20b76bf7620871be5',
    language: 'en-US',
  },
});

export default movieDB;
