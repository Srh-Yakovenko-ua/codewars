function sumTriangularNumbers(n) {
    if(n < 0) return 0

    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum+= (i * (i + 1) / 2)
    }

    return  sum
}

console.log(sumTriangularNumbers(6)) //56