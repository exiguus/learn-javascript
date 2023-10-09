const Logger = require("./Logger.class");

describe("Logger Singleton", () => {
    let loggerInstance;

    beforeEach(() => {
        // Clear the instance and logs before each test
        Logger.instance = null;
        loggerInstance = new Logger();
    });

    it("should create only one instance", () => {
        const anotherInstance = new Logger();
        expect(anotherInstance).toBe(loggerInstance);
    });

    it("should log messages correctly", () => {
        const consoleLogSpy = jest.spyOn(console, "log");
        loggerInstance.log("Message 1");
        loggerInstance.log("Message 2");

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(consoleLogSpy).toHaveBeenCalledWith("Message 1");
        expect(consoleLogSpy).toHaveBeenCalledWith("Message 2");
    });

    it("should count logged messages", () => {
        const loggerInstance2 = new Logger();
        loggerInstance.log("Message 1");
        loggerInstance.log("Message 2");
        loggerInstance2.log("Message 3");

        expect(loggerInstance.logCount()).toBe(3);
    });

    it("should list logged messages", () => {
        const loggerInstance2 = new Logger();
        loggerInstance.log("Message 1");
        loggerInstance.log("Message 2");
        loggerInstance2.log("Message 3");

        const logs = loggerInstance.logList();
        expect(logs).toContain("Message 1");
        expect(logs).toContain("Message 2");
        expect(logs).toContain("Message 3");
    });
});
