/* eslint-disable no-unused-vars */
function solution(statues) {
  statues.sort((a, b) => {
    return a - b;
  });
  let statuesNeeded = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1) {
      statuesNeeded += statues[i + 1] - statues[i] - 1;
    }
  }

  return statuesNeeded;
}
