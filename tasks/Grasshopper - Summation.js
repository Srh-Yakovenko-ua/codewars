let summation = function (num){
   let newSum = 0;
    for(let i = 0; i <= num; i++){
        newSum +=  i;
    }
    return newSum;
}
console.log(summation(5));
console.log(summation(9));
console.log(summation(3));
console.log(summation(1));