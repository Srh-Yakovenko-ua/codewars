function isSortedAndHow(array) {
    const mainArr = array.join('');
    const asc = array.sort((a, b) => a - b).join('');
    const desc = array.sort((a, b) => b - a).join('');

    if (mainArr === asc) return 'yes, ascending';
    if (mainArr === desc) return 'yes, descending';
    return 'no';
}


console.log(isSortedAndHow([15, 7, 3, -8])) //, 'yes, descending'
console.log(isSortedAndHow([1, 2, 3, 4])) //, 'yes, ascending'
console.log(isSortedAndHow([4, 2, 30])) //no