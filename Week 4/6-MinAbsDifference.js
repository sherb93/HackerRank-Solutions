function minimumAbsoluteDifference(arr) {
  // Set variable for max value so anything less will overwrite its value
  let min = Number.MAX_VALUE;
  // Sort array for efficiency
  const sortedArr = arr.sort((a, b) => a - b);
  // Iterate through array
  for (let i = 0; i < sortedArr.length - 1; i++) {
    /* Set the min variable to the lowest value between
        it's current value and the current difference's absolute value */
    min = Math.min(min, Math.abs(sortedArr[i] - sortedArr[i + 1]));
  }

  return min;
}

minimumAbsoluteDifference([3, -7, 0]); // Returns 3
