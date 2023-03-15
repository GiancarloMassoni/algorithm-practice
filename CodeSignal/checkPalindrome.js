/* eslint-disable no-unused-vars */
function solution(inputString) {
  let newString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    newString += inputString[i];
  }
  if (newString === inputString) {
    return true;
  } else {
    return false;
  }
}
