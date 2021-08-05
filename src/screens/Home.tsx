import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {Loading} from '../components/Loading';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const Home = () => {
  const {actualMovies, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={actualMovies}
            renderItem={({item}: any) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={250}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title="In cinema" movies={actualMovies} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 420,
  },
});
