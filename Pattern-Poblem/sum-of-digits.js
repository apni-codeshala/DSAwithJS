function sumOfDigit(n) {
    let sum = 0;
    while(n>0) {
        let dig = n%10;
        sum = sum + dig;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfDigit(413));