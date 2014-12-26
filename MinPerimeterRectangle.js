// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var a = Math.ceil(Math.sqrt(N));
    var min = Math.max(N*N,10);
	
    for(var i=1; i<=a; i++){
        if(N%i === 0){
            min = Math.min(min, 2*(i+N/i));
        }
    }
    return min;
}