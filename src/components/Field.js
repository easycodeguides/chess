import React from 'react';
import {fenToArray} from '../helpers/FenToArray'

// FEN primer
const fen = '3K4/8/8/8/8/8/8/3k4';

class Field extends React.Component {
    getStyle = (piece) => {
        return {
            color: piece === piece.toLowerCase()? 'black':'white'
        }
    };


    fenNotation = fields => {       
        var positions = fields.map( field => field.piece ), 
            counter = 0,
            rows = [];       

        for(let i = 0; i < 8; i++){
            rows[i] = [];

            for(let j = 0; j < 8; j++){
                rows[i][j] = positions[counter];
                counter++;
            }
        }

        let allshortArrays = '';

        rows.forEach( (row, index) => {        
            const shortArray = [];
            let emptyCounter = 1; 

            for(let l = 0; l < 8; l++){

                if(row[l] !== ''){            
                    shortArray.push(row[l]);
                } else {
                    if(row[l + 1] === ''){
                        emptyCounter++; 
                    } else {
                        shortArray.push(emptyCounter);
                        emptyCounter = 1;
                    }
                }
            }

            if(index < 7) {
                allshortArrays += shortArray.join('') + "/";
            } else {
                allshortArrays += shortArray.join('');
            }   
        });     
        return allshortArrays;
    }

    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));
        // FEN to Array TEST
        console.log(fenToArray(fen))
        var fenFields = this.fenNotation(this.props.fields);
        console.log('Fen notation is ',fenFields);

        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
