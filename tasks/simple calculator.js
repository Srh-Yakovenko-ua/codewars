function calculator(a, b, sign) {
    const s = ['+', '-', '*', '/']
    if (!s.includes(sign)) return 'unknown value'
    return eval(a + sign + b)


}

console.log(calculator(1, 2, '+'));
console.log(calculator(1, 2, '-'));
console.log(calculator(3, 5, '*'))
console.log(calculator(6, 2, '/'))
console.log(calculator(6, 2, '$')) // "unknown value"
