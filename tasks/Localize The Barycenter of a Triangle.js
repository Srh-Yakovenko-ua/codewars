function barTriang(p1, p2, p3){
    let count1 = ((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
    let count2 = ((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);

    return [Number(count1) , Number(count2)]

}

console.log(barTriang([4, 2], [12, 2], [6, 10]))