function sumPairs(ints, s) {

    const result = [];

    for (let i = 0; i < ints.length; i++) {
        const currentEntity = ints[i];
        const index = s - currentEntity;

        if (result[index]) return [index, currentEntity];
        else result[currentEntity] = true;
        }
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //[3, 7]