import { translate } from '@vitalets/google-translate-api';

export const toEnglish = async (text: string) => {
    return await translate(text, { to: 'en' });
};

export const toRussian = async (text: string) => {
    return await translate(text, { to: 'ru' });
};
