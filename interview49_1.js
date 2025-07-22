// difference between PUR AND IMPURE Function IN JS

// PURE : WHICH SAME OUT FOR THE SAME INPUT
// WHILE IMPURE : CAN'T DO SO

// eg for impure function
// var a = 10;
// function ab(x){
//     a += x;
//     return a;
// }
// console.log(ab(3)) // 13
// console.log(ab(3)) // 16


// let a = 10;
// function counter(){
//     a++;
//     return a;
// }
// console.log(counter()); // 11
// console.log(counter()); // 12
// console.log(counter()); // 13
// same call but different output each time

// eg of pure
// function ab (x){
//     return x + 1;
// }
// console.log(ab(5))
// console.log(ab(5))

// --> conditions for the impure function
// | 🔍 Condition                                | 🧪 Description / Side Effect                              | 💻 Example                           |
// | ------------------------------------------- | --------------------------------------------------------- | ------------------------------------ |
// | 1. **Modifies external state**              | Changes a variable defined outside the function           | `globalVar++`                        |
// | 2. **Reads from external state**            | Output depends on variables not passed as parameters      | `return a + 1; // a is global`       |
// | 3. **Relies on non-deterministic values**   | Uses random values, time, or anything that changes        | `Math.random()`, `Date.now()`        |
// | 4. **Modifies its input parameters**        | Mutates the input arguments directly                      | `arr.push(5)` inside the function    |
// | 5. **Performs I/O operations**              | Logs to console, writes to file, accesses DOM, etc.       | `console.log()`, `document.write()`  |
// | 6. **Calls another impure function**        | Depends on a function that is itself impure               | Calls `Math.random()` or `counter()` |
// | 7. **Has different outputs for same input** | No consistency — result varies even with identical inputs | `function counter() { return ++x }`  |





// WHAT ARE asynchronous operation and which one is better to use

// first we use callback function -> then -> Promise -> then -> but now a day async and await is widely use
// "async and await are syntactic sugar over Promises. 
// They make asynchronous operations easier to read and write, avoiding the complexity of .then() chaining. 
// An async function always returns a promise, and await pauses execution until that promise settles (either resolved or rejected)."
// eg::
// async function fetchUserData() {
//   try {
//     const res = await fetch('https://api.example.com/user');
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }
// | Concept         | Explain Like This ✅                                                    |
// | --------------- | ---------------------------------------------------------------------- |
// | `async` keyword | Declares a function that always returns a Promise                      |
// | `await` keyword | Pauses execution inside an `async` function until the promise resolves |
// | Cleaner syntax  | Replaces `.then()` and `.catch()` chaining                             |
// | Error handling  | Use `try...catch` with `await` for errors                              |
// | Where used      | Mainly in API calls, DB calls, I/O operations                          |



// what are HOC in js
// HOC :: higher order function are those which take function as argument **OR** return a fuction
// eg::  Map, forEach, reduce, filter



// | Feature              | `setTimeout()`                       | `setInterval()`                            |
// | -------------------- | ------------------------------------ | ------------------------------------------ |
// | Purpose              | Runs a function **once after delay** | Runs a function **repeatedly at interval** |
// | Runs how many times? | Only once                            | Keeps running until stopped                |
// | Can be stopped with  | `clearTimeout()`                     | `clearInterval()`                          |

// eg :: setInterval
// const id = setInterval(() => {
//   console.log("I run every 1 second");
// }, 1000);

// // Optional: stop it after 5 seconds
// setTimeout(() => clearInterval(id), 5000);


// eg :: setTimeOut
// setTimeout(() => {
//   console.log("I run once after 2 seconds");
// }, 2000);


// map vs forEach --> easy
// filter vs find 
// filter is HOC and it also return new array but after the condition checking
// find :: is used to find the fist ouucrande




// // event loop
// The event loop in JavaScript acts like a task manager that handles the execution of synchronous and asynchronous code.

// Synchronous tasks run directly in the call stack.

// Asynchronous tasks (like setTimeout, Promises, fetch calls) are sent to the Web APIs.
// Once the call stack is empty, the event loop pushes:

// Microtasks (like .then() in Promises, queueMicrotask) from the microtask queue

// Then macrotasks (like setTimeout, setInterval) from the callback/task queue
// into the call stack one by one.





// arrow and normal function
// | Feature                 | 🔹 **Arrow Function**                                        | 🔸 **Normal Function**                              |
// | ----------------------- | ------------------------------------------------------------ | --------------------------------------------------- |
// | **Syntax**              | `const fn = () => {}`                                        | `function fn() {}`                                  |
// | **`this` keyword**      | **Inherits** `this` from the **surrounding scope** (lexical) | Has its **own** `this` depending on how it’s called |
// | **Arguments object**    | ❌ Not available                                              | ✅ Available (`arguments`)                           |
// | **Used as constructor** | ❌ Cannot be used with `new`                                  | ✅ Can be used with `new`                            |
// | **Hoisting**            | ❌ No hoisting                                                | ✅ Gets hoisted                                      |
// | **Readability**         | ✅ Shorter, more concise for simple functions                 | 👌 Better for complex logic or methods              |

// | Feature              | Arrow Function | Normal Function |
// | -------------------- | -------------- | --------------- |
// | Can use `new`        | ❌ No           | ✅ Yes           |
// | Acts as constructor? | ❌ No           | ✅ Yes           |
// | Has its own `this`?  | ❌ No (lexical) | ✅ Yes           |



// var a = 100;
// {
//     var a = 2000;
// }

// let b = a;
// {
     
//     let b = 10000;
// }

// console.log(b) // 2000
// console.log(a) // 2000




// | Feature           | `export`                   | `export default`          |
// | ----------------- | -------------------------- | ------------------------- |
// | Export type       | Named export (can be many) | Default export (only one) |
// | Import name       | Must match original name   | Can be renamed freely     |
// | Number of exports | Multiple per file allowed  | Only one per file         |
// | Import syntax     | `{ }` used                 | No `{ }`, just a name     |


// session and local storage --> easy
// difference between slice and splice method in js



//DEBOUNCING AND THROTTELING

// const search = (querry)=>{
//     console.log("Searching for the  querry", querry);
// };

// search('h')
// search('he')
// search('hel')
// search('hell')
// search('hello') 

// OUTPUT::
// Searching for the  querry h
// Searching for the  querry he
// Searching for the  querry hel
// Searching for the  querry hell
// Searching for the  querry hello

// abhi kya hoga ki search ko call hamara har eak ke liye call hogaa , this is to many api calls hongi
// and out me har eak seach me jo string hai vo ayegiii

// so , HERE DEBOUNCING COMES INTO THE PICTURE

// function debounce (fn, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer); // clear the last call

//         timer = setTimeout(()=>{
//             fn(...args);
//         }, delay);
//     }
// }

// const searchWithDebounce = debounce(search, 1000);

// searchWithDebounce('he')
// searchWithDebounce('hel')
// searchWithDebounce('hell')
// searchWithDebounce('hello')
// OUTPUT::
// Searching for the querry hello

// but when user stop typing only that is the call at end
// if we call our method after such seconds interval then only api(method) call will happned

// basically hamara function call hoga each time but hum again apne again call kare jo last call
// ko clearTimeout SE HATA DETE RAAHE , AND CALL JAB HUM RUKENGE TABI RUKEGII


// BUT IN THROTELLING WE CAN'T CALL ANY FOR THE SPECIFIC AMOUNT OF TIME 
// AFTER THAT SPECIFIC TIME HI HUM CALL KARENGEEEE

//before thottle use
// const sendMessage = (querry)=>{
//     console.log('sending this message', querry);
// }

// sendMessage('hii');
// sendMessage('hello');
// sendMessage('kaise hai sir jii') // kuch se type se spam karengee ::  jo ki sare message out me ayegen

// but when se use thortelling we can send another message after the specific time interval only

// function thorttel(fn, delay){
//     let lastCall = 0;

//     return function(...args){
//         let time = Date.now();
//         if(time - lastCall < delay){
//             return ; // nothing to do for this time interval
//         }

//         lastCall = time;
//         fn(...args);
//     }
// }

// const sendingMessageWithThorttle = thorttel(sendMessage, 2 * 1000); // after two seconds

// sendingMessageWithThorttle('hi'); 
// sendingMessageWithThorttle('hello')


// debouncing :: after specific time ke bad hi call hoti hai
// throtteling :: esame first call hogi then wait karenge for the sepcific time ke liye





// // case 1::
// a = 10;
// console.log(a);// 10 ayegga but this is bad


// case2::
// "use strict"; // :: "use strict" is a directive (not a statement) that tells JavaScript to run in strict mode — a way to write more secure, error-checked, and optimized code.

// b = 10;
// console.log(b) // refrence error

// note:: agar hum eak bhi bar pahel same type se kare chuke hoge tehn hamrea use strict kaam nahi karegaa







// | Method      | Action         | Position  | Returns      | Mutates Array |
// | ----------- | -------------- | --------- | ------------ | ------------- |
// | `push()`    | Add element(s) | End       | New length   | ✅ Yes         |
// | `unshift()` | Add element(s) | Beginning | New length   | ✅ Yes         |
// | `shift()`   | Remove element | Beginning | Removed item | ✅ Yes         |



// async and differ

// Timeline of Execution
// 🔸 async:**************
// step 1 : HTML parsing starts

// step 2 :  Script fetched asynchronously

// step 3 : HTML parsing pauses when script is ready

// step 4 : Script executes

// step 5 : HTML parsing resumes

// eg::
// <!-- Executes immediately when ready, order not guaranteed -->
// <script src="analytics.js" async></script>

// 🔸 defer:*************
// step 1 : HTML parsing starts

// step 2 : Script fetched asynchronously (in background)

// step 3 : HTML finishes parsing

// step 4 : Scripts execute in order after parsing completes

// eg::
// <!-- Executes in order, after DOM is fully loaded -->
// <script src="jquery.js" defer></script>
// <script src="app.js" defer></script>




// different types of loop :: for, while, do while, for of, for in
// | Feature              | `for...in`                  | `for...of`                        |
// | -------------------- | --------------------------- | --------------------------------- |
// | Works on             | Objects, Arrays (keys)      | Iterables (arrays, strings, etc.) |
// | Returns              | Keys / Indexes (as strings) | Actual values                     |
// | Includes custom keys | ✅ Yes                       | ❌ No                              |
// | Includes inherited   | ✅ Yes                       | ❌ No                              |
// | Use case             | When you need keys          | When you need values              |




// Spread Operator (...)************************************************
// Used to expand elements of an array or object.

// ✅ Common Use Cases:
// Copy arrays/objects

// Combine arrays/objects

// Pass elements as function arguments


// 🔸 Rest Operator (...)*********************************************
// Used to gather remaining items into an array or object.

// ✅ Common Use Cases:
// Collect function arguments

// Destructuring arrays or objects


// | Feature          | Spread (`...`)   | Rest (`...`)                 |
// | ---------------- | ---------------- | ---------------------------- |
// | Purpose          | Expands elements | Collects elements            |
// | Use in Arrays    | `[...arr]`       | `[first, ...rest]`           |
// | Use in Objects   | `{...obj}`       | `const { a, ...rest } = obj` |
// | Use in Functions | `fn(...args)`    | `function fn(...args) {}`    |



function sub(a, b){
    if(b !== undefined){
        return a -b;
    }
    else{
        return function(b){
            return a-b;
        }
    }

}
// write a single method do the same 
console.log(sub(8)(3)); // function curring 
console.log(sub(8, 3)); // normal subtraction
