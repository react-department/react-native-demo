import React from 'react';
import {
  Image, StyleSheet, View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import type { ImageSourcePropType } from 'react-native';
import type TTheme from '../../theme/interfaces/TTheme';

import LogoGIF from '../../assets/gifs/bootsplashLogo.gif';

function BootSplashView() {
  const { colors } = useTheme() as TTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bootSplashBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 126,
      height: 126,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={LogoGIF as ImageSourcePropType}
        style={styles.logo}
      />
    </View>
  );
}

export default BootSplashView;
