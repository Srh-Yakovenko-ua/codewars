function duplicateEncode(word) {
    word = word.toLowerCase().split('')

    const duplicateEncodeObj = {}
    const uniqKey = []
    for (let i = 0; i < word.length; i++) {
        if (duplicateEncodeObj[word[i]]) {
            duplicateEncodeObj[word[i]] = duplicateEncodeObj[word[i]] + 1
        } else {
            duplicateEncodeObj[word[i]] = 1
        }
        if (duplicateEncodeObj[word[i]] > 1) {
            uniqKey.push(word[i])
        }
    }

    const setUniqKey = [...new Set(uniqKey)]
    const result = []
    for (let i = 0; i < word.length; i++) {
        if (setUniqKey.includes(word[i])) {
            result.push(')')
        }else {
            result.push('(')
        }
    }
    return result.join('')
}

console.log(duplicateEncode(('recede')))  //,"()()()")
console.log(duplicateEncode(('"Success"')))  //,"()()()")