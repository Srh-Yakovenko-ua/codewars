function greet (name, owner) {
return  name == owner ?  `Hello boss` : `Hello guest`;

};


// function greet (name, owner) {
//    if (name === owner) {
//       return 'Hello boss';
//    }
//    return 'Hello guest';
// }
console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))

