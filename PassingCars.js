function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var suff = Array.apply(null, new Array(A.length+1)).map(Number.prototype.valueOf, 0);
    for(var i=1; i<A.length+1; i++){
        suff[i]=suff[i-1]+A[A.length-i];
    }
    
    var sum=0;
    for(i=0; i<A.length; i++){
       sum += A[i] === 0 ? suff[A.length-i] : 0 ;
    }
    
    return sum > 1000000000 ? -1 : sum; // 1000,000,000 -- boundary from task
}