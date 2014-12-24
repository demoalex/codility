// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var impFactor = Array.apply(null, new Array(S.length)).map(Number.prototype.valueOf, 0);
    var factorPlaces = [[],[],[],[],[]];
    for(var i=0; i<S.length; i++){
        switch(S.charAt(i)){
            case 'A':
                impFactor[i] = 1;
                factorPlaces[1].push(i);
                break;
            case 'C':
                impFactor[i] = 2;
                factorPlaces[2].push(i);
                break;
            case 'G':
                impFactor[i] = 3;
                factorPlaces[3].push(i);
                break;
            // case 'T':
                // impFactor[i] = 4;
                // factorPlaces[4].push(i);
                // break;
        }
    }
    
    var res = Array.apply(null, new Array(P.length)).map(Number.prototype.valueOf, 4);
    for(i=0; i<P.length; i++){
        var strt = P[i], end = Q[i];
        for(var f=1; f<4; f++){
            var shouldBreak = false;
            for(var j=0; j<factorPlaces[f].length; j++){
                curr = factorPlaces[f][j];
                if (curr < strt) 
                    continue;
                else if (curr > end) 
                    break;
                else{
                    res[i] = f;
                    shouldBreak = true;
                    break;
                }
            }
            
            if(shouldBreak) break;
        }
    }
    
    
    // console.log(impFactor);
    // console.log(factorPlaces);
    // console.log(res);
    
    return res;
}
