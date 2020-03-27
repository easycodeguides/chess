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

        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
