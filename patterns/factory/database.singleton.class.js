"use strict";
// Singleton Factory for creating database connections
class DatabaseConnection {
    constructor() {
        this.isConnected = false;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new DatabaseConnection();
        }
        return this.instance;
    }

    connect() {
        if (!this.isConnected) {
            console.log("Connecting to the database...");
            // Simulate a database connection
            this.isConnected = true;
        } else {
            console.log("Already connected to the database.");
        }
    }

    disconnect() {
        if (this.isConnected) {
            console.log("Disconnecting from the database...");
            // Simulate disconnecting from the database
            this.isConnected = false;
        } else {
            console.log("Not connected to the database.");
        }
    }

    // For testing purposes, add a method to check if the instance exists
    static _testGetInstance() {
        return this.instance;
    }
}

// Factory for creating users
class UserFactory {
    create(name) {
        return {
            name,
            sayHello: function () {
                console.log(`Hello, I'm ${this.name}`);
            },
        };
    }
}

// Usage of Singleton Factory for database connection
const dbConnection = DatabaseConnection.getInstance();
dbConnection.connect(); // Output: Connecting to the database...
dbConnection.connect(); // Output: Already connected to the database...

// Usage of User Factory
const userFactory = new UserFactory();
const user1 = userFactory.create("Alice");
const user2 = userFactory.create("Bob");

user1.sayHello(); // Output: Hello, I'm Alice
user2.sayHello(); // Output: Hello, I'm Bob

// Attempting to create another instance of the database connection
const anotherDbConnection = DatabaseConnection.getInstance();
console.log(dbConnection === anotherDbConnection); // Output: true (both variables refer to the same instance)

module.exports = {
    DatabaseConnection,
    UserFactory,
};
