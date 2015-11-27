/**
*   https://app.devdraft.com/#!/workspace/3096ce4f-1f08-437d-bb11-f5bde2e9c6a7
*/

var planYourTrip = function(input) {
    var inf = Infinity;
    var K = 0,
        D = 1,
        Lines = [];

    if (input && input.constructor === Array) {
        var l = input.shift();
        K = l[0];
        D = l[1];

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

    var twoLinesSolution = function(line1, line2){
        // stops available for both lines
        var lastStop = {},
            res = 0;

        var l1ind = 1, l2ind = 1;
        while (l1ind < line1.stops.length && l2ind < line2.stops.length) {
            if(line1.stops[l1ind] === line2.stops[l2ind]){
                res += typeof lastStop.l1 === "undefined" ? Math.min(line1.prices[l1ind-1],line2.prices[l2ind-1]) :  Math.min(line1.prices[l1ind-1]-line1.prices[lastStop.l1-1],line2.prices[l2ind-1]-line2.prices[lastStop.l2-1]);

                lastStop = {l1: l1ind, l2: l2ind};
                l1ind++;
                l2ind++;
            } else if(line1.stops[l1ind] > line2.stops[l2ind]){
                l2ind++;
            } else if(line1.stops[l1ind] < line2.stops[l2ind]){
                l1ind++;
            }
        }
        res += Math.min(line1.prices[line1.prices.length-1]-line1.prices[lastStop.l1-1],line2.prices[line2.prices.length-1]-line2.prices[lastStop.l2-1]);

        return res;
    };

    var Dijkstra = function(Lines){
        var minPrice = {
                lineNum: -1,
                stopNum: 1,
                price: inf
            },
            res = 0,
            savedPrices = [];

        Lines.forEach(function(l,i){
            savedPrices.push({
                lineNum: i,
                stopNum: 1,
                price: l.prices[0]
            });

            if(minPrice.price > l.prices[0]){
                minPrice = savedPrices[savedPrices.length-1];
            }
        });

        while(Lines[minPrice.lineNum].stops[minPrice.stopNum] !== D){
            var nextPrice = {
                    lineNum: -1,
                    stopNum: 1,
                    price: inf
                };
            // minPrice
            // TODO: all lines share same stop
            savedPrices.forEach(function(node) {
                if(node.completed) return;
                if(Lines[node.lineNum].stops[node.stopNum] === Lines[minPrice.lineNum].stops[minPrice.stopNum])
                    node.price = minPrice.price;
                if(node.lineNum === minPrice.lineNum){
                    node.completed = true;
                    // TODO: next stop
                    var newPrice = {
                        lineNum: node.lineNum,
                        stopNum: node.stopNum+1,
                        price: node.price +  Lines[node.lineNum].prices[node.stopNum]-Lines[node.lineNum].prices[node.stopNum-1]
                    };
                    savedPrices.push(newPrice);
                    if (nextPrice.price > newPrice.price){
                        nextPrice = newPrice;
                    }
                }

                if(!node.completed && nextPrice.price > node.price){
                    nextPrice = node;
                }
            });

            // TODO: update minPrice
            minPrice = nextPrice;
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

            if(K === 2){
                return twoLinesSolution(Lines[0], Lines[1]);
            }

            if(K > 2){
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
