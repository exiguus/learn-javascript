const {DatabaseConnection, UserFactory} = require("./database.singleton.class");

describe("DatabaseConnection", () => {
    it("should be a singleton", () => {
        const dbConnection1 = DatabaseConnection.getInstance();
        const dbConnection2 = DatabaseConnection._testGetInstance(); // Access the instance for testing

        expect(dbConnection1).toBe(dbConnection2);
    });

    it("should connect and disconnect", () => {
        const dbConnection = DatabaseConnection.getInstance();
        const connectSpy = jest.spyOn(console, "log");
        dbConnection.connect();
        dbConnection.disconnect();

        expect(connectSpy).toHaveBeenCalledWith(
            "Already connected to the database.",
        );
        expect(connectSpy).toHaveBeenCalledWith(
            "Disconnecting from the database...",
        );
    });
});

describe("UserFactory", () => {
    it("should create users with sayHello method", () => {
        const userFactory = new UserFactory();
        const user = userFactory.create("Alice");
        const sayHelloSpy = jest.spyOn(console, "log");

        user.sayHello();
        expect(sayHelloSpy).toHaveBeenCalledWith("Hello, I'm Alice");
    });
});
