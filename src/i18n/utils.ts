import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const segments = path.split('/');
    // Lógica para cambiar el idioma
    if (segments[1] === lang) {
      segments[1] = l; 
    } else if (segments[1] === defaultLang) {
      segments[1] = l; 
    } else {
      segments.splice(1, 0, l);
    }
    return segments.join('/');
  };
}
