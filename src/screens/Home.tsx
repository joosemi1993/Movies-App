import React from 'react';
import {Text, View} from 'react-native';
import {Loading} from '../components/Loading';
import {useMovies} from '../hooks/useMovies';

export const Home = () => {
  const {actualMovies, isLoading} = useMovies();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <Text>Helloooo</Text>
    </View>
  );
};
