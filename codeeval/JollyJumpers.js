/**
*   https://www.codeeval.com/open_challenges/43/
*/

var trailingString = function(str, trail){
    return str.indexOf(trail) !== -1 && str.indexOf(trail)+trail.length === str.length;
}

var prepareInput = function(line){
    return line.split(',');
}

if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var filename = process.argv[2];


    fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
        if (line !== "") {
            answer_line = trailingString.apply(null, prepareInput(line)) ? '1' : '0';
            //do something here

            console.log(answer_line);
        }
    });
}
