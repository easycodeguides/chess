import React from 'react';
import './TableFields.css';




class TableFields extends React.Component {
    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" key={chessField.id}>{chessField.piece}</div>));

        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}



export default TableFields;
