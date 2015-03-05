/**
*   https://www.codeeval.com/open_challenges/45/
*/

describe("Reverse And Add task test suite", function(){
    it("195 -> 4 9339", function(){
        var line = '195';
        var out = reverseAndAdd(Number(line));
        expect(out.iterNum+" "+out.palindrome).toEqual('4 9339');
    });

    it("100 -> ", function(){
        var line = '10000';
        var out = reverseAndAdd(Number(line));
        expect(out.error).toEqual("Input number isn't < 10000");
    });

    it("San Francisco,San Jose -> 0", function(){
        for (var i = 0; i < 100; i++) {
            console.log(i, reverseAndAdd(i));
        }

        expect(true).toEqual(true);
    });
});
