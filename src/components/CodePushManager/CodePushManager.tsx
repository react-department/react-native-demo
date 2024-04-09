import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import CodePush from 'react-native-code-push';
import { useTheme } from '@react-navigation/native';

import { IS_IOS } from '../../constants/general';
import { updateCodePushVersion } from '../../utils/version';
import BottomModal from '../BottomModal/BottomModal';
import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';

const STATUSES = {
  NO_UPDATE: 0,
  DOWNLOADING: 1,
  INSTALLED: 2,
};

function CodePushManager() {
  const { colors } = useTheme() as TTheme;
  const { t } = useTranslation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      backgroundColor: colors.background,
    },
    text: {
      marginBottom: 24,
      fontSize: 24,
      fontWeight: IS_IOS ? '700' : undefined,
      fontFamily: 'Urbanist-Bold',
    },
  });

  const [status, setStatus] = useState(STATUSES.NO_UPDATE);

  const codePushStatusDidChange = (syncStatus: CodePush.SyncStatus) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setStatus(STATUSES.DOWNLOADING);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setStatus(STATUSES.INSTALLED);
        setTimeout(() => {
          CodePush.restartApp();
        }, 2000);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.ON_NEXT_RESTART,
        mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESTART,
        updateDialog: CodePush.DEFAULT_UPDATE_DIALOG,
      },
      codePushStatusDidChange,
    );

    updateCodePushVersion();
  }, []);

  return (
    <View style={styles.wrapper}>
      <BottomModal
        visible={status !== STATUSES.NO_UPDATE}
        containerStyle={styles.container}
      >
        {status === STATUSES.DOWNLOADING
          ? (
            <>
              <CustomText style={styles.text}>
                {t('installingUpdate')}
              </CustomText>
              <ActivityIndicator />
            </>
          ) : (
            <CustomText style={styles.text}>
              {t('appWillBeReloaded')}
            </CustomText>
          )}
      </BottomModal>
    </View>
  );
}

export default CodePushManager;
