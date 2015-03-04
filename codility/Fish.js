// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var flow=[], alive = A.length;
    for(var i=0; i<A.length; i++){
        var foe = A[i], dir = B[i];
        // dir == 1 -- push to flow
        // dir == 0 -- "eats" our flow
        
        if(dir === 1)
            flow.push(foe);
        else
            while(flow.length){
                var fish = flow.pop();
                if(fish>foe){
                    alive--;
                    flow.push(fish);
                    break;
                }else
                    alive--;  
            }
    }
    
    return alive;
}
