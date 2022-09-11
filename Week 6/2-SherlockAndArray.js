function balancedSums(arr) {
  // If length is 1, both sides == 0;
  if (arr.length == 1) return "YES";

  // Initialize a variable for each side
  let left = 0; // left will always start at 0
  let right = arr.slice(1, arr.length).reduce((a, b) => a + b); // find sum of everything to the right of arr[0]
  if (right == 0) return "YES"; // if left == right then resolve

  // As we iterate through, we're just adding the previous element to 'left' and subtracting the current element from 'right'
  for (let i = 1; i < arr.length; i++) {
    left += arr[i - 1];
    right -= arr[i];
    if (left == right) return "YES"; // if they ever equal then return 'YES'
  }

  return "NO";
}

balancedSums([1, 2, 3]); // Returns 'NO'
balancedSums([1, 2, 3, 3]); // Returns 'YES'
