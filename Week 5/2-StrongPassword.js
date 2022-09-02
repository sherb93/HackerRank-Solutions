function minimumNumber(n, password) {
  // Create RegExp variables for every necessary character
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /[0-9]/;
  const special = /[!@#$%^&*()\-+]/;
  // Variable that holds return value
  let min = 0;

  // Test password for all criteria. If not used in password, increase min by 1.
  if (!upperCase.test(password)) min++;
  if (!lowerCase.test(password)) min++;
  if (!number.test(password)) min++;
  if (!special.test(password)) min++;

  // After all tests, if (min + password length) is still less than 6, min++ until password meets length requirement.
  while (min + n < 6) {
    min++;
  }

  return min;
}

minimumNumber(11, "#HackerRank");
