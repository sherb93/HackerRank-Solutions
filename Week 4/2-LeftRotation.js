/* A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result. */

function rotateLeft(d, arr) {
  // Set a counter
  let i = 0;

  // Continuously remove first element and add to end of arr until i reaches d
  do {
    const item = arr.shift();
    arr.push(item);
    i++;
  } while (i < d);

  return arr;
}

rotateLeft(4, [1, 2, 3, 4, 5]); //prints 5, 1, 2, 3, 4
