// Abstract Class - A class that cannot be instantiated on its own and is meant to be subclassed. It can contain abstract methods (without implementation) and concrete methods (with implementation). Abstract classes are used to define a common interface for a group of related classes, while allowing for shared functionality.
// In TypeScript, abstract classes are defined using the `abstract` keyword. Abstract methods are declared without a body and must be implemented in derived classes. Abstract classes can also have concrete methods with implementations that can be inherited by subclasses.

abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Abstract method
    abstract start(): void;

    // Concrete method
    public getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Concrete class extending the abstract class
class NewCar extends Vehicle {
    private isRunning: boolean;

    constructor(make: string, model: string, year: number) {
        super(make, model, year);
        this.isRunning = false;
    }

    // Implementing the abstract method
    public start(): void {
        this.isRunning = true;
        console.log(`${this.getDetails()} started.`);
    }

    public stop(): void {
        this.isRunning = false;
        console.log(`${this.getDetails()} stopped.`);
    }
}


// Object create or instance create of abstract class is not possible
// const VehicleA:Vehicle = new Vehicle("Toyota", "Camry", 2020); // Error: Cannot create an instance of an abstract class
const car: NewCar = new NewCar("Honda", "Civic", 2021);