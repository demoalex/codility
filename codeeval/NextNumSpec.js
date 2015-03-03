/**
*   https://www.codeeval.com/open_challenges/19/
*/

describe("Bit Positions task test suite", function(){
    it("115 -> 151", function(){
        expect(nextNum(115)).toEqual(151);
    });

    it("842 -> 2048", function(){
        expect(nextNum(842)).toEqual(842);
    });

    it("8000 -> 80000", function(){
        expect(nextNum(8000)).toEqual(8000);
    });
});
