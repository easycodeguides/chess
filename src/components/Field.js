import React from 'react';
import {fenToArray} from '../helpers/FenToArray'
import {validMove} from "../helpers/ValidMove";

// FEN primer
//const fen = '1nbqkbnr/pppp1p2/4p3/6p1/6pq/PP2PNP1/1NPPBPP1/1NBQK2R';
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/1PPPPPPP/RNBQKBN1'

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
        //console.log(fenToArray(fen))
        console.log(validMove('Ra2',fen));
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
