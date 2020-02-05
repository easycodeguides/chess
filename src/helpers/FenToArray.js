export const fenToArray = (fenValue, fields) => {

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

    return fenArray
        .filter(piece => piece !== '/')
        .map( (field, index) => ({
            id:index,
            x:fields[index].x,
            y:fields[index].y,
            piece:field}));
};
