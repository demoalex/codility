// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');
// this gives us only 50% correctness, 28% performance which totals to 38% :((

/*
http://stackoverflow.com/questions/20660989/max-double-slice-sum
Elegant and correct solution:
You can use a modified form of Kadane's algorithm that calculates the MAX Sum subarray ending at each index.

1. For each index, calculate the max_sum_ending_at[i] value by using Kadane's algorithm in forward direction.
2. For each index, calculate the max_sum_starting_from[i] value by using Kadane's algorithm in reverse direction.
3. Iterate these arrays simultaneously and choose the 'Y' that has the maximum value of

max_sum_ending_at[Y-1] + max_sum_starting_from[Y+1]

Think twice before coding!
*/

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    // find max slice first with coordinates X and Z
    var ms = 0, me = Math.max(0, A[1]), x=0, z=2, x_new=0, z_new=0;
    if(me === 0){
        x = 1;
        x_new = 1;
    }
    //console.log("1: (x, z): ("+x+", "+z+") with me: "+me+" and sum: "+ms);
    for(var i=2; i<A.length-1; i++){
        me = Math.max(0, me+A[i]);
        ms = Math.max(me, ms);
        
        if(me === 0){
            x_new = i-1;
            z_new = i;
        }else
            z_new = i+1;
            
        if(ms === me){
            x = x_new;
            z = z_new;
        }
        
        //console.log(i+": (x, z): ("+x+", "+z+") with me: "+me+" and sum: "+ms);
    }
    //console.log("(x, z): ("+x+", "+z+") with sum: "+ms);
    
    var extract = 0;
    // to find Y we extract worse part from X-Z slice.
    var rest_ending = 0, rest_min = 0;
    for(i=x+1; i<z; i++){
        rest_ending = Math.min(0, rest_ending+A[i]);
        rest_min = Math.min(rest_ending, rest_min);
    }
    //console.log("min: "+rest_min);
    extract = rest_min;
    
    // if nothing to extract we search for outside [] slice
    if(rest_min === 0)
        if((x>0) || (z<A.length-1))
            return ms;
    // if X=0 and Z=N-1, then we choose min val form whole array to extract
        else {
            extract = A[1];
            for(i=2; i<A.length-1; i++)
                extract = Math.min(extract, A[i]);
        }
    
    //console.log("ext: "+extract);
    return ms-extract;
}
