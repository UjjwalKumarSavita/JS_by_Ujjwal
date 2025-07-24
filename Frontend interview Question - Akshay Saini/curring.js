// function is done via two ways 
// 1. bind method 
// 2. closure property

// 1::  Bind method
let multiply = function(x,y){
    console.log(x * y);

}

multiply(4 , 6);

let multiplyByTwo = multiply.bind(this, 3); // this bind method copy multiply mehtod with first argument to first  vale ko 
multiplyByTwo(10);


// 2 :: closure
function ab(x){
    return function(y){
        if(y !== undefined) return x*y;
        else return x ;    
    }
}
// let multilyBYThree = ab(3);
// console.log(multilyBYThree(3));
console.log(ab(9)(3)(4)(5)());