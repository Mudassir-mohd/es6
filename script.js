// 1. Let & Const
function testScope() {
    let x = 10;
    if (true) {
        let x = 20; 
        console.log(x); 
    }
    console.log(x);
}
testScope();

// CONST
const person = { name: "mudassir", age: 23 };
person.age = 26; 
console.log(person); 



// 2. Arrow Functions
let add = (a, b) => a + b;
console.log(add(5, 10)); 

// this
let person2 = {
    name: "Alice",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};
person2.greet(); 


// 3. Template Literals
let message = `Hello,
This is a multi-line string
using template literals!`;
console.log(message);

const name = "mudassir";
const age = 23;
console.log(`My name is ${name} and I am ${age} years old.`);


// 4. Destructuring Assignment
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first, second); 



// 5. Spread & Rest Operators
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); 

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));



// 6. Map, Filter, Reduce
// map
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num ** 2);
console.log(squared); 

// filter
let nums = [10, 20, 30, 40];
let filtered = nums.filter(num => num > 20);
console.log(filtered);

// reduce
let prices = [10, 20, 30];
let total = prices.reduce((acc, price) => acc + price, 0);
console.log(total); 


// 7. Promises & Async/Await
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
};
fetchData().then((data) => console.log(data));

// async/await
async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData();

