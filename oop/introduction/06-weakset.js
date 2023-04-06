'use strict'

let primesObject = {
    0: 2,
    1: 3,
    2: 5,
    3: 7,
    4: 11,
}

const primesWeakSet = new WeakSet()

Object.entries(primesObject).forEach((entry) => {
    primesWeakSet.add(entry)
    console.log(primesWeakSet.has(entry), entry)
})
console.log(primesWeakSet)


const primesObjectCopy = primesObject;
primesObject = null;

Object.entries(primesObjectCopy).forEach((entry) => {
    console.log(primesWeakSet.has(entry), entry);
});


function execRecursively(fn, subject, _refs = new WeakSet()) {
    // Avoid infinite recursion
    if (_refs.has(subject)) {
        return;
    }

    fn(subject);
    if (typeof subject === "object") {
        _refs.add(subject);
        for (const key in subject) {
            execRecursively(fn, subject[key], _refs);
        }
        _refs.delete(subject);
    }
}

const foo = {
    foo: "Foo",
    bar: {
        bar: "Bar",
    },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);