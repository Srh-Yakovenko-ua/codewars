function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1

    let length1 = a1.map(str => str.length)
    let length2 = a2.map(str => str.length)

    const Math1 = Math.max(...length1) - Math.min(...length2)
    const Math2 = Math.max(...length2) - Math.min(...length1)

    return Math.max(Math1, Math2)

}

console.log(mxdiflg(
    ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
))
