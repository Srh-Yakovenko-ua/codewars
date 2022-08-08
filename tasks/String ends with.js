function solution(str, ending){
    return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))