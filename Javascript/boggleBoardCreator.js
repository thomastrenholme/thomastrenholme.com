class BigBoggleBoardCreator {
    constructor() {
        this.ALL_COORDINATES = [
            { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 },
            { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 },
            { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 },
            { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
        ];
        this.ALL_CUBES_2012_BIG_BOGGLE = [
            ["A", "A", "A", "A", "A", "F", "R", "S"],
            ["A", "A", "A", "E", "E", "E", "E"],
            ["A", "A", "F", "I", "R", "S"],
            ["A", "D", "E", "N", "N", "N"],
            ["A", "E", "E", "E", "M"],
            ["A", "E", "E", "G", "M", "U"],
            ["A", "E", "G", "M", "N", "N"],
            ["A", "F", "I", "R", "S", "Y"],
            ["F", "I", "P", "R", "S", "Y"],
            ["B", "J", "K", "Qu", "X", "Z"],
            ["C", "C", "E", "N", "S", "T"],
            ["C", "E", "I", "I", "L", "T"],
            ["C", "E", "I", "P", "S", "T"],
            ["D", "D", "H", "N", "O", "T"],
            ["D", "H", "H", "L", "O", "R"],
            ["D", "H", "L", "N", "O", "R"],
            ["E", "I", "I", "I", "T", "T"],
            ["C", "E", "I", "L", "P", "T"],
            ["E", "M", "O", "T", "T", "T"],
            ["E", "N", "S", "S", "S", "U"],
            ["G", "O", "R", "R", "V", "W"],
            ["I", "P", "R", "R", "R", "Y"],
            ["N", "O", "O", "T", "U", "W"],
            ["O", "O", "O", "T", "T", "U"],
            ["Qu", "In", "Th", "Er", "He", "An"]
        ];
    }

    createBoard() {
        let availableCoordinates = [...this.ALL_COORDINATES];

        let board = [];
        for (let i = 0; i < 5; i++) {
            board.push(Array(5).fill(''));
        }

        for (let cube of this.ALL_CUBES_2012_BIG_BOGGLE) {
            let randomIdxInCoordinatesList = Math.floor(Math.random() * availableCoordinates.length);
            let randomCoordinate = availableCoordinates.splice(randomIdxInCoordinatesList, 1)[0];

            let randomCubeIdx = Math.floor(Math.random() * 6);

            board[randomCoordinate.x][randomCoordinate.y] = cube[randomCubeIdx];
        }

        return { board };
    }
}

let creator = new BigBoggleBoardCreator();
let board = creator.createBoard();
console.log(board);