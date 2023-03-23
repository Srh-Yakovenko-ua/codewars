const greet = function (name) {


    return `Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`
};
console.log(greet("riley")) //"riley" --> "Hello Riley!"
console.log(greet("JACK")) //"JACK"  --> "Hello Jack!"
