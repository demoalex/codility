// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    function compareNumbers(a, b)
    {
        return a - b;
    }
    
    A.sort(compareNumbers);
    
    for(var i=0; i<A.length-2; i++){
        if( A[i] + A[i+1] > A[i+2] ) return 1;
    }
    
    return 0;
}
