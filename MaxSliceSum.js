// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    // max slice for arrays with some positive integers
    var max_slice = 0, max_ending = 0;
    for(var i=0; i<A.length; i++){
        max_ending = Math.max(0, max_ending+A[i]);
        max_slice = Math.max(max_slice, max_ending);
    }
    
    // maximum for arrays with only negative integers
    var max_num = A[0];
    for(i=1; i<A.length; i++)
        max_num = Math.max(max_num,A[i]);

    return max_num < 0 ? max_num : max_slice;
}
