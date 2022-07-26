function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) ||  (flower2 % 2 === 0 && flower1 % 2 !== 0)) {
        return true
    }

    return false
};
console.log(lovefunc(1,4));
console.log(lovefunc(2,2));
console.log(lovefunc(3,2));
console.log(lovefunc(1,2));