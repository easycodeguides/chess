import React from 'react';
import {fenToArray} from '../helpers/FenToArray'
import { arrayToFen } from "../helpers/ArrayToFen";
import { move } from "../helpers/Move";

// FEN primer
const fen = '3k3r/8/8/8/8/8/8/3K1N2';

//const pos2 = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR';

class Field extends React.Component {
    getStyle = (piece) => {
        return {
            color: piece === piece.toLowerCase()? 'black':'white'
        }
    };

    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));
        // FEN to Array TEST
        console.log(fenToArray(fen))
            
        console.log(arrayToFen(this.props.fields));

        const move1 = move('e4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
        console.log(move1);
        const move2 = move('e6','rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR');
        console.log(move2);
        const move3 = move('Be3','rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR');
        console.log(move3);
        const move4 = move('bd6','rnbqkbnr/pppp1ppp/4p3/8/4P3/4B3/PPPP1PPP/RN1QKBNR');
        console.log(move4);
      
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
