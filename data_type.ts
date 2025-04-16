/* TypeScript all data types are:
    Primitive types: number, string, boolean, null, undefined, symbol, bigint
    Object types: object, array, tuple, enum, any, void, never
    Function types: function, constructor
    Special types: unknown, this, globalThis, bigInt, JSON
    Special types: unique symbol, intrinsic, module, namespace, global, ambient, module augmentation
    Special types: type assertion, type predicate, type guard, type alias, type intersection, type union, type literal, type inference, type casting
    Special types: type parameter, type parameter constraint, type parameter default, type parameter inference, type parameter constraint inference, type parameter default inference, type parameter constraint default, type parameter constraint default inference, type parameter constraint default inference
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
let myAny:any = "John Doe"; // any
let myVoid:void = undefined; // void
let myVoid1:void = void 0; // void

let myArray:number[] = [1, 2, 3, 4, 5]; // array
let myArray1:Array<number> = [1, 2, 3, 4, 5]; // array
let myArray2:string[] = ["John", "Doe"]; // array


let myTuple:[string, number] = ["John Doe", 30]; // tuple
let myTuple1:[string, number, boolean] = ["John Doe", 30, false]; // tuple 2

let myNever:never = (() => { throw new Error("Error"); })(); // never


