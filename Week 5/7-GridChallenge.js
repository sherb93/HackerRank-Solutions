function gridChallenge(grid) {
  const n = grid.length;

  // Force each str to be alphabetical
  for (let i = 0; i < n; i++) {
    grid[i] = grid[i].split("").sort().join("");
  }

  //
  for (let i = 0; i < n; i++) {
    const column = [];
    for (const str of grid) column.push(str[i]); // push the corresponding letter from each str into the array
    if (column.join("") != column.sort().join("")) return "NO"; // if one isn't in order then return NO
  }

  return "YES";
}
