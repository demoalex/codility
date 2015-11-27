/**
*   https://app.devdraft.com/#!/workspace/fb4a2d0f-effb-4a8d-a3e8-f7c90d7a87b4
*/

var attractionVisitor = function(input) {
    var aNum = 0,       // number of attractions
        times = [],     // times to go from i to i+1 atrraction
        qNum = 0,       // number of queries
        queries = [],   // queries
        summation = []; // times summation we'll use for fast calculating paths in O(1)

    if (input && input.constructor === Array) {
        var l = input.shift();
        aNum = l[0];
        times = input.shift();

        l = input.shift();
        qNum = l[0];

        while(input.length){
            var a = input.shift();
            queries.push({
                attractions: a[0],
                order: input.shift()
            });
        }

        var s = 0;
        summation = times.map(function(a){
            s += a;
            return s;
        });
    }

    /**
     * @param a < b
     * @returns {number}
     */
    function _clockwise(a, b){
        return summation[b-1] - (a > 0 ? summation[a-1] : 0)
    }

    /**
     * @param a < b
     * @returns {number}
     */
    function _xclockwise(a, b){
        return summation[summation.length - 1] - _clockwise(a, b);
    }

    function minPath(a, b){
        if(a == b) return 0;
        if(a < b) return Math.min(_clockwise(a, b),_xclockwise(a, b));
        if(a > b) return Math.min(_clockwise(b, a),_xclockwise(b, a));
    }

    function solveQuery(q){
        var prev = q[0];
        return q.reduce(function(sum, current){
            var res = sum + minPath(prev, current)
            prev = current;
            return res;
        });
    }

    return {
        solve: function(){
            var res = [];
            queries.forEach(function(q){
                res.push(solveQuery(q.order));
            });

            return res;
        },
        clockwise: _clockwise,   // make public for tests
        xclockwise: _xclockwise, // make public for tests
        showData: function(){
            return JSON.stringify({
                aNum: aNum,
                times: times,
                qNum: qNum,
                queries: queries,
                summation: summation
            });
        }
    };
};

if(typeof process !== 'undefined'){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    var input = [];
    var lingeringLine = "";

    process.stdin.on('data', function(chunk) {
        var lines = chunk.split("\n");

        lines[0] = lingeringLine + lines[0];
        lingeringLine = lines.pop();

        lines.forEach(function(l, i){
            input.push(l.split(' ').map(function(n){return parseInt(n, 10);}));
        });
    });

    process.stdin.on('end', function() {
        input.push(lingeringLine.split(' ').map(function(n){return parseInt(n, 10);}));

        var advice = new attractionVisitor(input);
        var res = advice.solve();
        res.forEach(function(a){
            process.stdout.write(a+"\n");
        });
    });

}
