/**
*   https://app.devdraft.com/#!/workspace/3096ce4f-1f08-437d-bb11-f5bde2e9c6a7
*/


describe("Plan your trip task test suite", function(){

    /**
     * Explanation:
     * Same case as in previous task. Left for checking Dijkstra's working in this case.
     */
    it("2 lines -> 11", function(){
        var input = [
            [ 2, 10, 100 ],
            [ 5 ],
            [ 0, 2, 4, 6, 10 ],
            [ 3, 4, 5, 1 ],
            [ 4 ],
            [ 0, 4, 9, 10 ],
            [ 5, 10, 1 ]
        ];
        var plan = new planYourTrip(input);
        expect(plan.solve()).toEqual(11);
    });

    /**
     * Explanation:
     * Same case as in previous. Line exchange prohibited.
     */
    it("2 lines. Line exchange prohibited. -> 13", function(){
        var input = [
            [ 2, 10, 0 ],
            [ 5 ],
            [ 0, 2, 4, 6, 10 ],
            [ 3, 4, 5, 1 ],
            [ 4 ],
            [ 0, 4, 9, 10 ],
            [ 5, 10, 1 ]
        ];
        var plan = new planYourTrip(input);
        expect(plan.solve()).toEqual(13);
    });

    /**
     * Input:
     * 3 10 100
     * 5
     * 0 3 5 7 10
     * 1 2 3 4
     * 4
     * 0 3 7 10
     * 4 3 3
     * 4
     * 0 5 7 10
     * 8 7 2
     *
     * Output:
     * 6
     *
     * Explanation:
     * This case was in the previous problem. When X = 100, your program should have the same functionality as before because having up to 100 train switches is not restrictive here.
     * You can get to the 3-mile marker by taking the first train at a cost of 1. There, you can switch to the second train and get to the 7-mile marker at an additional cost of 3. The journey can then be finished on the third train at an additional cost of 2, making the total cost 6. Since this is the cheapest possible journey, output 6.
     */
    it("3 lines -> 6", function(){
        var input = [
            [ 3, 10, 100 ],
            [ 5 ],
            [ 0, 3, 5, 7, 10 ],
            [ 1, 2, 3, 4 ],
            [ 4 ],
            [ 0, 3, 7, 10 ],
            [ 4, 3, 3 ],
            [ 4 ],
            [ 0, 5, 7, 10 ],
            [ 8, 7, 2 ]
        ];
        var plan = new planYourTrip(input);
        expect(plan.solve()).toEqual(6);
    });

    /**
     * Input:
     * 3 10 1
     * 5
     * 0 3 5 7 10
     * 1 2 3 4
     * 4
     * 0 3 7 10
     * 4 3 3
     * 4
     * 0 5 7 10
     * 8 7 2
     *
     * Output:
     * 6
     *
     * Explanation:
     * This is the same test case, but with X = 1. With only one change of train permitted, you can no longer complete the trip at a cost of 6. You can get there at a cost of 7, however, by taking the first train to the 3-mile marker at a cost of 1, and then taking the second train all the way to the destination at a cost of 3 + 3 = 6. The total cost would be 7.
     */
    it("3 lines, 1 line transfert max -> 7", function(){
        var input = [
            [ 3, 10, 1 ],
            [ 5 ],
            [ 0, 3, 5, 7, 10 ],
            [ 1, 2, 3, 4 ],
            [ 4 ],
            [ 0, 3, 7, 10 ],
            [ 4, 3, 3 ],
            [ 4 ],
            [ 0, 5, 7, 10 ],
            [ 8, 7, 2 ]
        ];
        var plan = new planYourTrip(input);
        expect(plan.solve()).toEqual(7);
    });
});
