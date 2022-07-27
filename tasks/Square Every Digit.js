function squareDigits(num) {
    let newNum = String(num).split('')
    let arr =  newNum.map(item => {
        return (item ** 2);
    })
    return Number(arr.join(''))
}

console.log(squareDigits(3212));