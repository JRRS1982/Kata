const containsDuplicate = (nums: string[]) => {
  nums = nums.filter((num) => num !== ".");
  let set = new Set(nums);

  return set.size !== nums.length;
};

const isValidRow = (rows: string[][]): boolean => {
  // loop each row
  // look for duplicates that are not a .
  // if found return false
  let result = true;
  rows.forEach((row) => {
    if (containsDuplicate(row)) {
      result = false;
    }
  });

  return result;
};

const isValidColumn = (rows: string[][]): boolean => {
  let result = true;

  // for the number of rows
  for (let i = 0; i < rows.length; i++) {
    // create a new column to check for duplicates
    let column: string[] = [];
    // loop over the columns
    for (let j = 0; j < rows.length; j++) {
      // push the value of the column into the array
      column.push(rows[j][i]);
    }
    if (containsDuplicate(column)) {
      // if one column is invalid, the whole board is invalid
      result = false;
    }
  }

  return result;
};

const isValidSquare = (rows: string[][]): boolean => {
  let result = true;

  // for the number of rows
  // for the number of columns
  // if row is equal to or less than 3 and column is equal to or less than 3 add to square 1
  // else if row is equal to or less than 3 and column is equal to or less than 6 add to square 2
  // else if row is equal to or less than 3 and column is equal to or less than 9 add to square 3
  // else if row is equal to or less than 6 and column is equal to or less than 3 add to square 4
  // else if row is equal to or less than 6 and column is equal to or less than 6 add to square 5
  // else if row is equal to or less than 6 and column is equal to or less than 9 add to square 6
  // else if column is equal to or less than 3 add to square 7
  // else if column is equal to or less than 6 add to square 8
  // else if column is equal to or less than 9 add to square 9
  // for the number of squares check for duplicates

  let squares: string[][] = [[], [], [], [], [], [], [], [], []];

  for (let row = 0; row < rows.length; row++) {
    for (let column = 0; column < rows[row].length; column++) {
      if (row <= 2 && column <= 2) {
        squares[0].push(rows[row][column]);
        continue;
      } else if (row <= 2 && column <= 5) {
        squares[1].push(rows[row][column]);
        continue;
      } else if (row <= 2 && column <= 8) {
        squares[2].push(rows[row][column]);
        continue;
      } else if (row <= 5 && column <= 2) {
        squares[3].push(rows[row][column]);
        continue;
      } else if (row <= 5 && column <= 5) {
        squares[4].push(rows[row][column]);
        continue;
      } else if (row <= 5 && column <= 8) {
        squares[5].push(rows[row][column]);
        continue;
      } else if (row <= 8 && column <= 2) {
        squares[6].push(rows[row][column]);
        continue;
      } else if (row <= 8 && column <= 5) {
        squares[7].push(rows[row][column]);
        continue;
      } else if (row <= 8 && column <= 8) {
        squares[8].push(rows[row][column]);
        continue;
      }
    }
  }

  squares.forEach((square) => {
    if (containsDuplicate(square)) {
      result = false;
    }
  });

  return result;
};

export const isValidSudoku = (rows: string[][]): boolean => {
  if (!rows) return false;

  if (!isValidRow(rows)) {
    return false;
  }

  if (!isValidColumn(rows)) {
    return false;
  }

  if (!isValidSquare(rows)) {
    return false;
  }

  return true;
};

export default isValidSudoku;
