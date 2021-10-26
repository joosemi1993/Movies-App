import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = ({movie, height = 400, width = 250}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 9,
  },
});
