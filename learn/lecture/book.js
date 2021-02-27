class Book {
  constructor(title, author, year, isRead = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

const my_book = new Book("1984", "Orwell", 1949, "false")
console.log(my_book)
console.log(!!my_book.isRead)

class Audiobook extends Book {
  constructor(title, author) {
    super(title, author);
  }

  playAudio = () => {
    console.log(`The audio book of ${this.title} begins to play.`);
  };
}

const my_audio = new Audiobook("Harry Potter", "JK")
console.log(my_audio)
my_audio.playAudio()
// module.exports = { Book, Audiobook };
