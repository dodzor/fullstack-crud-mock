/** 
 * Write a function that takes an object (obj) and a number (num) as arguments. 
 * Multiply all values of 'obj' by 'num'. Return the resulting object.
 */

function objectMultiplyValues(obj, num) {

    // for (let key in obj) {
    //     obj[key] *= num;
    // }
    // return obj;

    // return Object.entries(obj).reduce((acc, [key, value]) => {
    //     return { ...acc, [key]: value * num };
    // }, {}); O(n²)


    return Object.keys(obj).reduce((acc, curr) => {
        acc[curr] = obj[curr] * num;
        return acc;
    }, {});
}

console.log(objectMultiplyValues({a:1,b:2,c:3},3)) //{a:3,b:6,c:9}
console.log(objectMultiplyValues({j:9,i:2,x:3,z:4},10)) //{j:90,i:20,x:30,z:40}
console.log(objectMultiplyValues({w:15,x:22,y:13},6)) //{w:90,x:132,y:78}