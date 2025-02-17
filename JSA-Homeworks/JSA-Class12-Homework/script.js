class Academy {
    constructor(name, students = [], subjects = [], startingDate, endDate) {
      this.name = name;
      this.students = students;
      this.subjects = subjects;
      this.startingDate = startingDate;
      this.endDate = endDate;
    }
  
    numberOfClasses() {
      return this.subjects.length * 10;
    }
  
    printStudents() {
      console.log("Students:", this.students.map(s => `${s.firstName} ${s.lastName}`));
    }
  
    printSubjects() {
      console.log("Subjects:", this.subjects.map(s => s.title));
    }
  }
  
  class Subject {
    constructor(title, isElective, academy) {
      this.title = title;
      this.numberOfClasses = 10;
      this.isElective = isElective;
      this.academy = academy;
      this.students = [];
    }
  
    overrideClasses(number) {
      if (number >= 3) {
        this.numberOfClasses = number;
      } else {
        console.log("Error: Number of classes cannot be less than 3.");
      }
    }
  }
  
  class Student {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.completedSubjects = [];
      this.academy = null;
      this.currentSubject = null;
    }
  
    startAcademy(academy) {
      if (this.academy) {
        console.log(`${this.firstName} is already enrolled in ${this.academy.name}.`);
        return;
      }
  
      this.academy = academy;
  
      if (!academy.students.includes(this)) {
        academy.students.push(this);
      }
    }
  
    startSubject(subject) {
      if (!this.academy) {
        console.log("Error: Student is not enrolled in any academy.");
        return;
      }
      if (!this.academy.subjects.includes(subject)) {
        console.log("Error: Subject is not part of the student's academy.");
        return;
      }
  

      if (this.currentSubject && this.currentSubject !== subject) {
        this.completedSubjects.push(this.currentSubject);
      }
  
      this.currentSubject = subject;
  
      if (!subject.students.includes(this)) {
        subject.students.push(this);
      }
    }
  }

  const qinshiftAcademy = new Academy(
    "Qinshift",
    [],
    [],
    "15 October 2024",
    "1 November 2025"
  );
  

  const html = new Subject("HTML", true, qinshiftAcademy);
  const css = new Subject("CSS", true, qinshiftAcademy);
  const javaScript = new Subject("JavaScript", true, qinshiftAcademy);
  

  qinshiftAcademy.subjects.push(html, css, javaScript);

  const sandra = new Student("Sandra", "Simjanoska", 26);
  const angel = new Student("Angel", "Ivanovski", 27);
  

  sandra.startAcademy(qinshiftAcademy);
  angel.startAcademy(qinshiftAcademy);

  sandra.startSubject(html);
  angel.startSubject(html);

  sandra.startSubject(css);
  angel.startSubject(css);
  
  sandra.startSubject(javaScript);
  angel.startSubject(javaScript);
  
  console.log("Sandra's completed subjects:", sandra.completedSubjects.map(s => s.title));
  console.log("Angel's completed subjects:", angel.completedSubjects.map(s => s.title));

  qinshiftAcademy.printStudents();
  qinshiftAcademy.printSubjects();
  

  console.log(sandra);
  console.log(angel);
  console.log(html);
  console.log(javaScript);