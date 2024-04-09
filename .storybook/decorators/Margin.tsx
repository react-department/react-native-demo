import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    margin: 25,
  },
};

const MarginDecorator = () => function Margin(Story: React.ElementType) {
  return (
    <View style={styles.container}>
      <Story />
    </View>
  );
};

export default MarginDecorator;
