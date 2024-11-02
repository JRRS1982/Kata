/**
 * Input: ["Hello", "World"]
 * Encoded: "5#Hello5#World"
 * Decoded: ["Hello", "World"]
 */

/**
 * @name encode
 * @param string[]
 * @description Converts each string to format: length#string and joins them
 * @returns string
 */
const encode = (strs: string[]): string => {
    if (!strs.length) return '';

    // Use length-based encoding: {length}#{string}
    return strs.map(str => `${str.length}#${str}`).join('');
}

/**
 * @name decode
 * @param string
 * @description Parses the length prefix before each # Uses the length to extract the exact string. Continues until all strings are decoded
 * @returns string[]
 */
const decode = (str: string): string[] => {
    if (!str) return [];

    const result: string[] = [];
    let i = 0;

    while (i < str.length) {
        // Find the delimiter
        let j = i;
        while (str[j] !== '#') {
            j++;
        }

        // Get the length of next string
        const length = parseInt(str.slice(i, j));

        // Extract the string using the length
        const value = str.slice(j + 1, j + 1 + length);
        result.push(value);

        // Move pointer to start of next encoded string
        i = j + 1 + length;
    }

    return result;
}

export { encode, decode };