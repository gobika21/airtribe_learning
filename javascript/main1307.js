// javascript 

let arr = [1,2,3];

arr.x = 2;

console.log(arr);


const arr1 = [1,2,3,4,5,6,7,8,9]

console.log(arr1)

// reverse the string as a prototype in DSA

Array.prototype.reverseString = function () {
    console.log("Reversed")
}

arr1.reverseString()


Array.prototype.anarchyLength = function () {
    console.log(this.length + 4);
}

Array.prototype.slice = function () {
    console.log(this.length + 4);
}

const x = arr.slice();
console.log(x);

arr.length()

arr.slice()



// ------------------------



var a = 10;
function b() {
    a=11; // reinitialize a to 11
    return a;
    function a() {
        console.log(a); // 10
    }
}

console.log(b());
console.log(a);