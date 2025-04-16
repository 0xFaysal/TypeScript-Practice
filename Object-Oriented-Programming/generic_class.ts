class Box<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
    
    setValue(value: T): void {
        this.value = value;
    }
}





// Usage with different types
const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello TypeScript");

console.log(numberBox.getValue()); // 42
console.log(stringBox.getValue()); // "Hello TypeScript"

// Type safety is enforced
numberBox.setValue(100);          // OK
// numberBox.setValue("string");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'