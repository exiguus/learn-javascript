"use strict";

class Task {
    constructor(title, description, dueDate, isCompleted) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    createTask(title, description, dueDate) {
        const task = new Task(title, description, dueDate, false);
        this.tasks.push(task);
        return task;
    }

    completeTask(title) {
        const task = this.tasks.find((t) => t.title === title);
        if (task) {
            task.isCompleted = true;
        }
        return task;
    }

    getTask(title) {
        return this.tasks.find((t) => t.title === title);
    }

    viewTasks() {
        return this.tasks;
    }
}

const taskManager = new TaskManager();

taskManager.createTask(
    "Buy groceries",
    "Buy fruits and vegetables",
    "2023-11-01",
);
taskManager.createTask("Read a book", "Read Clean Code book", "2023-11-02");
taskManager.createTask(
    "Pay bills",
    "Pay electricity and water bills",
    "2023-11-03",
);

console.log(taskManager.viewTasks());

taskManager.completeTask("Buy groceries");
console.log(taskManager.getTask("Buy groceries"));

taskManager.completeTask("Read a book");
console.log(taskManager.getTask("Read a book"));

console.log(taskManager.viewTasks());

module.exports = {Task, TaskManager};
