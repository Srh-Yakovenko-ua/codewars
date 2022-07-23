function getCount(str) {
    let countVowels = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let item of str) {
        if (vowels.includes(item)) {
            countVowels++
        }
    }

    return countVowels;
}

console.log(getCount("abracadabra"))
console.log(getCount("abraceqasiouadabra"))
console.log(getCount("abracadaiouvbbra"))