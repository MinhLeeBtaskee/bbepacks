export const formatDate = (date, type = 'HH:mm DD/MM/YYYY') => {
  if (!date) return null;
  const locale = getLang();
  return moment(date).locale(locale).format(type);
};

export const getLang = () => {
  let lang = getLanguage();
  if (!lang || (lang !== 'en' && lang !== 'vi')) {
    lang = (navigator.languages && navigator.languages[0])
      || navigator.language
      || navigator.browserLanguage
      || navigator.userLanguage
      || 'en';
  }
  if (_.includes(LANGUAGES, lang)) {
    setLanguage(lang);
    return lang;
  }
  setLanguage('en');
  return 'en';
};

export const getLanguage = () => localStorage.getItem(LANG);

export const setLanguage = (value) => {
  localStorage.setItem(LANG, value);
  i18n.setLocale(value);
};
