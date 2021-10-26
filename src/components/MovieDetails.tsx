import React from 'react';
import {Text, View, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(gen => gen.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Resume
        </Text>
        <Text style={{fontSize: 18}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Costs
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
            Actors
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
        </View>
      </View>
    </>
  );
};
