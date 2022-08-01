/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const placeholderImage = require('../assets/images/movie_placeholder.jpeg');
const Card = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          item,
        })
      }
      style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item?.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item?.poster_path}
            : placeholderImage
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    top: 10,
    fontWeight: 'bold',
    color: 'green',
  },
});
