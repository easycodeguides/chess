import React from 'react';

// FEN primer
const fen = '3K4/8/8/8/8/8/8/3k4';

class Field extends React.Component {
    getStyle = (piece) => {
        return {
            color: piece === piece.toLowerCase()? 'black':'white'
        }
    };
    // FEN to Array
    fenToArray = fenValue => {
        let fenArray = [];
        fenValue.split('').forEach( element => {
            if (Number.isInteger(parseInt(element))) {
                for (let i = 0; i < parseInt(element); i++) {
                    fenArray.push('')
                }
            } else {
                fenArray.push(element)
            }
        });
        return fenArray.filter(piece => piece !== '/')
    };

    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));
        // FEN to Array TEST
        console.log(this.fenToArray(fen));
        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
