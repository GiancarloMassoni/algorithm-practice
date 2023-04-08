/* eslint-disable no-unused-vars */
function solution(inputArray) {
  let counter = 0;
  const array = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= counter) {
      counter = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= counter) {
      array.push(inputArray[i]);
    }
  }

  return array;
}
