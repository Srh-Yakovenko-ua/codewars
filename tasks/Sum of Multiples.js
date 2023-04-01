function sumMul(n, m) {
    if (m <= 0) return 'INVALID'
    let sum = 0
    for (let i = n; i < m; i += n) {
        if (i === m) return
        sum += i
    }

    return sum
}

console.log(sumMul(2, 9))
console.log(sumMul(0, 0)) //INVALID