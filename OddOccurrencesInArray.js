function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    function compareNumbers(a, b){
        return a - b;
    }
    
    A.sort(compareNumbers);
    //console.log(A);
    
    for(var i=0; i<A.length; i+=2){
        if(A[i]===A[i+1]) continue;
        else return A[i];
    }
    return 0;
}
