function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var counter = Array.apply(null, new Array(A.length)).map(Number.prototype.valueOf,0);
    for(var i=0; i<A.length; i++){
        if(A[i] > A.length || A[i] < 1) continue;
        counter[A[i]-1]++;
    }
    
    for(i=0; i<A.length; i++){
        if(counter[i] === 0) return i+1;
    }
    
    return A.length+1;
}