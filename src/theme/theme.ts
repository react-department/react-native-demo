import { DefaultTheme } from '@react-navigation/native';

import defaultColors from './defaultColors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...defaultColors,
    background: '#FFFFFF',
    backgroundTransparent: '#FFFFFF00',
    backgroundTransparent20Percent: '#FFFFFF33',
    backgroundTransparent45Percent: '#FFFFFF73',
    backgroundGhost: '#F2F2F6',
    bootSplashBackground: '#FFFFFF',

    buttonGradientStart: '#0A85BD',
    buttonGradientEnd: '#00CCFF',
    buttonGradientMiddle: '#32E0EC',

    positionPlaceholderGradientStart: '#2C2E31',
    positionPlaceholderGradientEnd: '#646567',

    fontSecondary: '#FFFFFF',
    fontPrimary: '#111418',
    fontInactive: '#4F555F',
    fontDisable: '#ACB1BA',
    fontError: '#FF0000',
    fontDivider: '#676775',

    titleFont: '#26263A',

    inputBackground: '#E3E3E8',
    scrollBackground: '#EFEFF4',
    scrollShadow: '#FFFFFF33',

    tableOdd: '#F7F7F8',

    iconPrimary: '#111418',
    iconSecondary: '#4F555F',
    iconTertiary: '#ACB1BA',
    iconPrimaryWhite: '#E3E3E8',
    iconQuaternary: '#E3E3E8',
    iconFifth: '#FFFFFF',

    verifiedColor: '#06ABE0',

    errorBackground: '#972F2F',
  },
};

export default theme;
