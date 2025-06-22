// console.log("Reverse the string");

// let str = "ujjwal";

// console.log(str, "Before reverse");
// const splitStr = str.split("").reverse().join("");
// console.log(splitStr , "After reverse");





// let str = "I am Ujjwal";
// // output : Ujjwal am I

// const split = str.split(" ").reverse().join(" ");
// console.log(split);





// let str = "I am Ujjwal"
// // output : lawjju ma I

// const split = str.split(" ").reverse().map(word=> word.split("").reverse().join("")).join(" ");
// console.log(split);






// let str = "I am Ujjwal"
// // output : I ma lawjjU

// const split = str.split(" ").map(word=> word.split("").reverse().join("")).join(" ");
// console.log(split);




//check string is palindrome
// let st = "ujjwal";

// function check(st){
//     let newSt = st.split("").reverse().join("");
//     if(st === newSt) console.log("palindrome");
//     else console.log("not palindrome");

// }
// check(st);



// object to strig
// const ob ={
//     name: "ujjwal",
//     ange: 23
// } 

// const st = JSON.stringify(ob);
// console.log(st);




// const arr = [1,2,3,4,5];
// const brr = [1,2,3,4,5];
// // all the values are same return true otherwise false;

// console.log("execution start method 1");

// function check(){
//     let f = 0;
//     if(arr.length !== brr.length) console.log("false");

//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] !== brr[i]) {
//             console.log("false");
//             f=1;
//             break;
//         }
//     }

//     if(f==0) console.log("true");
// }
// check()


// console.log("Method 2");

// const res = arr.length === brr.length && arr.every((val, idx) => val === brr[idx]);
// console.log(res);






// | **Expression**       | **Result**    | **Explanation**                                                |
// | -------------------- | ------------- | -------------------------------------------------------------- |
// | `null == undefined`  | `true`        | Loose equality `==` treats `null` and `undefined` as equal.    |
// | `null === undefined` | `false`       | Strict equality `===` checks both value & type (they differ).  |
// | `typeof null`        | `"object"`    | JS historical bug: `null` is wrongly reported as an object.    |
// | `typeof undefined`   | `"undefined"` | Correctly returns `"undefined"`.                               |
// | `null + 1`           | `1`           | `null` coerces to `0` in numeric context: `0 + 1 = 1`.         |
// | `undefined + 1`      | `NaN`         | `undefined` coerces to `NaN` when used in arithmetic.          |
// | `null == 0`          | `false`       | `null` is only loosely equal to `undefined`, not `0`.          |
// | `undefined == 0`     | `false`       | `undefined` doesn't coerce to `0`.                             |
// | `null >= 0`          | `true`        | `null` becomes `0`, so `0 >= 0` is `true`.                     |
// | `undefined >= 0`     | `false`       | `undefined` becomes `NaN`; any comparison with `NaN` is false. |
// | `null == false`      | `false`       | `null` does not loosely equal `false`.                         |
// | `undefined == false` | `false`       | `undefined` does not loosely equal `false` either.             |
// | `Boolean(null)`      | `false`       | `null` is a falsy value.                                       |
// | `Boolean(undefined)` | `false`       | `undefined` is also a falsy value.                             |
// | `isNaN(null)`        | `false`       | `Number(null)` is `0`; `isNaN(0)` is `false`.                  |
// | `isNaN(undefined)`   | `true`        | `Number(undefined)` is `NaN`; `isNaN(NaN)` is `true`.          |
// | `Number(null)`       | `0`           | `null` coerces to `0`.                                         |
// | `Number(undefined)`  | `NaN`         | `undefined` coerces to `NaN`.                                  |






// type of the different data types...

// | **Data Type** | **Example**                | **`typeof` Result**    | **Explanation**                                     |
// | ------------- | -------------------------- | ---------------------- | --------------------------------------------------- |
// | **Number**    | `42`, `3.14`, `NaN`        | `"number"`             | All numbers, including `NaN`, are type `"number"`.  |
// | **BigInt**    | `10n`                      | `"bigint"`             | For arbitrarily large integers (`n` suffix).        |
// | **String**    | `"hello"`, `'world'`       | `"string"`             | Textual data.                                       |
// | **Boolean**   | `true`, `false`            | `"boolean"`            | Logical true/false values.                          |
// | **Undefined** | `undefined`                | `"undefined"`          | A variable that’s declared but not assigned.        |
// | **Null**      | `null`                     | `"object"` (weird bug) | Special intentional absence of value (old JS bug).  |
// | **Symbol**    | `Symbol("id")`             | `"symbol"`             | Unique and immutable primitive value.               |
// | **Object**    | `{}`, `[]`, `function(){}` | `"object"`             | Arrays, objects, functions — all return `"object"`. |
// | **Function**  | `function() {}`            | `"function"`           | Special case — functions return `"function"`.       |





// difference between primitive ad non primitve data type

// | **Aspect**              | **Primitive Data Types**                                            | **Non-Primitive Data 
// | **Definition**          | **Single, immutable values** (not objects, no methods).             | **Collections of values** or **functions** (Objects).                                       |
// | **Stored in**           | **Stack Memory** (direct value stored).                             | **Heap Memory** (reference stored in stack).                                                |
// | **Copy Behavior**       | **Copied by Value** — new copy is created.                          | **Copied by Reference** — points to same memory.                                            |
// | **Mutability**          | **Immutable** (cannot change original value).                       | **Mutable** (contents can be changed).                                                      |
// | **Examples**            | `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt` | `Object`, `Array`, `Function`, `Date`, `RegExp`                                             |
// | **Comparison (==/===)** | Compared **by value** directly.                                     | Compared **by reference** — even if contents are same, different references mean not equal. |



// let st1 = "ujjwal";
// let st2 = "kumar"
// // output : marge the string by alternative add the character.... eg : ukjujmwaarl
// const n1 = st1.length;
// const n2 = st2.length;
// let res= "";

// let i =0, j= 0;
// while(i < n1 && j < n2){
//     res+= st1.charAt(i) + st2.charAt(j);
//     i++;
//     j++;
// }
// while(i == n1 && j < n2){
//     res+= st2.charAt(j);
//     j++
// }
// while(j == n2 && i < n1){
//     res+= st1.charAt(i);
//     i++;
// }
// console.log(res);





// what is  output of the 
// let arr = [, , ,]; // the length of this arr is 3






// difference between MAP AND FOREACH METHODS 
// | Aspect               | **`.map()`**                                                 ||| **`.forEach()
// | **Purpose**          | To **transform each element** and **return a new array**.    ||| To **perform side effects** (like logging, updating external variables), **no return**. |
// | **Return Value**     | Returns a **new array** with the modified values.|            Returns **undefined**.                                                                  |
// | **Mutability**       | Does **not modify original array** unless you do it manually inside.  ||| Same — does not return or modify unless you do it manually.                             |
// | **Chaining**         | Can be **chained** (because returns array).                    ||| Cannot be chained (returns undefined).                                                  |
// | **Common Use Cases** | Data transformation: convert, modify, create a new array.      ||| Side effects: logging, updating counters, pushing to another array.                     |
// | **Performance**      | Similar, but `.map()` may be slightly heavierbecause it builds a new array.  ||| Slightly faster if just doing side effects.|






// TO AVOID THE COPY OF THE REFRENCE BUT USING THE SHOLLOW COPY

// ************ using spread copy { ...a }
// const a = { age: 23 };
// const b = { ...a };  // ✅ now "b" is a new object with same properties

// b.age = 100;

// console.log(a.age); // 23 — a is untouched
// console.log(b.age); // 100


// ********** using the Object.assign() 
// const a = { age: 23 };
// const b = Object.assign({}, a); // ✅ new copy

// b.age = 100;

// console.log(a.age); // 23



// HTML

// Difference between em and i tag in html
// | **Aspect**            | **`<em>` Tag**                                                              | **`<i>` Tag**                                                                     |
// | --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
// | **Meaning**           | **Emphasis** — used to indicate that the text is **important or stressed**. | **Italic style** — used for **styling purposes only**, without conveying meaning. |
// | **Semantic?**         | **Yes** — screen readers and SEO tools recognize this as emphasized text.   | **No** — purely visual; has no special meaning to browsers or screen readers.     |
// | **Default Rendering** | Italic (by browser default).                                                | Italic (by browser default).                                                      |
// | **Example Use**       | For emphasizing a word in a sentence to change meaning.                     | For technical terms, foreign words, or names where no emphasis is intended.       |
// | **Accessibility**     | Screen readers may pronounce with more stress or importance.                | Screen readers treat this as normal text (no special emphasis).    
//                |


// strong tag and bold tag
// | **Aspect**            | **`<strong>` Tag**                                                      | **`<b>` Tag**                                                   |
// | --------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
// | **Meaning**           | Indicates **strong importance or seriousness** (semantic meaning).      | **Bold text for purely visual presentation**, no extra meaning. |
// | **Semantic?**         | **Yes** — communicates importance to browsers, screen readers, and SEO. | **No** — purely for styling, no extra meaning.                  |
// | **Default Rendering** | Bold (by default in browsers).                                          | Bold (same appearance).                                         |
// | **Example Use**       | Warning messages, important instructions, alerts.                       | Styling text headings, keywords without implying importance.    |
// | **Accessibility**     | Screen readers may read it with extra emphasis.                         | Treated like normal text by screen readers.                     |
