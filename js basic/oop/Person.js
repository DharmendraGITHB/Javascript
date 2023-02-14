class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Alice', 25);
person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
