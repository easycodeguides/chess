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

    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));
        // FEN to Array TEST
        console.log(fenToArray(fen));
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
