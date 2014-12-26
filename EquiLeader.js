// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    if(A.length < 2) return 0;
    
    var stack = [];
    
    for(var i=0; i < A.length; i++){
        if(!stack.length)
            stack.push(A[i]);
        else{
            var curr = stack.pop();
            if(curr === A[i]){
                stack.push(curr);
                stack.push(A[i]);
            }
        }
    }
    
    var candidate = 0;
    if(stack.length) candidate = stack[0];
    else return 0;
    
    var pref = Array.apply(new Array(A.length)).map(Number.prototype.valueOf, 0);
    var count = 0;
    for(i=0; i < A.length; i++){
        if(A[i] === candidate){
            count++;
        }
        pref[i] = count;
    }
    if(count <= A.length/2) return 0;
    
    var l =pref.length, total = count;
    count = 0;//use count to count equi leaders num now
    for(i=0; i<l-1; i++){
        var left = pref[i] > (i+1)/2 ? true : false;
        var right = (total-pref[i]) > (l-i-1)/2 ? true : false;
        var equi = left && right;
        
        if(equi) count++;
        //console.log(i+": "+pref[i]+" of "+(i+1)+" && "+(total-pref[i])+" of "+(l-i-1)+" "+equi);
    }
    
    return count;
}
