import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function App() {

  return (
    <View style={styles.box} />
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'gray' 
  }
})