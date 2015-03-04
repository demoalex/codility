function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    
    var N = A.length;
    
    // массив counter заполненный нулями, считает кол-во вхождений чисел в А
	// 2 интересных темы
	// 1 -- как создать заполненный 0 массив заданной длины http://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
	// 2 -- как создать последовательно заполненный массив заданной длины http://stackoverflow.com/questions/18947892/creating-range-in-javascript-strange-syntax/18949651#18949651
    var counter = Array.apply(null, new Array(N)).map(Number.prototype.valueOf,0);
    
    var check = function(c, len){
        return (c <= len) && (counter[c-1]++ === 0);
    };
    
    var acc = 0;
    for(var i = 0; i<N; i++){   
        if(!check(A[i], N)) return 0;
        acc += A[i];
    }
    
    return acc !== A.length*(A.length+1)/2 ? 0 : 1;
}
