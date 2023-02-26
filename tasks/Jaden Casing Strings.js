const toJadenCase = (str) => {
    const arrStr = str.split(' ')
    const newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        newArr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1))
    }
    return newArr.join(' ')
}



console.log(toJadenCase('How can mirrors be real if our eyes aren\'t real'))