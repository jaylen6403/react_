/* eslint-disable @typescript-eslint/no-var-requires */
const localeCode = getLocaleCode(navigator.language);
const numbersLocale = require(`cldr-data/main/${localeCode}/numbers.json`);

export function getLocaleCode(locale: string) {
  // some of languages should have codes adjusted to availability of
  // cldr-data/main resources
  const fullNameLocales = ['fr-CH'];
  if (fullNameLocales.includes(locale)) {
    return locale;
  }
  return locale.slice(0, 2);
}

export function getNumberLocaleData() {
  return numbersLocale.main[localeCode].numbers['symbols-numberSystem-latn'];
}
