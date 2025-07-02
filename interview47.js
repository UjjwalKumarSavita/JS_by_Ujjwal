// EVERY THING IS ABOUT [] 'EMPTY ARRAY'

// | Aspect      | Detail                           |
// | ----------- | -------------------------------- |
// | Type        | Object                           |
// | Truthiness  | Truthy                           |
// | Length      | 0                                |
// | Is iterable | Yes                              |
// | Is array    | `Array.isArray([])` → `true`     |
// | Methods     | All array methods are valid      |
// | Mutability  | Can be modified (push, pop, etc) |




// if([] == true){
//     console.log("present");
// }
// else {
//     console.log("absent");
// }

//output is absent
// Detailed Breakdown:
// [] == true

// This triggers type coercion. Here's what happens:

// true is converted to a number → 1

// [] is converted to a primitive (using .toString() or .valueOf()):

// js
// Copy
// Edit
// [].toString(); // ""
// → So [] == true becomes:

// js
// Copy
// Edit
// "" == 1
// "" == 1 is false

// Hence, the else block runs → "absent"





// let obj = {
//     a : {
//         b : undefined
//     }
// }

// console.log(obj.a?.b?.c?.d??"ujjwal");
// output : ujjwal

// ?? :-> does chekc it left if it is null or undefined tehnit return right side val
 

// Difference between ?? and ||?
// --> || returns right-hand side if left is falsy

// --> ?? returns right-hand side only if left is null or undefined


// console.log(false || "hi");  // "hi"
// console.log(false ?? "hi");  // false





// var abc = 25;
// console.log(typeof abc); // number

// if(function f(){}){ // yaha pe funciton ye expression ki trha behave karegaa (FUNCTION EXPRESSION DOESN'T CREATE GLOBAL OR BLOCK SCOPE)
//     abc = abc + typeof f; // 25 + undefine f scope is not leaked so undefined..
// }

// console.log(typeof abc); // String

// let abc = typeof undefined;  // "undefined" --> or ye string ki trah hoga...
// console.log(typeof abc); 





function add1(a){
    return function add2(b){
        if(b !== undefined) return add1(a +b);
        else return a;
    }
}

console.log(add1(1)(2)(3)(4)(5)());



// Easy and previously discussed


//DATA TYPE AND FUNCTIONAL DIFFRENCE PRIMITIV AND NON PRIMITIVE DATA TYPE

// TEMPLATE LITERALS   `HI THIS IS ${NAME} KUMAR SAVITA`

// CALSS AND FUNCTIONAL COMPONENT

// WAHT IS DIFFERENC EBETWEEN PACKAGE.JSON AND PACKAGE LOCK.JSON

// normal dependencies and dev dependecies





// what is express.js
// "Express.js is a minimal and flexible web framework for Node.js that simplifies building web applications and APIs. It handles routing, middleware, and server-side logic, allowing developers to easily define endpoints and manage requests and responses. For example, I've used Express to create RESTful APIs and serve static content, and I appreciate its simplicity and middleware architecture that helps in managing tasks like authentication and error handling."

//  Follow-up Questions You Might Get
// How is Express.js different from Node.js?
// Express is built on top of Node.js. Node.js handles the server, while Express provides a structure and utilities to handle routes, middleware, etc.


// Have you used middleware in Express?
// Yes, for tasks like authentication, logging, and error handling.


// Can you describe routing in Express?
// You can define endpoints using app.get, app.post, etc. I’ve used them to create RESTful APIs.


// What templating engines have you used with Express?
// I’ve used EJS and Handlebars to render dynamic HTML pages from the server.





//ROUTES IN EXPRESS
// In Express.js, a route defines how your application responds to client requests to a particular endpoint (URL) using specific HTTP methods like GET, POST, etc.

// ✅ Basic Syntax of a Route

// app.METHOD(PATH, HANDLER);
// app – Your Express app instance

// METHOD – HTTP method like get, post, put, delete

// PATH – The route URL

// HANDLER – A function that runs when the route is matched

// 🔹 Example: GET Route

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Welcome to Home Page');
// });
// ✅ When user visits /, this route sends "Welcome to Home Page".

// 🔹 Example: POST Route

// app.post('/submit', (req, res) => {
//   res.send('Form Submitted');
// });
// ✅ This handles a POST request to /submit.

// 🔹 Example: Route with Parameters

// app.get('/user/:id', (req, res) => {
//   res.send(`User ID is ${req.params.id}`);
// });
// ✅ For /user/123, the response will be User ID is 123.

// 🔹 Multiple Routes Together (Route Chaining)

// app.route('/book')
//   .get((req, res) => res.send('Get a book'))
//   .post((req, res) => res.send('Add a book'))
//   .put((req, res) => res.send('Update a book'));
// 🧠 In Interviews, You Can Say:
// “In Express.js, routes are defined using methods like app.get, app.post, etc., which map HTTP requests to specific URL paths. I’ve used them extensively for handling RESTful endpoints, including route parameters and chaining multiple methods on the same route.”





// WHAT IS JWT 
// "JWT is a token-based authentication standard that enables secure transmission of information as a JSON object. It’s commonly used to verify user identity in web applications. JWT includes a header, payload, and signature, and it is often used in stateless authentication systems like REST APIs."

// How JWT Authentication Works:
// ✅ User logs in

// 🔐 Server verifies credentials and returns a JWT token

// 📦 Client stores it (usually in localStorage)

// 📲 Client sends token in Authorization header in future requests:

// Authorization: Bearer <token>
// 🔍 Server verifies token and gives access

// Why is JWT used?*******************************
// JWT is commonly used for:

// Authentication (most common)

// Authorization

// Securely exchanging information between parties

// 🧱 Structure of a JWT
// A JWT is made up of three parts, separated by dots (.):


// Header.Payload.Signature
// Example:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJ1anp3YWwifQ.
// c2lnbmF0dXJlLWZyb20taGFzaA
// 🔹 1. Header
// Specifies the type of token and signing algorithm:

// {
//   "alg": "HS256",
//   "typ": "JWT"
// }
// 🔹 2. Payload
// The actual data (claims), like:

// {
//   "userId": 123,
//   "username": "ujjwal",
//   "role": "admin"
// }
// ⚠️ Avoid putting sensitive information here because it is not encrypted—just encoded.

// 🔹 3. Signature
// Used to verify that the token was not changed.

// HMACSHA256(
//   base64UrlEncode(header) + "." + base64UrlEncode(payload),
//   secret
// )





// MOGODB AND MYSQL
// | Feature          | **MongoDB**                         | **MySQL**                                 |
// | ---------------- | ----------------------------------- | ----------------------------------------- |
// | **Type**         | NoSQL (document-based)              | SQL (relational database)                 |
// | **Data Format**  | JSON-like (BSON) documents          | Tables (rows and columns)                 |
// | **Schema**       | Schema-less (flexible)              | Fixed schema (predefined structure)       |
// | **Storage Unit** | Collection and Documents            | Tables and Rows                           |
// | **Scalability**  | Horizontally scalable               | Vertically scalable                       |
// | **Best For**     | Unstructured / semi-structured data | Structured data and complex relationships |

// 📄 Data Example
// MongoDB Document:
// {
//   "name": "Ujjwal",
//   "age": 22,
//   "skills": ["React", "Node.js"]
// }

// MySQL Table:

// | id | name   | age | skills           |
// | -- | ------ | --- | ---------------- |
// | 1  | Ujjwal | 22  | "React, Node.js" |


// ⚙️ Query Language
// | Feature        | **MongoDB**                  | **MySQL**                                   |
// | -------------- | ---------------------------- | ------------------------------------------- |
// | Query Language | MongoDB Query Language (MQL) | Structured Query Language (SQL)             |
// | Example        | `{ name: "Ujjwal" }`         | `SELECT * FROM users WHERE name = 'Ujjwal'` |


// 🚀 Use Cases
// | MongoDB                       | MySQL                                  |
// | ----------------------------- | -------------------------------------- |
// | Real-time analytics           | Banking systems                        |
// | Social media feeds            | Inventory management                   |
// | IoT and big data applications | Accounting software                    |
// | Content management systems    | E-commerce platforms with transactions |


// 🧠 When to Use Which?
// | Use Case                              | Choose... |
// | ------------------------------------- | --------- |
// | Flexible schema, rapid prototyping    | MongoDB   |
// | Complex joins and strict schema rules | MySQL     |
// | High volume of reads and writes       | MongoDB   |
// | Strong data consistency               | MySQL     |


// 🧠 Interview Answer (Simple):
// “MongoDB is a NoSQL database that stores data as flexible JSON-like documents, making it great for unstructured or semi-structured data. MySQL is a relational database that stores data in structured tables and uses SQL. MongoDB offers more flexibility and scalability, while MySQL is better for structured, relational data.”




// display: none and visibility: hidden 
// Display: none
// Completely removes the element from the layout.

// The space it occupies is also removed.

// Acts like the element doesn’t exist on the page.

// ✅ Useful when: You want to hide an element completely, like a menu until it's triggered.

// <p style="display: none;">This is hidden and takes up no space.</p>

// 🔹 visibility: hidden
// The element is invisible, but still takes up space.

// It’s like making it transparent but keeping the layout.

// ✅ Useful when: You want to hide content but keep layout flow, like for transitions or accessibility.

// <p style="visibility: hidden;">This is invisible but still occupies space.</p>




// CSS BORDER AND CSS OUTLINE
// | Feature                | `border`                      | `outline`                |
// | ---------------------- | ----------------------------- | ------------------------ |
// | Affects layout         | ✅ Yes                         | ❌ No                     |
// | Position               | Inside box                    | Outside border           |
// | Sides customizable     | ✅ Yes (top/right/bottom/left) | ❌ No (all sides at once) |
// | Supports border-radius | ✅ Yes                         | ❌ No                     |
// | Used for focus styles  | 🔸 Sometimes                  | ✅ Commonly               |
