function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let result = numbers[i] + numbers[j]
            if (result === target) return [i, j]
        }
    }
}

console.log(twoSum([1, 2, 3], 4)) //  [0,2]],
console.log(twoSum([404, -432, -364, -316, 281, -762, 384, -573, -752, -46, -432, 296, 512, -50, 506, -769, 725, 586, -678, -774, 437, 655, 572, 926, 172, 920, -1, -599, 670, -385, -142, 39, 240, -993, 850, 316, -558, 494, 834, 765, -856, -415, -885, -787, -680, 388, 468, -107, 274, 727, -696], -250)) //  [0,2]],

