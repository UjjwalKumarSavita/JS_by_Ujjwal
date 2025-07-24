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



// function sub(a, b){
//     if(b !== undefined){
//         return a -b;
//     }
//     else{
//         return function(b){
//             return a-b;
//         }
//     }

// }
// // write a single method do the same 
// console.log(sub(8)(3)); // function curring 
// console.log(sub(8, 3)); // normal subtraction




// // let arr = ["ujjwal", "savita"] // eksa to false aana chahiyee
// let arr = ["lwaaauuujjj","ujjwal"] // esak true ayegaa 2str puri present hai first me

// // write a function to "check that the each character of second string is present in first if yes return true"
// const freqMap_1 = new Map();

// for(let ch of arr[0]){
//     freqMap_1.set(ch, (freqMap_1.get(ch) || 0) + 1);
// }
// console.log(freqMap_1);

// const freqMap_2 = new Map();
// for(let ch of arr[1]){
//     freqMap_2.set(ch, (freqMap_2.get(ch) || 0) + 1);
// }
// console.log(freqMap_2);

// function fn(){
//     if(freqMap_2.size > freqMap_1.size) return false;
//     for(let [key, val] of freqMap_2){
//         if(!freqMap_1.has(key) || (freqMap_1.get(key) < val)) return false;
//     }
//     return true;
// }
// console.log(fn());




// ******************************************** REACT ***************

//WHAT IS JSX...

// WAHT IS PROP DRINGLIN :: TREE OF DOM SE EXPLAIN KARANA HAI ,,,,,,  :: BHI EXPLAIN KARNA HOGA:: CONTEXT API 

// WHAT IS CONTEXT API AND REDUX
// | Feature             | Context API                 | Redux                                  |
// | ------------------- | --------------------------- | -------------------------------------- |
// | 📦 Built-in         | ✅ Yes (React’s native API)  | ❌ No (external library)                |
// | 🔁 State type       | Local/global (limited)      | Global & fully centralized             |
// | ⚙️ Setup complexity | Simple                      | More boilerplate & setup               |
// | 🔍 Debugging        | Manual console logs         | Great tools (Redux DevTools)           |
// | ⚡ Performance       | May re-render all consumers | Fine-grained with selectors (better)   |
// | 🧩 Middleware       | ❌ Not supported             | ✅ Easily supports (e.g. `redux-thunk`) |
// | 📁 Scalability      | Small to medium projects    | Medium to large-scale apps             |





// METHODS FOR API INTEGRATION
// 1. FETCH 2. ASYNC AND await 3. AXIOS
// | Method           | Description                                   | Use Case Example                 |
// | ---------------- | --------------------------------------------- | -------------------------------- |
// | `fetch()`        | Native promise-based method in JS             | Most commonly used today         |
// | `XMLHttpRequest` | Older, callback-based way (legacy)            | Used before `fetch`, still asked |
// | `Axios`          | Promise-based HTTP client library             | Popular in React/Node projects   |
// | `jQuery.ajax()`  | jQuery's AJAX method                          | Legacy codebases                 |
// | `async/await`    | Syntax sugar over Promises (with fetch/axios) | Cleaner async code               |

//  eg of fetch ::
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// eg of async and await
// async function getPost() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// getPost();

// eg of axios
// ---> 1
// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

// ---> 2
// async function getPost() {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(res.data);
//   } catch (err) {
//     console.error(err);
//   }
// }


// fetch vs async/await vs axios
// | Feature                 | `fetch`                                  | `async/await`                   | `axios`                        |
// | ----------------------- | --------------------------------------   | ------------------------------- | ------------------------------ |
// | **Type**                | API method                               | JavaScript syntax (not API)     | External HTTP client (library) |
// | **Built-in?**           | ✅ Yes                                   | ✅ Yes                           | ❌ No, need to install          |
// | **Promise-based?**      | ✅ Yes                                   | ✳️ Yes, used to handle Promises | ✅ Yes                          |
// | **Readable?**           | 👎 Less readable with `.then()` chains   | ✅ Cleaner with async/await      | ✅ Very readable + simple       |
// | **Error Handling**      | Must manually check `res.ok`             | Easier with `try/catch`         | Automatically handles errors   |
// | **Response Parsing**    | Manually `res.json()`                     | Same as fetch                   | Auto-parses JSON               |
// | **Interceptors?**       | ❌ No                                    | ❌ No                            | ✅ Yes (e.g., JWT tokens)       |
// | **Timeout support**     | ❌ No                                    | ❌ No                            | ✅ Built-in timeout support     |
// | **Old Browser Support** | ⚠️ Limited (no IE)                       | ✅ (with transpiling)            | ✅ More reliable                |


// ---> follow up questions : is fetch can handle exception by itself
// answer == 
// Only network failures (like no internet) cause fetch to reject.

// If the server responds with a 404 or 500, the fetch call still resolves, and you need to manually check res.ok.
// ********************************************* HERE WE ARE CHEKCING THAT OUR RESPONSE IS OK OR NOT
// async function getData() {
//   try {
//     const response = await fetch('https://api.example.com/data');

//     // You MUST check response.ok manually
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error.message);
//   }
// }
// ******************************************* IF WE NOT CHECK Response.OK 
// const res = await fetch('https://api.example.com/notfound');
// const data = await res.json();  // ❌ still runs even on 404



//DOES AXIOS HAVE INBUILT FOR THE REQUEST CANCELLATION

// axios ✅ supports request cancellation out of the box using either:
// 🔹 AbortController (modern way, built-in from Axios v1.2+)
// 🔹 CancelToken (older method — now deprecated)

// import axios from 'axios';
// const controller = new AbortController(); // Create controller
// const signal = controller.signal;
// async function fetchData() {
//   try {
//     const response = await axios.get('https://api.example.com/data', {
//       signal, // Pass signal to axios
//     });
//     console.log(response.data);
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       console.log('Request was canceled:', error.message);
//     } else {
//       console.error('Other error:', error.message);
//     }
//   }
// }
// // Cancel the request after 1 second
// setTimeout(() => {
//   controller.abort(); // Cancel the request
// }, 1000);
// fetchData();



// DOES AXIOS TRANSFROM **(DATA INTO JSON)** OR **(JSON INTO DATA)** OR BOTH

// Axios transforms both:

// Request: JS object ➝ JSON

// Response: JSON ➝ JS object

// 1. Request Data (when sending)
// Converts JavaScript objects to JSON when sending data in POST, PUT, PATCH.

// axios.post('/api', { name: 'Jadu' });
// // Axios transforms { name: 'Jadu' } → JSON string internally
// ✅ JS Object ➝ JSON (by default)

// 2. Response Data (when receiving)
// Automatically parses JSON response to JavaScript objects.

// const res = await axios.get('/api/data');
// console.log(res.data);
// // Already parsed as a JS object
// ✅ JSON ➝ JS Object (by default)




// TO CONVERT THE  OBJECT INTO STRING WHAT WE USE
//  WE USE JSON.stringify(OBJ) --> THAT CONVERT OBJECT INTO THE STRING
// | Use Case                            | Why use `JSON.stringify()`                           |
// | ----------------------------------- | ---------------------------------------------------- |
// | 🔄 Sending data via **fetch/Axios** | Converts JS object into a JSON string before sending |
// | 💾 Storing in **localStorage**      | localStorage only stores strings                     |
// | 📄 Logging / debugging              | Helps print full structure in readable string form   |

// | Action                  | Method                | 
// | ----------------------- | --------------------- |
// | JS Object ➝ JSON String | `JSON.stringify(obj)` |
// | JSON String ➝ JS Object | `JSON.parse(string)`  |




// PACKAGE.JSON VS PACKAGE-LOCK.JSON

// package.json describes what we want,
// package-lock.json describes what we actually have installed.

// | Feature                     | `package.json`        | `package-lock.json`                |
// | --------------------------- | --------------------- | ---------------------------------- |
// | Created by                  | Developer / npm       | npm (automatically)                |
// | Purpose                     | Lists dependencies    | Locks exact dependency tree        |
// | Editable manually?          | ✅ Yes                 | ⚠️ Not recommended                 |
// | Tracks nested dependencies? | ❌ No                  | ✅ Yes                              |
// | Version range?              | ✅ Yes (like `^`, `~`) | ❌ No (exact version only)          |
// | Required for install?       | ✅ Yes                 | 🚫 Not mandatory but highly useful |





// RECONCILLATION ALGORITHMS
// React Reconciliation Algorithm — Explained Simply
// Reconciliation is the process React uses to update the DOM efficiently when your application's state or props change.

// When a React component updates (due to setState, props, or context), React:
// Builds a new virtual DOM tree
// Compares it with the previous virtual DOM tree
// Applies the minimum number of operations to the real DOM
// This **diffing** + **updating** is called the Reconciliation Algorithm.(**** IMP ****)




// What is CORS?
// CORS stands for Cross-Origin Resource Sharing.

// It’s a security feature built into browsers that controls how resources are shared between different origins (domains, ports, protocols).

// How CORS Works

// Browser sends a request with an Origin header:
// Origin: http://your-frontend.com

// Server responds with a CORS header:
// Access-Control-Allow-Origin: http://your-frontend.com

// ✅ If the header matches the request's origin → browser allows it.
// ❌ If not → browser blocks the response, even if the server sent data.




// What is key in React?
// A key is a special prop used to help React identify which items in a list of elements have changed, been added, or removed.

// 🧠 Why is key important?
// React uses a process called Reconciliation to re-render components.
// To do it efficiently, it needs a unique identifier (the key) for each item.

// Without a proper key, React may:

// Re-render unnecessarily

// Lose component state between renders

// Show unexpected behavior (like input fields resetting)

