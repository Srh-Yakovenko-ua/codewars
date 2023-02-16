function rowSumOddNumbers(n) {
    // return Math.pow(n , 3)


    const start = n * n - n + 1;
    let sum = 0;

    for(let i = 0; i < n; i++)
    {
        sum =  sum + (start + (i*2));
    }

    return sum;
}

console.log(rowSumOddNumbers(42)) //, 74088);