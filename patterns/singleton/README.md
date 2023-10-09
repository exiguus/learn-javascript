# Singleton Pattern

## Intent

Ensure a class only has one instance, and provide a global point of access to it.

## Motivation

It's important for some classes to have exactly one instance. Although there can be many printers in a system, there should be only one printer spooler. There should be only one file system and one window manager. A single Logger instance that handles all your application logging. A Database Connection Pool. A Configuration Manager for your application. A AuthManager to handle user sessions and authentication state.

How do we ensure that a class has only one instance and that the instance is easily accessible? A global variable makes an object accessible, but it doesn't keep you from instantiating multiple objects.

A better solution is to make the class itself responsible for keeping track of its sole instance. The class can ensure that no other instance can be created (by intercepting requests to create new objects), and it can provide a way to access the instance. This is the Singleton pattern.

## Applicability

Use the Singleton pattern when:

* there must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
* when the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.

## Structure

```txt
Singleton
| static instance: Singleton
| SingletonOperation()
| GetSingletonData()
| static uniqueInstance: Singleton
| singletonData

return uniqueInstance
```

## Participants

* **Singleton**
  * defines an Instance operation that lets clients access its unique instance. Instance is a class operation.
  * may be responsible for creating its own unique instance.

## Collaborations

* Clients access a Singleton instance solely through Singleton's Instance operation.

## Consequences

The Singleton pattern has several benefits:

* Controlled access to sole instance.
* Reduced name space.
* Permits refinement of operations and representation.
* Permits a variable number of instances.
* More flexible than class operations.

The Singleton pattern also has drawbacks:

* Violates Single Responsibility Principle.
* May be difficult to unit test the client code of this pattern.
* May be difficult to subclass the Singleton class.
* Requires using a well-known name to access the singleton instance.
* The singleton object is tightly coupled to its clients.

## Related Patterns

* Abstract Factory
* Builder
* Prototype

## Example in Javascipt

```javascript
class Singelton {
  constructor() {
    if (!Singelton.instance) {
      Singelton.instance = this;
    }
    return Singelton.instance;
  }
}
```
