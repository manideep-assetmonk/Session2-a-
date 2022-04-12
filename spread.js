/**
* process.argv property return and array containing the arguments passing to the process when it run in comand line.
**/
let a=process.argv.slice(2);
var min=Math.min(...a)

console.log(`The minimum of [${a}] is ${min}`);
