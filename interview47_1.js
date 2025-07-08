// const st = "ujjwal";
// find the first repeating character
// function fn(){
//     let get = 0;
//     let ch = '#';

//     for(let i = 0;i < st.length; i++){
//         for(let j = i +1; j < st.length; j++){
//             if(st.charAt(i) == st.charAt(j)) {
//                 get = 1;
//                 ch = st.charAt(i);
//                 break;
//             }
//         }

//         if(get == 1) break;
//     }
//     console.log("first repeated character is ", ch);
// }
// fn();

// approach 2

// function fn(){
//     const seen = new Set();
//     for(let x of st){
//         if(seen.has(x)){
//             console.log("first repeating character is ", x)
//             // brea
//             return;
//         }
//         else{
//             seen.add(x);
//         }
//     }
//     console.log("no repeadted character is peresent");
// }
// fn();





// const arr = ["a","b",100, "d", 10,18];

// //task is to separate digits on one array and other on different
// function fn(){
//     let numberOnly = arr.filter(x => typeof x === 'number');
//     let stringonly = arr.filter(x => typeof x === 'string');

//     console.log(numberOnly);
//     console.log(stringonly);
// }
// fn();





// what are the different type of alert box in java script

// there are mainly three type of alert box  in js
// | Feature     | Purpose                          |
// | ----------- | -------------------------------- |
// | `alert()`   | Notify the user                  |
// | `confirm()` | Get user decision (Yes/No)       |
// | `prompt()`  | Accept quick input from the user |

// let i; // let bahar banaya gaya hai to blocked ki jagah global ho agya hai
// for(  i = 1 ;i < 4;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }
// output is 
// 4
// 4
// 4

// for(let i = 1 ; i < 4;i++){ // let loop me hai to blocked scope
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }
// output is 
// 1
// 2
// 3

// for(var i = 1 ; i < 4 ;i++){ global scoped
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }
// output is
// 4
// 4
// 4






// console.log(a) // refrence error
// let a = 10;
// console.log(a) 

// console.log(a); // undefined
// var a;

// function fn(){
//     var a = 50;
// }
// console.log(a); // refrenceError

// | Scope Type           | Description                            | Can Access Outside? |
// | -------------------- | -------------------------------------- | ------------------- |
// | `var` in function    | Function-scoped                        | ❌ No                |
// | `let/const` in block | Block-scoped                           | ❌ No                |
// | Global variables     | Declared outside any function or block | ✅ Yes               |

// function fn(){
//     if(5 > 3){
//         let a = 5;
//     }
//     console.log(a);  // // block scope ki vajah se ReferenceError
// }
// fn();

// function fn(){
//     console.log(a);   // var hai to function ke head me but value nahi hai ::  undefined
//     if(5 > 3){
//         var a = 5;
//     }
//     console.log(a);  // var functioanl scope ki vajh se pure funciton me hoga so : output is 5
// }
// fn();






//what are the type of list in html
// order list
// unorder list
// description list




//NAME SOME FORMATING TAGS IN HTML
// | Tag        | Description                                | Example                                           | Output                     |
// | ---------- | ------------------------------------------ | ------------------------------------------------- | -------------------------- |
// | `<b>`      | Bold text (non-semantic)                   | `<b>Bold</b>`                                     | **Bold**                   |
// | `<strong>` | Important/bold (semantic)                  | `<strong>Important</strong>`                      | **Important**              |
// | `<i>`      | Italic text (non-semantic)                 | `<i>Italic</i>`                                   | *Italic*                   |
// | `<em>`     | Emphasized (italic + semantic)             | `<em>Emphasis</em>`                               | *Emphasis*                 |
// | `<u>`      | Underlined text                            | `<u>Underline</u>`                                | <u>Underline</u>           |
// | `<mark>`   | Highlighted text                           | `<mark>Highlight</mark>`                          | <mark>Highlight</mark>     |
// | `<small>`  | Smaller text                               | `<small>Small Text</small>`                       | <small>Small Text</small>  |
// | `<del>`    | Deleted (strikethrough) text               | `<del>Deleted</del>`                              | <del>Deleted</del>         |
// | `<ins>`    | Inserted (underlined) text                 | `<ins>Inserted</ins>`                             | <ins>Inserted</ins>        |
// | `<sub>`    | Subscript text                             | `H<sub>2</sub>O`                                  | H<sub>2</sub>O             |
// | `<sup>`    | Superscript text                           | `E = mc<sup>2</sup>`                              | E = mc<sup>2</sup>         |
// | `<code>`   | Computer code formatting                   | `<code>console.log()</code>`                      | <code>console.log()</code> |
// | `<pre>`    | Preserved formatting (line breaks, spaces) | `<pre> Hello\n World </pre>`                      | formatted block output     |
// | `<abbr>`   | Abbreviation                               | `<abbr title="Cascading Style Sheets">CSS</abbr>` | CSS (with tooltip)         |





// | 🔍 Feature                  | ✅ Semantic Tags                                                     | ❌ Non-Semantic Tags                                       |
// | --------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------- |
// | **1. Meaning**              | Clearly describe the content’s role (e.g., `<header>`, `<article>`) | Do **not** describe the content (e.g., `<div>`, `<span>`) |
// | **2. Accessibility (A11y)** | Improves screen reader understanding & navigation                   | Less accessible without ARIA roles                        |
// | **3. SEO (Search Engine)**  | Helps search engines understand content structure                   | No SEO benefit unless styled with classes/IDs             |
// | **4. Readability**          | Easier for developers to read & maintain                            | Less intuitive, requires comments or extra naming         |
// | **5. Purpose**              | Used to define **structure** and **content purpose**                | Used mostly for **layout** and **styling**                |






// CAN WE DISPLAY A WEB PAGE INSIDE THE ANOTHER WEBPAGE

// Yes, you can display a webpage inside another webpage — this is typically done using an <iframe> (inline frame) in HTML.





// | Feature          | `<meter>`                                       | `<progress>`                             |
// | ---------------- | ----------------------------------------------- | ---------------------------------------- |
// | Purpose          | Display a **measurement**                       | Show **task progress**                   |
// | Value type       | Known, bounded value                            | Task progress toward completion          |
// | Attributes       | `value`, `min`, `max`, `low`, `high`, `optimum` | `value`, `max`                           |
// | Use Case Example | Battery level, test score                       | File upload, loading indicator           |
// | Appearance       | Can vary by browser                             | Can vary by browser                      |
// | Native Animation | No                                              | Yes, if value is removed (indeterminate) |





//TAGES WHICH ARE USESING IN CREATEING A TABLE
// | Tag       | Meaning               |
// | --------- | --------------------- |
// | `<table>` | Wraps the whole table |
// | `<tr>`    | Table row             |
// | `<td>`    | Table data cell       |
// | `<th>`    | Table header cell     |
// | `<thead>` | Groups header rows    |
// | `<tbody>` | Groups data rows      |
// | `<tfoot>` | Groups footer rows    |





// WHAT ARE POSITION PROPERTY IN CSS
// | `position` | In Flow? | Relative To                  | Scrolls With Page? | Use Case                       |
// | ---------- | -------- | ---------------------------- | ------------------ | ------------------------------ |
// | `static`   | ✅ Yes    | Normal flow                  | ✅ Yes              | Default layout                 |
// | `relative` | ✅ Yes    | Itself (original position)   | ✅ Yes              | Nudging elements slightly      |
// | `absolute` | ❌ No     | Nearest positioned ancestor  | ❌ No               | Modals, tooltips, dropdowns    |
// | `fixed`    | ❌ No     | Viewport                     | ❌ No               | Sticky headers, floating icons |
// | `sticky`   | ✅ Yes    | Scroll container or viewport | 🔁 Depends         | Sticky nav, headings           |




//  What is box-sizing?
// The box-sizing property defines how the total width and height of an element are calculated.

//  1. content-box (Default)
// Only the content is included in width and height.

// Padding and border are added outside the specified width/height.

// 🔧 Example:
// box-sizing: content-box;
// width: 200px;
// padding: 20px;
// border: 5px solid;
// 🧠 Total width = 200 + 40 (padding) + 10 (border) = 250px

// 🔹 2. border-box
// The width and height include content + padding + border.

// This makes layout easier and more predictable.

// 🔧 Example:
// box-sizing: border-box;
// width: 200px;
// padding: 20px;
// border: 5px solid;
// 🧠 Total width remains 200px, with padding and border inside that space.

