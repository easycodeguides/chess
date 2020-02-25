import { fenToArray } from "./FenToArray";
import { arrayToFen } from "./ArrayToFen";

var players = ['white','black'];
var currentPlayer = 0;

export const move = (move, position) => {
   
    let array = fenToArray(position);

    let fields = [];
    let columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for(let index = 0, i = 0; i < 8; i++){        
        for(let j = 0; j < 8; j++){
            let field = {
                column: columnNames[j],
                columnIndex: j,
                row: (8 - i),
                piece: array[index].piece
            };
            fields[index] = field;
            index++;
        }
    }
 
    if(move.length === 2) {
        
        let moveColumn = move[0], moveRow = move[1];

        if(players[currentPlayer] === 'white'){         
            let whiteMoveColumnFields =  fields.filter( field => field.column === moveColumn);
            let whitemoveField = whiteMoveColumnFields.filter(field => field.row === Number(moveRow));
            whitemoveField[0].piece = 'P';
            let whitecandidateFields = whiteMoveColumnFields.filter( field => field.row < moveRow );
            let whitesetFreeField = whitecandidateFields.filter( field => field.piece === 'P');
            whitesetFreeField[0].piece = '';      
        } else {
            let blackMoveColumnFields =  fields.filter( field => field.column === moveColumn);
            let blackMoveField = blackMoveColumnFields.filter(field => field.row === Number(moveRow));
            blackMoveField[0].piece = 'p';
            let blackCandidateFields = blackMoveColumnFields.filter( field => field.row > moveRow );
            let blackSetFreeField = blackCandidateFields.filter( field => field.piece === 'p');
            blackSetFreeField[0].piece = '';
        }
    } else if(move.length === 3){

        let piece = move[0], moveColumn = move[1], moveRow = move[2];
        let columnInd;
        switch(moveColumn){
            case 'a':
                columnInd = 0;
                break;
            case 'b':
                columnInd = 1;
                break;
            case 'c':
                columnInd = 2;
                break;
            case 'd':
                columnInd = 3;
                break;
            case 'e':
                columnInd = 4;
                break;
            case 'f':
                columnInd = 5;
                break;
            case 'g':
                columnInd = 6;
                break;
            case 'h':
                columnInd = 7;
                break;
            default:
                columnInd = 0;
                break;   
        }

        if(players[currentPlayer] === 'white'){
            
            if(piece === 'Q') {              
                let allQueens = fields.filter(field => field.piece === 'Q');
                allQueens[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'Q';
            } else if(piece === 'K') {
                let allKings = fields.filter(field => field.piece === 'K');
                allKings[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'K';
            } else if(piece === 'R'){
                let allRooks = fields.filter(field => field.piece === 'R');
                let goodRook = allRooks.filter(rook => (rook.column === moveColumn || rook.row === moveRow));
                goodRook[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'R';
            } else if(piece === 'N'){ 
                let eightPositions = fields.filter(field => ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) - 1))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) - 1))) );
                let randomKnight = eightPositions.filter(field => field.piece === 'N');
                randomKnight[0].piece = '';

                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'N';
            } else if(piece === 'B'){
               
                let fourBlocks = fields.filter(field => ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (field.row - Number(moveRow))))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row < Number(moveRow) && (columnInd - field.columnIndex) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row < Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row))));
                let startBishopPosition = fourBlocks.filter(field => field.piece === 'B');
                startBishopPosition[0].piece = '';
                let newBishopPos = fields.filter(field => field.columnIndex === columnInd && field.row === Number(moveRow));
                newBishopPos[0].piece = 'B';
            }
        } else {
            if(piece === 'q') {              
                let allQueens = fields.filter(field => field.piece === 'q');
                allQueens[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'q';
            } else if(piece === 'k') {
                let allKings = fields.filter(field => field.piece === 'k');
                allKings[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'k';
            } else if(piece === 'r'){
                let allRooks = fields.filter(field => field.piece === 'r');
                let goodRook = allRooks.filter(rook => (rook.column === moveColumn || rook.row === moveRow));
                goodRook[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'r';
            } else if(piece === 'n'){ 
                let eightPositions = fields.filter(field => ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) - 1))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) - 1))) );
                let randomKnight = eightPositions.filter(field => field.piece === 'n');
                randomKnight[0].piece = '';

                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'n';
            } else if(piece === 'b'){
                let fourBlocks = fields.filter(field => ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row < Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row < Number(moveRow) && (columnInd - field.columnIndex) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (field.row - Number(moveRow))))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row > Number(moveRow) && (columnInd - field.columnIndex) === (field.row - Number(moveRow)))));
                let startBishopPosition = fourBlocks.filter(field => field.piece === 'b');
                startBishopPosition[0].piece = '';
                let newBishopPos = fields.filter(field => field.columnIndex === columnInd && field.row === Number(moveRow));
                newBishopPos[0].piece = 'b';
            }
        }
    } else if(move.length === 4){
        
        let piece = move[0], moveColumn = move[2], moveRow = move[3];
        let columnInd;
        switch(moveColumn){
            case 'a':
                columnInd = 0;
                break;
            case 'b':
                columnInd = 1;
                break;
            case 'c':
                columnInd = 2;
                break;
            case 'd':
                columnInd = 3;
                break;
            case 'e':
                columnInd = 4;
                break;
            case 'f':
                columnInd = 5;
                break;
            case 'g':
                columnInd = 6;
                break;
            case 'h':
                columnInd = 7;
                break;
            default:
                columnInd = 0;
                break;   
        }

        if(players[currentPlayer] === 'white'){
            
            if(piece === 'Q') {              
                let allQueens = fields.filter(field => field.piece === 'Q');
                allQueens[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'Q';
            } else if(piece === 'K') {
                let allKings = fields.filter(field => field.piece === 'K');
                allKings[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'K';
            } else if(piece === 'R'){
                let allRooks = fields.filter(field => field.piece === 'R');
                let goodRook = allRooks.filter(rook => (rook.column === moveColumn || rook.row === moveRow));
                goodRook[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'R';
            } else if(piece === 'N'){ 
                let eightPositions = fields.filter(field => ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) - 1))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) - 1))) );
                let randomKnight = eightPositions.filter(field => field.piece === 'N');
                randomKnight[0].piece = '';

                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'N';
            } else if(piece === 'B'){
               
                let fourBlocks = fields.filter(field => ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (field.row - Number(moveRow))))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row < Number(moveRow) && (columnInd - field.columnIndex) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row < Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row))));
                let startBishopPosition = fourBlocks.filter(field => field.piece === 'B');
                startBishopPosition[0].piece = '';
                let newBishopPos = fields.filter(field => field.columnIndex === columnInd && field.row === Number(moveRow));
                newBishopPos[0].piece = 'B';
            } else if(piece === 'e'){
                var startPawnPosition = fields.filter(field => ((field.column === piece) && (field.row === (Number(moveRow) - 1))));
                startPawnPosition[0].piece = '';
                var eatPosition = fields.filter(field => field.column === moveColumn && field.row === Number(moveRow));
                eatPosition[0].piece = 'P';
            }
        } else {
            if(piece === 'q') {              
                let allQueens = fields.filter(field => field.piece === 'q');
                allQueens[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'q';
            } else if(piece === 'k') {
                let allKings = fields.filter(field => field.piece === 'k');
                allKings[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'k';
            } else if(piece === 'r'){
                let allRooks = fields.filter(field => field.piece === 'r');
                let goodRook = allRooks.filter(rook => (rook.column === moveColumn || rook.row === moveRow));
                goodRook[0].piece = '';
                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'r';
            } else if(piece === 'n'){ 
                let eightPositions = fields.filter(field => ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd - 2)) && (field.row === (Number(moveRow) - 1))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd - 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) + 2))) ||
                                                            ((field.columnIndex === (columnInd + 1)) && (field.row === (Number(moveRow) - 2))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) + 1))) ||
                                                            ((field.columnIndex === (columnInd + 2)) && (field.row === (Number(moveRow) - 1))) );
                let randomKnight = eightPositions.filter(field => field.piece === 'n');
                randomKnight[0].piece = '';

                let newColumnFields = fields.filter(field => field.column === moveColumn);
                let newPosition = newColumnFields.filter(field => field.row === Number(moveRow));
                newPosition[0].piece = 'n';
            } else if(piece === 'b'){
                let fourBlocks = fields.filter(field => ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row < Number(moveRow) && (field.columnIndex - columnInd) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row < Number(moveRow) && (columnInd - field.columnIndex) === (Number(moveRow) - field.row)))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex > columnInd && field.row > Number(moveRow) && (field.columnIndex - columnInd) === (field.row - Number(moveRow))))
                                                        || ((field.columnIndex !== columnInd && field.row !== Number(moveRow))
                                                            && (field.columnIndex < columnInd && field.row > Number(moveRow) && (columnInd - field.columnIndex) === (field.row - Number(moveRow)))));
                let startBishopPosition = fourBlocks.filter(field => field.piece === 'b');
                startBishopPosition[0].piece = '';
                let newBishopPos = fields.filter(field => field.columnIndex === columnInd && field.row === Number(moveRow));
                newBishopPos[0].piece = 'b';
            } else if(piece === 'e'){
                var startPawnPositionB = fields.filter(field => ((field.column === piece) && (field.row === (Number(moveRow) + 1))));
                startPawnPositionB[0].piece = '';
                var eatPositionB = fields.filter(field => field.column === moveColumn && field.row === Number(moveRow));
                eatPositionB[0].piece = 'p';
            }
        }
    } 
    changePlayer();
    
    let fen = arrayToFen(fields);
    return fen;
}

function changePlayer() {
    if(currentPlayer === 0){
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
}
