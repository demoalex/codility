/**
*   https://app.devdraft.com/#!/workspace/3096ce4f-1f08-437d-bb11-f5bde2e9c6a7
*   Same task with minimization of line exchange movements
*/

var planYourTrip = function(input) {
    var inf = Infinity;
    var K = 0,
        D = 1,
        X = 0,
        Lines = [];

    if (input && input.constructor === Array) {
        var l = input.shift();
        K = l[0];
        D = l[1];
        X = l[2];

        while(input.length){
            input.shift();
            Lines.push({
                stops: input.shift(),
                prices: input.shift()
            });

            Lines[Lines.length-1].prices.reduce(function(a,b,i) {
                Lines[Lines.length-1].prices[i] = a+b;
                return a+b;
            });
        }
    }

    var Dijkstra = function(Lines){
        var minPrice = {
                lineNum: -1,
                stopNum: 1,
                lineCrosses: 0,
                price: inf
            },
            res = 0,
            savedPrices = [];

        Lines.forEach(function(l,i){
            savedPrices.push({
                lineNum: i,
                stopNum: 1,
                lineCrosses: 0,
                price: l.prices[0]
            });

            if(minPrice.price > l.prices[0]){
                minPrice = savedPrices[savedPrices.length-1];
            }
        });

        while(Lines[minPrice.lineNum].stops[minPrice.stopNum] !== D){
            var nextNode = {
                    lineNum: -1,
                    stopNum: 1,
                    lineCrosses: 0,
                    price: inf
                };

            // minPrice
            // TODO: all lines share same stop
            savedPrices.forEach(function(node) {
                if(node.completed) return;

                if(node.lineNum === minPrice.lineNum){
                    node.completed = true;
                    // TODO: next stop
                    var newNode = {
                        lineNum: node.lineNum,
                        stopNum: node.stopNum+1,
                        lineCrosses: node.lineCrosses,
                        price: node.price +  Lines[node.lineNum].prices[node.stopNum]-Lines[node.lineNum].prices[node.stopNum-1]
                    };
                    savedPrices.push(newNode);
                    if (nextNode.price > newNode.price){
                        nextNode = newNode;
                    }

                    return;
                }

                if(Lines[node.lineNum].stops[node.stopNum] === Lines[minPrice.lineNum].stops[minPrice.stopNum]){
                    if(minPrice.lineCrosses + 1 <= X) {
                        var newNode = {
                            lineNum: node.lineNum,
                            stopNum: node.stopNum,
                            lineCrosses: minPrice.lineCrosses + 1,
                            price: minPrice.price
                        };

                        savedPrices.push(newNode);
                        if (nextNode.price > newNode.price){
                            nextNode = newNode;
                        }
                    }
                }

                if(!node.completed && nextNode.price > node.price){
                    nextNode = node;
                }
            });

            // TODO: update minPrice
            minPrice = nextNode;
            // console.log(minPrice);
            // console.log(savedPrices);
        }

        return minPrice.price;
    };

    return {
        solve: function(){
            if(K === 1){
                return Lines[0].prices.pop();
            }

            if(K > 1){
                return Dijkstra(Lines);
            }
        },
        showData: function(){
            return JSON.stringify({
                linesNum: K,
                distance: D,
                lines: Lines
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
        //console.log(input);
        //
        var plan = new planYourTrip(input);
        console.log(plan.solve());
    });


}
