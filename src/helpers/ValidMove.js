import {validRockMove} from './ValidRockMove'

const charMap = {a:'1', b:'2', c:'3', d:'4', e:'5', f:'6', g:'7', h:'8'};

export const validMove = (position, fields) => {

    const movingFigure = position.charAt(0);
    const movingX = parseInt(charMap[position.charAt(1)]);
    const movingY = parseInt(position.charAt(2));

    // TODO Ubaciti logiku da li jede ili ne, ovde prebaciti da li je polje zauzeto ili ne.

    if (movingFigure === 'r' || movingFigure === 'R') {

        return validRockMove(movingFigure, movingX, movingY, fields);
    }
};
