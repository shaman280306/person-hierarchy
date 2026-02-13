import React from "react";
import Person from "./models/Person";
import Student from "./models/Student";
import Teacher from "./models/Teacher";
import "./App.css";

function App() {

  const people = [

    new Person("Alex Johnson", 30),

    new Student("Emma Watson", 20, "Computer Science"),

    new Teacher("Dr. Brown", 45, "Mathematics")

  ];

  return (

    <div className="container">

      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (

        <div key={index} className="card">

          <h2>
            {person.name} ({person.type})
          </h2>

          <p><strong>Age:</strong> {person.age}</p>

          {person.course && (
            <p><strong>Course:</strong> {person.course}</p>
          )}

          {person.subject && (
            <p><strong>Subject:</strong> {person.subject}</p>
          )}

          <p className="greeting">
            {person.getGreeting()}
          </p>

        </div>

      ))}

    </div>

  );

}

export default App;
