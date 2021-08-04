import { validMountainArray } from "./index";

describe('validMountainArray', () => {
  it('should pass test case one', () => {
    const arr = [2, 1];
    const result = validMountainArray(arr);
    expect(result).toEqual(false);
  });
  it('should pass test case two', () => {
    const arr = [3, 5, 5];
    const result = validMountainArray(arr);
    expect(result).toEqual(false);
  });  
  it('should pass test case three', () => {
    const arr = [0, 3, 2, 1];
    const result = validMountainArray(arr);
    expect(result).toEqual(true);
  });
  it('should pass test case four', () => {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const result = validMountainArray(arr);
    expect(result).toEqual(false);
  });
  it('should pass test case five', () => {
    const arr = [9,8,7,6,5,4,3,2,1,0];
    const result = validMountainArray(arr);
    expect(result).toEqual(false);
  });
})
