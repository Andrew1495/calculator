
let a = 5
let b = 10
let sign = `*`
let sum;

operate(a,sign,b);




function add(a,b){
 return a + b;
  
}
  
function subtract(a,b) {
 return a - b;
}
  
function multiply(a,b){
  return a*b;
}

function divide (a,b){
 return a/b;
}

function operate(a,sign,b){
  if (sign === `+`){
    let sum = add(a,b);
    console.log(sum);
     return sum;
  }else if (sign === `-`){
    let sum = subtract(a,b);
    console.log(sum);
    return sum;
  }else if (sign === `*` ){
    let sum = multiply(a,b);
    console.log(sum);
    return sum;
  }else if(sign === `/`){
    console.log(sum);
    let sum = divide(a,b);
    return sum;
  }}
