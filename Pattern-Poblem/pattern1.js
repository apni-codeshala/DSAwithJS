function pattern(n) {
    for(let i=1; i<=n; i++) {
        let str = "";
        for(let j=1; j<=n-i; j++) {
            str += " ";
        }
        for(let j=1; j<=i; j++) {
            str += j;
        }
        for(let j=i-1; j>=1; j--) {
            str += j;
        }
        console.log(str);
    }
}
 
pattern(9);