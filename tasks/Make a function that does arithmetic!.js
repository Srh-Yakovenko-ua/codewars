function arithmetic(a, b, operator) {
    switch (operator) {
        case 'subtract' :
            return a - b;
        case 'add' :
            return a + b;
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
    }
}

console.log(arithmetic(8, 2, 'subtract'))
console.log(arithmetic(1, 2, 'add'))

//assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
//     assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
//     assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
//     assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");