/* eslint-disable prettier/prettier */
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const PlayButton = () => {
  return (
    <Pressable style={styles.buttton}>
      <Icon name={'caret-forward-outline'} color={'white'} size={30} />
    </Pressable>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  buttton: {
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: '#4481fc',
  },
});
