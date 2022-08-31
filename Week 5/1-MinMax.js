function maxMin(k, arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;

  // Loop through array and find all differences between possible max and min values (answer could be at the end!)
  for (let i = 0; i <= sortedArr.length - k; i++) {
    const first = sortedArr[i];
    const second = sortedArr[i + k - 1];
    // Set answer to be the smallest between the set "min" value and the current difference in the for loop
    min = Math.min(min, second - first);
  }

  console.log(min);
  return min;
}

maxMin(3, [100, 3400, 12, 401, 500, 450, 16]); //Returns: 88
