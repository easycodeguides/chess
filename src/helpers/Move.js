import { fenToArray } from "./FenToArray";
import { arrayToFen } from "./ArrayToFen";

var players = ['white','black'];
var currentPlayer = 0;

export const move = (move, position) => {
   
    var array = fenToArray(position);

    var fields = [];
    var columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for(let index = 0, i = 0; i < 8; i++){        
        for(let j = 0; j < 8; j++){
            let field = {
                column: columnNames[j],
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
            var whiteMoveColumnFields =  fields.filter( field => field.column === moveColumn);
            var whitemoveField = whiteMoveColumnFields.filter(field => field.row === Number(moveRow));
            whitemoveField[0].piece = 'P';
            var whitecandidateFields = whiteMoveColumnFields.filter( field => field.row < moveRow );
            var whitesetFreeField = whitecandidateFields.filter( field => field.piece === 'P');
            whitesetFreeField[0].piece = '';      
        } else {
            var blackMoveColumnFields =  fields.filter( field => field.column === moveColumn);
            var blackMoveField = blackMoveColumnFields.filter(field => field.row === Number(moveRow));
            blackMoveField[0].piece = 'p';
            var blackCandidateFields = blackMoveColumnFields.filter( field => field.row > moveRow );
            var blackSetFreeField = blackCandidateFields.filter( field => field.piece === 'p');
            blackSetFreeField[0].piece = '';
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
