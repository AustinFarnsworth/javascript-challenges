// BMI cacluator

// Test data 1 
// let markMass = 78;
// let johnMass = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// Test data 2 
let markMass = 95; 
let johnMass = 85; 

let markHeight = 1.88;
let johnHeight = 1.76;


const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2. 

let markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);

// Coding Challenge 2

if (markHigherBMI === true) {
    console.log("Marks BMI is higher than Johns");
} else {
    console.log("Johns BMI is higher than Marks");
}