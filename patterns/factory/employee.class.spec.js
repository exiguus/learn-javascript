const {
    FullTimeEmployee,
    PartTimeEmployee,
    TemporaryEmployee,
    ContractorEmployee,
} = require("./employee.class");

describe("Employee Classes", () => {
    it("should create a Full-Time employee", () => {
        const employee = new FullTimeEmployee("Alice");
        expect(employee.name).toBe("Alice");
        expect(employee.type).toBe("Full Time");
    });

    it("should create a Part-Time employee", () => {
        const employee = new PartTimeEmployee("Bob");
        expect(employee.name).toBe("Bob");
        expect(employee.type).toBe("Part Time");
    });

    it("should create a Temporary employee", () => {
        const employee = new TemporaryEmployee("Charlie");
        expect(employee.name).toBe("Charlie");
        expect(employee.type).toBe("Temporary");
    });

    it("should create a Contractor employee", () => {
        const employee = new ContractorEmployee("David");
        expect(employee.name).toBe("David");
        expect(employee.type).toBe("Contractor");
    });

    it("should say hello with the correct message", () => {
        const employee = new FullTimeEmployee("Eve");
        const sayHelloSpy = jest.spyOn(console, "log");

        employee.sayHello();
        expect(sayHelloSpy).toHaveBeenCalledWith(
            "Hello, I'm a Full Time employee named Eve",
        );
    });
});
