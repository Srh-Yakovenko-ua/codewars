function findUniq(arr) {
    let uniqSet = new Set(arr);
    let arrNew = [...uniqSet];
    let uniqNumber = 0;

    for(let i = 0; i < 10;i++){
        if(arr[i] === arrNew[0]){
            uniqNumber++;
        }
    }
    return uniqNumber === 1 ? arrNew[0] : arrNew[1]
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([ 0, 1, 0 ]))



