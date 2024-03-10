function palindorme(num) {
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;
    while(i <= j) {
        if(str[i] == str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(palindorme(1));