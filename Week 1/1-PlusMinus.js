/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems.
The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.*/

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case (arr[i] > 0):
                positive++;
                break;
            case (arr[i] < 0):
                negative++;
                break;
            default:
                zero++;
        }
    }
    
    const pos = (positive/arr.length).toFixed(6);
    const neg = (negative/arr.length).toFixed(6);
    const z = (zero/arr.length).toFixed(6);
    
    console.log(pos);
    console.log(neg);
    console.log(z);
}