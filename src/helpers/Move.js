import { fenToArray } from "./FenToArray";
import { arrayToFen } from "./ArrayToFen";

var currentPlayer = 'white';

export const move = (move, position) => {
   
    let array = fenToArray(position), 
        fields = [],
        columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for(let index = 0, i = 0; i < 8; i++){        
        for(let j = 0; j < 8; j++){
          
            fields[index] = {
                column: columnNames[j],
                columnIndex: j,
                row: (8-i),
                piece: array[index].piece
            };;
            index++;
        }
    }

    const pawnsMove = move.length === 2,
            regularMove = move.length === 3,
            eatingMove = move.length === 4,
            moveField = fields.filter(field => field.column === move[move.length - 2] && field.row === Number(move[move.length - 1]))[0],
            whitePawnFilter = (field, moveField) => (field.column === moveField.column && field.row < moveField.row && field.piece === 'P'),
            blackPawnFilter = (field, moveField) => (field.column === moveField.column && field.row > moveField.row && field.piece === 'p'),
            queenFilter = (field, moveField) => (field.row === moveField.row && field.columnIndex < moveField.columnIndex) ||
                                (field.row === moveField.row && field.columnIndex > moveField.columnIndex) ||
                                (field.columnIndex === moveField.columnIndex && field.row > moveField.row) ||
                                (field.columnIndex === moveField.columnIndex && field.row < moveField.row) ||

                                ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                (field.columnIndex < moveField.columnIndex && field.row > moveField.row)  &&
                                (field.columnIndex - moveField.columnIndex === moveField.row - field.row)) ||

                                ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                (field.columnIndex > moveField.columnIndex && field.row > moveField.row) &&
                                (field.columnIndex - moveField.columnIndex === field.row - moveField.row)) ||

                                ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                (field.columnIndex < moveField.columnIndex && field.row < moveField.row) &&
                                (moveField.columnIndex - field.columnIndex === moveField.row - field.row)) ||

                                ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                (field.columnIndex > moveField.columnIndex && field.row < moveField.row) &&
                                (field.columnIndex - moveField.columnIndex === moveField.row - field.row)),
            knightFilter = (field, moveField) => ((field.columnIndex === (moveField.columnIndex - 2)) && (field.row === (moveField.row + 1))) ||
                                ((field.columnIndex === (moveField.columnIndex- 2)) && (field.row === (moveField.row - 1))) ||
                                ((field.columnIndex === (moveField.columnIndex - 1)) && (field.row === (moveField.row + 2))) ||
                                ((field.columnIndex === (moveField.columnIndex - 1)) && (field.row === (moveField.row - 2))) ||
                                ((field.columnIndex === (moveField.columnIndex + 1)) && (field.row === (moveField.row + 2))) ||
                                ((field.columnIndex === (moveField.columnIndex+ 1)) && (field.row === (moveField.row - 2))) ||
                                ((field.columnIndex === (moveField.columnIndex + 2)) && (field.row === (moveField.row + 1))) ||
                                ((field.columnIndex === (moveField.columnIndex + 2)) && (field.row === (moveField.row - 1))),
            bishopFilter = (field, moveField) => ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                     (field.columnIndex < moveField.columnIndex && field.row > moveField.row && (field.columnIndex - moveField.columnIndex) === (moveField.row - field.row))) ||
                                     ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                     (field.columnIndex > moveField.columnIndex && field.row > moveField.row && (field.columnIndex - moveField.columnIndex) === (field.row - moveField.row))) ||
                                     ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                    (field.columnIndex < moveField.columnIndex && field.row < moveField.row && (moveField.columnIndex - field.columnIndex) === (moveField.row - field.row))) ||
                                     ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) &&
                                     (field.columnIndex > moveField.columnIndex && field.row < moveField.row && (field.columnIndex - moveField.columnIndex) === (moveField.row - field.row))),
            rookFilter = (field, moveField) => (field.columnIndex === moveField.columnIndex || field.row === moveField.row),
            kingFilter = (field, moveField) =>  (field.row === moveField.row && (field.columnIndex === moveField.columnIndex - 1 || field.columnIndex === moveField.columnIndex + 1)) ||
                        (field.columnIndex === moveField.columnIndex && (field.row === moveField.row - 1 || field.row === moveField.row + 1)) ||
                        ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) && 
                        (field.columnIndex < moveField.columnIndex && field.row === moveField.row + 1 && (field.columnIndex - moveField.columnIndex === moveField.row - field.row))) ||
                        ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) && 
                        (field.columnIndex > moveField.columnIndex && field.row === moveField.row + 1 && (field.columnIndex - moveField.columnIndex === field.row - moveField.row))) ||
                        ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) && 
                        (field.columnIndex < moveField.columnIndex && field.row === moveField.row - 1 && (moveField.columnIndex - field.columnIndex === moveField.row - field.row))) ||
                        ((field.columnIndex !== moveField.columnIndex && field.row !== moveField.row) && 
                        (field.columnIndex > moveField.columnIndex && field.row === moveField.row - 1 && (field.columnIndex - moveField.columnIndex === moveField.row - field.row)));
   
    if(pawnsMove) { 
        if(currentPlayer === 'white'){
            fields.filter(field => whitePawnFilter(field, moveField))[0].piece = '';
            moveField.piece = 'P';
        } else {
            fields.filter(field => blackPawnFilter(field, moveField))[0].piece = '';
            moveField.piece = 'p';
        }
    }
    else if(regularMove){
       
        let piece = move[0];
        if(currentPlayer === 'white'){         
            if(piece === 'Q') {
                fields.filter(field => queenFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';                                
            } else if(piece === 'N'){
                fields.filter(field => knightFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
            } else if(piece === 'B'){
                fields.filter(field => bishopFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
            } else if(piece === 'R'){
                fields.filter(field => rookFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
            } else if(piece === 'K'){
                fields.filter(field => kingFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
            }
            moveField.piece = piece;     
        } else {
            if(piece === 'q'){
                fields.filter(field => queenFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';              
            } else if(piece === 'n'){
                fields.filter(field => knightFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';          
            } else if(piece === 'b'){
                fields.filter(field => bishopFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';            
            } else if(piece === 'r'){
                fields.filter(field => rookFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
            } else if(piece === 'k'){
                fields.filter(field => kingFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';                           
            }
            moveField.piece = piece;     
        }
    } else if (eatingMove){
        
        let piece = move[0];
        if(currentPlayer === 'white'){
            if(piece === 'e'){
                //fields.filter(field => whitePawnFilter(field, moveField))[0].piece = '';
                moveField.piece = 'P';
            } else {
                if(piece === 'Q') {
                    fields.filter(field => queenFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';                                
                } else if(piece === 'N'){
                    fields.filter(field => knightFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'B'){
                    fields.filter(field => bishopFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'R'){
                    fields.filter(field => rookFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'K'){
                    fields.filter(field => kingFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } 
                moveField.piece = piece;     
            }         
        }  else {
            if(piece === 'e'){
                //fields.filter(field => whitePawnFilter(field, moveField))[0].piece = '';
                moveField.piece = 'p';
            } else {
                if(piece === 'q') {
                    fields.filter(field => queenFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';                                
                } else if(piece === 'n'){
                    fields.filter(field => knightFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'b'){
                    fields.filter(field => bishopFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'r'){
                    fields.filter(field => rookFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } else if(piece === 'k'){
                    fields.filter(field => kingFilter(field, moveField)).filter(field => field.piece === piece)[0].piece = '';
                } 
                moveField.piece = piece;     
            }         
        }
    }
    changePlayer();

    return arrayToFen(fields);
}

function changePlayer() {
    currentPlayer = currentPlayer === 'white'? 'black': 'white';
}
