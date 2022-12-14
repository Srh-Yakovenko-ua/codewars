function solution(nums = []){
    return nums !== null ?  nums.sort((a,b) => a - b) : []
}

console.log(solution([1,2,3,10,5]))
console.log(solution([]))
console.log(solution(null))
