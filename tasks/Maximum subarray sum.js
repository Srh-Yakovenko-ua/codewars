let maxSequence = function (arr) {

    let min = 0;
    let ans = 0
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);

    }
    return ans;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //, 6