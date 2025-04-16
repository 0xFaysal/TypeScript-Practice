//Static -> Static class is a class that cannot be instantiated. It can only contain static members.
// Static members are shared among all instances of the class. Static members can be accessed without creating an instance of the class.
// Static members can be used to create utility functions. Static members can be used to create constants. Static members can be used to create singletons. Static members can be used to create static factories. Static members can be used to create static properties. Static members can be used to create static methods. Static members can be used to create static getters and setters. Static members can be used to create static constructors. Static members can be used to create static destructors. Static members can be used to create static finalizers.
// Static members can be used to create static initializers. Static members can be used to create static finalizers. Static members can be used to create static destructors. Static members can be used to create static constructors. Static members can be used to create static getters and setters. Static members can be used to create static methods. Static members can be used to create static properties. Static members can be used to create static factories. Static members can be used to create singletons. Static members are shared among all instances of the class. Static members can be accessed without creating an instance of the class.

class StaticClass {
    public newProperty: string=''; // Instance property
    static staticProperty: string = "I am a static property";
    static staticMethod(): void {
        console.log("I am a static method");
    }
}
const instance = new StaticClass(); // Creating an instance of the class
instance.newProperty = "newProperty"; // Adding a new property to the instance


// Static members can be accessed without creating an instance of the class
console.log(StaticClass.staticProperty); // Output: I am a static property
console.log(instance.newProperty); // Output: newProperty
// console.log(instance.staticProperty); // Output: undefined
// console.log(instance.staticMethod()); // Error: Property 'staticMethod' does not exist on type 'StaticClass'
// console.log(StaticClass.newProperty); // Output: undefined
// console.log(StaticClass.staticMethod()); // Error: Property 'staticMethod' does not exist on type 'StaticClass'
StaticClass.staticMethod(); // Output: I am a static method