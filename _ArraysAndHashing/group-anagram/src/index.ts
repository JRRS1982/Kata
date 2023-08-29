const sortAlphabets = (str: string) => {
  return Array.from(str)
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

/**
 * Given an array of strings, group anagrams together.
 *
 * @param params i.e. ["eat","tea","tan","ate","nat","bat"]
 * @returns {string[][]} i.e. [["eat","tea","ate"],["tan","nat"],["bat"]]
 */
function groupAnagram(params: string[]): string[][] {
  const result: string[][] = [];
  const map: { [key: string]: string[] } = {};

  for (let index = 0; index < params.length; index++) {
    const current = params[index];
    // sort the string at this index of the params alphabetically and use it as a key i.e { aet: ["eat", "tea", "ate"]}
    const sorted = sortAlphabets(current);
    if (map[sorted]) {
      // if the key exists, push the current unsorted string to that hash map key
      map[sorted].push(current);
    } else {
      // create a new key and set the unsorted string to an array with the sorted string as the key
      map[sorted] = [current];
    }
  }

  // iterate through the map and for each key put push all the values to the result array
  for (const key in map) {
    result.push(map[key]);
  }

  return result;
}

export default groupAnagram;
