const {TaskManager} = require("./task");

describe("TaskManager", () => {
    let taskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    it("should create a task", () => {
        const task = taskManager.createTask(
            "Buy groceries",
            "Buy fruits and vegetables",
            "2023-11-01",
        );
        expect(task.title).toEqual("Buy groceries");
    });

    it("should complete a task", () => {
        taskManager.createTask(
            "Buy groceries",
            "Buy fruits and vegetables",
            "2023-11-01",
        );
        const completedTask = taskManager.completeTask("Buy groceries");
        expect(completedTask.isCompleted).toBe(true);
    });

    it("should not complete a non-existing task", () => {
        const completedTask = taskManager.completeTask("Non-existing task");
        expect(completedTask).toBeUndefined();
    });

    it("should view tasks", () => {
        taskManager.createTask(
            "Buy groceries",
            "Buy fruits and vegetables",
            "2023-11-01",
        );
        const tasks = taskManager.viewTasks();
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toEqual("Buy groceries");
    });
});
