function filter_list(l) {
    let arr = [];
    l.filter(item => {
        if (typeof item === 'number') {
            arr.push(item);
        }
    })
    return arr
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))