import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Battery from './components/Battery'

export default function App() {
  return (
    <View style={styles.container}>
        <Battery></Battery>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
