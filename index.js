const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "J.K.",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

const authorsAndBooks = books.map((book) => {         //maps the book to author
  const author = `${book.authorFirst} ${book.authorLast}`;      //lists author name
  return `${author} wrote ${book.name} in ${book.publishDate}`;   //prints out
});
console.log (authorsAndBooks);

//Sort books from oldest to most recent

const dateSort = books.sort((a,b) => a.publishDate - b.publishDate); 
console.log(dateSort);

//sort books alphabetically

/* const alphabetSort = books.sort((a,b) => a.name.localeCompare(b.name));      //sorts comparing the name (locally)
console.log (alphabetSort); */

//Find who wrote War and Peace

const authorWritten = "War and Peace" //determine which book
const findAuthor = books.find((author) => author.name === authorWritten);   //find the author that wrote the book

if (authorWritten) {
const authorOfBook = `${findAuthor.authorFirst} ${findAuthor.authorLast}`;  //prints the author name
console.log(`The author of War and Peace is ${authorOfBook}`);
}
else {
  console.log("There is no such book") //if no book exists
}

//how many books were written before 1900?

const bookDate = books.filter((book) => book.publishDate < 1900); 
const countBookDate = bookDate.length;
console.log (`# of books written beofre 1900: ${countBookDate}`);

//was there at least one book published within the last 100 years?

const currrentYear = new Date().getFullYear();
const last100Years = currrentYear - 100;

const books100 = books.some((book) => book.publishDate >= last100Years && book.publishDate <= currrentYear);

if (books100) {
  console.log ("Yes, ther is books published within da last 100 years");
}
else {
  console.log ("Nah, all da books published here are older than 100 yrs");
}

//was every book published within the last 100 years?

const last100 = books.every((book) => book.publishDate >= last100Years && book.publishDate <= currrentYear);

if (last100) {
  console.log ("Yes sir, all da book within the last 100 years of published");
}
else {
  console.log ("No way, ofc thers books published more than 100 yrs ago here");
}

//print a list of books that "includes" the genre historical

const history = books.filter((type) => type.genre.includes("historical"));
if (history.length > 0) {
const historyTitles = history.map(book => book.name);
console.log(`Books that have the 'historical' genre: ${historyTitles}`);
}

else {
  console.log("Thers no book that has 'historical' genre")
}