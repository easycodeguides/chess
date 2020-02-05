import React from 'react';

class Field extends React.Component {
    getStyle = (piece) => {
        return {
            color: piece === piece.toLowerCase()? 'black':'white'
        }
    }


    fenNotation = () => {
        
        var positions = [];
     
        this.props.fields.map((field) => (
            positions.push(field.piece)
        ))
        
        var rows = [];
        var counter = 0;

        for(var i = 0; i < 8; i++){
            rows[i] = [];

            for(var j = 0; j < 8; j++){
                rows[i][j] = positions[counter];
                counter++;
            }
            
        }

        var allshortArrays = '';

        rows.forEach( (row, index) => {
            
            const shortArray = []; 
            var emptyCounter = 1; 

            for(let l = 0; l < 8; l++){

                if(row[l] !== ''){
            
                    shortArray.push(row[l]);
            
                } else {
                
                    if(row[l + 1] ===''){
                        emptyCounter++; 
                        
                    } else {
                        shortArray.push(emptyCounter);
                    }
                }
            }

            if(index < 7) {
                allshortArrays += shortArray.join('') + "/";
            } else {
                allshortArrays += shortArray.join('');
            }
        
        });

        console.log('Fen notation of the start position', allshortArrays);
    
    }

    render() {
        const draw = this.props.fields.reverse().map((chessField) => (
            <div className="flexChild" style={this.getStyle(chessField.piece)} key={chessField.id}>{this.props.piece[chessField.piece]}</div>));

        this.fenNotation();

        return (
            <div className="flexContainer">
                {draw}
            </div>
        );
    }
}

export default Field;
