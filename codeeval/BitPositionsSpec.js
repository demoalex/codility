/**
*   https://www.codeeval.com/open_challenges/19/
*/

describe("Bit Positions task test suite", function(){
    it("converts 3 to 11", function(){
        expect(numToBinaryReversed(3)).toEqual("11");
    });

    it("converts 5 to 101", function(){
        expect(numToBinaryReversed(5)).toEqual("101");
    });

    it("converts 8 to 0001", function(){
        expect(numToBinaryReversed(8)).toEqual("0001");
    });

    it("86,2,3 -> true", function(){
        // console.log(numToBinaryReversed(86));
        var line = "86,2,3"; // <- emulates task input
        expect(bitPos.apply(null, line.split(','))).toEqual(true);
    });

    it("125,1,2 -> false", function(){
        // console.log(numToBinaryReversed(125));
        // console.log(numToBinaryReversed(125)[1]);
        // console.log(numToBinaryReversed(125)[0]);
        var line = "125,1,2";
        expect(bitPos.apply(null, line.split(','))).toEqual(false);
    });

    it("converts 8 to 1000", function(){
        expect(numToBinary(8)).toEqual("1000");
    });

    it("converts 10 to 1010", function(){
        expect(numToBinary(10)).toEqual("1010");
    });

    it("converts 67 to 1000011", function(){
        expect(numToBinary(67)).toEqual("1000011");
    });
});
