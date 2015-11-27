/**
 * Thanks for specs to Naveen Sharma
 * https://class.coursera.org/algo2-004/forum/thread?thread_id=10#post-66
 */

var Heap = require("./heap");

describe("Greedy schedule test suite", function(){
    var arr;

    var countWeightedTime = function(heap){
        var res = 0, t = 0;
        while(heap.length){
            var e = heap.pop();
            t += e[1];
            res += e[0]*t;
        }
        return res;
    };

    describe('Test case #1 ', function() {
        beforeEach(function(){
            arr = [
                [8, 50],
                [74, 59],
                [31, 73],
                [45, 79],
                [10, 10],
                [41, 66]
            ];
        });

        it("difference", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]-a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(31814);
        });

        it("ratio", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]/a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(31814);
        });
    });

    describe('Test case #2 ', function() {
        beforeEach(function(){
            arr = [
                [8, 50],
                [74, 59],
                [31, 73],
                [45, 79],
                [24, 10],
                [41, 66],
                [93, 43],
                [88, 4],
                [28, 30],
                [41, 13]
            ];
        });

        it("difference", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]-a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(61545);
        });

        it("ratio", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]/a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(60213);
        });
    });

    describe('Test case #3 ', function() {
        beforeEach(function(){
            arr = [
                [1, 37],
                [79, 39],
                [94, 16],
                [16, 73],
                [48, 44],
                [52, 40],
                [96, 27],
                [15, 86],
                [20, 81],
                [99, 57],
                [10, 90],
                [46, 66],
                [77, 52],
                [42, 74],
                [16, 45],
                [47, 4],
                [84, 41],
                [34, 54],
                [87, 53],
                [13, 69],
                [83, 88],
                [69, 63],
                [5, 97],
                [13, 65],
                [10, 46],
                [17, 10],
                [62 ,79],
                [62, 32],
                [13, 12],
                [57, 61],
                [100, 98],
                [43, 7]
            ];
        });

        it("difference", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]-a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(688647);
        });

        it("ratio", function(){
            var h = Heap({comparator: "a[2] > b[2] || (a[2] == b[2] && a[0] > b[0])"});

            arr.map(function(a){a.push(a[0]/a[1]); return a;});

            while(arr.length){
                h.push(arr.pop());
            }

            expect(countWeightedTime(h)).toEqual(674634);
        });
    });
});
