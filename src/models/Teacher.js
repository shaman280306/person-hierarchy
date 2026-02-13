import Person from "./Person";

class Teacher extends Person {

  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.type = "Teacher";
  }

  getGreeting() {
    return `Good day, I am ${this.name} and I teach ${this.subject}.`;
  }

}

export default Teacher;
