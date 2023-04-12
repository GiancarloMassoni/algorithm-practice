/* eslint-disable no-unused-vars */
function solution(s1, s2) {
  let counter = 0;
  const a1 = s1.split('');
  while (a1.length) {
    const x = a1.pop();
    if (s2.includes(x)) {
      counter++;
      s2 = s2.replace(x, '');
    }
  }
  return counter;
}
