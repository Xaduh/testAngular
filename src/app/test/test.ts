import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
    // @first()
    // @second()
    // method() {}
}

//#region klasser & interfaces

class Animal {
  name:string;
  constructor(name:string) {
    this.name = name;
  }

  Speak() {
    console.log(`${this.name} makes a noise`)
  }
}

class Dog extends Animal {
  constructor(name:string) {
    super(name);
  }

  override Speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Elie");
d.Speak();

let helloWorld:string = "Hello World!";

interface User {
  name:string,
  id: number
}

class UserAccount {
  name: string;
  id: number;

  constructor(_name:string, _id:number) {
    this.name = _name;
    this.id = _id;
  }
}

const user: User = new UserAccount("Olle", 1);

const user1:User = {
  name: "Olle",
  id: 1
};

console.log(`${user1.name}`)
//#endregion

//#region Decorators

// // function sealed(target:any) {

// // }

// // function color(value: string) {
// //   return function (target:any) {

// //   }
// // }

// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called");
//   }
// }

// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(`second(): called. ${target.value} ${propertyKey} ${descriptor.value}`); 
//   }
// }

// // @sealed
// @reportableClassDecorator
// class BugReport {
//   type = "report";
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

// function reportableClassDecorator<T extends { new (...args:any[]): {}}>(constructor: T) {
//   return class extends constructor {
//     reportingURL = "http://www..."
//   }
// }

// const bug = new BugReport("Needs dark mode");
// console.log(bug.title);
// console.log(bug.type);

// // bug.reportingURL

//#endregion 
