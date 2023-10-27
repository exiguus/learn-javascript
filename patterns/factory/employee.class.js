"use strict";
// Define a base Employee class
class Employee {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sayHello() {
        console.log(`Hello, I'm a ${this.type} employee named ${this.name}`);
    }
}

// Create subclasses for different types of employees
class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name, "Full Time");
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name, "Part Time");
    }
}

class TemporaryEmployee extends Employee {
    constructor(name) {
        super(name, "Temporary");
    }
}

class ContractorEmployee extends Employee {
    constructor(name) {
        super(name, "Contractor");
    }
}

// Usage of the Object-Oriented Factory Pattern
const employee1 = new FullTimeEmployee("John");
const employee2 = new PartTimeEmployee("Alice");
const employee3 = new TemporaryEmployee("Bob");
const employee4 = new ContractorEmployee("Eve");

employee1.sayHello(); // Output: Hello, I'm a Full-Time employee named John
employee2.sayHello(); // Output: Hello, I'm a Part-Time employee named Alice
employee3.sayHello(); // Output: Hello, I'm a Temporary employee named Bob
employee4.sayHello(); // Output: Hello, I'm a Contractor employee named Eve

module.exports = {
    FullTimeEmployee,
    PartTimeEmployee,
    TemporaryEmployee,
    ContractorEmployee,
};
