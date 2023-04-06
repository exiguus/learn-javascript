class ClearableWeakMap {
    #wm;
    constructor(init) {
        this.#wm = new WeakMap(init);
    }
    clear() {
        this.#wm = new WeakMap();
    }
    delete(k) {
        return this.#wm.delete(k);
    }
    get(k) {
        return this.#wm.get(k);
    }
    has(k) {
        return this.#wm.has(k);
    }
    set(k, v) {
        this.#wm.set(k, v);
        return this;
    }
}

const weakMap = new ClearableWeakMap();

let primesObject = {a: 1, b: 2, c: 3, d: 4};

Object.entries(primesObject).forEach((entry) => {
    weakMap.set(entry);
    console.log(weakMap.has(entry), entry);
});
console.log(weakMap);

primesObjectCopy = primesObject;
primesObject = null;

Object.entries(primesObjectCopy).forEach((entry) => {
    console.log(weakMap.has(entry), entry);
});
