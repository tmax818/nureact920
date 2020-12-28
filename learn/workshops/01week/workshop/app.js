
class Student {
  constructor(name, email, community){
    this.name = name
    this.email = email
    this.community = community
  }
}

const stud1 = new Student("Mike", "mikeman@aol.com", "Tacoma")
const stud2 = new Student("Tyler", "tdog@aol.com", "LA")


class Bootcamp {
  constructor(name, level, students = []){
    this.name = name
    this.level = level
    this.students = students
  }

  registerStudent(newStudent){
    //check if this.students array contains newStudent.email in any of the array's elements.
    const dup = this.students.find(student => student.email === newStudent.email)
    console.log(dup)
    if(dup){
      console.log("Sorry, s/he is already enrolled")
    } else {
      this.students.push(newStudent)
    }
  }
}

const bootcamp = new Bootcamp("React", 5)

// const nums = []

// bootcamp.students = [
//   {name: "mike", email: "mikeman@aol.com", community: "Tacoma"},
//   {name: "tyler", email: "tdog@aol.com", community: "LA"}
// ]

// bootcamp.registerStudent(stud1 = {name: "mike", email: "mikeman@aol.com", community: "Tacoma"})

// stud1.email === student.email