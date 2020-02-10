export const fenToArray = fenValue => {

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
            x:index%8+1,
            y:Math.ceil((index+1 )/8),
            piece:field}));
};
