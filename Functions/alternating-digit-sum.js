// https://leetcode.com/problems/alternating-digit-sum/

/**
 * @param {number} n
 * @return {number}
 */


var alternateDigitSum = function(n) {
    
    // First count the no. of digits
    let count = 0;
    let noToCount = n;
    while(noToCount > 0) {
        noToCount = noToCount / 10;
        noToCount = parseInt(noToCount);
        count++;
    }
    
    let positive;
    (count % 2 == 0) ? positive = false : positive = true; 
    
    var sum = 0;
    while(n > 0) {
        let nowDig = n % 10;
        if(positive) {
            sum = sum + nowDig;
            positive = !(positive);
        } else {
            sum = sum - nowDig;
            positive = !(positive);
        }
        console.log(`Now sum ${sum}`)
        n = n / 10;
        n = parseInt(n);
    }
    
    return sum;
};

console.log(alternateDigitSum(886996));