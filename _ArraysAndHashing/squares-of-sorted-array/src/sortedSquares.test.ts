import { sortedSquares } from "./sortedSquares"


describe('sortedSquares', () => {
  it('should square a number', () => {
    expect(sortedSquares([3])).toEqual([9]);
  });
  it('should square a few numbers', () => {
    expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
  });
  it('should square a few numbers v2', () => {
    expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
  });
})
