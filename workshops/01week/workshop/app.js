//Create two classes: Student and Bootcamp

class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(newStudent) {
    const student = this.students.filter(
      (student) => student.email === newStudent.email
    );
    if (student.length === 0) {
      this.students.push(newStudent);
      console.log(
        `Registering ${newStudent.email} to the bootcamp; ${this.name}.`
      );
    } else {
      console.log("already heard that one!!!");
    }
    return this.students;
  }
}
