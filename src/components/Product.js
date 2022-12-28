import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Product({product}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {!product.inStock && (
        <View style={styles.notStock}>
          <Text style={styles.notStockText}>STOKTA YOK</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    color: '#a0a0a0',
    fontSize: 16,
  },
  notStock: {
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 3,
    alignItems: 'center',
    marginTop: 5,
  },
  notStockText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
