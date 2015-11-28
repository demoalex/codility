# https://www.codingame.com/games/puzzles/55

class Node:
    def __init__(self, value=0, pos_x=0, pos_y=0):
        self.value = value
        self.x = pos_x
        self.y = pos_y
        self.neighbours = {}

    def __str__(self):
        return "(%d, %d): %d" % (self.x, self.y, self.value)

    def __repr__(self):
        return str(self)

    def add_neighbour(self, direction, node):
        self.neighbours[direction] = node


class APU:
    def __init__(self, width, height):
        """
        :type width: int
        :type height: int
        """
        self._w = width
        self._h = height
        self.nodes = {}

    def parse_line(self, line, index):
        new_nodes = []
        line = list(line)
        for idx, n in enumerate(line):
            if n != '.':
                new_nodes.append(Node(int(n), idx, index))
        self.nodes[index] = new_nodes

    def initialize(self):
        self._calculate_neighbours()
        return True

    def _calculate_neighbours(self):
        top_neighbours = [None for i in xrange(self._w)]
        for val in self.nodes.iteritems():
            prev_in_line = None
            for node in val[1]:
                if prev_in_line is None:
                    prev_in_line = node
                else:
                    node.add_neighbour('left', prev_in_line)
                    prev_in_line.add_neighbour('right', node)
                    prev_in_line = node
                if top_neighbours[node.x] is None:
                    top_neighbours[node.x] = node
                else:
                    node.add_neighbour('top', top_neighbours[node.x])
                    top_neighbours[node.x].add_neighbour('bottom', node)
                    top_neighbours[node.x] = node


width = 23
height = 23
data = [
    '3..2.2..1....3........4',
    '.2..1....2.6.........2.',
    '..3..6....3............',
    '.......2........1..3.3.',
    '..1.............3..3...',
    '.......3..3............',
    '.3...8.....8.........3.',
    '6.5.1...........1..3...',
    '............2..6.31..2.',
    '..4..4.................',
    '5..........7...7...3.3.',
    '.2..3..3..3............',
    '......2..2...1.6...3...',
    '....2..................',
    '.4....5...3............',
    '.................2.3...',
    '.......3.3..2.44....1..',
    '3...1.3.2.3............',
    '.2.....3...6.........5.',
    '................1......',
    '.1.......3.6.2...2...4.',
    '5...............3.....3',
    '4...................4.2']
apu = APU(width, height)

for idx, l in enumerate(data):
    apu.parse_line(l, idx)

print apu.nodes
apu.initialize()
