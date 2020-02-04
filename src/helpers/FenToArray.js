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
        .map( field => ({id:'', x:'', y:'', piece:field}));
};
