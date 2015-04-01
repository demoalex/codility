/**
 * Same as a1q1 except for line 12 - put ration instead of difference
 */
if(typeof exports !== 'undefined'){
    var fs  = require("fs");
    var Heap = require("./heap")({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});


    fs.readFileSync("a1q1_jobs.txt").toString().split('\n').forEach(function (line, i) {
        if (i && line !== "") {
            var a = line.split(' ').map(Number);
            a.push(a[0]/a[1]); //ratio
            //do something here
            Heap.push(a);

            // console.log(Heap);
        }
    });

    var countWeightedTime = function(heap){
        var res = 0, t = 0;
        while(heap.length){
            var e = heap.pop();
            t += e[1];
            res += e[0]*t;
        }

        return res;
    };

    console.log(countWeightedTime(Heap));
    // console.log(Heap.length);
}
