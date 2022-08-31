function maxMin(k, arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;
    console.log(sortedArr);
    
    for (let i = 0; i <= sortedArr.length - k; i++) {
        const first = sortedArr[i];
        const second = sortedArr[i + k - 1];
        min = Math.min(min, second - first);
    }
    
    console.log(min);
    return min;
}

maxMin(3, [100, 3400, 12, 401, 500, 450, 16]); //Returns: 88