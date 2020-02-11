export const arrayToFen = fields => {       
    
    let positions = fields.map( field => field.piece ), 
        counter = 0,
        rows = [];       

    for(let i = 0; i < 8; i++){
        rows[i] = [];

        for(let j = 0; j < 8; j++){
            rows[i][j] = positions[counter];
            counter++;
        }
    }

    let allshortArrays = '';

    rows.forEach( (row, index) => {        
        const shortArray = [];
        let emptyCounter = 1; 

        for(let l = 0; l < 8; l++){

            if(row[l] !== ''){            
                shortArray.push(row[l]);
            } else {
                if(row[l + 1] === ''){
                    emptyCounter++; 
                } else {
                    shortArray.push(emptyCounter);
                    emptyCounter = 1;
                }
            }
        }

        if(index < 7) {
            allshortArrays += shortArray.join('') + "/";
        } else {
            allshortArrays += shortArray.join('');
        }   
    });  
       
    return allshortArrays;
}