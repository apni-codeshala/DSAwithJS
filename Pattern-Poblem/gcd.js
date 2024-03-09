function gcd(a, b){
    let count = (a>b) ? a : b;
    let ans = 1;
    for(let i=1; i<=count; i++) {
        if((a%i == 0) && (b%i == 0)) {
            ans = i;
        }
    }
    return ans;
}
console.log(gcd(28, 24));