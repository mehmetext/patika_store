import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: '#efefef',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
});
