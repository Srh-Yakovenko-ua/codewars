function largestPairSum(numbers) {
    const sort = numbers.sort((a, b) => b - a)
    return sort[0] + sort[1]
}

console.log(largestPairSum([10, 14, 2, 23, 19])) //-->  42 (= 23 + 19)