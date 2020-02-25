import React from 'react';
import {fenToArray} from '../helpers/FenToArray'
import {validMove} from "../helpers/ValidMove";

// FEN primer
//const fen = '1nbqkbnr/pppp1p2/4p3/6p1/6pq/PP2PNP1/1NPPBPP1/1NBQK2R';
const fen = 'rnbqk2r/1ppppppp/8/8/8/8/1PPPPPP1/RNBQK2R'

class Field extends React.Component {
    getStyle = (piece) => {
        return {
            color: piece === piece.toLowerCase()? 'black':'white'
        }
    };

    render() {
        //const draw = this.props.fields.reverse().map((chessField) => (
        const draw = fenToArray(fen).reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));
        // FEN to Array TEST
        //console.log(fenToArray(fen))
        console.log(validMove('re8',fen));
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
