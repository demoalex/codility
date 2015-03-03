/**
*   https://www.codeeval.com/open_challenges/44/
*/

// var nextNum = function(n){
//     // var digitCount = Array.apply(new Array(9)).map(Number.prototype.valueOf, 0);
//     var digitCount = Array.apply(null, new Array(9)).map(Number.prototype.valueOf,0),
//         N = n.toString().split('');
//
//     while (n > 9){
//         var mod = n%10;
//         if(mod) digitCount[mod-1]++;
//         n = Math.floor(n/10);
//     }
//     if(n) digitCount[n-1]++;
//
//
//     console.log(N);
//     return digitCount;
// };

Array.prototype.calc = function(){
    var res = this.reverse().reduce(function(a,b,i){
        return Number(a)+Number(b)*Math.pow(10,i);
    });
    return res;
};

var nextNum = function(n){
    // var digitCount = Array.apply(new Array(9)).map(Number.prototype.valueOf, 0);
    n = (n.constructor === Array) ? n : n.toString().split('');

    if(n.length > 1){
        var NN = nextNum(n.slice(1,n.length));

        if([n[0]].concat(NN).calc() > NN.calc()) console.log([n[0]].concat(NN).calc());
        return [n[0]].concat(NN);
    } else {
        return [n[0], 0];
    }

    console.log(n.calc());
};

if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var filename = process.argv[2];


    fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
        if (line !== "") {
            answer_line = nextNum(line);
            //do something here

            console.log(answer_line);
        }
    });
}
