# Factory Pattern

## Intent

The Factory Pattern provides an interface for creating objects in a super class but allows subclasses to alter the type of objects that will be created. It defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.

## Motivation

In software design, it's common to create objects based on certain conditions or parameters. However, creating objects directly in client code can make the code tightly coupled to specific classes, making it hard to adapt to changes or extend the system. The Factory Pattern solves this problem by providing an interface for object creation, allowing client code to create objects without specifying the exact class of object that will be created. This promotes loose coupling and flexibility in your code.

## Applicability

Use the Factory Pattern when:

- A class can't anticipate the class of objects it needs to create.
- A class wants to delegate the responsibility of object creation to its subclasses.
- A class wants to provide a generic interface for creating objects but allow subclasses to alter the type of objects created.

## Structure

```txt
Creator
| FactoryMethod()
| AnOperation()

ConcreteCreator
| FactoryMethod() (implements Creator's FactoryMethod)

Product
+ Operation()

ConcreteProduct
+ Operation() (implements Product's Operation)

Client
```

## Participants

- **Creator (Factory)**: Declares the factory method, which returns an object of type Product. This can also include other methods for operating on the product.
- **ConcreteCreator (ConcreteFactory)**: Implements the factory method to create a specific instance of the product.
- **Product**: Defines the interface of the objects the factory method creates.
- **ConcreteProduct**: Implements the Product interface.
- **Client**: Uses the factory to create objects and work with them through the Product interface.

## Collaborations

- The Client calls the Factory Method on a Creator, which, in turn, generates a Product.

## Consequences

The Factory Pattern has several benefits:

- It provides a way to create objects without specifying the exact class of object that will be created, which promotes loose coupling.
- It allows you to encapsulate the creation of objects.
- It supports adding new product classes without modifying existing client code.
- It promotes a consistent interface for creating objects, which can be useful in libraries and frameworks.

However, it may introduce some complexities, such as increased number of classes and abstractions, which might not be necessary for simpler cases.

## Related Patterns

- Abstract Factory: Abstract Factory provides an interface for creating families of related or dependent objects, while Factory Method focuses on creating a single object.
- Singleton: Factory methods often use the Singleton pattern to manage the creation of objects.
- Prototype: Prototype can be combined with Factory to allow creating new objects by copying an existing prototype.

## Example in JavaScript

```javascript
// Creator (Factory)
class Creator {
  factoryMethod() {
    return new Product();
  }
  
  someOperation() {
    const product = this.factoryMethod();
    product.operation();
  }
}

// ConcreteCreator (ConcreteFactory)
class ConcreteCreator extends Creator {
  factoryMethod() {
    return new ConcreteProduct();
  }
}

// Product
class Product {
  operation() {
    console.log('Product operation');
  }
}

// ConcreteProduct
class ConcreteProduct extends Product {
  operation() {
    console.log('ConcreteProduct operation');
  }
}

// Client
const client = new ConcreteCreator();
client.someOperation();
```

The Factory Pattern is a useful design pattern when you need to decouple the creation of objects from their usage. It promotes flexibility and allows you to add new types of objects without changing existing code.
