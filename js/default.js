// function add(first, second) {
//     second = second || 0;
//     if (second === undefined) {
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }

//  we can set default parameter value
function add(first = 0, second = 1) {
    const total = first * second;
    return total;
}
const result = add(10);
console.log(result);


