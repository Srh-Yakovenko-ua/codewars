let min = function (list) {
   let minValue = list[0];

   for (let i = 0; i < list.length; i++) {
      if (list[i] < minValue) {
         minValue = list[i]
      };
   }

   return minValue
}

let max = function (list) {
   let maxValue = list[0];

   for (let i = 0; i < list.length; i++) {
      if (list[i] > maxValue) {
         maxValue = list[i]
      };
   }

   return maxValue
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]), max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]), max([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]), max([42, 54, 65, 87, 0]));
console.log(min([5]), max([5]));
