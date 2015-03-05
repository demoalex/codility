/**
*   https://www.codeeval.com/open_challenges/43/
*/

describe("Jolly Jumpers task test suite", function(){
    it("Hello World,World -> 1", function(){
        var line = 'Hello World,World';
        expect(trailingString.apply(null, prepareInput(line)) ? '1' : '0').toEqual('1');
    });

    it("Hello CodeEval,CodeEval -> 1", function(){
        var line = 'Hello CodeEval,CodeEval';
        expect(trailingString.apply(null, prepareInput(line)) ? '1' : '0').toEqual('1');
    });

    it("San Francisco,San Jose -> 0", function(){
        var line = 'San Francisco,San Jose';
        expect(trailingString.apply(null, prepareInput(line)) ? '1' : '0').toEqual('0');
    });
});
