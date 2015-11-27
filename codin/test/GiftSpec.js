var assert = require('assert');
var Gift = require('../Gift');

describe("The Gift test suite", function(){

    /**
     * Input:
     * 3
     * 100
     * 20
     * 20
     * 40
     *
     * Output:
     * IMPOSSIBLE
     *
     */
    it("test 1", function(){
        var input = [
            3,
            100,
            20,
            20,
            40
        ];

        assert.equal(Gift(input), 'IMPOSSIBLE');
    });

    /**
     * Input:
     * 3
     * 100
     * 40
     * 40
     * 40
     *
     * Output:
     * 33
     * 33
     * 34
     *
     */
    it("test 2", function(){
        var input = [
            3,
            100,
            40,
            40,
            40
        ];

        assert.deepEqual(Gift(input), [33, 33, 34]);
    });

    /**
     * Input:
     * 3
     * 100
     * 100
     * 1
     * 60
     *
     * Output:
     * 1
     * 49
     * 50
     *
     */
    it("test 3", function(){
        var input = [
            3,
            100,
            100,
            1,
            60
        ];

        assert.deepEqual(Gift(input), [1, 49, 50]);
    });
});
