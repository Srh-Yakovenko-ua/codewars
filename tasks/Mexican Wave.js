function wave(str) {
if(str.length === 0) return [];

let resultStr = [];
for(let i = 0; i < str.length; i++){
    let copyStr = str.split('');
    if(copyStr[i] !== ' '){
        copyStr[i] = copyStr[i].toUpperCase();
        resultStr.push(copyStr.join(''))
    }
}
return resultStr

}

// console.log(wave(('codewars')))
// console.log(wave(('hello')))
console.log(wave(('two words')))


// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];

