function findMultiples(integer, limit) {
    // let arr = []
    // let i = integer
    // while (i <= limit) {
    //     arr.push(i)
    //     i += integer
    //
    // }
    // return arr

    let result = []

    for (let i = integer; i<=limit ; i+=integer)
        result.push(i)

    return result
}

console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))