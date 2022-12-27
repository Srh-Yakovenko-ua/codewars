function isIsogram(str) {
    const strArr = str.toLowerCase().split('').sort();

    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] === strArr[i + 1]) {
            return false;
        }
    }
    return  true
}

console.log(isIsogram('moOse'))