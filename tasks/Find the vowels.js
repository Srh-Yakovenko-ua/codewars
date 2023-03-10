function vowelIndices(word) {
    const vovwel = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
    const res = []

    word.split('')
    for (let i = 0; i < word.length; i++) {
        if (vovwel.includes(word[i])) {
            res.push(i + 1)
        }
    }
    return res

}

console.log(vowelIndices('orange')) // [1,3,6]