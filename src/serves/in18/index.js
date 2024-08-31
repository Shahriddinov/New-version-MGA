// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resource } from './resource';

i18n
    .use(initReactI18next)
    .init({
        resources: resource,
        lng: localStorage.getItem('language') || 'en', // Default language
        interpolation: {
            escapeValue: false, // React already safely handles escaping
        },
        react: {
            useSuspense: false, // Set to true if using Suspense
        },
    });

export default i18n;
