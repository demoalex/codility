// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var stack = [], place = -1;
    
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
    
    var candidate = 0, count = 0;
    if(stack.length) candidate = stack[0];
    else return place;
    
    for(i=0; i < A.length; i++)
        if(A[i] === candidate){
            count++;
            place = place === -1 ? i : place;
        }
        
    if(count <= Math.floor(A.length/2))
        place = -1;
    
    return place;
}
