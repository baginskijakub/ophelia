export const capitalize = (str: string, allWords?: boolean): string => {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  if (allWords) {
    return str
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
