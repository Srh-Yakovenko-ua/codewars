function minValue(values) {
    const sortValues = [...values].sort((a ,b)=> a - b)
    const res = []
    for (let i = 0; i < sortValues.length; i++) {
        if (!res.includes(sortValues[i])) {
            res.push(sortValues[i])
        }
    }
   return Number(res.join(''))
}

console.log(minValue([4, 8, 1, 4])) //, 148
console.log(minValue([6, 7, 8, 7, 6, 6])) //, 678