const createEmployee = require("./employee");

describe("Employee Factory", () => {
    it("should create a Full-Time employee", () => {
        const employee = createEmployee("Alice", "FullTime");
        expect(employee.name).toBe("Alice");
        expect(employee.type).toBe("Full Time");
    });

    it("should create a Part-Time employee", () => {
        const employee = createEmployee("Bob", "PartTime");
        expect(employee.name).toBe("Bob");
        expect(employee.type).toBe("Part Time");
    });

    it("should create a Temporary employee", () => {
        const employee = createEmployee("Charlie", "Temporary");
        expect(employee.name).toBe("Charlie");
        expect(employee.type).toBe("Temporary");
    });

    it("should create a Contractor employee", () => {
        const employee = createEmployee("David", "Contractor");
        expect(employee.name).toBe("David");
        expect(employee.type).toBe("Contractor");
    });
});
