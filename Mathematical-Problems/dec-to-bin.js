function decToBin(num) {
    let bin = "";
    while(num > 0) {
        if(num%2 == 0) {
            bin = '0' + bin;
        } else {
            bin = '1' + bin;
        }
        num = Math.floor(num/2);
    }
    return bin;
}

console.log(decToBin(6));