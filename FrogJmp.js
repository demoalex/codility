function solution(X, Y, D) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var diff = Y-X; mod = (diff % D);
    return mod > 0 ? (diff - mod) / D +1 : diff / D;
}