function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: 'Julia',
    age: 15
};

printInfo.call(person);
