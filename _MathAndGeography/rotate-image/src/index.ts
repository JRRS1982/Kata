const index = (rows: number[][]): number[][] => {
  // loop the rows
  for (let index = 0; index < rows.length; index++) {
    // loop the cells
    for (let j = index; j < rows.length; j++) {
      // TRANSPOSE the matrix, which is basically flipping the original matrix over on itself from top right to bottom left in this case... so the top right cell is the bottom left, middle left is top middle etc and top left remains the same.... the central cells are the pivot points if odd size, else they are flipped.
      [rows[index][j], rows[j][index]] = [rows[j][index], rows[index][j]];
    }
  }

  // once they are flipped, by transposing you need to reverse it to solve the kata. This is a more effient way of doing it than changing each cell.
  rows.forEach((row) => row.reverse());

  return rows;
};

export default index;
