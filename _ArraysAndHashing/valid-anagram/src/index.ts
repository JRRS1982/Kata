const sortAlphabets = (str: string) => {
  return Array.from(str)
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

function isAnagram(s: string, t: string): boolean {
  const a = sortAlphabets(s);
  const b = sortAlphabets(t);

  if (a.localeCompare(b) === 0) {
    return true;
  }
  return false;
}

export default isAnagram;
