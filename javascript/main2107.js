/**
ES6 features (2015)
 - Arrow functions //
 - Template literals //
 - Let and const
 - Destructuring // 
 - Classes
 - Modules (import and export)
 - Promises (ES6) and Async & await (ES7)
 - Generators
 - Symbols
 - Maps and Sets
 - Proxies
 - Iterators
 - Rest and spread operators // 
 - Default parameters //
*/



// 1. Template literals are string literals allowing embedded expressions
// back-ticked string

function greet(firstName, lastName) {
    // console.log("Hello " + firstName + " " + lastName); // Can't use multiple line in this way
    console.log(`Hello ${firstName} ${lastName} 
        You are ${2024 - 1993} years old`)
}


greet('Gobi', 'Sugan');

// create your own version of template literals - task(Research)


const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    address: {
        street: {
            building: {
                number: 'A-202',
                buildingName: 'Adam Building',
            },
            lane: '123 Main st',
            sector: '123',
            locality: 'Harlem'
        },
        city: 'New York',
        state: 'NY',
        zip: '10001'
    }
}

// console.log(person);
console.log(person.address.street.building.name); // log undefined

// 2. destructuring  
// - extract values from arrays, properties from objects into distinct variables

// const {name, age, city, country} = person;
// console.log(city);

const { name, age, city: personCity, country, address: { street: personStreet } } = person;
const { building: { number, buildingName } } = personStreet;
console.log(personCity); // renaming the variable city
console.log(buildingName);


const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr; // assigning the values to those variables
console.log(a, b, c, d, e);

const [first, second, , fourth,] = arr;
console.log(first, second, fourth) // if want to skip few items in the array

// 3. rest operator
// - prefixed with ..., which will cause all remaining parameters to be placed within an array
const [aa, bb, ...rest] = arr;
console.log(aa, bb, rest)


const arr1 = [1, 2, 3, 4, 5, 6, 11, 22, 33, 44, 55, 66, 77, 88, 89, 99, 123, 145, 67, 78, 43];
const [ab, ac, ad, ...restOp] = arr1; // taking the remaining elements of array grouping them into an new array
console.log(ab, ac, ad, restOp);

// swap elements in an array using destructuring
let myArr = [12, -2, 55, 68, 80];

[myArr[0], myArr[1]] = [myArr[1], myArr[0]];
console.log(myArr); // [ -2, 12, 55, 68, 80 ]

// function swapElements(arr, index1, index2) {
//     [arr[index1],arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }

// 4. Spread operator is used to expand an iterable object into the list of arguments
const original = [1, 2, 3, 4, 5]; // storing the address of the actual array
const copy = original; // Callby reference
copy.push(6);
// both having original array so will push to both
console.log(original, copy); //  [1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]


const x = 2;
const y = x; // call by value // storing the actual value of x

let m = 2;
let n = m;
m = 'Changed';
console.log(m, n); // here only m value is changed

// 4. Spread operator
const original1 = [1, 2, 3, 4, 5];
const clone = [...original1];
const obj = { ...person }; // creating a shallow copy of the object ( upto certain level s)
obj.name = "Jane smith";

console.log('----- Shallow copy ------');
console.log(obj, person); // obj.name changed where person remains same
obj.address.street.building.buildingName = 'Bob building';
console.log(obj.address.street.building, person.address.street.building); // here values changes as it a shallow copy

// why both values are same ? obj are called by reference - address is copied where value is not copied


// lodash - cloneDeep
console.log('----- Deep copy ------');
const objDeep = structuredClone(person); // creating a deep copy of the object using structured clone algorithm
objDeep.address.street.building.buildingName = 'GS building';
console.log(objDeep.address.street.building, person.address.street.building);

// shallow copy of the person object
// {name: 'John', age: 30, city: 'New York', country: 'USA'}

// function numbersSum(a, b) { // if want to pass multiple paramater a,b,c,d,....z
//     return a + b;
// }

const result = numbersSum(1, 2, 34, 34, 6, 56); // where it takes only first 2, rest are ignored 
console.log(result);

function numbersSum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const maxResult = Math.max(...[1,2,3,4,5,6,7,8,9,10]); // spread operator
console.log(maxResult);

// 5. Default parameters

function sum(a, b=2) {
    return a+b;
}

console.log(sum(10));
