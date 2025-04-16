/* TypeScript all data types are:
    Primitive types: number, string, boolean, null, undefined, symbol, bigint
    Object types: object, array, tuple, enum, any, void, never
    Function types: function, constructor
    Special types: unknown, this, globalThis, bigInt, JSON
    Special types: unique symbol, intrinsic, module, namespace, global, ambient, module augmentation
    Special types: type assertion, type predicate, type guard, type alias, type intersection, type union, type literal, type inference, type casting
    
*/

// Primitive types : string, number, boolean, null, undefined, symbol, bigint
let  myNamer:string = "John Doe"; // string
let myAge:number = 30; // number
let myIsMarried:boolean = false; // boolean
let myHeight:null = null; // null
let myWeight:undefined = undefined; // undefined
let mySymbol:symbol = Symbol("mySymbol"); // symbol
let myBigInt:bigint = BigInt(1234567890123456789012345678901234567890); // bigint


//    Object types: object, array, tuple, enum, any, void, never
let myObject:object = { name: "John Doe", age: 30 }; // object
let myAny:any = "John Doe"; // any -> any is a type that can hold any value. It is the most flexible type in TypeScript, but it is also the least type-safe. You can assign any value to a variable of type any, and you can access properties and methods on it without any type checking.

let myVoid:void = undefined; // void
let myVoid1:void = void 0; // void

let myArray:number[] = [1, 2, 3, 4, 5]; // array
let myArray1:Array<number> = [1, 2, 3, 4, 5]; // array
let myArray2:string[] = ["John", "Doe"]; // array

//union type
let myUnion:number | string = 30; // union type -> union type is a type that can hold multiple types. It is used to create more flexible and reusable code by allowing a value to be of different types. You can use the | operator to create a union type by combining multiple types together.
let myUnion1:string | boolean = "John Doe"; // union type


let myTuple:[string, number] = ["John Doe", 30]; // tuple

enum Color {
    RED ="Red",
    GREEN = "Green",
    BLUE = "Blue"
}

let myColor:Color = Color.RED; // enum
let myColor1:Color = Color.GREEN; // enum
let myColor2:Color = Color.BLUE; // enum
let color : string = Color["RED"]; 


// let myNever:never = (() => { throw new Error("Error"); })(); // never


//Special types: unknown, this, globalThis, JSON

let myUnknown:unknown; // unknown -> unknown is a type-safe counterpart of any. It can be assigned any value, but you cannot access properties or methods on it without first asserting its type.
myUnknown = "John Doe"; // unknown
myUnknown = 30; // unknown
myUnknown = true; // unknown
myUnknown = null; // unknown
myUnknown = undefined; // unknown
myUnknown = Symbol("mySymbol"); // unknown
myUnknown = BigInt(1234567890123456789012345678901234567890); // unknown
myUnknown = { name: "John Doe", age: 30 }; // unknown
myUnknown = [1, 2, 3, 4, 5]; // unknown
myUnknown = ["John", "Doe"]; // unknown
myUnknown = [1, "John Doe"]; // unknown
myUnknown = Color.RED; // unknown
myUnknown = Color.GREEN; // unknown
myUnknown = Color.BLUE; // unknown
// myUnknown = (() => { throw new Error("Error"); })(); // unknown

// let myThis:this = this; // this -> this is a special type that refers to the current instance of a class or object. It is used to access properties and methods of the current instance.

// let myGlobalThis:globalThis = globalThis; // globalThis -> globalThis is a special type that refers to the global object in the current environment. It is used to access global properties and methods.

let myJSON:JSON = JSON; // JSON -> JSON is a special type that refers to the JSON object in JavaScript. It is used to parse and stringify JSON data.

//Special types: type assertion, type predicate, type guard, type alias, type intersection, type union, type literal, type inference, type casting

//type assertion -> type assertion is a way to tell the TypeScript compiler that you know more about the type of a value than it does. It is used to override the type checking of the compiler and to tell it to treat a value as a specific type. There are two ways to do type assertion in TypeScript: using the as keyword or using angle brackets.
// The as keyword is the preferred way of doing type assertion in TypeScript, as it is more readable and less error-prone. The angle brackets syntax is an older syntax that is still supported, but it can cause issues with JSX syntax in React.

let myName1:any = "John Doe"; // any
let myName2:string = myName1 as string; // type assertion - Using the as keyword
let myName3:string = <string>myName1; // type assertion - Using angle brackets syntax
let myName4:string = myName1; // type assertion - Using any type

//type predicate
function isString(value: unknown): value is string {
    return typeof value === "string";
}

//type guard -> type guard is a way to narrow down the type of a value based on certain conditions. It is used to check the type of a value at runtime and to ensure that it is of a specific type before accessing its properties or methods. Type guards can be used with primitive types, object types, and union types.

// There are several ways to do type guards in TypeScript: using the typeof operator, the instanceof operator, the in operator, and user-defined type guards.

//Example of type guard using the typeof operator
function printAge(age: number | string) {
    if (typeof age === "number") {
        console.log(`My age is ${age}`);
    } else {
        console.log(`My age is ${parseInt(age)}`);
    }
}

//type alias -> type alias is a way to create a new name for an existing type. It is used to create more readable and maintainable code by giving meaningful names to complex types. Type aliases can be used with primitive types, object types, array types, tuple types, enum types, and union types.
type MyString = string; // type alias
type MyNumber = number; // type alias
type MyBoolean = boolean; // type alias

let myString:MyString = "John Doe"; // type alias
let myNumber:MyNumber = 30; // type alias
let myBoolean:MyBoolean = true; // type alias


//type intersection -> type intersection is a way to combine multiple types into a single type. It is used to create more complex and reusable types by combining multiple types together. Type intersections can be used with object types, array types, tuple types, enum types, and union types.
// You can use the & operator to create a type intersection by combining multiple types together.
// The resulting type will have all the properties and methods of the combined types.

//Example of type intersection using the & operator
type Person1 = { name: string; age: number }; // object type
type Address = { street: string; city: string }; // object type
type PersonWithAddress = Person1 & Address; // type intersection

let myPersonWithAddress:PersonWithAddress = { name: "John Doe", age: 30, street: "123 Main St", city: "New York" }; // type intersection

// Example of type intersection using the & operator with union types
type StringOrNumber = string | number; // union type
type StringAndNumber = string & number; // type intersection
// let myStringAndNumber:StringAndNumber = "John Doe" as unknown as number; // type intersection

// when you use the & operator with union types, the resulting type will be a combination of all the types in the union. This means that the resulting type will have all the properties and methods of all the types in the union. However, this can lead to some unexpected behavior, as the resulting type may not be what you expect.

// type union -> type union is a way to create a new type that can hold multiple types. It is used to create more flexible and reusable code by allowing a value to be of different types. You can use the | operator to create a type union by combining multiple types together.

// The resulting type will be a combination of all the types in the union. This means that the resulting type can hold any value that is of any of the types in the union.
// However, this can lead to some unexpected behavior, as the resulting type may not be what you expect.

// Example of type union using the | operator
type StringOrNumber1 = string | number; // type union

// type literal -> type literal is a way to create a new type that can hold a specific value. It is used to create more specific and reusable code by allowing a value to be of a specific type. You can use the | operator to create a type literal by combining multiple values together.
// The resulting type will be a combination of all the values in the literal. This means that the resulting type can hold any value that is of any of the values in the literal.

//example of type literal using the | operator
type nameOrAge = "John Doe" | 30; // type literal
type myNameOrOtherName = "John Doe" | "Jane Doe"; // type literal
type ageOrNum = 30 | 40; // type literal
type NameOrAgeOrActive = "John Doe" | 30 | true; // type literal

let myStringOrNumber2:NameOrAgeOrActive = "John Doe"; // type literal
let myStringOrNumber3:NameOrAgeOrActive = 30; // type literal

//type inference -> type inference is a way for the TypeScript compiler to automatically determine the type of a value based on its value. It is used to create more readable and maintainable code by allowing the compiler to infer the type of a value without explicitly specifying it. Type inference can be used with primitive types, object types, array types, tuple types, enum types, and union types.
// The compiler will automatically infer the type of a value based on its value and context. This means that you can create variables and functions without explicitly specifying their types, and the compiler will automatically infer their types based on their values.

// This can lead to more readable and maintainable code, as you don't have to explicitly specify the types of all your variables and functions.

let myName5 = "John Doe"; // type inference -> string
let myAge2 = 30; // type inference -> number
let myIsMarried2 = false; // type inference -> boolean
let myHeight2 = null; // type inference -> null
let myWeight2 = undefined; // type inference -> undefined
let mySymbol2 = Symbol("mySymbol"); // type inference -> symbol
let myBigInt2 = BigInt(1234567890123456789012345678901234567890); // type inference -> bigint
let myObject2 = { name: "John Doe", age: 30 }; // type inference -> object


//type casting -> type casting is a way to convert a value from one type to another. It is used to create more flexible and reusable code by allowing a value to be of different types. You can use the as keyword or the angle brackets syntax to do type casting in TypeScript.
// The as keyword is the preferred way of doing type casting in TypeScript, as it is more readable and less error-prone. The angle brackets syntax is an older syntax that is still supported, but it can cause issues with JSX syntax in React.
//Example of type casting using the as keyword
let myName6:any = "John Doe"; // any
let myName7:string = myName6 as string; // type casting - Using the as keyword
let myName8:string = <string>myName6; // type casting - Using angle brackets syntax
let myName9:string = myName6; // type casting - Using any type


