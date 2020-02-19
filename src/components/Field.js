import React from 'react';
import {fenToArray} from '../helpers/FenToArray'
import {validMove} from "../helpers/ValidMove";

// FEN primer
const fen = 'rnb1kbnr/pppp1p2/4p2p/8/6pq/PP2P3/1NPP1PPP/R1BQKBNR';

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
        console.log(validMove('Rh2',fen));
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
