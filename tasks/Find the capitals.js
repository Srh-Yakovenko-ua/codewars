let capitals = function (word) {
    let indexWord = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indexWord.push(i)
        }
    }
    return indexWord

}

console.log(capitals('CodEWaRs'))