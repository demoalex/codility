/**
*   https://www.codeeval.com/open_challenges/13/
*/

describe("Remove Characters task test suite", function(){
    it("how are you, abc -> how re you", function(){
        var line = 'how are you, abc';
        expect(removeCharacters.apply(null, prepareInput(line))).toEqual('how re you');
    });

    it("hello world, def -> hllo worl", function(){
        var line = 'hello world, def';
        expect(removeCharacters.apply(null, prepareInput(line))).toEqual('hllo worl');
    });

    it("a, aa -> ''", function(){
        var line = 'a, aa';
        expect(removeCharacters.apply(null, prepareInput(line))).toEqual('');
    });
});
