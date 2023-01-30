function findOdd(A) {
    const temp = {}

    for (let i = 0; i < A.length; i++) {
        if (temp[A[i]]) {
            temp[A[i]] = temp[A[i]] + 1
        } else {
            temp[A[i]] = 1
        }
    }
    let result;
    for (const tempKey in temp) {
        if (temp[tempKey] % 2 !== 0) {
            result = +tempKey
        }
    }
   return result
}

console.log(findOdd(([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])))  //, 5);
console.log(findOdd(([7])))  // 7