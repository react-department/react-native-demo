import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
  NOTIFICATION_ERROR,
  NOTIFICATION_SOME_FAILED,
  NOTIFICATION_SUCCESS,
} from '../../constants/general';
import { useAppDispatch } from '../../store/hooks/useApp';
import { setGeneralState } from '../../store/slices/general/slice';
import CustomText from '../CustomText/CustomText';
import TopModal from '../TopModal/TopModal';

import type TTheme from '../../theme/interfaces/TTheme';
import type INotification from './interfaces/INotification';
import type TMemoData from './interfaces/TMemoData';

import CheckMarkIcon from '../../assets/images/svg/checkMark.svg';
import CloseIcon from '../../assets/images/svg/close.svg';
import ExclamationMarkIcon from '../../assets/images/svg/exclamationMark.svg';

function Notification({
  visible, text, type, showAlways, withLeftIcon = true,
}: INotification) {
  const [memoData, setMemoData] = useState<TMemoData>({
    text, type, showAlways, withLeftIcon,
  });
  const dispatch = useAppDispatch();
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 9,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 18,
      marginLeft: 8,
      color: colors.fontSecondary,
      flex: 1,
    },
    successBackgroundColor: {
      backgroundColor: colors.green,
    },
    errorBackgroundColor: {
      backgroundColor: colors.red,
    },
    someFailedBackgroundColor: {
      backgroundColor: colors.orange,
    },
    close: {
      marginLeft: 'auto',
    },
  });

  useEffect(() => {
    if (visible) {
      setMemoData({
        text, type, showAlways, withLeftIcon,
      });
    }
  }, [visible, text, type, showAlways, withLeftIcon]);

  const removeMemoData = useCallback(() => {
    setMemoData(null);
  }, []);

  const handleClose = () => {
    dispatch(setGeneralState({
      topNotification: undefined,
    }));
  };

  return (
    <TopModal visible={visible} onModalHide={removeMemoData}>
      <View
        style={StyleSheet.flatten([
          styles.container,
          memoData?.type === NOTIFICATION_SUCCESS && styles.successBackgroundColor,
          memoData?.type === NOTIFICATION_ERROR && styles.errorBackgroundColor,
          memoData?.type === NOTIFICATION_SOME_FAILED && styles.someFailedBackgroundColor,
        ])}
      >
        {memoData?.withLeftIcon && (
          memoData?.type === NOTIFICATION_ERROR
            ? <ExclamationMarkIcon color={colors.white} />
            : <CheckMarkIcon color={colors.iconFifth} />
        )}
        <CustomText style={styles.text}>{memoData?.text}</CustomText>
        {memoData?.showAlways && (
          <Pressable onPress={handleClose} style={styles.close}>
            <CloseIcon color={colors.white} />
          </Pressable>
        )}
      </View>
    </TopModal>
  );
}

export default Notification;
