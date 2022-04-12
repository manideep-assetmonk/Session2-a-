var inputs= process.argv.slice(2);
/* 
  Map all incoming strings to their first character
 Reducing the result by concatenating them together   */ 
var result=inputs.map((inputs)=>inputs[0]).join('');
console.log(`[${inputs}] becomes \"${result}"`);


