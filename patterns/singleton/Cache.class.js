"use strict";
class Cache {
    static instance;
    _data = {};

    constructor() {
        if (!Cache.instance) {
            Cache.instance = this;
        }
        return Cache.instance;
    }

    set(key, value) {
        this._data[key] = value;
    }

    get(key) {
        return this._data[key];
    }

    count() {
        return Object.keys(this._data).length;
    }

    list() {
        return Object.keys(this._data);
    }
}

const cache = new Cache();
Object.freeze(cache); // Prevents accidental modification
try {
    cache = new Cache(); // Throws an error
} catch (error) {
    console.log(error.message);
}

try {
    cache.count = () => 0; // Throws an error
} catch (error) {
    console.log(error.message);
}

// Usage example:
cache.set("user:1", {id: 1, name: "John Doe"});
cache.set("user:2", {id: 2, name: "Jane Smith"});

console.log(cache.get("user:1")); // { id: 1, name: 'John Doe' }
console.log(cache.get("user:2")); // { id: 2, name: 'Jane Smith' }

console.log(cache.count()); // 2
console.log(cache.list()); // ['user:1', 'user:2']

// Attempting to create another instance won't work:
const anotherCache = new Cache();
Object.freeze(anotherCache); // Prevents accidental modification

console.log(cache === anotherCache); // true, they are the same instance

anotherCache.set("user:3", {id: 3, name: "Jack Black"});
anotherCache.set("user:4", {id: 4, name: "Jill White"});

console.log(anotherCache.count()); // 4
console.log(anotherCache.list()); // ['user:1', 'user:2', 'user:3', 'user:4']

console.log(cache.count()); // 4
console.log(cache.list()); // ['user:1', 'user:2', 'user:3', 'user:4']

module.exports = Cache;
