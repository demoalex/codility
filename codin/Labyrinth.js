'use strict';

var Gift = function(input){
    var oods = input[0];
    var giftPrice = input[1];
    var budgets = input.slice(2).sort(function(a, b){ return a > b; });

    var sum = 0;
    for(var i = 0; i < oods; i++){
        sum += budgets[i];
        if(sum > giftPrice) break;
    }
    if(sum < giftPrice) return 'IMPOSSIBLE';


    var res = [], sum = giftPrice, leftOods = oods;
    var democratic = Math.floor(sum / leftOods);
    var rest = giftPrice % oods;

    while(budgets.length){
        var currB = budgets.shift();
        leftOods = budgets.length;
        if(currB < democratic){
            res.push(currB);
            sum -= currB;
            democratic = Math.floor(sum / leftOods);
        } else {
            res.push(democratic);
            sum -= democratic;
            democratic = Math.floor(sum / leftOods);
        }
    }

    return res;
};

module.exports = exports = Gift;
