function solution(A, B, K) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var a = Math.ceil(A/K)*K, b = Math.floor(B/K)*K;
    return 1+(b-a)/K;
}