'use strict'

function mainFunction(callback){
    let firstNumber=+prompt('Input first  number');
    let secondNumber=+prompt('Input second number');
  return callback(firstNumber,secondNumber);
}

function exponentiation(firstNumber,secondNumber){
    let result=Math.pow(firstNumber,secondNumber);

   return alert(result);

}
mainFunction(exponentiation);

function multiplay(firstNumber,secondNumber){
  let result=firstNumber * secondNumber;
  return alert(result)}

mainFunction(multiplay);

  function division(firstNumber,secondNumber){
    let result=firstNumber/secondNumber;
    return alert(result)}
    
    mainFunction(division);



  function modulo(firstNumber,secondNumber){
   let result=firstNumber % secondNumber;
    return alert(result)}
        
     mainFunction(modulo);



