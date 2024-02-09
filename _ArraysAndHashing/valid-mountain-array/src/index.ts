export const validMountainArray = (arr: number[]): boolean => {
  let peak: boolean = false;
  if (arr.length < 3) {
    return false;
  }
  for (var index = 0; index < arr.length; index++) {
    if (!peak) {
      if (arr[index - 1] < arr[index] && arr[index] > arr[index + 1]) {
        peak = true;
      }
    }
    if ((!peak && arr[index] >= arr[index + 1]) || (peak && arr[index] <= arr[index + 1])) {
      return false;
    }
  }
  if (!peak) {
    return false;
  }
  return true;
};
