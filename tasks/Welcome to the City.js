function sayHello(name, city, state) {
    const user = name.join(' ')

    return `Hello, ${user}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')) //'Hello, John Smith! Welcome to Phoenix, Arizona!'