/**
*   https://app.devdraft.com/#!/workspace/3096ce4f-1f08-437d-bb11-f5bde2e9c6a7
*/


describe("Plan your trip task test suite", function(){

    /**
     * Input:
     * 2 10
     * 5
     * 0 2 4 6 10
     * 3 4 5 1
     * 4
     * 0 4 9 10
     * 5 10 1
     *
     * Output:
     * 11
     *
     * Explanation:
     * There are 2 trains and it is a 10-mile journey. The first train stops at miles [0, 2, 4, 6, 10] with costs of [3, 4, 5, 1] in between those stops. That is, it costs $3 to go from the starting city to the stop at mile 2, $4 to go from the stop at mile 2 to the stop at mile 4, and so on. The second train stops at miles [0, 4, 9, 10] with costs of [5, 10, 1] in between those stops. Except for the start and end points (which are always shared between all trains), the only place you can switch between the two train lines is at the stop at mile 4, since they share no other stops. There are therefore 4 possible journeys: ride the first train all the way, ride the second train all the way, ride the first train to mile 4 and then complete the journey on the second train, or ride the second train to mile 4 and then complete the journey on the first train. The costs of these would be 13, 16, 18, and 11, respectively. The cheapest journey is therefore to take the second train to mile 4, and then switch to the first train, which has a cost of 11.
     */
    it("2 lines -> 11", function(){
        var input = [
            [ 2, 10 ],
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
     * Input:
     * 3 10
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
     * You can get to the 3-mile marker by taking the first train at a cost of 1. There, you can switch to the second train and get to the 7-mile marker at an additional cost of 3. The journey can then be finished on the third train at an additional cost of 2, making the total cost 6. Since this is the cheapest possible journey, output 6.
     */
    it("Hello CodeEval,CodeEval -> 1", function(){
        var input = [
            [ 3, 10 ],
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
     * 4 25
     * 7
     * 0 5 12 19 20 24 25
     * 3 3 3 3 3 3
     * 3
     * 0 10 25
     * 8 15
     * 6
     * 0 5 10 19 20 25
     * 5 2 3 5 4
     * 3
     * 0 19 25
     * 15 10
     *
     * Output:
     * 15
     *
     * Explanation:
     * You can ride the 1st train for 1 stop (get to 5 at a cost of 3), ride the 3rd train 2 stops (get to 19 at an additional cost of 2 + 3 = 5), ride the 1st train again for 1 stop (get to 20 at an additional cost of 3), and then ride the 3rd train again for 1 stop (get to the destination at a cost of 4). The total cost would be 3 + 5 + 3 + 4 = 15.
     */
    it("San Francisco,San Jose -> 0", function(){
        var input = [
            [ 4, 25 ],
            [ 7 ],
            [ 0, 5, 12, 19, 20, 24, 25 ],
            [ 3, 3, 3, 3, 3, 3 ],
            [ 3 ],
            [ 0, 10, 25 ],
            [ 8, 15 ],
            [ 6 ],
            [ 0, 5, 10, 19, 20, 25 ],
            [ 5, 2, 3, 5, 4 ],
            [ 3 ],
            [ 0, 19, 25 ],
            [ 15, 10 ]
        ];
        var plan = new planYourTrip(input);
        expect(plan.solve()).toEqual(15);
    });
});
