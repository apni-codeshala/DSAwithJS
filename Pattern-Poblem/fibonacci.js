function fibonacci(n) {
    let prev = 0;
    let now = 1;
    for(let i=1; i<=n ; i++) {
        console.log(prev);
        let temp = prev;
        prev = now;
        now = temp + now;
    }
}

fibonacci(10);