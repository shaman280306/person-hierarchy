class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Person";
  }

  getGreeting() {
    return `Hello, my name is ${this.name}.`;
  }

}

export default Person;
