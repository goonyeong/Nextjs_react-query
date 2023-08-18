export const fallbackLng = "en";
export const languages = [fallbackLng, "ko"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    //debug: false,
    supportedLngs: languages,
    preload: languages,
    localeDetection: true,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
