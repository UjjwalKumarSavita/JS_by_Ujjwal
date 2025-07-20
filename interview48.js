// let arr = [,,,]; // 3
// let arr2 = [1 ,2,3,4]; // 4
// let arr3 = [[1,2,3],[3,4,5,6]]; // 2
// // find the length of all three array
// console.log(arr.length);
// console.log(arr2.length);
// console.log(arr3.length);





// let arr = [ 1, 18, 9 ,81, 98, 124];

// // sort the array in ascending order
// for(let i = 0; i < arr.length; i++){
//     let minIdx = i;
//     for(let j = i + 1 ; j < arr.length; j++){
//         if(arr[j] < arr[minIdx]){
//             minIdx = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIdx];
//     arr[minIdx ] = temp;
// }

// console.log(arr);

// // sort the element in descending order
// for(let i = 0; i < arr.length; i++){
//     let minIdx = i;
//     for(let j = i + 1 ; j < arr.length; j++){
//         if(arr[j] > arr[minIdx]){
//             minIdx = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIdx];
//     arr[minIdx ] = temp;
// }

// console.log(arr);







// given an example of the map method 
// let arr = [ 1,2,3,4,5,6];

// let brr = arr.map(item => item *2);
// console.log(brr);

// let newarr = arr.map(item => item <10); // if logical operation done in the array using MAP THEN IT WILL RETURN TRUE OF FALSE VALUE
// let newbrr = arr.filter(item => item < 10); // filter will return the elementss....
// console.log(newarr);
// console.log(newbrr);



// WAHT IS SPLICE AND SLICE METHOD 
// | Feature           | `splice()`          | `slice()`                   |
// | ----------------- | ------------------- | --------------------------- |
// | Modifies original | ✅ Yes              | ❌ No                      |
// | Returns           | Removed elements    | Copied elements             |
// | Use case          | Add/remove in-place | Copy part of an array       |
// | Mutability        | Mutable             | Immutable (non-destructive) |




// let arr1 = [1,2,3 ,4,5, , ]; // len = 5
// let arr = [1,2,3 ,4,5, , 8]; // len = 7
// console.log(arr.length)



// all the methods through which i can empty the array

// let arr = [ 1,2,3,4,5];

// console.log(arr) // esame puri array as it is print hogiii

// arr.length = 0;
// console.log(arr) // length zero hote hi array ka size bhi zero

// arr= []
// console.log(arr); // empty array

// arr.splice(0); 
// console.log(arr.length);

// | Method                | Modifies original? | Affects references? | Performance |
// | --------------------- | ------------------ | ------------------- | ----------- |
// | `arr.length = 0`      | ✅ Yes              | ✅ Yes               | 🚀 Fastest  |
// | `arr = []`            | ❌ No               | ❌ No (new array)    | 🚀 Fast     |
// | `arr.splice(0)`       | ✅ Yes              | ✅ Yes               | ⚡ Good      |
// | `while (arr.pop())`   | ✅ Yes              | ✅ Yes               | 🐢 Slower   |
// | `while (arr.shift())` | ✅ Yes              | ✅ Yes               | 🐌 Slowest  |




// WAYS TO CREATE THE ARRAY OBJECT

// let arr =[];
// let brr = new Array();
// let crr = Array.of(3); // [3] single element ka bana ho to 
// console.log(crr.length)
// // let drr = Array.from(str); // string ko array me convert kar diyaaa



// let arr = [11,1,1,1,18,9,81,98,124,78,78,81];
//find the array wiht unique values..

// method 1
// let set = new Set();
// arr.forEach((item)=>{
//     set.add(item);
// })

// let brr=[];
// for(let x of set){
//     brr.push(x);
// }
// console.log(brr);

// method 2:
// let brr = [];
// for(let x of arr){
//     if(!brr.includes(x)) brr.push(x);
// }
// console.log(brr);

//method 3:
// let brr = new Set(arr);
// console.log(brr);



// function abc (a,b,c){}

// function pqr(a= 0,b,c){}

// console.log(abc.length); // 3
// console.log(pqr.length); // 0




// console.log([] === []); 
// console.log([] == []);
//false both case due to refernce 



let str = "ujjwal kumar savita"
// str contain 3 word .. each word on new line and first charcter should be captil

let arr = str.split(" ");
arr.forEach((word)=>{
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
})



// TYPE OF ALL PRIMITIVE DATA TYPE VALUES
// | Data Type   | Example             | `typeof` Result         |
// | ----------- | ------------------- | ----------------------- |
// | `number`    | `42`, `3.14`, `NaN` | `"number"`              |
// | `string`    | `"hello"`           | `"string"`              |
// | `boolean`   | `true`, `false`     | `"boolean"`             |
// | `undefined` | `let x;`            | `"undefined"`           |
// | `symbol`    | `Symbol("id")`      | `"symbol"`              |
// | `bigint`    | `123n`              | `"bigint"`              |
// | `null`      | `null`              | `"object"` ⚠️ Bug in JS |

// TYPEOF ALL NON PRIMITIVE DATA TYPE VALUES
// | Data Type    | Example                       | `typeof` Result |
// | ------------ | ----------------------------- | --------------- |
// | `object`     | `{ name: "Jadu" }`            | `"object"`      |
// | `array`      | `[1, 2, 3]`                   | `"object"`      |
// | `function`   | `function() {}` or `() => {}` | `"function"`    |
// | `date`       | `new Date()`                  | `"object"`      |
// | `RegExp`     | `/abc/`                       | `"object"`      |
// | `Map`, `Set` | `new Map()`, `new Set()`      | `"object"`      |
// | `null`       | `null`                        | `"object"` ⚠️   |




// console.log(NaN === NaN)
// console.log(NaN == NaN)
// both the case it s false vlaue



// var a = 10;
// console.log(++a); // 11
// console.log(a++ ," ", a++); // 11
// console.log(a); // 12




// 📋 React Integration Methods: Comparison Table

// | Method                   | Use Case                      | Tools Required |
// | ------------------------ | ----------------------------- | -------------- |
// | `npm install react`      | Real project setup            | Node.js + npm  |
// | CDN                      | Quick tests, no build step    | Just a browser |
// | Vite                     | Fastest modern project setup  | Node.js + npm  |
// | CRA (`create-react-app`) | Beginner-friendly (but heavy) | Node.js + npm  |




// 📦 package.json vs package-lock.json

// | Feature                   | `package.json`                                 | `package-lock.json`                                      |
// | ------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
// | **Purpose**               | Describes your project & its dependencies      | Locks the exact versions of all installed packages       |
// | **Tracks**                | Direct dependencies only                       | Both direct and nested (transitive) dependencies         |
// | **Editable by developer** | ✅ Yes (you write it manually or via npm)       | ❌ No (auto-generated by npm)                             |
// | **Used for installing**   | ✅ Yes – `npm install` reads this               | ✅ Yes – `npm install` also reads this for exact versions |
// | **Version flexibility**   | Can use version ranges like `^1.0.0`, `~1.0.0` | Stores exact version numbers like `1.0.3`                |
// | **Commit to Git?**        | ✅ Yes                                          | ✅ Yes                                                    |
// | **Main Role**             | Project setup & dependency intent              | Ensures repeatable installs across environments          |





// WHAT ARE DEPENDENCIESSSSS..........

// A dependency is any external code or package that your project relies on to work properly.
// In JavaScript (especially with Node.js or React apps), a dependency is a library or tool that your project needs to run, build, or develop.

// | Dependency Type             | Purpose                                     | Declared In                  | Installed In Production Build |
// | --------------------------- | ------------------------------------------- | ---------------------------- | ----------------------------- |
// | **Dependencies**            | Required to **run** the app                 | `"dependencies"`             | ✅ Yes                         |
// | **Dev Dependencies**        | Needed only for **development**             | `"devDependencies"`          | ❌ No (only for dev)           |
// | **Peer Dependencies**       | Host app must already have this installed   | `"peerDependencies"`         | ⚠️ External responsibility    |
// | **Optional Dependencies**   | Not critical, app works without it          | `"optionalDependencies"`     | ✅ Yes (if install succeeds)   |
// | **Transitive Dependencies** | Auto-installed dependencies of dependencies | Not listed in `package.json` | ✅ Yes (via lock file)         |




// Difference Between Dependencies and Dev Dependencies
// | Feature                | `dependencies` (Normal)            | `devDependencies` (Dev)                  |
// | ---------------------- | ---------------------------------- | ---------------------------------------- |
// | **Purpose**            | Required to **run the app**        | Required to **develop or build** the app |
// | **Used In**            | Production + Development           | Only in Development                      |
// | **Installed with**     | `npm install <package>`            | `npm install <package> --save-dev`       |
// | **Included in Build?** | ✅ Yes                              | ❌ No                                     |
// | **Declared In**        | `"dependencies"` in `package.json` | `"devDependencies"` in `package.json`    |
// | **Examples**           | `react`, `axios`, `express`        | `vite`, `eslint`, `jest`, `webpack`      |



// ^ (carrot) : allows updates within the same major version,
// ~ (tilde) : allows updates within the same minor version.
// "react": "^18.2.0"  → Accepts 18.x.x (not 19+)
// "react": "~18.2.0"  → Accepts 18.2.x only (not 18.3+)
