function solution(string) {
    let newStr = '';
    for (words of string){
        if (words === words.toUpperCase()){
            newStr += ' ';
            newStr += words;
        } else{
            newStr += words;
        }
    }
    return newStr
}

console.log(solution('camelCasingTest'))