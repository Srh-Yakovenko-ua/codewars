function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return []
    }
    const minRatingNumbers = Math.min(...numbers)
    const sortNumbers = [...numbers].sort((a, b) => a - b)

    const minIndexNumbers = sortNumbers.indexOf(minRatingNumbers)
    const res = []
    for (let i = 0; i < sortNumbers.length; i++) {
        if (i !== minIndexNumbers) {
            res.push(sortNumbers[i])
        }
    }
    return res
}

console.log(removeSmallest([1, 2, 3, 4, 5]))

console.log(removeSmallest([2, 2, 1, 2, 1]))

console.log(removeSmallest([33,283,344,77,320,49]))