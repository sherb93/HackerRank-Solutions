/*
I tried to brute force a solution without really understanding what the XOR operator does.
There are properties and patterns to the Bitwise XOR that make this problem a cinch.
XORing a value an even number of times will always result in 0.
Creating all subarrays for an array with an even length will result in every value appearing an even number of times across all subarrays.
Because of that, every XOR results in 0;
*/

const sansaXor = (arr) => {
  // if the arr length is two, every element will appear an even number of times equaling 0;
  if (arr.length % 2 === 0) return 0;

  let res;

  // only values in odd positions will appear an odd number of times and equal something other than 0, so ignore the rest.
  for (let i = 0; i < arr.length; i += 2) res ^= arr[i];

  return res;
};
