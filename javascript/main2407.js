// 1. closures are functions that have access to the parent scope, even after the parent function has closer.

/**
 * JET - javascript execution task
 * whenever JET enters a new function
 * 1. It creates a new scope ( Global execution context, local execution context)
 * 2. It adds the function to the call stack
 */

function parentFn() {
    let a =10;
    // function xyz() {
    //     console.log('welcome!!');
    // }
    function childFn() {
        console.log(a);
        // console.log(xyz());
        function childNest() {
            console.log(a+2);
        }
        // function childNest1() {
        //     let b = 2;
        //     console.log(a+3);
        //     console.log(b+1);
        // }
        return childNest;
        // return {childNest, childNest1};
    }
    return childFn;
}

const output = parentFn();
// console.log(output); // print: childFn
output(); // why not printing childNest ??
const p = output();
p();

// local closure global - order



// 2. Currying - a technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

// implement a function sum() which can take the arguments as sum(2)(3)(4) => 9;

// function sum(a,b,c) { // - this throws error
//     return a+b+c;
// }

function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

function sum1(a) {
    return function(b) {
        let newA = a*2+b;
        return function(c) {
            return newA+b+c;
        }
    }
}

const sumOutput = sum(2)(3)(4);

console.log(sumOutput); // 9

const sumOutput_new = sum1(2)(3)(4);

console.log(sumOutput_new); //14

// other approach
const sumOutput1 = sum(5);
const sumOutput2 = sumOutput1(10);
const sumOutput3 = sumOutput2(15); // 30

console.log(sumOutput3);

// recursion ??

const result = (a) => (b) => (c) => a+10;

// 3. Promises are javascript objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value

// promises - async - await

// hotel order - reciept (grantee for completion - success) - promise object


/**
 * Phases of a promise
 * 1. Pending ( wrote exam - waiting for gift from dad )
 * 2. Fulfilled (Cleared exam - so getting gift from dad ) -- (resolved/success)
 * 3. Rejected (Failed exam - so no gift ) -- (rejected/failed)
 * 4. Settled (Resolved/Rejected)
 * 
 */

const outputApi = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(outputApi);


/**
 * fetch() always return a promise object
 * first fetch() returns a response object
 * response object is a stream of data
 */
const outputA = fetch('https://jsonplaceholder.typicode.com/todos/1'); // returns a promise object called creation of promise
// outputA ==> consumption of the promise object
outputA.then((response) => {
    console.log(response)
    const op = response.json(); // asyn func
    op.then((data) => console.log(data))
        .catch((error) => console.log(error));
})
.catch((error) => console.log(error)); 

/**
 * methods that return a promise object
 * fetch(), Promise.all(), Promise.race(), Promise.reject(). Promise.resolve(), Promise.any(), Promise.allSettled()
 */

let orderId = 600;

const burger = new Promise((resolve, reject) => {
    // orderId++;
    // if(orderId == 606) {
    //     resolve('Burger is ready');
    // } else {
    //     reject('Burger not ready');
    // }
    console.log('Order confirmed');
    setTimeout(() => {
        console.log('cooking...');
        resolve('Burger is ready');
    }, 1000);
})

burger.then((data) => {
    // if(orderId === 606) 
    console.log(data)
})
    .catch((error) => console.log(error));


/**  
 * ----------------------------
 * conventional promise.then() and .catch() leads to callback hell
 *  async/await is a syntactic sugar on top of promises
 *  async / await works on the concept of generator function
 * */ 


async function fetchToDo() {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const output = await response; //.json()
        console.log('.........fetch..........');
        console.log(output);
    } catch(error) {
        console.log('The error is', error);
    }
}

fetchToDo();

// if any one fails - it will not execute other lines in async/ await - in the below code

async function fetchToDo() {
    try {
        const response1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response2 = fetch('https://324jsonplaceholder.typicode.com/todos/1');
        const response3 = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const output1 = await response; //.json()
        const output2 = await response; //.json()
        const output3 = await response; //.json()
        console.log('.........fetch..........');
        console.log(output);
    } catch(error) {
        console.log('The error is', error);
    }
}

// to avoid above issue - add await before fetch if fails go to catch

async function fetchToDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const output = await response; //.json()
        console.log('.........fetch..........');
        console.log(output);
    } catch(error) {
        console.log('The error is', error);
    }
}

/**
In an async function,
1. The execution of function acts synchronously
2. await keyword waits for the promise to be a success before moving to the next line of code
3. async function returns a promise object.
4. starts off on the call stack
5.the moment it sees the await keyword, it moves to the microtask queue
 */