import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [actualMovies, setActualMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setActualMovies(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  });

  return {
    actualMovies,
    isLoading,
  };
};
