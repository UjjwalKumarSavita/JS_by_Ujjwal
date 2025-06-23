// DIFFERENCE BETWEEN EVENT CPATURING AND EVENT BUBBLING 

// When you click on an element in the DOM, the event travels in two main phases before reaching the target element:

// 1. Event Capturing (Trickling Down) Phase

// 2. Event Bubbling (Bubbling Up) Phase

// | When to Use Capturing                                                       | When to Use Bubbling                                         |

// | When the **parent must handle the event first** (e.g., intercepting clicks) | **Most common pattern**, like handling form or button clicks |
// | Special event delegation cases                                              | Easily delegate events to parent elements                    |

// ** TO STOP THIS WE SHOULD USE 
//  Stop Propagation Methods:
// event.stopPropagation()
// Stops further bubbling/capturing.

// event.stopImmediatePropagation()
// Stops other listeners of the same event.







// SETTIMEOUT() AND SETTIMEINTEEVAL() 
// 🕒 setTimeout() vs setInterval() in JavaScript

// Both are asynchronous timers in JavaScript used for executing code after a certain period — but they behave differently.

// 1️⃣ setTimeout()
// 👉 What it does:
// Executes a function once after a specified delay (in milliseconds).

// ✅ Syntax:
// let timeoutID = setTimeout(function, delay, arg1, arg2, ...);

// ✅ Example:
// setTimeout(() => {
//   console.log('Executed after 2 seconds');
// }, 2000);
// ✅ Explanation:
// Waits for 2 seconds (2000 ms), runs once, and then stops.

// The function is not repeated unless you explicitly call it again.

// ✅ Cancel it:

// clearTimeout(timeoutID);


// 2️⃣ setInterval()
// 👉 What it does:
// Executes a function repeatedly at every specified interval (in milliseconds).

// ✅ Syntax:

// let intervalID = setInterval(function, delay, arg1, arg2, ...);

// ✅ Example:

// setInterval(() => {
//   console.log('Executed every 2 seconds');
// }, 2000);

// ✅ Explanation:
// Runs again and again every 2 seconds forever (or until you stop it).

// ✅ Cancel it:
// clearInterval(intervalID);

// | Feature                    | `setTimeout()`                                     | `setInterval()`
// | **Purpose**                | Executes code **once after delay**                 | Executes code **repeatedly at interval**               ||
// | **Repetition**             | ❌ No — single execution                           | ✅ Yes — keeps repeating                              ||
// | **Stopping the execution** | `clearTimeout()`                                   | `clearInterval()`                                      |
// | **Return value**           | Timeout ID (number)                                | Interval ID (number)                                    |
// | **Common Use Cases**       | Delayed execution (e.g., splash screen, delay animation) | Polling, clocks, periodic tasks (e.g., live time display) |





// let name = "lilifandhdfjierhendlcouuuee";
// // write a function to bring out all the vowel from this string\
// let vowel = "aeiouAEIOU";
// function fn(){
//     let arr = name.split("");
//     let brr = new Array();
//     let i =0;
//     arr.forEach(character => {
//         if(vowel.includes(character)) brr[i++] = character;
//     });
//     console.log(brr);
// }
// fn();

//output :
// [
//   'i', 'i', 'a', 'i',
//   'e', 'e', 'o', 'u',
//   'u', 'u', 'e', 'e' 
// ]











// JSON FILE : CREATE AND METHOD USE IN IT

// What is a JSON file?
// A JSON file stores data in JavaScript Object Notation (JSON) format — it is widely used for data exchange between server and client, config files, APIs, etc.

// ** No comments allowed in JSON.
// ** No trailing commas.
// ** ✔️ Data is in key-value pairs:
// "key": "value"

// ✔️ Keys must be in double quotes "".

// ✔️ Values can be:

// String (in quotes), Number, Boolean (true/false), Object { }, Array [ ], null


// | Method                         | Description                             |
// | ------------------------------ | --------------------------------------- |
// | `JSON.stringify(obj)`          | Convert JavaScript object → JSON string |
// | `JSON.stringify(obj, null, 2)` | Convert to pretty-printed JSON string   |
// | `JSON.parse(jsonStr)`          | Convert JSON string → JavaScript object |





//INFINITE CURRING

// function fn(a){
//     return function (b){
//         if(b) return fn(a+b);
//         else return a;
//     }
// }
// console.log(fn(1)(2)(3)(4)(5)(6)())



// EXPLAIN THE TYPES OF ERROR IN JS
// | Error Type         | Cause                         | Example                          |
// | ------------------ | ----------------------------- | -------------------------------- |
// | **SyntaxError**    | Wrong syntax                  | Missing `)` or `{}`              |
// | **ReferenceError** | Using undeclared variable     | `console.log(x)` (x not defined) |
// | **TypeError**      | Invalid type operations       | `"abc".push(1)`                  |
// | **RangeError**     | Value out of range            | `new Array(-1)`                  |
// | **EvalError**      | Error in `eval()` (rare)      | `throw new EvalError()`          |
// | **URIError**       | Bad URI functions usage       | `decodeURI('%')`                 |
// | **Logical Error**  | Wrong logic (No error thrown) | Incorrect condition or math      |





// es6 features
// | Feature                 | Purpose                     |
// | ----------------------- | --------------------------- |
// | `let`/`const`           | Block scoped variables      |
// | Arrow functions         | Short function syntax       |
// | Template literals       | String interpolation        |
// | Default params          | Default function values     |
// | Destructuring           | Extract from arrays/objects |
// | Rest/Spread             | Group/spread elements       |
// | Classes                 | OOP support                 |
// | Modules (import/export) | Code modularization         |
// | Promises                | Async handling              |
// | For-of loop             | Easy iteration              |
// | Map/Set                 | New data structures         |
// | Symbol                  | Unique identifiers          |

// | **Version**       | **Year** | **New Features**                                                  |   |      |
// | ----------------- | -------- | ----------------------------------------------------------------- | - | ---- |
// | **ES7**           | 2016     | `Array.prototype.includes()`, `Exponentiation Operator (**)`      |   |      |
// | **ES8**           | 2017     | `async/await`, `Object.entries()`, `Object.values()`              |   |      |
// | **ES9**           | 2018     | `Rest/Spread for objects`, `Promise.finally()`                    |   |      |
// | **ES10**          | 2019     | `flat()`, `flatMap()`, `Object.fromEntries()`, `trimStart()`      |   |      |
// | **ES11**          | 2020     | `BigInt`, `Nullish Coalescing (??)`, `Optional Chaining (?.)`     |   |      |
// | **ES12**          | 2021     | `String.replaceAll()`, Logical assignment operators (`&&=`, \`    |   | =\`) |
// | **ES13**          | 2022     | `at()` method for arrays, top-level `await`                       |   |      |
// | **ES14**          | 2023     | New symbols, Array find methods (`findLast()`, `findLastIndex()`) |   |      |
// | **ES15 / ES2024** | 2024     | Improvements to async contexts, Map/Set methods, etc.             |   |      |






// what is STRCIT MODE IN JS
// What is "use strict" in JavaScript?
// "use strict" is a directive (not a statement) that tells the JavaScript engine to run your code in Strict Mode.
// | **Use Case**                           | **Why Strict Mode Helps**                             |
// | -------------------------------------- | ----------------------------------------------------- |
// | **Developing large applications**      | Prevents accidental global variables and tricky bugs. |
// | **Working with third-party libraries** | Avoids name conflicts.                                |
// | **Writing clean, maintainable code**   | Enforces better coding practices.                     |
// | **Using new ECMAScript versions**      | Ensures code behaves the same in modern JS engines.   |




// | Feature      | LocalStorage            | SessionStorage                 |
// | ------------ | ----------------------- | ------------------------------ |
// | **Lifespan** | Forever (until cleared) | Only till browser/tab closes   |
// | **Scope**    | Across all tabs/windows | Only in the current tab/window |
// | **Capacity** | \~5-10 MB               | \~5 MB                         |
