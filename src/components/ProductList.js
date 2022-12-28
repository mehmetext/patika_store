import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import data from '../data';
import Product from './Product';

export default function ProductList() {
  const renderItem = ({item}) => <Product product={item} />;

  return (
    <FlatList
      style={styles.container}
      data={data}
      numColumns={2}
      keyExtractor={a => a.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
