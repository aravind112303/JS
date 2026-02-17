let result = [1,2,3,4,5,6];
console.log(result);

//Array methods

let arr =[1,2];
arr.push(3);
console.log(`Push : ${arr}`);

arr.pop();
console.log((`Pop : ${arr}`));

arr.shift();
console.log(`Shift removes first element: ${arr}`);

arr.unshift(3);
console.log(`Unshift adds element at first: ${arr}`);

let idx = arr.indexOf(3);
console.log(`To find index: ${idx}`);

let exist = arr.includes(3);
console.log((`To check existence: ${exist}`));

let a=[1,2]
let b =[3,4]
console.log(a.concat(b));
console.log(`Reverse an array: ${a.reverse()}`);

const animals = ['ant', 'bison','camel','duck','elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(-1));
console.log(animals.slice());

const months =['Jan', 'Mar', 'April','June'];
console.log(months.splice(1,0,"Feb"));
console.log(months);

console.log(months.splice(2,1));
console.log(months);

console.log(months.sort()); //sorts in aphabetical order














