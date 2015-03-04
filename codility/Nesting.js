// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    if(!S.length) return 1;
    
    var opened = 0;
    for(var i=0; i<S.length; i++){
        if(S.charAt(i) === '(')
            opened++;
        else
            opened--;
            
        if(opened < 0) return 0;
    }
    
    return opened !==0 ? 0 : 1;
}
