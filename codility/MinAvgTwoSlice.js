
// [2, 5, 1, 5, 8]
// [5, 1, 5, 8]
// [-2, -1, -3, 5, 5, -4, 0]
// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var pref = Array.apply(null, new Array(A.length+1)).map(Number.prototype.valueOf, 0);
    for(var i=1; i<A.length+1; i++){
        pref[i]=pref[i-1]+A[i-1];
    }
    
    //console.log(pref);
    var min_avg = pref[A.length]/A.length, place = 0;
    for(i=0; i<A.length-1; i++){
        var s = i+": ";
        for(var j=2; j<A.length+1-i && j<4; j++){
            var h = (pref[i+j]-pref[i])/j;
            
            if( h < min_avg ){
                min_avg = h;
                place = i;
            }
            s += h+", ";  
        }
        //console.log(s);
    }
    
    //console.log("min: "+min_avg+" place: "+place);
    return place;
}
