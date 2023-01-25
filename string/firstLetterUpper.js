function firstLetterUpper(text) {
  const firstLetter = text.charAt(0).toUpperCase();
  return firstLetter + text.slice(1);
}
