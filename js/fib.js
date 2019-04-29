'use strict';

function fib(n){

//1. Validation check 

    //a) boolean
    if (typeof n === "boolean"){
        throw new Error('Invalid input (boolean): ' + n);
    }
    //b) empty value
    if (typeof n === "undefined") {
        throw new Error('Invalid input (empty value)');
    } 

    //b) not a number
    if (typeof n !== 'number') {
        throw new Error('Invalid input type (not a number): ' + n);
    }

    //c) not integer
    if (!Number.isInteger(n)){
        throw new Error('Invalid input (not integer): ' + n);
    }

    //d) negative number
    if (n < 0){
        throw new Error('Invalid input (negative number): ' + n);
    }

//2. In the Fibonacci sequence the 1st number is equal to 0, the 2nd is equal to 1 and each next is the sum of the two preceding ones.
    //a) first number
    if (n === 0) {
        return [n];
    } 
    //b) second number
    if (n === 1) {
        return [0, n];
    } 

//3. create an array
    const fib = [0, 1];

//4. push new fibonacci numbers until reaching the value given in the input parameter

    for (let i = 0; i < (n-1); i++) {
        //implement a formal formula for the Fibonacci sequence
        fib.push(fib[fib.length-1] + fib[(fib.length) - 2]); 
      }
    
    return fib;
}

module.exports = fib;


