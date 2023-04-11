/* eslint-disable no-unused-vars */
function solution(n) {
  const string = n.toString();
  const half = string.length / 2;
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < string.length; i++) {
    if (i > half - 1) {
      secondHalf += Number(string[i]);
    } else {
      firstHalf += Number(string[i]);
    }
  }

  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}
