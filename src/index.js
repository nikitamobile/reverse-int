module.exports = function reverse (n) {

let input = n;    
var positive = Math.abs(input);
let myFunc = num => Number(num);  
var arr = Array.from(String(positive), myFunc);
rev = arr.reverse();


arrInt = Number(rev.join(''));

return(arrInt);
  
}


/*

let input = 170;

var positive = Math.abs(input);
let myFunc = num => Number(num);  
var arr = Array.from(String(positive), myFunc);
reverse = arr.reverse();

arrInt = Number(reverse.join(''));

console.log(arrInt);


*/