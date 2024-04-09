import React from 'react';
import {
  Modal, StyleSheet,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { IS_IOS } from '../../constants/general';
import CustomText from '../CustomText/CustomText';
import Title from '../Title/Title';

import type { IInternetLostModal } from './interfaces/IInternetLostModal';

import WifiOffIcon from '../../assets/images/svg/wifiOff.svg';

function InternetLostModal({ isModalOpen }: IInternetLostModal) {
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginBottom: 32,
    },
    title: {
      marginBottom: 12,
      fontWeight: IS_IOS ? '700' : undefined,
      fontFamily: 'Urbanist-Bold',
    },
    text: {
      textAlign: 'center',
      maxWidth: 280,
    },
  });

  return (
    <Modal
      visible={isModalOpen}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <WifiOffIcon style={styles.icon} />
          <Title style={styles.title} title={t('internetLost')} />
          <CustomText style={styles.text}>{t('itLooksNoInternet')}</CustomText>
        </View>
      </View>
    </Modal>
  );
}

export default InternetLostModal;
