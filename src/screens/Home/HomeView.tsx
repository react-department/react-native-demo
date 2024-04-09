import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import CustomText from '../../components/CustomText/CustomText';
import Layout from '../../layout/Layout';

import type TTheme from '../../theme/interfaces/TTheme';
import type IHome from './interfaces/IHome';

function HomeView({ someData }: IHome) {
  const { colors } = useTheme() as TTheme;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundGhost,
    },
  });

  return (
    <Layout style={styles.container}>
      <CustomText>{someData}</CustomText>
    </Layout>
  );
}

export default HomeView;
