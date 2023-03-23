/* eslint-disable no-unused-vars */
function solution(matrix) {
  const column = [];
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] !== 0 && !column.includes(j)) {

        counter += matrix[i][j];

      } else if (matrix[i][j] === 0) {
        column.push(j);
      }

    }
  }

  return counter;
}
