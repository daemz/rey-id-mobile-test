import i18next, {Module} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

const languageDetector: Module | any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any): void => cb('en'),
  init: (): void => {},
  cacheUserLanguage: (): void => {},
};

const mappingNsToResource = {
  ...Object.entries(resources).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        translation: value,
      },
    }),
    {},
  ),
};

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {...mappingNsToResource},
  });

export default i18next;
