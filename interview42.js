//waht is infinte curring
// a function takes multiple arguments in a squences of function taking each taking a single arguments
// function add(a){
//     return function fn(b){
//         if(b) return add(a +b);
//         else return a;
//     };
// } 
// console.log(add(2)(3)(4)(5)()); // this is the example of the infinite curring




// waht is promise and what are different method of this..

// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// It allows you to write clean, manageable async code instead of using deeply nested callbacks (callback hell).

// syntax :
 
// const promise = new Promise((res, rej)=>{
//     if(9 < 8) res("resolved");
//     else rej("failed");
// })

// promise
// .then(mass => console.log(mass))
// .catch(mass => console.log(mass))




//THIS IS THE EXAMPLE OF CALLBACK HELL(** PYRAMID OF DOOM**)

// Each function is nested inside the previous one.

// Code becomes increasingly indented and harder to follow.

// Error handling becomes very complex as nesting increases.

// function loginUser(userName, callback){
//     setTimeout(()=>{
//         console.log("user loged in", userName);
//         callback(userName);
//     }, 1000);
// }

// function fetchUserData(userName, callback){
//     setTimeout(()=>{
//         console.log("fetching data of ....", userName);
//         callback({ userName, email: `${userName}@example.com` });
//     },1000);
// }

// function displayDashboard(userData, callback){
//     setTimeout(()=>{
//         console.log("display data on dashboard", userData.userName);
//         callback()
//     }, 1000);
// }

// loginUser("ujjwal", function(userName){
//     fetchUserData(userName, function(userData){
//         displayDashboard(userData, function(){
//             console.log("all operation done successfully");

//         })
//     })
// })






// DIFFERENCE BETWEEN DEEP AND SHALLOW COPY
// | **Aspect**           | **Shallow Copy**                                               | **Deep Copy**                                   |
// | -------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
// | **Definition**       | Copies only the first level of the object.                     | Copies all levels (nested objects included).    |
// | **Nested Objects**   | Referenced, not cloned.                                        | Cloned recursively.                             |
// | **Memory Reference** | Inner/nested objects still share the **same memory reference** | Entirely new and independent memory references. |
// | **Performance**      | Faster                                                         | Slower due to recursion.                        |
// | **Risk**             | Mutations in nested structures affect both copies              | Safe from unintended side-effects               |


// let a= {
//     name : "ujjwal",
//     address : {
//         city : "mumbai",
//         country : "india",
//         area :{
//             local : "urban",
//         }
//     }
// }
// shallow copy{ ... , object.assign}*************

// // let newobj = {...a};
// let newobj = Object.assign({},a);

// newobj.address.city = "delhi";
// newobj.address.area.local = "rural";

// console.log(a?.address?.city);
// console.log(a.address.area.local);

//DEEP COPY ***********

// let b = JSON.parse(JSON.stringify(a));
// b.address.city ="delhi";
// console.log(a.address.city);
// console.log(b.address.city);

// | Method                         | Handles Complex Types                 | Fast     | Notes                   |
// | ------------------------------ | ------------------------------------- | -------- | ----------------------- |
// | `JSON.parse(JSON.stringify())` | ❌ No (`Date`, `undefined`, functions) | ✅ Fast   | Simple, but limited     |
// | `structuredClone()`            | ✅ Yes                                 | ✅ Fast   | Modern, recommended     |
// | `_.cloneDeep()` (Lodash)       | ✅ Yes                                 | ✅ Fast   | Reliable, needs install |
// | Manual Recursive Function      | ✅ Yes (if written well)               | ❌ Slower | Custom, educational     |
// | MessageChannel                 | ✅ Yes                                 | ❌ Slower | Browser-only            |





// WAHT ARE THE ARRAY METHODS

// --> MUTATES THE ARRAY
// --> DOES NOT MUTATES THE ARRAY

// 1. MUTATES THE ARRAY : (These modify the original array)

// | Method         | Description                                                        |
// | -------------- | ------------------------------------------------------------------ |
// | `push()`       | Adds elements to the **end** of the array                          |
// | `pop()`        | Removes the **last** element from the array                        |
// | `shift()`      | Removes the **first** element from the array                       |
// | `unshift()`    | Adds elements to the **beginning** of the array                    |
// | `splice()`     | Adds/removes elements at a specific index                          |
// | `sort()`       | Sorts the array **in place** (by default, alphabetically)          |
// | `reverse()`    | Reverses the order of elements **in place**                        |
// | `fill()`       | Fills all/some array elements with a static value                  |
// | `copyWithin()` | Copies part of the array to another location within the same array |


// 2. Non-Mutating Array Methods : (These return a new array or value and do not modify the original)

// | Method             | Description                                                     |
// | ------------------ | --------------------------------------------------------------- |
// | `concat()`         | Merges arrays into a **new** array                              |
// | `slice()`          | Extracts a portion into a **new** array                         |
// | `map()`            | Transforms each element and returns a **new** array             |
// | `filter()`         | Returns a new array with elements that match a condition        |
// | `reduce()`         | Reduces array to a single value (accumulator)                   |
// | `reduceRight()`    | Same as `reduce()`, but processes from right to left            |
// | `flat()`           | Flattens nested arrays into a single-level array                |
// | `flatMap()`        | First maps, then flattens one level                             |
// | `join()`           | Joins all elements into a string                                |
// | `includes()`       | Checks if array includes a certain value                        |
// | `indexOf()`        | Returns the first index of a value                              |
// | `lastIndexOf()`    | Returns the last index of a value                               |
// | `find()`           | Returns the **first** matching element                          |
// | `findIndex()`      | Returns the **index** of the first matching element             |
// | `every()`          | Checks if **all** elements match a condition                    |
// | `some()`           | Checks if **at least one** element matches a condition          |
// | `entries()`        | Returns an iterator of key/value pairs                          |
// | `keys()`           | Returns an iterator of the array's indexes                      |
// | `values()`         | Returns an iterator of the array's values                       |
// | `toString()`       | Converts the array to a string                                  |
// | `toLocaleString()` | Converts to a localized string                                  |
// | `Array.isArray()`  | Checks if a value is an array (not a method on array instances) |
// | `from()`           | Creates an array from iterable or array-like object             |
// | `of()`             | Creates an array from given arguments                           |



// WAHT ARE DATA TYPE AND TYPES OF ITS AND ALSO EXPALIN DIFFERENT TYPE OF ITS EXAMPLE ALSO *******

//  WHAT ARE DIFFERENCE BETWEEN FUCNITON EXPRESSION AND FUNCTION DECLEARTION ********




// SPREAD OPERATOR  wiht primitive and non-pri
// let arr = [1,2,3,4,5];
// let brr = [...arr]; // arr contains primitive type value which is pass by copy not refrence so if we change in the value of brr it does not reflect to arr

// brr[2] = 9;
// console.log(arr) // 1,2,3,4,5
// console.log(brr) // 1,2,9,4,5



// // SPREAD OPERATOR EXAMPLES
// console.log("=== Spread Operator Examples ===");

// // 1. Copying Arrays (Shallow Copy)
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// arr2[0] = 100;
// console.log("Original Array:", arr1); // [1, 2, 3]
// console.log("Copied Array  :", arr2); // [100, 2, 3]

// // 2. Combining Arrays
// let a = [4, 5];
// let b = [6, 7];
// let combinedArr = [...a, ...b];
// console.log("Combined Array:", combinedArr); // [4, 5, 6, 7]

// // 3. Spreading into Function Calls
// function add(x, y, z) {
//   return x + y + z;
// }
// let nums = [10, 20, 30];
// console.log("Function Result:", add(...nums)); // 60

// // 4. Copying/Merging Objects
// const obj1 = { name: "Ujjwal" };
// const obj2 = { age: 23 };
// const mergedObj = { ...obj1, ...obj2 };
// console.log("Merged Object:", mergedObj); // { name: "Ujjwal", age: 23 }

// // REST OPERATOR EXAMPLES
// console.log("\n=== Rest Operator Examples ===");

// // 1. Function with variable number of arguments
// function sumAll(...nums) {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// }
// console.log("Sum All:", sumAll(1, 2, 3, 4)); // 10

// // 2. Destructuring Arrays
// let [first, ...restArr] = [100, 200, 300, 400];
// console.log("First Value:", first);     // 100
// console.log("Rest Values:", restArr);   // [200, 300, 400]

// // 3. Destructuring Objects
// let person = { name: "Ujjwal", age: 23, city: "Delhi" };
// let { name, ...others } = person;
// console.log("Name:", name);       // "Ujjwal"
// console.log("Other Info:", others); // { age: 23, city: "Delhi" }

// // BONUS: Visual Difference
// console.log("\n=== Visual Difference ===");
// const values = [1, 2, 3];
// console.log("Spread:", ...values); // 1 2 3

// function printArgs(...args) {
//   console.log("Rest  :", args);   // [1, 2, 3]
// }
// printArgs(1, 2, 3);





// JavaScript is both a synchronous and asynchronous language — here's how:**************************
//  By Nature: Synchronous
// JavaScript was originally single-threaded and synchronous — meaning it executes code line by line, one after the other.

// 🔹 With APIs: Asynchronous Capabilities
// JavaScript uses asynchronous features (like setTimeout, Promises, fetch, async/await, etc.) via the Event Loop and Web APIs (in browsers) or libuv (in Node.js).



// EVENT BUDDLING AND EVENT CAPTURING

// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// -----> event bubbling
// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("click on parent component");
// })
// document.getElementById("child").addEventListener("click",()=>{
//     console.log("clicked on child component");
// })


// ------> event caputing
// document.getElementById("parent").addEventListener("click", ()=>{}, true);

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// }, true); // Capturing

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// }, true);


// | Feature          | Event Bubbling                  | Event Capturing                       |
// | ---------------- | ------------------------------- | ------------------------------------- |
// | Order            | Target → Parent → Ancestors     | Ancestors → Parent → Target           |
// | Default Behavior | ✅ Yes                           | ❌ No (must be enabled)                |
// | Setup            | `addEventListener('click', fn)` | `addEventListener('click', fn, true)` |
// | Use Case         | Common for event delegation     | Rare, for fine control                |


// let name = "ujjwal kumar savita";
// // find the charcter count of each character

// let arr = new Array(26).fill(0);

// function fn(){
//     let sp = name.split("").filter(char => char != ' ');
//     sp.forEach( char => {
//         let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
//         if(idx>= 0 && idx < 26) arr[idx]++
//         // arr[char - 'a']++;
//     });
//     for(let i = 0; i< 26;i++){
//         if(arr[i] !== 0) console.log(String.fromCharCode(i+97) ," : ", arr[i]);
//     }
// }

// fn();




// Temporal Dead Zone (TDZ) in JavaScript ******************
// The Temporal Dead Zone (TDZ) is the period between the declaration of a variable using let or const and its initialization, during which the variable cannot be accessed.

// | Feature                        | Explanation                                                 |
// | ------------------------------ | ----------------------------------------------------------- |
// | Affects                        | Only `let` and `const` (NOT `var`)                          |
// | When it happens                | Between the block's start and the variable's initialization |
// | What happens if accessed early | **ReferenceError** is thrown                                |
// | Purpose                        | Makes variable declarations more predictable and safer      |





// ✅ Order of CSS Styles: Inline, Internal, External
// When CSS styles conflict, the order of precedence for how they are applied is:

// | **Priority**  | **Type of CSS**       | **Example**                            | **Priority Rank** |
// | ------------- | --------------------- | -------------------------------------- | ----------------- |
// | 1️⃣ (Highest) | **Inline CSS**        | `<h1 style="color: red;">`             | 🔥 Highest        |
// | 2️⃣           | **Internal CSS**      | `<style> h1 { color: blue; } </style>` | Medium            |
// | 3️⃣ (Lowest)  | **External CSS**      | `style.css` file                       | Lowest            |
// | 🚫 (Override) | **`!important` Rule** | `h1 { color: green !important; }`      | Overrides all     |

// 💡 Which CSS Type Should Developers Use?
// Type	Use Case & Recommendation
// 🔥 Inline	❌ Avoid unless for quick testing/debugging. Not scalable or reusable.
// 📄 Internal	⚠️ Okay for small pages or demos. Not ideal for large projects.
// 📁 External	✅ Recommended. Best for maintainability, reusability, and performance.
