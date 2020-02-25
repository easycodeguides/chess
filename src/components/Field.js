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
        const move3 = move('Nc3','rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR');
        console.log(move3);
        const move4 = move('bd6','rnbqkbnr/pppp1ppp/4p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR');
        console.log(move4);
        const move5 = move('Nd5','rnbqk1nr/pppp1ppp/3bp3/8/4P3/2N5/PPPP1PPP/R1BQKBNR');
        console.log(move5);
        const move6 = move('exd5','rnbqk1nr/pppp1ppp/3bp3/3N4/4P3/8/PPPP1PPP/R1BQKBNR');
        console.log(move6);
        const move7 = move('h3','rnbqk1nr/pppp1ppp/3b4/3p4/4P3/8/PPPP1PPP/R1BQKBNR');
        console.log(move7);
        const move8 = move('d3','rnbqk1nr/pppp1ppp/3b4/3p4/4P3/7P/PPPP1PP1/R1BQKBNR');
        console.log(move8);
        const move9 = move('Bxd3','rnbqk1nr/ppp2ppp/3b4/3p4/4P3/3p3P/PPPP1PP1/R1BQKBNR');
        console.log(move9);

        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
