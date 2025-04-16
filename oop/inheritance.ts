//Inheritance --> is a relationship between classes where one class (the child or subclass) inherits properties and methods from another class (the parent or superclass). This allows for code reuse and the creation of a hierarchical structure in object-oriented programming.
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. This enables code reuse, promotes a hierarchical structure, and allows for polymorphism. In TypeScript, inheritance is implemented using the `extends` keyword.


class Car{
    public name: string;
    public model: string;
    public year: number;
    public color: string;
    public mileage: number;
    public fuelType: string;
    public engineType: string;
    protected isRunning: boolean;
    protected isElectric: boolean;
    protected isHybrid: boolean;
    protected isLuxury: boolean;
    protected isAutomatic: boolean;
    private isConvertible: boolean;
    private isSUV: boolean;
    private isTruck: boolean;
    private isVan: boolean;

    constructor(name: string, model: string, year: number, color: string, mileage: number, fuelType: string, engineType: string) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.engineType = engineType;
        this.isRunning = false;
        this.isElectric = false;
        this.isHybrid = false;
        this.isLuxury = false;
        this.isAutomatic = false;
        this.isConvertible = false;
        this.isSUV = false;
        this.isTruck = false;
        this.isVan = false;
    }
    public start(): void {
        this.isRunning = true;
        console.log(`${this.name} ${this.model} started.`);
    }
    public stop(): void {
        this.isRunning = false;
        console.log(`${this.name} ${this.model} stopped.`);
    }
    public getDetails(): string {
        return `Car Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage}, Fuel Type: ${this.fuelType}, Engine Type: ${this.engineType}`;
    }
    public getIsRunning(): boolean {
        return this.isRunning;
    }
    public getIsElectric(): boolean {
        return this.isElectric;
    }
}

class SuperCar extends Car{
    public topSpeed: number;
    public horsepower: number;
    public torque: number;
    public zeroToSixty: number;
    public price: number;

    constructor(name: string, model: string, year: number, color: string, mileage: number, fuelType: string, engineType: string, topSpeed: number, horsepower: number, torque: number, zeroToSixty: number, price: number) {
        super(name, model, year, color, mileage, fuelType, engineType);
        this.topSpeed = topSpeed;
        this.horsepower = horsepower;
        this.torque = torque;
        this.zeroToSixty = zeroToSixty;
        this.price = price;
    }
    public getSuperCarDetails(): string {
        return `${this.getDetails()}, Top Speed: ${this.topSpeed} km/h, Horsepower: ${this.horsepower} hp, Torque: ${this.torque} Nm, 0-60 mph in ${this.zeroToSixty} seconds, Price: $${this.price}`;
    }
}


// Example usage
const myCar: Car = new Car("Toyota", "Camry", 2020, "Blue", 15000, "Gasoline", "V6");
myCar.start(); // Starting the car
console.log(myCar.getDetails()); // Getting car details
myCar.stop(); // Stopping the car
console.log(myCar.getIsRunning()); // Checking if the car is running
console.log(myCar.getIsElectric()); // Checking if the car is electric
const mySuperCar: SuperCar = new SuperCar("Ferrari", "488", 2021, "Red", 5000, "Gasoline", "V8", 330, 670, 760, 3.0, 250000);
mySuperCar.start(); // Starting the supercar
console.log(mySuperCar.getSuperCarDetails()); // Getting supercar details
mySuperCar.stop(); // Stopping the supercar
console.log(mySuperCar.getIsRunning()); // Checking if the supercar is running
