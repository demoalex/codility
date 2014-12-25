// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var h = [H[0]], blocks = 1;
    var highest = H[0];
    for(var i=1; i<H.length; i++){
        var curr = H[i];
        
        var new_h = [curr];
        for(var j=0; j<h.length; j++){
            if(curr>h[j]){
                new_h.push(h[j]);
                blocks++;
            }else if(curr<h[j]){
                blocks++;
            }
        }
        h = new_h;
        console.log(i+":("+blocks+") "+h);
        
    }
    
    
    return blocks;
}
