// const fruits = ["orange", "strawberry", "kiwi", "tomato", "banana", "blueberry"];
//
// const firstFruit = fruits[0];
// const nmrOfFruits = fruits.length;
//
// for(let i = 0; i , fruits.length; i++) {
//     const fruit = fruits[i];
//     if (fruit.includes("berry")){
//         console.log(fruit);
//     }
//
// }
//
//
// /*for.... of loop*/
// for(let fruit of fruits){
//     if(fruit.includes("berry")) {
//         console.log(fruit);
//     }
// }
//
// /*forEach method*/
//
// fruits.forEach((item,index,array)=>{
//
// });
//
//
// // IIFE (Immediately Invoke Function Expression)
//
// (()=>{
//     //Start HERE
// } )();
//
// // Spread operators combine arrays with (...)
// // Define functions at the top of your document
//
//
// (function(){
// })();



    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // const names = ["Mark", "Ivania", "Arriana", "James"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // const nmrOfNames = names.length
    // console.log(names)


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    //Bracket notation []

    // console.log(name[0],name[1],name[2],name[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    const names = ["Mark", "Ivania", "Arriana", "James"];

    for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    }




        /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
// names.forEach => anonymous function.  (element, index, array)
        names.forEach((name, index, array) => {
            if (name.includes("Mark")) {
                console.log(names);

            }
        });

        //Much easier way
        //names.forEach(name) =>(
        //console.log(name)

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
const firstName = names[0];
console.log(firstName);

const secondName = names[1];
console.log(secondName)

const lastName = names[3];
console.log(lastName)

