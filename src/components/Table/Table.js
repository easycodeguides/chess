import React from 'react';
import Field from '../Field';
import './Table.css';

class Table extends React.Component {
    state = {
        fields: [
            { id: 0, x: 1, y: 1, piece: '' },
            { id: 1, x: 2, y: 1, piece: 'N' },
            { id: 2, x: 3, y: 1, piece: 'B' },
            { id: 3, x: 4, y: 1, piece: 'Q' },
            { id: 4, x: 5, y: 1, piece: 'K' },
            { id: 5, x: 6, y: 1, piece: 'B' },
            { id: 6, x: 7, y: 1, piece: 'N' },
            { id: 7, x: 8, y: 1, piece: 'R' },
            { id: 8, x: 1, y: 2, piece: 'P' },
            { id: 9, x: 2, y: 2, piece: 'P' },
            { id: 10, x: 3, y: 2, piece: 'P' },
            { id: 11, x: 4, y: 2, piece: 'P' },
            { id: 12, x: 5, y: 2, piece: 'P' },
            { id: 13, x: 6, y: 2, piece: 'P' },
            { id: 14, x: 7, y: 2, piece: 'P' },
            { id: 15, x: 8, y: 2, piece: 'P' },
            { id: 16, x: 1, y: 3, piece: '' },
            { id: 17, x: 2, y: 3, piece: '' },
            { id: 18, x: 3, y: 3, piece: '' },
            { id: 19, x: 4, y: 3, piece: '' },
            { id: 20, x: 5, y: 3, piece: '' },
            { id: 21, x: 6, y: 3, piece: '' },
            { id: 22, x: 7, y: 3, piece: '' },
            { id: 23, x: 8, y: 3, piece: '' },
            { id: 24, x: 1, y: 4, piece: '' },
            { id: 25, x: 2, y: 4, piece: '' },
            { id: 26, x: 3, y: 4, piece: '' },
            { id: 27, x: 4, y: 4, piece: '' },
            { id: 28, x: 5, y: 4, piece: '' },
            { id: 29, x: 6, y: 4, piece: '' },
            { id: 30, x: 7, y: 4, piece: '' },
            { id: 31, x: 8, y: 4, piece: '' },
            { id: 32, x: 1, y: 5, piece: '' },
            { id: 33, x: 2, y: 5, piece: '' },
            { id: 34, x: 3, y: 5, piece: '' },
            { id: 35, x: 4, y: 5, piece: '' },
            { id: 36, x: 5, y: 5, piece: '' },
            { id: 37, x: 6, y: 5, piece: '' },
            { id: 38, x: 7, y: 5, piece: '' },
            { id: 39, x: 8, y: 5, piece: '' },
            { id: 40, x: 1, y: 6, piece: '' },
            { id: 41, x: 2, y: 6, piece: '' },
            { id: 42, x: 3, y: 6, piece: '' },
            { id: 43, x: 4, y: 6, piece: '' },
            { id: 44, x: 5, y: 6, piece: '' },
            { id: 45, x: 6, y: 6, piece: '' },
            { id: 46, x: 7, y: 6, piece: '' },
            { id: 47, x: 8, y: 6, piece: '' },
            { id: 48, x: 1, y: 7, piece: 'p' },
            { id: 49, x: 2, y: 7, piece: 'p' },
            { id: 50, x: 3, y: 7, piece: 'p' },
            { id: 51, x: 4, y: 7, piece: 'p' },
            { id: 52, x: 5, y: 7, piece: 'p' },
            { id: 53, x: 6, y: 7, piece: 'p' },
            { id: 54, x: 7, y: 7, piece: 'p' },
            { id: 55, x: 8, y: 7, piece: 'p' },
            { id: 56, x: 1, y: 8, piece: '' },
            { id: 57, x: 2, y: 8, piece: 'n' },
            { id: 58, x: 3, y: 8, piece: 'b' },
            { id: 59, x: 4, y: 8, piece: 'q' },
            { id: 60, x: 5, y: 8, piece: 'k' },
            { id: 61, x: 6, y: 8, piece: 'b' },
            { id: 62, x: 7, y: 8, piece: 'n' },
            { id: 63, x: 8, y: 8, piece: 'r' }
        ]
    };

    render() {
        return (
            <Field fields={this.state.fields} piece={pieceImages} />
        );
    }
}

const pieceImages={ P:'♙',R:'♖',N:'♘',B:'♗',Q:'♕',K:'♔', p:'♟',r:'♜',n:'♞',b:'♝',q:'♛',k:'♚'};

export default Table;