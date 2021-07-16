export const reverseInteger = (input: number): number => {
  let answer: number = 0;
  if (input >= 0){
    let inputString = String(input);
    let result: string = "";
    for (let index = inputString.length - 1; index >= 0; index--) {
      result += inputString[index];
    }
    answer = Number(result);
  }
  if (input < 0){
    let inputString = String(input);
    let result: string = "";
    inputString = inputString.slice(1);
    for (let index = inputString.length - 1; index >= 0; index--) {
      result += inputString[index];
    }
    let numberResult = Number(result);
    answer = -numberResult
  }
  if (answer > Math.pow(2, 31) - 1 || answer < Math.pow(2, 31) * -1) {
    return 0;
  }

  return answer;
}
