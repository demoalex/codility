// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    if(A.length === 0) return 0;
    if(A.length === 1) return 1;
    
    function compareNumbers(a, b)
    {
        return a - b;
    }

    A.sort(compareNumbers);
    
    var d = 0;
    for(var i=0; i<A.length-1; i++) if(A[i]!=A[i+1]) d++;
    return d+1;
}
