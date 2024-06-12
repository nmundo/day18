// Sets

const john = { name: 'John' };
const jane = { name: 'Jane' };
const mike = { name: 'Mike' };

let people = new Set();
people.add(john);
people.add(jane); 
people.add(mike);
people.add(jane); 
people.add(mike);

// let people3 = new Set([john, jane, mike, jane, mike]);
// let people4 = [john, jane, mike, jane, mike];

// let people2 = [john, jane, mike, jane, mike];
// console.log(people2);
// people.forEach((person) => {
//   console.log(person.name)
  
// });

// console.log(people);

// Maps

// Simple Map

let userRoles = new Map([
  [john, 'admin'],
  [jane, 'editor'],
  [mike, 'subscriber'],
]);

// console.log(userRoles.keys());

for (const user of userRoles.keys()) {
  // console.log(user.name);
}

for (const role of userRoles.entries()) {
  // console.log(`${role[0].name}: ${role[1]}`);
}

// Using desctructuring
for (let [user, role] of userRoles.entries()) {
  // console.log(`${user.name}: ${role}`);
}

// userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

// Map Methods

let library = new Map();

function addBook(isbn, title, author, copies) {
  library.set(isbn, { title, author, copies });
}

function getBook(isbn) {
  if (library.has(isbn)) {
    return library.get(isbn);
  } else {
    return 'Book not found';
  }
}

function updateCopies(isbn, newCopies) {
  if (library.has(isbn)) {
    let book = library.get(isbn);
    book.copies = newCopies;
    library.set(isbn, book);
  } else {
    console.log('Book not found');
  }
}

function removeBook(isbn) {
  library.delete(isbn);
}

function printLibrary() {
  console.log('Library Collection:');
  library.forEach((details, isbn) => {
    console.log(`ISBN: ${isbn}, Title: ${details.title}, Author: ${details.author}, Copies: ${details.copies}`);
  });
}

let newArr = ['blah1', 'blah2', 'blah3'];
console.log(newArr);
newArr.forEach((item) => {
  console.log(item);
});



addBook('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 5);
addBook('5678', 'To Kill a Mockingbird', 'Harper Lee', 3);
addBook('9101', '1984', 'George Orwell', 8);

// console.log(library);

// printLibrary();

// console.log(getBook('1234'));
// removeBook('1234');
// console.log(getBook('1234'));



// Objects and Methods

const phoneBook = {
  contacts: [
    {
      name: 'John Doe',
      phoneNumber: '555-555-5555',
    },
    {
      name: 'Jane Doe',
      phoneNumber: '555-555-5555'
    }
  ],
  addContact: function(name, phoneNumber) {
    this.contacts.push({ name, phoneNumber });
  },
  findContact: function(name) {
    return this.contacts.find((contact) => contact.name === name);
  },
  removeContact: function(name) {
    const index = this.contacts.findIndex((contact) => contact.name === name);
    this.contacts.splice(index, 1);
  },
  displayContact: function() {
    return this.contacts;
  }
};


// Passing Objects to Functions

const weatherData = {
  location: 'Wilmington',
  temperature: 75,
  conditions: 'Sunny'
};

function displayWeather(data) {
  console.log(`It's currently ${data.temperature} degrees and ${data.conditions} in ${data.location}`);
}

// Using desctructuring

function displayWeather2({ location, temperature, conditions }) {
  console.log(`It's currently ${temperature} degrees and ${conditions} in ${location}`);
}

// displayWeather(weatherData);
// displayWeather2(weatherData);