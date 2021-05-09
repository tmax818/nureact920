class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const student1 = new Student("Larry", "ldog@gmail.com", "Georgia")
const student2 = new Student("Joe", "jdog@gmail.com", "Scranton")

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(newStudent) {

    }
}

const bootcamp = new Bootcamp("React", 5)

