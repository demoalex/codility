// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    if(!S.length) return 1;

    bb = []; //brackets arr
    for(var i=0; i<S.length; i++){
        switch(S.charAt(i)){
            case '(':
            case '{':
            case '[':
                bb.push(S.charAt(i));
                break;
            case ')':
                if(bb.pop() !== '(') return 0;
                break;
            case '}':
                if(bb.pop() !== '{') return 0;
                break;
            case ']':
                if(bb.pop() !== '[') return 0;
                break;
        }
    }
    
    return bb.length > 0 ? 0 : 1;
}
