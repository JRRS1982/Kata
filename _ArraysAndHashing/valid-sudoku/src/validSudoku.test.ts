import validSudoku from "./validSudoku";

describe("validSudoku", () => {
  it("should pass test case one", () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(true);
  });
  it("should fail test case two", () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(false);
  });

  it("should pass failed test case one", () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(true);
  });

  it("should pass failed test case two", () => {
    const board = [
      [".", ".", ".", ".", ".", ".", "5", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ["9", "3", ".", ".", "2", ".", "4", ".", "."],
      [".", ".", "7", ".", ".", ".", "3", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "3", "4", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "3", ".", ".", "."],
      [".", ".", ".", ".", ".", "5", "2", ".", "."],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(false);
  });

  it("should pass if no duplicates in the row", () => {
    const board = [["8", "3", ".", ".", "7", ".", ".", ".", "."]];
    const result = validSudoku(board);
    expect(result).toEqual(true);
  });
  it("should fail if duplicates in the row", () => {
    const board = [["8", "3", ".", "7", "7", ".", ".", ".", "."]];
    const result = validSudoku(board);
    expect(result).toEqual(false);
  });

  it("should pass if no duplicates in the column", () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", "2", ".", ".", "1", ".", ".", ".", "."],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(true);
  });
  it("should fail if duplicates in the column", () => {
    const board = [
      ["8", "3", ".", "7", "7", ".", ".", ".", "."],
      ["8", "2", ".", "2", "3", ".", ".", ".", "."],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(false);
  });

  it("should pass if no duplicates in the square (not row/column)", () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", "2", ".", ".", "1", ".", ".", ".", "."],
      ["4", "1", ".", ".", "2", ".", ".", ".", "."],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(true);
  });
  it("should fail if duplicates in the square (not row/column)", () => {
    const board = [
      ["8", "3", ".", "7", "4", ".", ".", ".", "."],
      ["7", "8", ".", "2", "3", ".", ".", ".", "."],
      ["6", "4", ".", ".", "1", ".", ".", ".", "."],
    ];
    const result = validSudoku(board);
    expect(result).toEqual(false);
  });
});
