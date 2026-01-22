import { ui, defaultLang } from './translations';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const translations = ui[lang] as Record<string, string>;
    const defaultTranslations = ui[defaultLang] as Record<string, string>;
    return translations[key] || defaultTranslations[key] || key;
  }
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '').replace(/^(ca|es)\//, '');

  // For default language (Catalan), no prefix needed
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }

  // For other languages, add prefix
  return `/${lang}/${cleanPath}`;
}

export function getAlternateLang(currentLang: Lang): Lang {
  return currentLang === 'ca' ? 'es' : 'ca';
}

export function getCurrentPathWithoutLang(url: URL): string {
  const [, possibleLang, ...rest] = url.pathname.split('/');
  if (possibleLang in ui) {
    return '/' + rest.join('/');
  }
  return url.pathname;
}
