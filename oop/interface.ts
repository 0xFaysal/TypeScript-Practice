//Interface is a contract that a class can implement
//It defines the structure of the class without providing the implementation
//It is a way to achieve abstraction in TypeScript
//Interfaces can have properties and methods
//A class can implement multiple interfaces
//Interfaces can extend other interfaces
//Interfaces can be used to define the shape of an object
//Interfaces can be used to define the shape of a function
//Interfaces can be used to define the shape of a class
//Interfaces can be used to define the shape of a module
//Interfaces can be used to define the shape of a namespace
//Interfaces can be used to define the shape of a type
//Interfaces can be used to define the shape of a union type





//Interface is a contract that a class can implement
//Interface can have properties and methods
interface Animal {
    name: string;
    age: number;
    speak(): void; // method signature
}
//Interface can be used to define the shape of a class
class Dog implements Animal {
    name: string;
    age: number;
    breed: string;

    constructor(name: string, age: number, breed: string) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    speak() {
        console.log("Woof! Woof!");
    }
}


//Interface can have properties and methods
interface Dog extends Animal {
    breed: string;
}
//Interface can extend other interfaces
interface Cat extends Animal {
    color: string;
}

//Interface can be used to define the shape of an object
const dog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    speak: function () {
        console.log("Woof! Woof!");
    },
};

//Interface can be used to define the shape of a function
interface Greet {
    (name:string): string;
}
const greet: Greet = function (name) {
    return `Hello, ${name}!`;
}

greet("John"); // Hello, John!


//Interface can be used to define the shape of a module
interface Module {
    name: string;
    version: string;
    dependencies: string[];
}
const module: Module = {
    name: "MyModule",
    version: "1.0.0",
    dependencies: ["lodash", "axios"],
};
//Interface can be used to define the shape of a namespace
interface Namespace {
    name: string;
    version: string;
    modules: Module[];
}
const namespace: Namespace = {
    name: "MyNamespace",
    version: "1.0.0",
    modules: [
        {name: "Module1", version: "1.0.0", dependencies: ["lodash"]},
        {name: "Module2", version: "1.0.0", dependencies: ["axios"]},
    ],
}

//Interface can be used to define the shape of a type
type Shape = {
    width: number;
    height: number;
};
const shape: Shape = {
    width: 100,
    height: 200,
};

//Interface can be used to define the shape of a union type
type ShapeUnion = Shape | Dog | Cat;
const shapeUnion: ShapeUnion = {
    width: 100,
    height: 200,
};


