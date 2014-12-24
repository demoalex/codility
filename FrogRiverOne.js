function solution(X, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var places = Array.apply(null, new Array(X)).map(Number.prototype.valueOf,0);
    var path = 0; minutes = 0;
    for(var i = 0; i < A.length; i++){
        if(A[i]>X) continue;
        
        places[A[i]-1]++ === 0 ? path++ : 0;
        
        if(path === X) return minutes;
        minutes++;
    }
    
    return -1;
}