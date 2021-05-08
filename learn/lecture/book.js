class Book {
  constructor(title, author, year, isRead = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }

  showTitle() {
    console.log(`the title is ${this.title}`)
  }
}

const my_book = new Book("1984", "Orwell", 1949)
// console.log(my_book)
// console.log(!!my_book.isRead)

class Audiobook extends Book {
  constructor(title, author) {
    super(title, author);
  }

  playAudio = () => {
    console.log(`The audio book of ${this.title} begins to play.`);
  };
}

const my_audio = new Audiobook("Harry Potter", "JK")
// console.log(my_audio)
// my_audio.playAudio()
// module.exports = { Book, Audiobook };


class Person {
  constructor(name, age, hobbies = []) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet() {
    console.log(`Hi my name is ${this.name}.`)
    return `Hi my name is ${this.name}`
  }

  addHobby(hobby) {
    this.hobbies.push(hobby)
  }
}