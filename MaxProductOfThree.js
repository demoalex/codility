function solution(A) {
    function compareNumbers(a, b)
    {
        return a - b;
    }
    
    A.sort(compareNumbers);
    var l = A.length;
    m1 = A[l-1]*A[l-2]*A[l-3];
    m2 = A[0]*A[1]*A[l-1];
    return m1 > m2 ? m1 : m2;
}