const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l + l) + (w + w);
};

console.log(areaOrPerimeter(4,4))
console.log(areaOrPerimeter(4,10))