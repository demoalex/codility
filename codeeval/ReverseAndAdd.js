/**
*   https://www.codeeval.com/open_challenges/45/
*/

var isPalindrome = function(num){
    return num === Number(num.toString().split('').reverse().join(''));
};

var reverseAndAdd = function(num){
    var res = {},
        iterNum = 0,
        currNum = num;

    if (num >= 10000) {
        res.error = "Input number isn't < 10000";
        return res;
    }

    while(iterNum < 100){
        var reversed = Number(currNum.toString().split('').reverse().join(''));
        iterNum++;
        if(isPalindrome(reversed+currNum)){
            res.iterNum = iterNum;
            res.palindrome = reversed+currNum;
            break;
        } else {
            currNum += reversed;
        }
    }

    if (iterNum >= 100) {
        res.error = "Iterations number exceed 100";
        return res;
    }

    return res;
};

if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var filename = process.argv[2];


    fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
        if (line !== "") {
            var out = reverseAndAdd(Number(line));
            if(out.error){
                console.log('');
                return;
            }

            var answer_line = out.iterNum+" "+out.palindrome;
            //do something here

            console.log(answer_line);
        }
    });
}
