function greet(name, owner) {
        if (name === owner) return 'Hello boss'; 
        else return  'Hello guest';
}

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))