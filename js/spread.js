const max = Math.max(12, 214, 36, 45);
// console.log(max);

//we can get a number from array by use three dot ...
const numbers = [12, 741, 654.321, 521];
const largest = Math.min(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(215);
numbers2.push(215);
numbers2.push(215);
numbers2.push(215);
console.log(numbers);
console.log(numbers2);
