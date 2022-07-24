let countSheep = function (num) {
   let count = '';
    for (let i = 1; i <= num; i++) {

      count += `${i} sheep...`
    }
    return count;
}
console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))