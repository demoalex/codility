// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(N) {
    if(N===1) return 1;
    // write your code in JavaScript (ECMA-262, 5th edition)
    var sqr = Math.floor(Math.sqrt(N));
    var factors = 2;
    
    for(var i=2; i<=sqr; i++)
        if(N%i === 0) factors += 2;
    if(sqr*sqr === N) factors--;
    
    return factors;
}
