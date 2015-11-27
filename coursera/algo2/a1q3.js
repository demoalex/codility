
if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var Heap = require("./heap")({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});


    fs.readFileSync("a1q1_jobs.txt").toString().split('\n').forEach(function (line, i) {
        if (i && line !== "") {
            var a = line.split(' ').map(Number);
            a.push(a[0]-a[1]); //difference
            //do something here
            Heap.push(a);

            // console.log(Heap);
        }
    });

    var countMSTcost = function(tree){
        var res = 0;
        while(tree.length){
            var e = tree.pop();
            res += e[2];
        }

        return res;
    };

    console.log(countMSTcost(Heap));
    // console.log(Heap.length);
}
