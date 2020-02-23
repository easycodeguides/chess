export const fenToArray = fenValue => {

    let fenArray = [];

    fenValue.split('').forEach( element => {
        if (Number.isInteger(parseInt(element))) {
            for (let i = 0; i < parseInt(element); i++) {
                fenArray.push('')
            }
        } else if (element !== '/') {
            fenArray.push(element)
        }
    });

    return fenArray
        .concat(
            fenArray.splice(56, 8),
            fenArray.splice(48, 8),
            fenArray.splice(40, 8),
            fenArray.splice(32, 8),
            fenArray.splice(24, 8),
            fenArray.splice(16, 8),
            fenArray.splice(8, 8),
            fenArray.splice(0, 8)
        )
        .map( (field, index) => ({
            id:index,
            x:index%8+1,
            y:Math.ceil((index+1)/8),
            piece:field})
        );
};
