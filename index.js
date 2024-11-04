/* 
Review: Array.prototype.map()
const array1 = ['vanilla', 'chocolate', 'strawberry'];
const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});
console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
Use `.map()` to iterate over the following array: */

console.log("🚀 Exercise 1: Applying Array.prototype.map() 🚀");
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const multipliedByTwo= nums.map((currentElement)=>{
return currentElement*2;
});
console.log("Multiplied By Two: ",multipliedByTwo);
console.log("🚀 Exercise 2: Array destructuring 🚀");

/* const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'
 */

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];


console.log("Modern JS:");
 
const [firstPizza,secondPizza]=pizzaToppings;
console.log("First Pizza:",firstPizza);
console.log("Second Pizza:",secondPizza);



console.log("The traditional way:");
console.log("First Pizza: ",pizzaToppings[0]);
 console.log("Second Pizza: ",pizzaToppings[0]);


 console.log("----------");


console.log("🚀 Exercise 3: Destructuring objects 🚀");

/* const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer' */


  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  

  const {make ,model} = car;
  console.log("Make: ",make);
  console.log("Model: ",model);

  console.log("----------");


console.log("🚀 Exercise 4: Applying the spread operator on arrays 🚀");
/* The spread operator (...) gives us a way to duplicate or combine arrays. 
Instead of manually copying elements from one array to another using loops,
 the spread operator allows us to directly copy the elements of one array into another.
 */


// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];


// const originalArray = [1, 2, 3];
// const referenceArray = originalArray; // referenceArray is now a reference to originalArray

// referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]


/* const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach'] */



const controversialPizzaToppings = [...pizzaToppings];
console.log("controversialPizzaToppings: ", controversialPizzaToppings);



console.log("----------");

console.log("🚀 Exercise 5: Applying the spread operator on objects 🚀");

/* const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  // Copy the properties of originalObject:
  const clonedObject = { ...originalObject };
  
  // Update the properties of clonedObject:
  clonedObject.foo = 'Goodbye';
  clonedObject.bar = 0;
  
  console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
  console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 } */

const mycar={...car};
mycar.model="q7";

console.log('Original: ', car.model);
console.log('Clone: ', mycar.model);


console.log("----------");

console.log("🚀  Exercise 6: Dynamic keys in objects 🚀");


/* Take for example, the use of selectedFruit as a dynamic key in the codeblock below:

const fruitInventory = {
  apples: 2,
  oranges: 4,
};

const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

console.log(selectedFruitCount); // 2
This technique can be extended to the creation of objects, where property names are determined dynamically:

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};
console.log(fruitInventory); // { bananas: 5 }
 */


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const userProfile1 = {};
const propertyName1 = 'age';
userProfile1[propertyName1] = 25;
console.log("userProfile: ",userProfile1);



const propertyName = 'username';
const userProfile ={[propertyName]:'Fatema'};
console.log("userProfile: ",userProfile);


console.log("----------");

console.log("🚀 Exercise 7: Import and Export 🚀");
console.log("DONE");
console.log("----------");

console.log("🚀 Exercise 8: Default parameters 🚀");

/* function addThreeNumbers(numA, numB, numC) {
    return numA + numB + numC;
  }
  
  addThreeNumbers(2);
  This will return NaN, because the value of numB and numC are both undefined. Let’s apply some defaults to the numB and numC parameters:
  
  function addThreeNumbers(numA, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  addThreeNumbers(2);
  Now this function will return the number 5. What if we also give a default to numA?
  
  function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  addThreeNumbers(2); */

  // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function sentence(noun = 'cat', adjective = 'white'){
    return console.log(`The ${noun} is ${adjective}`);
}
console.log('Default parameters: ');
sentence();
console.log('sentence(dog,black): ');
sentence('dog','black');

console.log("----------");

// Convert the following `if...else` statement in to a ternary:






console.log("🚀 Exercise 9: Ternary operator 🚀");
/* 
Consider the following example using an if...else statement:

const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'
This logic can be streamlined using a ternary:

const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes' */
let pizza = 'tasty';

console.log('if Statement Log:')

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
 

let taste = pizza==='tasty'?'yum':'yuck';
console.log('Tarnary Operator Log:')
console.log(taste);


console.log("----------");

console.log("🚀 Exercise 10: Boolean gates 🚀");

/* const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4); */

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null


// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);
console.log("----------");

console.log("🚀  Exercise 11: Optional chaining🚀 ");

/* const adventurer = {
    name: 'Alice',
  };
  
  console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')
  In this application, it's probable that the dog property might be added in later. This is where some optional chaining might prove useful.
  
  Using console.log(adventurer.dog?.name); will allow our code to run without an error:
  
  const adventurer = {
    name: 'Alice',
  };
  
  let dog = adventurer.dog?.name;
  
  console.log(dog); // undefined */


  // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat =adventurer.cat?.name; 
  
  console.log(cat);
console.log("----------");
