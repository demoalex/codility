
module.exports = exports = function(_rule){
    var _data = [],
        _rule = _rule ? _rule : { comparator: "a <= b"};

    var compare = function(wat, wit){
        // if(!wat[_rule.element] || !wit[_rule.element])
        //     return false;

        var estr = "var a = "+JSON.stringify(wat)+"; var b = "+JSON.stringify(wit)+"; "+_rule.comparator;
        // console.log(estr, eval(estr));
        return eval(estr);
    };

    return {
        length: 0,
        pop: function(){
            this.length--;
            return _data.pop();
        },
        push: function(el){
            var high = _data.length - 1,
                low = 0,
                ind;

            // if(high>1) console.log(compare(el,_data[1]))
            // console.log(el);
            while(high >= low){
                ind = Math.floor((high+low)/2);
                // if(compare(el,_data[ind])){
                //     // console.log(high, ind, "here");
                //     high = ind;
                // } else {
                //     // console.log(low, ind, "here");
                //     low = ind;
                // }

                // console.log(high, ind, low, el[2], _data[ind][2]);
                if(compare(el,_data[ind])){
                    // console.log(high, ind, "here");
                    low = ind+1;
                    ind = low;
                } else {
                    // console.log(low, ind, "here");
                    high = ind-1;
                    ind = high+1;
                }

            }

            _data.splice(ind, 0, el);
            this.length++;
            //console.log(_data);
        },
        _getData: function(){
            return _data;
        },
    };
}
