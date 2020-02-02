import React from 'react';
import TableFields from './TableFields';

class Table extends React.Component {
    state = {
        fields: [
            { id: 0, x: '1', y: '1', piece: '♖' },
            { id: 1, x: '2', y: '1', piece: '♘' },
            { id: 2, x: '3', y: '1', piece: '♗' },
            { id: 3, x: '4', y: '1', piece: '♔' },
            { id: 4, x: '5', y: '1', piece: '♕' },
            { id: 5, x: '6', y: '1', piece: '♗' },
            { id: 6, x: '7', y: '1', piece: '♘' },
            { id: 7, x: '8', y: '1', piece: '♖' },
            { id: 8, x: '1', y: '2', piece: '♙' },
            { id: 9, x: '2', y: '2', piece: '♙' },
            { id: 10, x: '3', y: '2', piece: '♙' },
            { id: 11, x: '4', y: '2', piece: '♙' },
            { id: 12, x: '5', y: '2', piece: '♙' },
            { id: 13, x: '6', y: '2', piece: '♙' },
            { id: 14, x: '7', y: '2', piece: '♙' },
            { id: 15, x: '8', y: '2', piece: '♙' },
            { id: 16, x: '1', y: '3', piece: '' },
            { id: 17, x: '2', y: '3', piece: '' },
            { id: 18, x: '3', y: '3', piece: '' },
            { id: 19, x: '4', y: '3', piece: '' },
            { id: 20, x: '5', y: '3', piece: '' },
            { id: 21, x: '6', y: '3', piece: '' },
            { id: 22, x: '7', y: '3', piece: '' },
            { id: 23, x: '8', y: '3', piece: '' },
            { id: 24, x: '1', y: '4', piece: '' },
            { id: 25, x: '2', y: '4', piece: '' },
            { id: 26, x: '3', y: '4', piece: '' },
            { id: 27, x: '4', y: '4', piece: '' },
            { id: 28, x: '5', y: '4', piece: '' },
            { id: 29, x: '6', y: '4', piece: '' },
            { id: 30, x: '7', y: '4', piece: '' },
            { id: 31, x: '8', y: '4', piece: '' },
            { id: 32, x: '1', y: '5', piece: '' },
            { id: 33, x: '2', y: '5', piece: '' },
            { id: 34, x: '3', y: '5', piece: '' },
            { id: 35, x: '4', y: '5', piece: '' },
            { id: 36, x: '5', y: '5', piece: '' },
            { id: 37, x: '6', y: '5', piece: '' },
            { id: 38, x: '7', y: '5', piece: '' },
            { id: 39, x: '8', y: '5', piece: '' },
            { id: 40, x: '1', y: '6', piece: '' },
            { id: 41, x: '2', y: '6', piece: '' },
            { id: 42, x: '3', y: '6', piece: '' },
            { id: 43, x: '4', y: '6', piece: '' },
            { id: 44, x: '5', y: '6', piece: '' },
            { id: 45, x: '6', y: '6', piece: '' },
            { id: 46, x: '7', y: '6', piece: '' },
            { id: 47, x: '8', y: '6', piece: '' },
            { id: 48, x: '1', y: '7', piece: '♟' },
            { id: 49, x: '2', y: '7', piece: '♟' },
            { id: 50, x: '3', y: '7', piece: '♟' },
            { id: 51, x: '4', y: '7', piece: '♟' },
            { id: 52, x: '5', y: '7', piece: '♟' },
            { id: 53, x: '6', y: '7', piece: '♟' },
            { id: 54, x: '7', y: '7', piece: '♟' },
            { id: 55, x: '8', y: '7', piece: '♟' },
            { id: 56, x: '1', y: '8', piece: '♜' },
            { id: 57, x: '2', y: '8', piece: '♞' },
            { id: 58, x: '3', y: '8', piece: '♝' },
            { id: 59, x: '4', y: '8', piece: '♚' },
            { id: 60, x: '5', y: '8', piece: '♛' },
            { id: 61, x: '6', y: '8', piece: '♝' },
            { id: 62, x: '7', y: '8', piece: '♞' },
            { id: 63, x: '8', y: '8', piece: '♜' }
        ]
    }

    render() {
        return (
            <TableFields fields={this.state.fields} />
        );
    }
}


export default Table;