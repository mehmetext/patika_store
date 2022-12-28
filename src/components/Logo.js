import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PATIKASTORE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
});
