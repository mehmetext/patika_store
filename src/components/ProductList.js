import {FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import data from '../data';

export default function ProductList() {
  const renderItem = ({item}) => <Text>{JSON.stringify(item, null, 2)}</Text>;

  return (
    <FlatList data={data} keyExtractor={a => a.id} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  container: {},
});
