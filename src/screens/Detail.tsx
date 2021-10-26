import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import {TouchableOpacity} from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const Detail = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.cardImage} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  cardImage: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
