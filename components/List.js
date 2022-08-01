/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';

const List = props => {
  const {title, content, navigation} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={content}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    marginLeft: 5,
    color: 'black',
  },
});
