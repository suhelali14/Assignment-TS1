// 1. Declare a string variable name with the value "John" and print it.
let name: string = "John";
console.log(name);

// 2. Declare a number variable age with the value 25 and print it.
let age: number = 25;
console.log(age);

// 3. Declare an array ids with numbers 1, 2, and 3 and print it.
let ids: number[] = [1, 2, 3];
console.log(ids);

// 4. Declare an object person with keys name and age and print it.
let person = {
  name: "John",
  age: 25
};
console.log(person);

// 5. Declare a tuple coordinates with elements 10 and 20.
let coordinates: [number, number] = [10, 20];
console.log(coordinates);

// 10. Declare an array numbers containing numbers 1, 2, and 3 and print it.
let numbers: number[] = [1, 2, 3];
console.log(numbers);

// 11.Declare an array names containing strings "Alice", "Bob", and "Charlie" 
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names);

// 12. Declare an array mixed containing a mix of numbers and strings and print it.
let mixed: (number | string)[] = [1, "two", 3, "four"];
console.log(mixed);

// 13. Declare an empty array fruits and push strings "apple", "banana", and "orange"
let fruits: string[] = [];
fruits.push("apple", "banana", "orange");
console.log(fruits);

// 14. Declare an array matrix containing nested arrays representing a 2*2 matrix.
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];
console.log(matrix);

// 15. Declare array ages containing numbers Map over the array and double each age
let ages: number[] = [25, 30, 35];
let doubledAges = ages.map(age => age * 2);
console.log(doubledAges);

// 19. Declare a string variable message with the value "Hello, TypeScript" and print it.
let message: string = "Hello, TypeScript";
console.log(message);

// 20. Declare a string variable text with the value "TypeScript" and trim the whitespace.
console.log(text.trim());

// 21. Declare a string variable phrase and replace "awesome" with "amazing".
let phrase: string = "TypeScript is awesome";
console.log(phrase.replace("awesome", "amazing"));

// 22. Declare a string variable "This is a TypeScript string" and print its length.
let sentence: string = "This is a TypeScript string";
console.log(sentence.length);

// 23. Declare a string variable "typescript" and print it in uppercase.
let upperText: string = "typescript";
console.log(upperText.toUpperCase());

// 24. Define an interface Car with properties make (string) and year (number).
interface Car {
  make: string;
  year: number;
}
let myCar: Car = {
  make: "Toyota",
  year: 2020
};
console.log(myCar);

// 25. Create an object myCar of type Car with make as "Toyota" and year as 2022.
let myCar: Car = {
  make: "Toyota",
  year: 2022
};
console.log(myCar);

// 26. Define a type alias Person with properties name (string) and age (number).
type Person = {
  name: string;
  age: number;
};

// 27. Create an object user of type Person with name as "Alice" and age as 25.
let user: Person = {
  name: "Alice",
  age: 25
};
console.log(user);

// 28. Define an interface Product with optional property description (string) 
// and required property price (number).
interface Product {
  price: number;
  description?: string;
}

// 32. Declare an enum named Color with values Red, Green, and Blue.
enum Color {
  Red,
  Green,
  Blue
}
console.log(Color);

// 33. Declare an enum named Direction with string values North, South, East, and West.
enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West"
}
console.log(Direction);

// 34. Declare an enum named Days with explicit values for Monday, Tuesday, and Wednesday.
enum Days {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3
}
console.log(Days);

// 35. Declare a variable selectedColor of type Color and assign it the value Color.Green.
let selectedColor: Color = Color.Green;
console.log(selectedColor);

// 36. Declare an enum, Print the number of elements in the enum.
enum Card {
  Ace,
  Two,
  Three,
  Four
}
console.log(Object.keys(Card).length / 2); 
// Enum has both keys and values, so divide by 2 to get actual length.