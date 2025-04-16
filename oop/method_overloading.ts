//Method Overloading
//Method overloading is a feature in TypeScript that allows you to define multiple function signatures for the same function name.
// This can be useful when you want to provide different ways to call a function based on the types or number of arguments passed to it.
// In TypeScript, you can achieve method overloading by defining multiple function signatures followed by a single implementation of the function.
// The implementation should handle the different cases based on the arguments passed.
// Here's an example of method overloading in TypeScript:

class newPerson {
    // Method overloading
    greet(person: string): string;
    greet(person: string, age: number): string;
    greet(person: string, age?: number): string {
        if (age !== undefined) {
            return `Hello ${person}, you are ${age} years old.`;
        } else {
            return `Hello ${person}`;
        }
    }
}

const person = new newPerson();
person.greet("John",); // Output: Hello John
console.log(person.greet("Alice")); // Output: Hello Alice
console.log(person.greet("Bob", 30)); // Output: Hello Bob, you are 30 years old.
console.log(person.greet("Charlie", 25)); // Output: Hello Charlie, you are 25 years old.



// Method overloading with different types
class Calculator {
    // Method overloading
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number | string, b: number | string): number | string {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else if (typeof a === "string" && typeof b === "string") {
            return a + b;
        } else {
            throw new Error("Invalid arguments");
        }
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.add("Hello, ", "World!")); // Output: Hello, World!
console.log(calculator.add("5", "10")); // Output: 510
// console.log(calculator.add(5, "10")); // Output: Error: Invalid arguments








//Method Overriding
//Method overriding is a feature in TypeScript that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
// This allows you to customize the behavior of inherited methods in derived classes.
// In TypeScript, you can override a method by defining a method with the same name and signature in the subclass.

// Here's an example of method overriding in TypeScript:
class AnimalA {
    makeSound(): string {
        return "Some generic animal sound";
    }
}

class Cow extends AnimalA {
    makeSound(): string {
        return "Hambba!Hambba!";
    }
}

//Instance of the Cow class
const cow = new Cow();
console.log(cow.makeSound()); // Output: Hambba!Hambba!
//Instance of the Animal class
const animal = new AnimalA();
console.log(animal.makeSound()); // Output: Some generic animal sound


//Method overriding with parameters
class Shape1 {
    area(): number {
        return 0;
    }
    square(a: number,b:number): number {
        return a * b;
    }
}
class Circle extends Shape1 {
    radius: number;
    constructor(radius: number) {
        super(); // Call the constructor of the parent class
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483

interface SquareFunction {
    (a: number, b: number): number;
  }

//Method overriding with parameters and return type
class Rectangle extends Shape1 {
    width: number;
    height: number;
    // Method overloading
    originalParentSquare: (a: number, b: number) => number;
      // Then used as:The same type could be written using an interface:
    //   originalParentSquare: SquareFunction;

    constructor(width: number, height: number) {
        super(); // Call the constructor of the parent class
        this.width = width;
        this.height = height;
        this.originalParentSquare = super.square; // Store the original parent square method
    }
    area(): number {
        return super.square(this.width, this.height); // Call the square method from the parent class

    }
    square(a: number,b:number): number {
        return a * b*100;
    }

}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 500
console.log(rectangle.square(5,10)); // Output: 500



