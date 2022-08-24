//function declaration 
function add(first, second) {
    const total = first + second;
    return total;
}

// Function Expresstion 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

//Anonymous  expression
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

//Arrow function with double parameter

const addByArrowFunction = (first, second) => first + second;
const subByArrowFunction = (first, second) => first - second;

const resultOfSub = subByArrowFunction(50, 49);
const resultOfAdd = addByArrowFunction(50, 49);
console.log(resultOfAdd, resultOfSub);
