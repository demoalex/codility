// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var h = [H[0]], blocks = 0;
    var highest = H[0];
    for(var i=1; i<H.length; i++){
        var curr = H[i];
        
        while(h.length){
            var hh = h.pop();
            if(curr<hh){
                blocks++;
            }else if(curr>hh){
                h.push(hh);
                break;
            }else{
                break;
            }
            //console.log(h);
        }
        h.push(curr);
        
        //console.log(i+":("+blocks+") "+h);
    }
    
    
    return blocks+h.length;
}
