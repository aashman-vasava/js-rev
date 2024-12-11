// JSON = JS Object Notation)
// data -interchange format.
// used for exchanging data between a server and a web app.
// Json files{key: value} or [value1, value2, value3]

// JSON.stringify() = converts a js obj to a JSON string.
// JSON.parse() = converts a json strng to a js object.
// 10H;57m

const names = ["aashman", "vishal", "hitesh", "hemant"];
const person = {
  name: "aashman",
  age: 30,
  isEmployed: false,
};

const jsonString = JSON.stringify(person);
// console.log(jsonString);

// console.log(person);
const jsonObj = JSON.parse(jsonString);
// console.log(jsonObj);

// fetching
fetch("people.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      console.log(value);
    })
  )
  .catch((error) => console.log(error));
