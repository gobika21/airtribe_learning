const arr = [1,2,3,4,true, false];

let sum = 0;

for(let i=0; i<arr.length; i++) {
    sum +=arr[i];
}

console.log(sum)

let result = 6 + "6";
console.log(result); // 66
console.log(typeof result);

// string/boolean/number + string = string(concatenation)
let result1 = true + true + 1 + "6";
console.log(result1); // 36
console.log(typeof result1);

// boolean + number = number(addition

let result3 = "6" + true + true + 1;
console.log(result3); // 6truetrue1
console.log(typeof result3);


let result4 = "25" + 5 - true;
console.log(result4); // 254
console.log(typeof result4);

let result5 = "25" - 5;
console.log(result5); // 20
console.log(typeof result5);

let result6 = "abc" - 5;
console.log(result6); // Nan
console.log(typeof result6);

let result7 = true + 1 + "hello" / "5"; // "hello" * "5"
console.log(result7); // Nan
console.log(typeof result7);

let result9 = true + 1 + "255" / "5";
console.log(result9); // 53
console.log(typeof result9);

let result8 = "abc" - "5";
console.log(result8); // Nan
console.log(typeof result8);

let result10 = "6" + [];
console.log(result10); // 6
console.log(typeof result10); //string

let result11 = "6" + [1,2,3];
console.log(result11); // 61,2,3
console.log(typeof result11); //string

let result12 = "6" + [1,2,3] + "hello" - true + 22;
console.log(result12); // Nan
console.log(typeof result12); //number

// 61,,2,3 + "hello" - true + 22
// "61,2,3hello" - true + 22
// "61,2,3hello" - 23
// NaN

let result13 = "6" + [1,2,3] + "hello" - true + "22";
console.log(result13); // Nan22
console.log(typeof result13); //string

/**
 * 1. string/boolean/number + string = string(concatenation)
 * 2. boolean + number = number(addition)
 * 3. boolean + boolean = number(addition)
 * 4. string+ number - boolean = number(sub)
 * 5. evaluate left to right - 
 * In case of arthmetic operation apart from + and having higher precedence than +, 
 * evaluate using BOOMAS and only if the two operands are actually a number.
 */



// ------------------------


console.log("hello world"); // s
let name = "airtribe";

function addName() {
    name = name + "session"
} // s

addName(); // s
setTimeout(() => console.log("setTimeout part 1"), 3000); //a
setTimeout(() => console.log("setTimeout part 2"), 2000); //a

console.log("I am here"); //s


function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

// wait(6000); // unresponsive script for 6 sec
// showPopup();

setTimeout(showPopup, 6000); // - this works  good