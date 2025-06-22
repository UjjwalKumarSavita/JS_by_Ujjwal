// const name = "ujjwal"
// console.log(name());
//output is "TypeError"

// console.log([] == [])
// false becaue it is an object it check by refrence

// function abc(x,y,z){}

// function xyz(a, b= 1, c){} // after assigned once all other paremeter are optional

// function pqr(a = 10, b,c){}

// console.log(abc.length); //3
// console.log(xyz.length); // 1
// console.log(pqr.length); // 0

// function a() {
//   let abc = "ujjwal";
//   function xyz() {
//     console.log(abc);
//     let abc = "kumar";
//   }
//   xyz();
// }
// a();

//output is refrence error becaue andar vale functon me varivale bana hua hai to esiliye 
// LOCAL SCOPE IS HIGHER PRIORITY THEN GLOBAL ONE

// | Concept                     | What Happens                                                                        |
// | --------------------------------------------------------------------------------------------------------------- |
// | **Hoisting**                |`let abc;` is hoisted to top of `xyz()` scope.                                          |
// | **Temporal Dead Zone (TDZ)**|From start of function to `let abc = ...` — variable exists but cannot be accessed yet. |
// | **Error**                   |Accessing `abc` before it's initialized throws **ReferenceError**.                      |




// function a() {
//   let abc = "ujjwal";
//   function xyz() {
//     console.log(abc);
//     // let abc = "kumar";
//   }
//   xyz();
// }
// a();

//ooutput is ujjwal Due to closure property uper se name le legaa 





// DIFFERENCE BETWEEN NORMAL FUNCTON AND FUCNTION EXPRESION
// | **Point**            | **Function Declaration**      | **Function Expression**          |
// | -------------------- | ----------------------------- | -------------------------------- |
// | **Syntax**           | `function func() {}`          | `const func = function() {}`     |
// | **Hoisting**         | Yes (can call before declare) | No (Cannot call before define)   |
// | **Anonymous**        | Always named                  | Can be anonymous                 |
// | **Conditional Def.** | ❌ Not recommended             | ✅ Possible                       |
// | **Callback Use**     | Rare                          | Common (arrow functions, inline) |
// | **Constructor**      | Yes                           | Yes (except Arrow Functions)     |
// | **Debugging**        | Easy (name always there)      | Slightly harder if anonymous     |
// | **Arrow Function?**  | ❌ Not applicable              | ✅ Can be Arrow Function          |



// WHY SHOULD WE PREFER NORMAL Function OVER THE ARROW Function
                                                                                                                    
// | **1. Own `this` Binding (Context)**           | 🔍 **Normal functions have their own `this` context.** <br> ✔️ Use when you need `this` to refer to the calling object.<br> ❌ Arrow functions **do NOT have their own `this`** — they inherit it from the parent scope. |



// | **2. Constructor Usage (`new`)**              | ✔️ Normal functions can be used as **constructors with `new`**. <br> ❌ Arrow functions **cannot be used as constructors** (throws error).                                                                               |



// | **3. Prototype Methods**                      | ✔️ Normal functions can define prototype methods in ES6 classes. <br> ❌ Arrow functions **should NOT be used for defining methods on prototype** because they lack their own `this`.                                    |



// | **4. Named Functions (Recursion, Debugging)** | ✔️ You can give **names to normal functions easily** for recursion and better stack traces. <br> ❌ Arrow functions are mostly anonymous unless assigned to a variable.                                                  |



// | **5. Dynamic `arguments` Object**             | ✔️ Normal functions have their own **`arguments` object** (array-like of passed arguments). <br> ❌ Arrow functions **do NOT have their own `arguments`** object.                                                        |



// | **6. Hoisting**                               | ✔️ **Normal functions are hoisted** — can be called before their definition. <br> ❌ Arrow functions are NOT hoisted — calling them before definition gives an error.                                                    |


// SUMMRY
// | **Feature**            | **Normal Function** | **Arrow Function** |
// | ---------------------- | ------------------- | ------------------ |
// | Own `this` context     | ✅ Yes               | ❌ No (lexical)     |
// | Use as constructor     | ✅ Yes               | ❌ No               |
// | Has `arguments` object | ✅ Yes               | ❌ No               |
// | Hoisted                | ✅ Yes               | ❌ No               |
// | Prototype methods      | ✅ Suitable          | ❌ Not suitable     |




// abc()
// var abc = function(){
//     console.log("I am the first");
// }

// abc();

// function abc(){
//     console.log("I am the last");
// }
// abc();
//  I am the last
//  I am the first
//  I am the first
// first normal funiton will hosted but after the function expression over write the normal function




let st="this is my interview"
// capatilize the first letter of each word
// ----> METHOD 1
// function fn(){
//     const arr= st.split(" ");
//     let str=""
//     arr.forEach((item)=>{
//         str += item[0].toUpperCase() + item.slice(1) +" ";
//     })

//     console.log(str)
// }
// fn()   // this is done withe the for each method


// ----> METHOD 2
// function fn(){
//     let arr = st.split(" ");
//     console.log("hello");
//     let inter = arr.map((item)=>{ return (item[0].toUpperCase() + item.slice(1) )});
//     console.log(inter);
//     let resStr = inter.join(" ");
//     console.log(resStr);
// }
// fn()





// **************************************************************   REACT JS   **************************************

// WHAT WILL WE USE FOR THE API INTEGRATION 
//  :- fetch(), axios.get(), now a days we use async and await

// ✅ 1. Using fetch() API (Native JavaScript)

// Example: Fetching Data from an API:
// jsx

// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts') // Sample API
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(err => console.error("Error fetching data: ", err));
//   }, []);

//   return (
//     <div>
//       <h1>API Data:</h1>
//       {data.map(item => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


// ✅ 2. Using axios (3rd Party Library — Cleaner)
// Install Axios first:

// nginx: 
// npm install axios


// jsx:
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => setData(response.data))
//       .catch(err => console.error("Error: ", err));
//   }, []);

//   return (
//     <div>
//       <h1>Axios API Data:</h1>
//       {data.map(item => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
// ✅ 3. API Integration using async/await (Modern Approach)

// jsx:

// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const json = await res.json();
//       setData(json);
//     } catch (err) {
//       console.error("Fetch error: ", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Async/Await API Data:</h1>
//       {data.map(item => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
// ✅ 4. Best Practices:
// Best Practice	                        Explanation
// Use useEffect for API calls	            To fetch when component mounts.
// Handle loading & error states	        Show loading spinners or messages.
// Use async/await or Axios	            Cleaner, readable, modern approach.
// Never use API call directly in render	Should always go inside useEffect.






// HOW SHOULD WE PERFORM THE REQUEST CANCELLATION IN ABOVE API INTEGRATION

// 1. Using AbortController with Fetch (Native Way)

// jsx:

// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         if (err.name === 'AbortError') {
//           console.log('Fetch cancelled');
//         } else {
//           console.error('Fetch error:', err);
//         }
//       }
//     };

//     fetchData();

//     // Cleanup function to cancel fetch
//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Fetch with AbortController</h1>
//       {data.map(item => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
 
// FOR THE AXIOS WE USE AXIOS TOKEN BUT THIS IS  OLD 
// IN TODAY WE USE AbortController FOR THE BOTH OF THEM



// DIFFERENCE BETWEEN PACKAGE.JSON AND PACKAGE-LOCK.JSON
// | **Aspect**           | **package.json**                                | **package-lock.json**                                  |
// | -------------------- | ----------------------------------------------- | ------------------------------------------------------ |
// | **Purpose**          | Lists declared dependencies (flexible versions) | Locks exact versions (ensures same setup for everyone) |
// | **Edited by**        | Developer manually                              | Auto-generated by npm/yarn                             |
// | **Controls**         | Direct dependencies only                        | All dependencies (direct + nested)                     |
// | **Version Ranges**   | Can use `^`, `~`, etc. (version flexibility)    | Records exact installed versions (`1.0.2`)             |
// | **Required in Git?** | Yes (mandatory for project sharing)             | Yes (must commit to avoid version drift)               |
// | **Affects install?** | Tells what versions are acceptable              | Tells exactly what versions to install                 |




// WHAT IS CARET AND TILDE OPERATOR

// ✅ Summary Table:
// Symbol	    Name	        Allows Updates To	        Example (1.4.0)
// ^	        Caret	        Minor + Patch (<2.0.0)	    1.4.1, 1.5.0, NOT 2.0.0
// ~	        Tilde	        Patch Only (<1.5.0)	        1.4.1, 1.4.9, NOT 1.5.0
// none	    Exact Version	Only the specified version	Only 1.4.0

// 🎯 When to Use What?

// Use Case	                                            Operator
// Want new features but no breaking major updates	        ^
// Want only safe patches / bug fixes	                    ~
// Want exact version (for 100% control)	                no symbol

// Example:
// json
// "dependencies": {
//   "lodash": "^4.17.21", // minor+patch allowed
//   "moment": "~2.29.1",  // patch only allowed
//   "axios": "1.4.0"      // exact version
// }





//DEFAULT AND NAME EXPORT
// | **Aspect**                  | **Named Export**                 | **Default Export**                     |
// | --------------------------- | -------------------------------- | -------------------------------------- |
// | **Exported as**             | `{ }` — curly braces required    | No curly braces needed                 |
// | **Number allowed per file** | **Many**                         | **Only One**                           |
// | **Import name**             | Must use **exact exported name** | Can choose **any name** when importing |
// | **Example**                 | `export const foo = 123;`        | `export default foo;`                  |





// | **Aspect**             | **`useContext`**                                                                             | **Redux**|
// |  |
// | **Purpose**            | For **prop drilling avoidance** (pass data deeply without props).                           | A full **state management library** (global app state, actions, reducers).                      |
// | **Complexity**         | Simple (built-in React hook).                                                               | Complex, extra setup needed (store, actions, reducers, middleware).                             |
// | **State Handling**     | **Read & provide data only.** No state logic (you combine with `useState` or `useReducer`). | Centralized state, strict rules (pure reducers, actions, immutable state).                      |
// | **Best Use Case**      | **Small to medium apps**, theme switcher, auth status, user info, language.                 | **Large scale apps** with complex state flow (like form wizards, dashboards, e-commerce carts). |
// | **Boilerplate Code**   | Minimal — no setup needed besides `createContext`.                                          | High — needs Redux store, Provider, Actions, Reducers, sometimes Middleware (Thunk/Saga).       |
// | **State Persistence**  | You handle persistence manually (if needed).                                                | Can easily integrate **Redux-Persist** to keep state across reloads.                            |
// | **Performance**        | Might cause **unnecessary re-renders** if not optimized.                                    | Efficient with tools like **Reselect**, can avoid re-renders with fine-grained control.         |
// | **Middleware Support** | ❌ Not available — you handle everything manually.                                           | ✅ Supports **middlewares** like Redux Thunk / Redux Saga.                                       |
// | **DevTools Support**   | ❌ None. Debug using React DevTools.                                                         | ✅ Powerful **Redux DevTools** to inspect state, actions, etc.                                   |
