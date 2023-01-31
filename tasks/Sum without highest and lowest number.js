function sumArray(array) {
    if(array && array.length > 1) {
        const minMax = Math.min(...array) + Math.max(...array)
        let res = 0;
        for (let i = 0; i < array.length; i++) {
            res += array[i]
        }
        return res - minMax
    }

    return 0
}

console.log(sumArray([0, 1, 6, 10, 10])) //17