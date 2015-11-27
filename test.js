var assert = require('assert');
if(typeof describe == "undefined"){
    describe = function(){};
}

var a = [1, 2, 3, 4, 5, 6];

function printErr(err){
    console.error(err);
    //throw Error(err);
}

function Navigator(__rows, __columns, __alarmTime, __errorHandler){
    // Map storage
    var _rows = __rows, _columns = __columns;
    var _map = [];
    for(var i=0; i < __rows; i++){
        _map.push([]);
        for(var j=0; j < __columns; j++){
            _map[i][j] = '?';
        }
    }

    // Paths calculation
    var _goBackHome = false,
        _start = null, _finish = null, _kirk = null,
        _path = [], // current path
        _interrupt = false;

    function _setStartPoint(r, c){
        if(r > _rows-1 || r < 0)    return __errorHandler('Row index is out of boundaries.');
        if(c > _columns-1 || c < 0) return __errorHandler('Column index is out of boundaries.');

        _kirk = [r, c];
        _start = [r, c];
    }

    function _nextMove(){
        // we've got path to follow
        if((_path.length && !_interrupt) || _goBackHome){
            return _goTo(_path.pop());
        }

        // we've reached C, go home fast!
        if(!_goBackHome && _map[_kirk[0]][_kirk[1]] === 'C'){
            _goBackHome = true;
            _path = _findPath(_start[0], _start[1]).reverse();
            _path.unshift(_start);
            _path.pop();
        // not reached yet, just find closest reachable '?'
        } else {
            _path = _findPath(_kirk[0], _kirk[1]);
        }

        return _goTo(_path.pop());
    }

    function _findPath(row, col){
        var waveMap = [];
        for(var i = 0; i < __rows; i++){
            waveMap.push([]);
            for(var j=0; j < __columns; j++){
                waveMap[i][j] = -1;
            }
        }
        waveMap[row][col] = 0;

        var frontier = [[row, col]], steps = 0,
            newFrontier = [1], forPathGeneration = false;
        while(newFrontier.length){
            steps++;
            newFrontier = [];
            for(var i = 0; i < frontier.length; i++){
                var r = frontier[i][0], c = frontier[i][1],
                    p = foundPointOrPath(r, c, steps);

                // if C found -> go there!
                if(p && p[0].constructor === Array){
                    return p;
                } else {
                    if(p && !forPathGeneration) forPathGeneration = p;
                    if(r+1 < _rows
                        && _map[r+1][c] !== '#' && _map[r+1][c] !== '?'
                        && waveMap[r+1][c] === -1){
                        waveMap[r+1][c] = steps;
                        newFrontier.push([r+1, c]);
                    }
                    if(r > 0
                        && _map[r-1][c] !== '#' && _map[r-1][c] !== '?'
                        && waveMap[r-1][c] === -1){
                        waveMap[r-1][c] = steps;
                        newFrontier.push([r-1, c]);
                    }
                    if(c+1 < _columns
                        && _map[r][c+1] !== '#' && _map[r][c+1] !== '?'
                        && waveMap[r][c+1] === -1){
                        waveMap[r][c+1] = steps;
                        newFrontier.push([r, c+1]);
                    }
                    if(c > 0
                        && _map[r][c-1] !== '#' && _map[r][c-1] !== '?'
                        && waveMap[r][c-1] === -1){
                        waveMap[r][c-1] = steps;
                        newFrontier.push([r, c-1]);
                    }
                }
            }
            frontier = newFrontier;
        }

        if(forPathGeneration){
            return makePath(forPathGeneration[0], forPathGeneration[1]);
        } else {
            return false; //dead end
        }


        function foundPointOrPath(r, c, steps){
            // C found -> go
            if(r+1 < _rows && _map[r+1][c] == 'C'){
                waveMap[r+1][c] = steps;
                return makePath(r+1, c);
                //return [r+1, c]
            }
            if(r-1 > 0 && _map[r-1][c] == 'C'){
                waveMap[r-1][c] = steps;
                return makePath(r-1, c);
                //return [r-1, c]
            }
            if(c+1 < _columns && _map[r][c+1] == 'C'){
                waveMap[r][c+1] = steps;
                return makePath(r, c+1);
                //return [r, c+1]
            }
            if(c-1 > 0 && _map[r][c-1] == 'C'){
                waveMap[r][c-1] = steps;
                return makePath(r, c-1);
                //return [r, c-1]
            }

            // ? found -> go (second priority but only if C not found already)
            if(!_goBackHome){
                if(r+1 < _rows && _map[r+1][c] == '?') return [r, c];
                if(r-1 > 0 && _map[r-1][c] == '?') return [r, c];
                if(c+1 < _columns && _map[r][c+1] == '?') return [r, c];
                if(c-1 > 0 && _map[r][c-1] == '?') return [r, c];
            }

            return false;
        }

        function makePath(fr, fc){
            var p = [], cr = fr, cc = fc, step = waveMap[cr][cc];

            for(var i=0; i < __rows; i++){
                for(var j=0; j < __columns; j++){
                    if(waveMap[i][j] == -1) waveMap[i][j] = '.';
                }
                __errorHandler(waveMap[i].join(''));
            }
            while(waveMap[cr][cc] !== 0){
                p.push([cr, cc]);
                step--;
                if(cr + 1 < _rows && waveMap[cr + 1][cc] !== -1 && waveMap[cr + 1][cc] === step){
                    cr += 1;
                    continue;
                }
                if(cr > 0 && waveMap[cr - 1][cc] !== -1 && waveMap[cr - 1][cc] === step){
                    cr -= 1;
                    continue;
                }
                if(cc + 1 < _columns && waveMap[cr][cc + 1] !== -1 && waveMap[cr][cc + 1] === step){
                    cc += 1;
                    continue;
                }
                if(cc > 0 && waveMap[cr][cc-1] !== -1 && waveMap[cr][cc - 1] === step){
                    cc -= 1;
                }
                if(step < 0){
                    __errorHandler('Error occurred while searching for right path');
                    break;
                }
            }

            return p;
        }
    }

    function _goTo(point){
        if(point[0] - _kirk[0] == 1) return _down();
        if(point[0] - _kirk[0] == -1) return _up();
        if(point[1] - _kirk[1] == 1) return _right();
        if(point[1] - _kirk[1] == -1) return _left();
        __errorHandler('Kirk can\'t stay or move more than 1 step.');
    }

    function _right(){
        _kirk = [_kirk[0], _kirk[1]+1];
        return 'RIGHT';
    }

    function _left(){
        _kirk = [_kirk[0], _kirk[1]-1];
        return 'LEFT';
    }

    function _up(){
        _kirk = [_kirk[0]-1, _kirk[1]];
        return 'UP';
    }

    function _down(){
        _kirk = [_kirk[0]+1, _kirk[1]];
        return 'DOWN';
    }

    function _addRow(index, row){
        if(index > _rows-1) return __errorHandler('Row index is out of boundaries.');

        var current_row = _map[index];
        row = row.split('');

        for(var i = 0; i < _columns; i++) {
            if (current_row[i] == '?' && row[i] !== '?')
                current_row[i] = row[i];
            if (current_row[i] == 'C'){
                _interrupt = true;
                _finish = [index, i];
            }
        }
    }

    function _log(){
        var log = [];
        for(var i=0; i < __rows; i++){
            log.push([]);
            for(var j=0; j < __columns; j++){
                log[i][j] = _map[i][j];
            }
        }

        if(_path){
            for(var j=0; j < _path.length; j++){
                log[_path[j][0]][_path[j][1]] = 'x';
            }
        }

        log[_kirk[0]][_kirk[1]] = 'K';

        if(_interrupt) __errorHandler('Control room detected.');
        if(_goBackHome) __errorHandler('Go back to teleport.');
        for(var i=0; i < __rows; i++){
            __errorHandler(log[i].join(''));
        }
    }

    return {
        addRow: _addRow,
        nextMove: _nextMove,
        setStart: _setStartPoint,
        getStart: function() { return _start; },
        log: _log
    }
}

var input = [
    '???????',
    '?#####?',
    '?#.###?',
    '?#.T.C?',
    '?#####?',
    '?#####?',
    '???????',
], start = [3, 3];

input = [
    'T.....?',
    '##...?.',
    '...??..',
    '...?...',
    '...?.?.',
    '.??..?.',
    '....?.C',
];
//input = [
//    'T......',
//    '##....?',
//    '.....?.',
//    '....?..',
//    '...?...',
//    '..?....',
//    '.?....C',
//];
start = [0, 0];
var N = new Navigator(input.length, input[0].length, console.log);
if(!N.getStart()) N.setStart(start[0], start[1]);
for(var i = 0; i < input.length; i++){
    N.addRow(i, input[i]);
    console.log(input[i]);
}

var c = 0;
while (c < 45) {
    N.nextMove();
    console.log('\n\n'+c);
    N.log();
    c++;
}

describe("The Gift test suite", function() {
    it("test 1", function () {
        var input = [
            3,
            100,
            20,
            20,
            40
        ];

        //assert.equal(Gift(input), 'IMPOSSIBLE');
        assert.equal('IMPOSSIBLE', 'IMPOSSIBLE');
        //assert.equal('IMPOSSdIBLE', 'IMPOSSIBLE');
        //assert.equal([33, 33, 34], [33, 33, 34]);
        assert.deepEqual([33, 33, 34], [33, 33, 34]);
    });
});

