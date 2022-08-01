/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import date from 'date-and-time';
import {Rating, AirbnbRating} from 'react-native-ratings';
import moment from 'moment';
import PlayButton from '../components/PlayButton';
const placeholderImage = require('../assets/images/movie_placeholder.jpeg');

const height = Dimensions.get('screen').height;
const DetailsScreen = ({navigation, route}) => {
  const pattern = date.compile('ddd, MMM DD YYYY');
  const item = route.params.item;
  console.log('item', item);
  console.log('title', item?.poster_path);
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={
            item?.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        <View style={styles.container}>
          <View style={styles.playButton}>
            <PlayButton />
          </View>
          <Text style={styles.movieTitle}>{item?.title}</Text>
          {item?.genres?.map(gen => {
            return <Text>{gen.name}</Text>;
          })}

          <AirbnbRating
            showRating={false}
            defaultRating={item.vote_average / 2}
            size={25}
            isDisabled
          />
          <Text style={styles.overview}>{item.overview}</Text>
          <Text style={styles.releaseDate}>
            Release date :{moment(item.release_date).format('MMMM Do YYYY')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  overview: {
    padding: 15,
    color: 'black',
  },
  releaseDate: {
    fontWeight: 'bold',
    color: 'black',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
});
