// console.log("Hello from JavaScript");
//
// alert("Welcome to my Website!");

// let UserColor = prompt("What is your favorite color?")
//
// alert("Great " + UserColor + ", that's my favorite color too!")


// let sample = "Hello CodeUp"
//
// console.log(sample.length)
//
// console.log(sample.toLowerCase())
//
// console.log(sample += " Students")
//
// console.log(sample.replace(" Students", ` Class` ));

// let DailyRental = 3; LM = 3; BB = 5; H = 1;
//
// console.log(DailyRental * (LM + BB + H));


// const googlePay = 400; amazonPay = 380; facebookPay = 350;
//
// let googleHoursWorked = 6; amazonHoursWorked = 4; facebookHoursWorked = 10;
//
// console.log((googlePay * googleHoursWorked) + (amazonPay + amazonHoursWorked) + (facebookPay * facebookHoursWorked));

// let username = 'codeup';
// let password = 'notastrongpassword';
//
// // Condition 1: The password must be at least 5 characters
// let isPasswordValid = password.length >= 5;
//
// // Condition 2: The password must not include the username
// let doesPasswordContainUsername = !password.includes(username);
//
// // Condition 3: The username must be no more than 20 characters
// let isUsernameValid = username.length <= 20;
//
// // Condition 4: Neither the username nor password can start or end with whitespace
// let isUsernameTrimmed = username.trim() === username;
// let isPasswordTrimmed = password.trim() === password;
//
// // Printing the boolean values for each condition
// console.log("Is the password at least 5 characters? " + isPasswordValid);
// console.log("Does the password contain the username? " + doesPasswordContainUsername);
// console.log("Is the username no more than 20 characters? " + isUsernameValid);
// console.log("Is the username trimmed? " + isUsernameTrimmed);
// console.log("Is the password trimmed? " + isPasswordTrimmed);

// const username = "Codeup";
// const password = "notastrongpassword";
//
// // the password must be at least 5 characters
// const is5Chars = password.length >= 5;
// // the password must not include the username
// const passNotContainsUsername = !password.toLowerCase().includes(username.toLowerCase());
// // the username must be no more than 20 characters
// const userLengthValid = username.length <= 20;
// //  either the username or password can start or end with whitespace
// const usernameNoWhitespace = username.trim() === username;
// const passNoWhitespace = password.trim() === password;
//
// const validPassword = is5Chars && passNotContainsUsername && passNoWhitespace;
// console.log(`The password is valid: ${validPassword}`);
// const validUsername = userLengthValid && usernameNoWhitespace;
// console.log(`The username is valid: ${validUsername}`);

// * TODO:
//     * Create a function named 'calculateTip' to calculate a tip on a bill at a
// * restaurant. The function should accept a tip percentage and the total of the
// * bill, and return the amount to tip
// *
// * Examples:
// * > calculateTip(0.20, 20) // returns 4
// * > calculateTip(0.25, 25.50) // returns 6.375
// * > calculateTip(0.15, 33.42) // returns 5.013
// */

// const calculateTip = (billFullAmount,tipPercentage) => {
//     return (billFullAmount + tipPercentage)
// };
//
// const fullAmount = calculateTip(20, 0.2)
//
// console.log(fullAmount)

// * Functions
// * #1 Make sure they are named contextually and appropriately.
// * #2 Functions declared at the top of the file.
// * #3 Do not use global variables inside of functions, pass them as arguments instead.
// * #4 Build and return; functions should not be opinonated on what you do with the result, just reurn it.
// * #5 validate and return early; make sure its running correctly early
// * #6 Functions - validate- build the result - return the result


// contextually and appropriately named
const getUserName = (id) => {
// validation
 if(!id){
    return false;
 }
 // build the result
}

 // ....

// return username
//
//
//
//
// if () {
//
// } else if () {
//
// } else {

// }

// let price = 2.7;
// let priceFixed = parseFloat(price).toFixed(2);
// console.log(priceFixed);


// // 1. Create a function that takes an array of numbers as input and returns the sum of all the elements.
// const sumArrayElements = numbers => numbers.reduce((sum, num) => sum + num, 0);
//
// const numbers = [1, 2, 3, 4, 5];
// const sum = sumArrayElements(numbers);
// console.log(sum); // Outputs: 15
//
//
// // 2. Write a function that takes a string as input and returns the reverse of the string.
// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString); // Outputs: "!dlroW ,olleH"
//
// // 3. Given an array of names, create a function that finds the longest name in the array and returns it.
// function findLongestName(names) {
//     if (names.length === 0) {
//         return null; // Return null for an empty array
//     }
//
//     let longestName = names[0]; // Initialize with the first name
//
//     for (let i = 1; i < names.length; i++) {
//         if (names[i].length > longestName.length) {
//             longestName = names[i];
//         }
//     }
//
//     return longestName;
// }
//
// const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
// const longest = findLongestName(names);
// console.log(longest); // Outputs: "Charlie"
//
//
// // 4. Create a function that takes an array of numbers as input and returns a new array with only the even numbers.
// const filterEvenNumbers = numbers => numbers.filter(number => number % 2 === 0);
//
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers); // Outputs: [2, 4, 6]
//
//
// // 5. Write a function that takes an object as input and returns an array of its keys.
// const getObjectKeys = obj => Object.keys(obj);
// const myObject = { name: "Alice", age: 30, city: "New York" };
// const keys = getObjectKeys(myObject);
// console.log(keys); // Outputs: ["name", "age", "city"]
//
//
// // 6. Given an array of objects with 'name' and 'age' properties, create a function that returns an array of names of people who are above 18 years old.
// const getNamesAbove18 = people => people.filter(person => person.age > 18).map(person => person.name);
// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 17 },
//     { name: "David", age: 19 }
// ];
//
// const namesAbove18 = getNamesAbove18(people);
// console.log(namesAbove18); // Outputs: ["Alice", "Bob", "David"]
//
// // 7. Create a function that simulates rolling a six-sided dice. The function should return a random number between 1 and 6.
// const rollDice = () => Math.floor(Math.random() * 6) + 1;
// const result = rollDice();
// console.log(result); // Outputs a random number between 1 and 6
