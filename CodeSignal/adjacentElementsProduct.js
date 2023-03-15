/* eslint-disable no-unused-vars */
function solution(inputArray) {
  let num = -1000;
  for (let i = 0; i < inputArray.length; i++) {
    const adj = inputArray[i] * inputArray[i + 1];
    if (adj > num) {
      num = adj;
    }
  }
  return num;
}
