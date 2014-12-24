function solution(N, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var counters = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, 0);
    var max = 0; last_max = 0;
    var opp=0;
    
    for(var i=0; i<A.length ; i++){
        if(A[i] < N+1){
            counters[A[i]-1] = counters[A[i]-1] >= last_max ? counters[A[i]-1]+1 : last_max+1;
            max = counters[A[i]-1] > max ? counters[A[i]-1] : max;
        } else {
            last_max = max;
        }
    }
    
    for(i=0; i<N; i++){
        counters[i] = counters[i] >= last_max ? counters[i] : last_max;
    }
    
    return counters;
}