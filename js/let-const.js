/*
1. ES6 means that ECMAScript version 6.
2. ES is developed by TC-39 group of people
3. let = let is to reassign
4. const = do not allow to reassign

*/

let money = 25;
money = 50;
console.log(money);

// this will give you TypeErroe
const name = 'Shubho';
// console.log(name);

// But we can reuse const value like--

const user = 'Shubho';
const userName = user + 'Ahmed';
console.log(userName);
