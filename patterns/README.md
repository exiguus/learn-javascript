# Design Patterns

Quote from Christopher Alexander:

"Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."

In general a Pattern has four essential elements:

1. The **pattern name** is a handle we can use to describe a design problem, its solutions, and consequences in a word or two.
2. The **problem** describes when to apply the pattern.
3. The **solution** describes the elements that make up the design, their relationships, responsibilities, and collaborations.
4. The **consequences** are the results and trade-offs of applying the pattern.

## Overview

### Patterns

**Creational Patterns:**

1. **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access to that instance.
2. **Factory Method Pattern**: Defines an interface for creating an object but allows subclasses to alter the type of objects created.
3. **Abstract Factory Pattern**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
4. **Builder Pattern**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
5. **Prototype Pattern**: Creates new objects by copying an existing object, known as the prototype.
6. **Object Pool Pattern**: Manages a pool of objects, allowing them to be reused instead of creating new instances.

**Structural Patterns:**

7. **Adapter Pattern**: Allows the interface of an existing class to be used as another interface.
8. **Decorator Pattern**: Attaches additional responsibilities to an object dynamically.
9. **Proxy Pattern**: Provides a placeholder for another object to control access to it.
10. **Composite Pattern**: Composes objects into tree structures to represent part-whole hierarchies.
11. **Bridge Pattern**: Separates an object’s abstraction from its implementation, allowing them to vary independently.
12. **Flyweight Pattern**: Minimizes memory usage or computational expenses by sharing as much as possible with other similar objects.

**Behavioral Patterns:**

13. **Observer Pattern**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
14. **Strategy Pattern**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
15. **Command Pattern**: Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
16. **State Pattern**: Allows an object to alter its behavior when its internal state changes.
17. **Chain of Responsibility Pattern**: Passes the request along a chain of handlers, with each handler deciding either to process the request or to pass it to the next handler.
18. **Visitor Pattern**: Represents an operation to be performed on elements of an object structure.
19. **Memento Pattern**: Captures and externalizes an object's internal state, allowing the object to be restored to this state later.
20. **Template Method Pattern**: Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

**Architectural Patterns:**

21. **Model-View-Controller (MVC)**: Separates an application into three interconnected components – Model, View, and Controller.
22. **Model-View-ViewModel (MVVM)**: A variation of MVC where the ViewModel acts as an intermediary between the Model and the View.
23. **Layered Architecture**: Organizes software into multiple layers, each responsible for a specific aspect of the application.
24. **Service-Oriented Architecture (SOA)**: Designs software as a collection of loosely coupled services that communicate with each other.
25. **Event-Driven Architecture (EDA)**: Emphasizes events and event-driven programming as the foundation for decoupled software systems.

These design patterns help address common problems and challenges in software development by providing proven solutions and best practices. They are valuable tools for designing maintainable, scalable, and flexible software systems.

### Techniques

1. **Currying**: Currying is a functional programming technique that can be employed in JavaScript. It involves transforming a function that takes multiple arguments into a sequence of unary functions, allowing for partial function application and composability.

2. **Partial Application**: Partial application is closely related to currying and can be applied in JavaScript. It involves fixing a subset of a function's arguments to create a specialized function with some arguments pre-set.

3. **Memoization**: JavaScript allows for memoization, which involves caching the results of function calls to improve performance when the same inputs occur again.

4. **Function Composition**: JavaScript supports function composition, where you can combine two or more functions to create a new function, useful for creating complex operations by chaining simpler functions.

5. **Map, Filter, and Reduce**: These higher-order functions are readily available in JavaScript. `map` applies a function to each element, `filter` selects elements based on a condition, and `reduce` aggregates a list into a single value.

6. **Closures**: JavaScript closures are a fundamental concept. Closures are functions that remember their lexical scope, allowing you to encapsulate state and create private variables.

7. **Higher-Order Functions**: JavaScript supports higher-order functions, which are functions that take other functions as arguments or return them. This is essential for functional programming and creating flexible code.

8. **Lazy Evaluation**: While JavaScript isn't a lazy-evaluated language, you can employ lazy evaluation techniques with libraries like Lodash or create your own lazy evaluation mechanisms.

9. **Immutability**: JavaScript allows you to work with immutability by avoiding direct modifications of data, which can lead to more predictable and maintainable code.

Please note that JavaScript is a versatile language that supports various programming techniques and paradigms, including functional programming concepts. These techniques can enhance your code's modularity and expressiveness when used appropriately.

## Books

- Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
