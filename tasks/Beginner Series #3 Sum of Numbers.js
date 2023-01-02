function getSum(a, b) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    const res = (max - min + 1)

    return res * (a + b) / 2
}

console.log(getSum(0, 1))