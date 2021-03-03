class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const student1 = new Student("Jorge", "javaJorge@gmail.com", "Las Vegas")
const student2 = new Student("Kaleigh", "kaleigh@gmail.com", "Riverside")


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(newStudent) {
        const testArray = this.students.filter(student => student.email === newStudent.email)
        console.log(testArray)
        if (testArray.length > 0) {
            console.log("sorry, already have that one")
        } else {
            this.students.push(newStudent)

        }
    }
}

const bootcamp = new Bootcamp("React", 5)