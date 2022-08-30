function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Make a clone of alphabet and manipulate it based on # of shifts
  let cipher = alphabet;
  // Variable where I build the answer string
  let build = "";

  // Take the first letter and push it to the back of the string for each # of shifts
  for (let i = 1; i <= k; i++) {
    const letter = cipher.slice(0, 1);
    cipher = cipher.slice(1, 26) + letter;
  }

  // For every letter in the str, find its corresponding cipher letter and add it to the build
  for (let i = 0; i < s.length; i++) {
    // Handles symbols
    if (!alphabet.includes(s[i].toLowerCase())) {
      build += s[i];
      // Handles letters
    } else {
      // Get the place of the letter in the alphabet
      const index = alphabet.indexOf(s[i].toLowerCase());
      // Match it to the index for the cipher
      let newLetter = cipher.charAt(index);
      // Handles uppercase and lowercase letters
      if (s[i] === s[i].toUpperCase()) newLetter = newLetter.toUpperCase();
      build += newLetter;
    }
  }

  console.log(build);
  return build;
}

caesarCipher("www.movies.com", 5); // Returns: bbb.rtanjx.htr
