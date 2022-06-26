/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below: */


//TEST CASE
const arr = [[11, 3, 5], [45, 23, 1], [18, 9, 6]];
//TEST CASE

function diagonalDifference(arr) {
    //Math.abs()
    let primary = 0
    let secondary = 0
    let mat = arr.length - 1
    
    for (let i=0; i<arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][mat]
        if (mat >= 0) {
            mat -= 1;
        }
    }
    
    return Math.abs(primary - secondary)
}