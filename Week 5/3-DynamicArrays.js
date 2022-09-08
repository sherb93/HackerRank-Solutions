function dynamicArray(n, queries) {
  // Global variables
  let lastAnswer = 0;
  const arr = [];
  const answers = [];

  // Create nested arrays equal to 'n' parameter
  for (let i = 0; i < n; i++) {
    const nestedArr = [];
    arr.push(nestedArr);
  }

  for (let i = 0; i < queries.length; i++) {
    // Array destructuring query for easier readability
    const [type, x, y] = queries[i];

    // Since there are two types I declare two distinct actions
    if (type === 1) {
      let idx = (x ^ lastAnswer) % n;
      arr[idx].push(y);
    } else {
      let idx = (x ^ lastAnswer) % n;
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
};