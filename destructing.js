// num equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
let num = process.argv.slice(2);
let g={};
// I don't need the first element
[  ,g.username,g.email]=num;
console.log(g);
   
