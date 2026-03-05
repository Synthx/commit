import {
  defaultLang,
  type Language,
  languages,
  translations,
} from "@/i18n/ui.ts";

export const getLangFromUrl = (url: URL): Language => {
  const [, lang] = url.pathname.split("/");
  if (!lang || !(lang in languages)) {
    return defaultLang;
  }

  return lang as Language;
};

export const useTranslations = (lang: Language) => {
  return (key: keyof (typeof translations)[Language]) => {
    return translations[lang][key] || translations[defaultLang][key];
  };
};
