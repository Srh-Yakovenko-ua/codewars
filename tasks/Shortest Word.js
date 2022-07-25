function findShort(s) {
    let newS = s.split(' ')
    let minValue = newS[0].length;
    for (let i = 0; i < newS.length; i++) {
        if (newS[i].length < minValue) {
            minValue = newS[i].length
        }
    }
    return minValue;
}

console.log(findShort("Let's travel abroad shall we"))