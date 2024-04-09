import React from 'react';
import {
  Image, Linking,
  Modal, ScrollView, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import {
  BOTTOM_INDENT, BOTTOM_INDENT_IF_NO_INSETS, CAMERA_ACCESS_MODAL, CONTACTS_ACCESS_MODAL,
  GALLERY_ACCESS_MODAL, IS_IOS, LOCATION_ACCESS_MODAL,
} from '../../constants/general';
import Button from '../Button/Button';
import CustomText from '../CustomText/CustomText';
import Title from '../Title/Title';

import type TTheme from '../../theme/interfaces/TTheme';
import type { IAccessContentItem } from './interfaces/IAccessContentItem';
import type { IProvideAccessModal } from './interfaces/IProvideAccessModal';

import settingsCameraAndroid from '../../assets/images/png/settingsCameraAndroid.png';
import settingsCameraIOS from '../../assets/images/png/settingsCameraIOS.png';
import settingsContactsAndroid from '../../assets/images/png/settingsContactsAndroid.png';
import settingsContactsIOS from '../../assets/images/png/settingsContactsIOS.png';
import settingsGalleryAndroid from '../../assets/images/png/settingsGalleryAndroid.png';
import settingsGalleryIOS from '../../assets/images/png/settingsGalleryIOS.png';
import settingsLocationAndroid from '../../assets/images/png/settingsLocationAndroid.png';
import settingsLocationIOS from '../../assets/images/png/settingsLocationIOS.png';
import CloseIcon from '../../assets/images/svg/close.svg';

function ProvideAccessModal({ visible, onClose, currentVisibleModal }: IProvideAccessModal) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16 + insets.top,
      backgroundColor: colors.inputBackground,
      marginBottom: insets.bottom !== 0 ? insets.bottom : BOTTOM_INDENT_IF_NO_INSETS,
    },
    upper: {
      paddingHorizontal: 16,
    },
    lower: {
      backgroundColor: colors.background,
      paddingHorizontal: 16,
      paddingTop: 24,
      flex: 1,
      paddingBottom: insets.bottom !== 0 ? BOTTOM_INDENT : 0,
    },
    iconWrapper: {
      alignItems: 'flex-end',
    },
    title: {
      marginBottom: 16,
    },
    textContent: {
      flex: 1,
    },
    description: {
      marginBottom: 16,
    },
    secondDescription: {
      marginBottom: 32,
    },
    topImage: {
      width: 258,
      height: IS_IOS ? 326 : 298,
      alignSelf: 'center',
    },
  });

  const accessContents: IAccessContentItem[] = [
    {
      id: '1',
      name: GALLERY_ACCESS_MODAL,
      title: t('provideAccessToGallery'),
      description: t('grantingAccessToGallery'),
      instruction: t(IS_IOS ? 'galleryInstruction' : 'galleryInstructionAndroid'),
      imageSrc: IS_IOS ? settingsGalleryIOS : settingsGalleryAndroid,
    },
    {
      id: '2',
      name: LOCATION_ACCESS_MODAL,
      title: t('provideAccessToLocation'),
      description: t('grantingAccessToLocation'),
      instruction: t(IS_IOS ? 'locationInstruction' : 'locationInstructionAndroid'),
      imageSrc: IS_IOS ? settingsLocationIOS : settingsLocationAndroid,
    },
    {
      id: '3',
      name: CONTACTS_ACCESS_MODAL,
      title: t('provideAccessToContacts'),
      description: t('grantingAccessToContacts'),
      instruction: t(IS_IOS ? 'contactsInstruction' : 'contactsInstructionAndroid'),
      imageSrc: IS_IOS ? settingsContactsIOS : settingsContactsAndroid,
    },
    {
      id: '4',
      name: CAMERA_ACCESS_MODAL,
      title: t('provideAccessToCamera'),
      description: t('grantingAccessToCamera'),
      instruction: t(IS_IOS ? 'cameraInstruction' : 'cameraInstructionAndroid'),
      imageSrc: IS_IOS ? settingsCameraIOS : settingsCameraAndroid,
    },
  ];

  const content = () => {
    const empty: IAccessContentItem = {
      id: '',
      name: '',
      title: '',
      description: '',
      instruction: '',
      imageSrc: settingsGalleryIOS,
    };
    return accessContents.find((item) => item.name === currentVisibleModal) || empty;
  };

  const {
    title, description, instruction, imageSrc,
  } = content();

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.upper}>
          <TouchableOpacity onPress={onClose} style={styles.iconWrapper}>
            <CloseIcon />
          </TouchableOpacity>
          <Image source={imageSrc} style={styles.topImage} />
        </View>
        <View style={styles.lower}>
          <ScrollView style={styles.textContent}>
            <Title title={title} style={styles.title} />
            <CustomText style={styles.description}>{description}</CustomText>
            <CustomText style={styles.secondDescription}>{t('toGiveAccessYouShould')}</CustomText>
            <CustomText>{instruction}</CustomText>
          </ScrollView>
          <Button
            onPress={() => Linking.openSettings()}
            title={t('continue')}
          />
        </View>
      </View>
    </Modal>
  );
}

export default ProvideAccessModal;
