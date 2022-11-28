export const upperCaseFirstLetter = (word: string) =>
  `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;

export const lowerCaseAllWordsExceptFirstLetters = (word: string) =>
  word.replace(
    /\S*/g,
    (word: string) => `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
  );
