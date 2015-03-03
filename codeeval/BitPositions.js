/**
*   https://www.codeeval.com/open_challenges/19/
*   also
*   https://www.codeeval.com/open_challenges/27/
*/

var numToBinaryReversed = function(n){
    res = "";

    while (n > 1){
        res += (n%2);
        n = Math.floor(n/2);
    }
    res += n;

    return res;
};

var numToBinary = function(n){
    return numToBinaryReversed(n).split('').reverse().join('')
}

var bitPos = function(num, p1, p2){
    num = numToBinaryReversed(num);
    p1 = num[p1-1];
    p2 = num[p2-1];

    return p1 === p2;
};

if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var filename = process.argv[2] ? process.argv[2] : "BitPositions.txt";


    fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
        if (line !== "") {
            answer_line = bitPos.apply(null, line.split(','));
            //do something here

            console.log(answer_line);
        }
    });
}
