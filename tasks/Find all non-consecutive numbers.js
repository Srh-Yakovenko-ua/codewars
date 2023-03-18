function allNonConsecutive(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++)
        if (arr[i - 1] + 1 !== arr[i]) {
            result.push({i: i, n: arr[i]});
        }
    return result;
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])) // {i: 4, n:6}