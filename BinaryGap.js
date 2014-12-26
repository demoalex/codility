// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var gap = 0, new_gap = 0;
    var e2 = Math.pow(2,Math.floor(Math.log(N)/Math.log(2)));
    var bin ="";
    while(N){
        if (N >= e2){
            N -= e2;
            bin += "1";
            gap = Math.max(new_gap, gap);
            new_gap = 0;
        } else {
            bin += "0";
            new_gap++;
        }
        
        e2 /= 2;
        
        //console.log(bin);
    }
    
    return gap;
}
