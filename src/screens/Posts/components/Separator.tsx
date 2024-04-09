import React from 'react';
import { StyleSheet, View } from 'react-native';

function Separator() {
  const styles = StyleSheet.create({
    separator: {
      height: 16,
    },
  });
  return (
    <View style={styles.separator} />
  );
}

export default Separator;
