
function toNumberArray(strArr){

    return strArr.map(el => +el)
}

console.log(toNumberArray(["1.1","2.2","3.3"]))