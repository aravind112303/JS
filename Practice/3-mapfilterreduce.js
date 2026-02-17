// Given an array of numbers:

// Filter only even numbers

// Square those numbers

// Find the sum of the squared values


const numbers = [1,2,3,4,5,6,7,8,9]

console.log(numbers.filter((number) => number%2 === 0).map((number) => number*number).reduce((sum,num) => sum+num,0));

