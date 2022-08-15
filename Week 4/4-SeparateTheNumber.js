/*
For problems similar to this, where you're expected to find if a variable 'acts' how it's supposed to:
DON'T painstakingly check every step of the argument to make sure it works appropriately.
DO take a piece of the argument and write an algorithm that finds the solution, then compare it to the original argument.
*/

function separateNumbers(s) {
  // Math.floor(s.length / 2): Once a number is lengthier than the remining value, there's no way it can be sequential.
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    // Set the value we're working with in the for loop
    const x = s.slice(0, i);
    // Converts the string into a bigint value
    let num = BigInt(x);
    // This is our expect answer that will be compared to the s argument.
    let built = "";
    // Every time this loops, it's taking the previous value, adding one, and concatenating.
    // Stops when the 'built' string is as long or longer than 's'.
    // Remember, when you add a number to a string variable it remains a string.
    // 'num' is increasing by 1 each iteration.
    while (built.length < s.length) built += num++;
    // The final product of 'built' should match perfectly with s.
    // If it doesn't, the for loop moves on to the next group.
    if (built === s) return console.log(`YES ${x}`);
  }

  console.log("NO");
}

separateNumbers("1213");
