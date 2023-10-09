"use strict";
const Singleton = (() => {
    let instance;
    let callsCount = 0;

    function createInstance() {
        // Your Singleton logic goes here
        return {
            data: "This is a Singleton instance",
            callsCount: () => callsCount,
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            callsCount++;
            return instance;
        },
    };
})();

// Usage example:
const singleton1 = Singleton.getInstance();
console.log(singleton1.data); // Outputs: 'This is a Singleton instance'

const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true, they are the same instance

console.log(singleton2.callsCount()); // Outputs: 2

class SingletonClass {
    constructor() {
        this._count = 0;
        if (!SingletonClass.instance) {
            SingletonClass.instance = this;
        }

        return SingletonClass.instance;
    }

    count() {
        this._count++;
        return this._count;
    }
}

const singletonClass = new SingletonClass();
const singletonClass2 = new SingletonClass();
console.log(singletonClass.count());
console.log(singletonClass.count());
console.log(singletonClass.count());
console.log(singletonClass2.count());
console.log(singletonClass2.count());
console.log(singletonClass2.count());

class Cache {
    _cache = {};
    get(key) {
        return this._cache[key];
    }
    set(key, value) {
        this._cache[key] = value;
    }
    has(key) {
        return this._cache.hasOwnProperty(key);
    }
}

class CacheSingleton {
    constructor() {
        if (!CacheSingleton.instance) {
            CacheSingleton.instance = new Cache();
        }
        return CacheSingleton.instance;
    }
}

const cache = new CacheSingleton();
const cache2 = new CacheSingleton();

cache.set("a", 1);
console.log(cache.get("a"));
console.log(cache2.get("a"));

cache2.set("b", 2);
console.log(cache.get("b"));
console.log(cache2.get("b"));

class SingletonFreeze {
    constructor() {
        if (!SingletonFreeze.instance) {
            this.data = {}; // This is just an example data property
            SingletonFreeze.instance = Object.freeze(this);
        }
        return SingletonFreeze.instance;
    }

    setData(key, value) {
        this.data[key] = value; // This will throw an error if called on a frozen instance
    }

    getData(key) {
        return this.data[key];
    }
}

const instance1 = new SingletonFreeze();
instance1.setData("name", "John");

const instance2 = new SingletonFreeze();
console.log(instance2.getData("name")); // Outputs: 'John'

instance1.setData("age", 30);
console.log(instance2.getData("age")); // Outputs: 30

console.log(Object.isFrozen(instance1)); // Outputs: true
console.log(Object.isFrozen(instance2)); // Outputs: true

try {
    instance2.data = {}; // Throws an error in strict mode
} catch (error) {
    console.log(error.message);
}
