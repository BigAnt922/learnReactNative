export const arrayToSentance = (arr = []) => {
  const lastWord = arr.pop();
  if (arr.length > 1) {
    return arr.join(", ") + " & " + lastWord;
  } else {
    return lastWord;
  }
};
