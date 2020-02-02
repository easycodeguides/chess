import React from 'react';
import './TableFields.css';




class TableFields extends React.Component {
    render() {
        const draw = this.props.fields.map((chessField) => (
            <div className="flexChild" key={chessField.id}></div>));

        return (
            /*<div style={{height:'800px', width:'800px'}}>*/
            <div className="flexContainer">
                {draw}
            </div>
            /*</div>*/
        );
    }
}



export default TableFields;
