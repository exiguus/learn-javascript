"use strict";
// JavaScript
//
// Partial application
//  prefilling argument
const add = (...args) => [...args].reduce((a, b) => a + b);

const addMore = add.bind(undefined, 3, 5, 10);
console.log("bind addMore(2)", addMore(2)); // bind addMore(2) 20

const mergeObject = (a, b) =>
    Object.freeze({
        ...a,
        ...b,
        keyX: `${a.keyA} ${a.keyB}`,
    });
const defaultData = Object.freeze({
    keyA: "valueA",
    keyB: "valueB",
    keyC: "valueC",
});
let data = mergeObject.bind(null, defaultData);
let dataCurrent = Object.freeze(
    data({
        keyA: "newValueA",
    }),
);
console.log("bind mergeObject()", dataCurrent);
// bind mergeObject() {
//     keyA: 'newValueA',
//     keyB: 'valueB',
//     keyC: 'valueC',
//     keyX: 'valueA valueB'
//   }

data = mergeObject.bind(null, dataCurrent);
dataCurrent = data({
    keyB: "newValueB",
});
console.log("bind mergeObject()", dataCurrent);
// bind mergeObject() {
//     keyA: 'newValueA',
//     keyB: 'newValueB',
//     keyC: 'valueC',
//     keyX: 'newValueA valueB'
//   }

//
// Currying
//  Simplify a function by breaking it down into multiple one-argument functions

const curryAdd = (x) => (y) => x + y;
console.log("curryAdd(2)(3)", curryAdd(2)(3)); // curryAdd(2)(3) 5

// Currying and Partial application
const curryAddFlex = (x = 0, y = 0) => {
    const total = x + y;
    return {
        add: curryAddFlex.bind(null, total),
        done: () => total,
    };
};

const cfa = curryAddFlex();
console.log(
    "cfa.add(2).add(4).add(6).add(-4).done()",
    cfa.add(2).add(4).add(6).add(-4).done(),
); // cfa.add(2).add(4).add(6).add(-4).done() 8
console.log("cfa.add(24).done()", cfa.add(24).done()); // cfa.add(24).done() 24

const cfa2 = curryAddFlex(10);
console.log(cfa2.add(10).add(50).done()); // 70
console.log(cfa2.add(10).done()); // 20
console.log(cfa2.add(10)); // { add: [Function: bound curryAddFlex], done: [Function: done] }

const iPerson = (
    data = {
        firstName: undefined,
        lastName: undefined,
    },
) => {
    const person = {
        data,
    };
    const updateFirstName = (person, name) => {
        person.data.firstName = name;
        return person;
    };
    const updateLastName = (person, name) => {
        person.data.lastName = name;
        return person;
    };

    person.setFirstName = updateFirstName.bind(null, person);
    person.setLastName = updateLastName.bind(null, person);
    person.done = () => person.data;
    return person;
};

const person = iPerson();
console.log(person.done()); // { firstName: undefined, lastName: undefined }
console.log(
    "person().setFirstName('Jon').setLastName('Deo').done()",
    person.setFirstName("Jon").setLastName("Deo").done(),
); // person().setFirstName('Jon').setLastName('Deo').done() { firstName: 'Jon', lastName: 'Deo' }
console.log(person.setFirstName("Jane").done()); // { firstName: 'Jane', lastName: 'Deo' }

class Person {
    constructor(person = null) {
        const defaultPerson = {
            firstName: undefined,
            lastName: undefined,
        };
        const {firstName, lastName} = {...person, ...defaultPerson};
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setFirstName(name) {
        this.firstName = name;
        return this;
    }

    setLastName(name) {
        this.lastName = name;
        return this;
    }
}

const myPerson = new Person();
console.log(myPerson); // Person { firstName: undefined, lastName: undefined }
console.log(myPerson.setFirstName("Jon").setLastName("Deo")); // Person { firstName: 'Jon', lastName: 'Deo' }

// Factorial
const range = (a, b) => (a > b ? [] : [a, ...range(a + 1, b)]);
const multiply = (arr) => arr.reduce((p, a) => p * a);
const factorial = (n) => multiply(range(1, n));
console.log(multiply(range(1, 4)), factorial(5)); // 24 120
console.log(factorial(6)); // 720

// Random / Test
function getRandomInt(min, max, random = Math.random) {
    return Math.floor(random() * (max - min)) + min;
}

console.log(getRandomInt(0, 10, () => 0.7) === 7); // true
console.log(getRandomInt(0, 10, () => 0.2) === 2); // true

const getInt = getRandomInt.bind(null, 50, 100);
console.log(getInt(() => 0.5)); // 75
console.log(getInt()); // 50-100
