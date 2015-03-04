function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var N = A.length;
    
    return N ? (N+1)*(N+2)/2 - A.reduce(function(a,b){return a+b}) : 1;
}