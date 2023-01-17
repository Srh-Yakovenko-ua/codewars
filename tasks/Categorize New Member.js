function openOrSenior(data) {
    const resData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] < 55 || data[i][1] <= 7) {
            resData.push('Open')
        } else {
            resData.push('Senior')
        }
    }
    return resData
}

console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

//output ['Open', 'Open', 'Open', 'Open']
//output ['Open', 'Senior', 'Open', 'Senior']