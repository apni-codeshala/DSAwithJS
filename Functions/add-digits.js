/**
 * @param {number} num
 * @return {number}
 */

// Using recursion
var addDigitsRecursion = function(num) {

    if(num < 10){
        return num;
    }

    let sum = 0;
    while(num > 0) {
        let digit = num % 10;
        sum = sum + digit;
        num = parseInt(num / 10);
    }

    return (sum >= 10) ? addDigitsRecursion(sum) : sum;

};
console.log(addDigitsRecursion(19));

// Learned something about 9 - for time complexity of o(1)
var addDigits = function(num) {
    if(num < 10)
        return num;
    else if(num % 9 == 0)
        return 9;
    else
        return num % 9;
};