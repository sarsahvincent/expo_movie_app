/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const defaultProps = {
  errorText1: 'Oops! Something went wrong.',
  errorText2: 'Make sure you are online and restart your device',
};
const Error = () => {
  const {errorText1, errorText2} = defaultProps;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorText1} </Text>
      <Text style={styles.text}>{errorText2}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
