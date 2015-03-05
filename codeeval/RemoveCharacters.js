/**
*   https://www.codeeval.com/open_challenges/13/
*/

var removeCharacters = function(str, rules){
    rules.forEach(function(r){
        str = str.replace(new RegExp(r, 'g'), '');
    });

    return str;
}

var prepareInput = function(line){
    line = line.split(',').map(function(s){ return s.trim(); });

    var rules = [];

    for (var i = 0; i < line[1].length; i++) {
        if (rules.indexOf(line[1][i]) === -1) {
            rules.push(line[1][i]);
        }
    }

    line[1] = rules;
    return line;
}

if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var filename = process.argv[2];


    fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
        if (line !== "") {
            answer_line = removeCharacters.apply(null, prepareInput(line));
            //do something here

            console.log(answer_line);
        }
    });
}
