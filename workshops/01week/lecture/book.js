class Book {
  constructor(title, author, year, isRead = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

class Audiobook extends Book {
  constructor(title, author) {
    super(title, author);
  }

  playAudio = () => {
    console.log(`The audio book of ${this.title} begins to play.`);
  };
}

module.exports = { Book, Audiobook };
