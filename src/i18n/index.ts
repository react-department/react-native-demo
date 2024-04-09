import 'intl-pluralrules';

import { NativeModules } from 'react-native';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { DateTime } from 'luxon';

import {
  IS_IOS, LUXON_DATE_TIME_FORMAT, PRICING_FORMAT,
} from '../constants/general';
import en from './en';

import type { Module } from 'i18next';

const resources = {
  en: { translation: en },
};
export const appLocales = Object.keys(resources);

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (arg0: string) => string) => {
    const { I18nManager, SettingsManager } = NativeModules;
    const locale = IS_IOS ? SettingsManager.settings.AppleLanguages[0] : I18nManager.localeIdentifier;
    const localeShort = locale.split(/_|-/)[0];
    const isPresent = appLocales.find((item) => item === localeShort);
    return AsyncStorage.getItem('language').then((lang) => {
      const language = isPresent ? localeShort : appLocales[0];
      cb(lang || language);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(initReactI18next)
  .use(languageDetector as Module)
  .init({
    compatibilityJSON: 'v4',
    fallbackLng: appLocales,
    debug: true,
    resources,
    react: {
      useSuspense: true,
    },
    interpolation: {
      formatSeparator: ',',
      skipOnVariables: false,
      format(value, formatting, lng, options) {
        if (formatting && (formatting in LUXON_DATE_TIME_FORMAT)) {
          return DateTime.fromISO(value)
            .setZone(options?.timezone)
            .toLocaleString(LUXON_DATE_TIME_FORMAT[formatting], { locale: 'en-US' });
        }
        if (formatting && Array.isArray(value)) {
          return value.map((item) => `$t(${formatting}.${item})`).join(', ');
        }
        if (formatting === PRICING_FORMAT) {
          return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value / 100);
        }
        return value;
      },
    },
  });

export default i18next;
