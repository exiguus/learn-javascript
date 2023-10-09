const Cache = require("./Cache.class");

describe("Cache Singleton", () => {
    let cacheInstance;

    beforeEach(() => {
        // Clear the instance before each test
        Cache.instance = null;
        cacheInstance = new Cache();
    });

    it("should create only one instance", () => {
        const anotherInstance = new Cache();
        expect(anotherInstance).toBe(cacheInstance);
    });

    it("should set and get values correctly", () => {
        cacheInstance.set("key1", "value1");
        cacheInstance.set("key2", "value2");

        expect(cacheInstance.get("key1")).toBe("value1");
        expect(cacheInstance.get("key2")).toBe("value2");
    });

    it("should count the number of items in the cache", () => {
        cacheInstance.set("key1", "value1");
        cacheInstance.set("key2", "value2");

        expect(cacheInstance.count()).toBe(2);
    });

    it("should list keys in the cache", () => {
        cacheInstance.set("key1", "value1");
        cacheInstance.set("key2", "value2");

        const keys = cacheInstance.list();
        expect(keys).toContain("key1");
        expect(keys).toContain("key2");
    });

    it("should handle undefined keys gracefully", () => {
        expect(cacheInstance.get("nonexistent")).toBeUndefined();
    });

    it("should update values correctly", () => {
        cacheInstance.set("key1", "value1");
        cacheInstance.set("key1", "newvalue");

        expect(cacheInstance.get("key1")).toBe("newvalue");
    });
});
