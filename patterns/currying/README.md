# Currying

"Currying" is a functional programming technique rather than a design pattern. Currying is a technique used in functional programming to transform a function that takes multiple arguments into a sequence of functions that take a single argument each. This allows you to partially apply a function and create new functions based on it.

## Intent

The intent of currying is to transform a function that takes multiple arguments into a series of functions, each taking one argument. This enables partial application of the function and provides flexibility in creating specialized functions.

## Motivation

In functional programming, it's common to work with functions that take multiple arguments. Currying allows you to break down such functions into a series of unary (single-argument) functions, making them more composable and flexible. This technique is particularly useful for creating reusable and specialized functions.

## Applicability

Use currying when:

- You want to transform functions that take multiple arguments into a sequence of unary functions.
- You need to partially apply a function, creating specialized versions with fixed arguments.
- You want to create reusable, composable functions for functional programming.

## Structure

There's no specific structure for currying since it's a functional programming technique rather than a design pattern. It involves transforming functions, and it can be applied in various programming languages.

## Example in JavaScript

```javascript
// Currying a binary function
function add(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = add(5); // Partial application
console.log(add5(3)); // Outputs 8

// Currying with arrow functions
const multiply = (x) => (y) => x * y;

const double = multiply(2); // Partial application
console.log(double(5)); // Outputs 10
```

In this example, we demonstrate currying in JavaScript. The `add` function takes two arguments and is curried to create a unary function. Similarly, the `multiply` function is defined using arrow functions for currying.

Currying is a powerful technique in functional programming that promotes code reusability and composability. It allows you to create specialized functions by partially applying a curried function, making your code more flexible and expressive.
