// console.log("ujjwal" > 9); // NaN > 9 false
// console.log("ujjwal" < 9); // NaN < 9 false

//false because in this string tries to compare with number sting of chracter is converted into NaN


// console.log("8" < 12); // true
// "8" is easily converted into the number 



// [y] = [1,2,3,4,5];
// console.log(y); // 1
//due to the concept of the array destructuring


// let a = 100;

// const b = ++a + a++ + ++a + a++; // 101 + 101 + 103 + 103// but a is not 102
// console.log(b); // 408


// let name = "ujjwal"
// name[1] = "kumar" // stirng is immutable so can't change the name

// console.log(name); // ujjwal
// if want to change the string then we simply do that re-assing it
// name = "kumar"

// let st = "my name is ujjwal kumar savita";
// // write a function to give the output like FIRST CHARCTER SHOULD BE GREATER AND EACH WILL COME ON NEW LINE

// function fn(){
//     let arr = st.split(" ");

//     arr.forEach((word) =>{
//         let x= word[0].toUpperCase() + word.slice(1) ;
//         console.log(x);
//     })
// }
// fn();



// DIFFERENCE BETWEEN SLICE AND SPLICE
// | Feature               | `slice()`                | `splice()`                              |
// | --------------------- | ------------------------ | --------------------------------------- |
// | **Changes Original?** | ❌ No (returns new array) | ✅ Yes (modifies original array)      |
// | **Return Value**      | New array                | Array of removed elements               |
// | **Purpose**           | Extract part of an array | Add/Remove/Replace elements in an array |
// | **Usage Example**     | `arr.slice(1,3)`         | `arr.splice(1,2,'x','y')`               |


// const arr = [1, 2, 3, 4, 5];
// const result = arr.slice(1, 3);
// console.log(result); // [2, 3]
// console.log(arr);    // [1, 2, 3, 4, 5] (Original unchanged)

// const arr = [1, 2, 3, 4, 5];
// const result = arr.splice(1, 2); // remove 2 elements starting at index 1
// console.log(result); // [2, 3]
// console.log(arr);    // [1, 4, 5] (Original changed)




// let arr = [[1,2,3,4],[5,6,7,8]]
// let arr1 = [, , , ,]; // if last position is empty it wound be consider in the array
// console.log(arr.length) // 2
// console.log(arr1.length) // 4 because last comma ke bad agar vlaue nahi hai to usko hole ko count nahi karta hai




// DIFFRENT WAYS TO CREATE THE ARRAYS
// | Method                 | Example                             | Output                |
// | ---------------------- | ----------------------------------- | --------------------- |
// | Array Literal          | `[1, 2, 3]`                         | `[1, 2, 3]`           |
// | `new Array()`          | `new Array(3)`                      | `[ <3 empty items> ]` |
// | `Array.of()`           | `Array.of(3)`                       | `[3]`                 |
// | `Array.from()`         | `Array.from('abc')`                 | `['a', 'b', 'c']`     |
// | Spread (`...`)         | `[...'abc']`                        | `['a', 'b', 'c']`     |
// | `fill()`               | `new Array(3).fill(0)`              | `[0, 0, 0]`           |
// | `Array.from() + map()` | `Array.from({length: 3}, (_,i)=>i)` | `[0, 1, 2]`           |
// using array constructor let arr = new Array(1,2,3,4,5)


// let arr = [8,4,6,11,28,17]
// // sort in ascending order

// for(let i = 0; i < arr.length ;i++){
//     let minidx = i;
//     for(let j = i+1 ;j < arr.length ;j++){
//         if(arr[minidx] > arr[j]){
//             minidx = j;
//         }
//     }
//     // swap kar denge
//     if(i != minidx){
//         let x = arr[i];
//         arr[i] = arr[minidx];
//         arr[minidx] = x;
//     }
// }

// console.log(arr);



// DIFFERENT COMPNENTS NAME 
// | Scenario                                   | Will it work? | Why?                                           |
// | ------------------------------------------ | ------------- | ---------------------------------------------- |
// | Import with no extension (`./Footer`)      | ✅ Yes         | Bundler resolves `.js` or `.jsx` automatically |
// | Import as `./Footer.js`                    | ✅ Yes         | Exact match to file name                       |
// | Import as `./Footer.jsx` but file is `.js` | ❌ No          | `Footer.jsx` does not exist — error            |


// The algorithm used by React to compare the Virtual DOM with the Actual DOM is called the:
// ✅ "Reconciliation Algorithm"



//  DEV DEPENDENCIES AND NORMAL DEPENDECIES
// | **Point**                | **dependencies**    | **devDependencies**                   |
// | ------------------------ | ------------------- | --------------------------------      |
// | Used In                  | Production code     | Development / Build / Test only       |
// | Available in production? | ✅ Yes               | ❌ No (unless manually installed)   |
// | Examples                 | React, Axios, Redux | Webpack, Babel, ESLint, Jest          |
// | Install Command          | `npm install`       | `npm install --only=dev`              |
