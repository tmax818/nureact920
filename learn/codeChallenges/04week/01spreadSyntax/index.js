/* Challenge 1 - spread the two arrays below to create a new array 'philosophers' */
const ancientGreekPhilosophers = ["Hypatia", "Socrates", "Zeno"];
const modernPhilosophers = ["Allan Gibbard", "Susan Haack", "Judith Butler"];

const philosophers = [
  /* your code here */
  ...ancientGreekPhilosophers,
  ...modernPhilosophers,
];
console.log(philosophers);

/* Challenge 2 - spread the array below to create a new array 'newStudents' that includes the given studentToAdd object */
const STUDENTS = [{ name: "Rocky" }, { name: "Celine" }, { name: "Masood" }];
const studentToAdd = { name: "Krystal" };

const newStudents = [
  /* your code here */
  ...STUDENTS,
  studentToAdd,
];
console.log(newStudents);

/* Challenge 3 - spread the object below to create a new object that updates the students property with the newStudents array that you created in Challenge 2 */
const reactCourse = {
  durationInWeeks: 5,
  name: "React",
  students: STUDENTS,
};

const reactCourseUpdated = {
  /* your code here */
  ...reactCourse,
  students: newStudents,
};
console.log(reactCourseUpdated);
