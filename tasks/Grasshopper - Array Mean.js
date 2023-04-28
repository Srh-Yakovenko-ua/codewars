var findAverage = function (nums) {

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum / nums.length
}
console.log(findAverage([1, 3, 5, 7])) //, 4