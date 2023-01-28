multiplicationTable = function(size) {
    const resultMultiplicationTable = []
    for (let i = 1; i <= size; i++) {
        const table = []
        for (let j = 1; j <= size; j++) {
            const resTable = Number(`${i * j}`)
            table.push(resTable)
        }
        resultMultiplicationTable.push(table)
    }
    return resultMultiplicationTable
}
console.log(multiplicationTable(3)) //, [[1,2,3], [2,4,6], [3,6,9]]);