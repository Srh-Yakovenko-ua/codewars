function removeChar(str) {
    let newStr = str.split('');
    newStr.shift();
    newStr.pop()
    return newStr.join('');
}
