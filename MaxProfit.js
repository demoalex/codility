// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var mprofit = 0;
    var mending = 0;
    var start = 0;
    
    for(var i=0; i<A.length; i++){
        mending = Math.max(0, A[i] - A[start]);
        mprofit = Math.max(mprofit, mending);
        start = mending === 0 ? i : start;
    }
    
    return mprofit;
}
