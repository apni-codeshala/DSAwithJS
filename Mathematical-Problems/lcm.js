function gcd(a, b) {
    let small = (a < b) ? a : b;
    let big = (a > b) ? a : b;
    if(big % small == 0){
        return small;
    } else {
        return gcd(big%small, small);
    }
}

function lcm(a, b) {
    let G = gcd(a, b);
    return (a*b) / G;
}

console.log(lcm(9, 12));