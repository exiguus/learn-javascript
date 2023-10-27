"use strict";
// Define a factory function for creating different types of employees
function createEmployee(name, type) {
    let employee;

    if (type === "FullTime") {
        employee = new FullTimeEmployee(name);
    } else if (type === "PartTime") {
        employee = new PartTimeEmployee(name);
    } else if (type === "Temporary") {
        employee = new TemporaryEmployee(name);
    } else if (type === "Contractor") {
        employee = new ContractorEmployee(name);
    }

    return employee;
}

// Define different employee constructor functions
function FullTimeEmployee(name) {
    this.name = name;
    this.type = "Full Time";
    this.sayHello = function () {
        console.log(`Hello, I'm a Full-Time employee named ${this.name}`);
    };
}

function PartTimeEmployee(name) {
    this.name = name;
    this.type = "Part Time";
    this.sayHello = function () {
        console.log(`Hello, I'm a Part-Time employee named ${this.name}`);
    };
}

function TemporaryEmployee(name) {
    this.name = name;
    this.type = "Temporary";
    this.sayHello = function () {
        console.log(`Hello, I'm a Temporary employee named ${this.name}`);
    };
}

function ContractorEmployee(name) {
    this.name = name;
    this.type = "Contractor";
    this.sayHello = function () {
        console.log(`Hello, I'm a Contractor employee named ${this.name}`);
    };
}

// Usage of the Factory Pattern
const employee1 = createEmployee("John", "FullTime");
const employee2 = createEmployee("Alice", "PartTime");
const employee3 = createEmployee("Bob", "Temporary");
const employee4 = createEmployee("Eve", "Contractor");

employee1.sayHello(); // Output: Hello, I'm a Full-Time employee named John
employee2.sayHello(); // Output: Hello, I'm a Part-Time employee named Alice
employee3.sayHello(); // Output: Hello, I'm a Temporary employee named Bob
employee4.sayHello(); // Output: Hello, I'm a Contractor employee named Eve

module.exports = createEmployee;
