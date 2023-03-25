function adjacentElementsProduct(array) {

    const maxProd = []
    for (let i = 0; i < array.length - 1; i++) maxProd.push(array[i] * array[i + 1])

    return Math.max(...maxProd)

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])) // 21