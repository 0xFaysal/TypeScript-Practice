class Employee {
    constructor(public name:string, private age:number) {
    }
   public getAge() : number{
        return this.age;
    }
   public setAge(newAge: number) : void {
        this.age = newAge;
    }
}
const emp1 = new Employee("John", 30);
const emp2 = new Employee("Jane", 25);
console.log(emp1.name); // John
console.log(emp2.getAge()); // 25
console.log(emp1); // Employee { name: 'John', age: 30 }
console.log(emp2); // Employee { name: 'Jane', age: 25 }
console.log(emp1 instanceof Employee); // true
console.log(emp2 instanceof Employee); // true
