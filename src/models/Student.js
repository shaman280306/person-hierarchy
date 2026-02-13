import Person from "./Person";

class Student extends Person {

  constructor(name, age, course) {
    super(name, age);
    this.course = course;
    this.type = "Student";
  }

  getGreeting() {
    return `Hi, I am ${this.name} and I study ${this.course}.`;
  }

}

export default Student;
