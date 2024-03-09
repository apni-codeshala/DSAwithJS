/** 
* Learned euclids algo for solving the problem of gcd efficiently
* Conclusion of euclids algorithm is --> If A = B⋅Q + R and B≠0 then GCD(A,B) = GCD(B,R) where Q is an integer, R is an integer between 0 and B-1
* GCD(270,192) = GCD(192,78) = GCD(78,36) = GCD(36,6) = GCD(6,0) = 6 
*/

function gcd(a, b) {
    let small = (a < b) ? a : b;
    let big = (a > b) ? a : b;
    if(big%small == 0) {
        return small;
    }else {
        return gcd(big%small, small);
    }
}

console.log(gcd(28, 24));