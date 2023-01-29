function strCount(str, letter){
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i].includes(letter)){
            temp = temp + 1
        }
    }
    return temp
}

console.log(strCount('Hello', 'l'))