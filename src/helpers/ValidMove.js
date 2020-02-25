import {validRockMove} from './ValidRockMove'
import {fenToArray} from "./FenToArray";

const charMap = {a:'1', b:'2', c:'3', d:'4', e:'5', f:'6', g:'7', h:'8'};

export const validMove = (position, fields) => {

    const movingFigure = position.charAt(0);
    const figureEndPosition = {
        x : parseInt(charMap[position.charAt(1)]),
        y : parseInt(position.charAt(2))
    };

    // Data je fiksna startna pozicija
    const figureStartPosition = {x: 8, y: 1};

    // TODO Ubaciti logiku da li jede ili ne, ovde prebaciti da li je polje zauzeto ili ne.

    const vacant = fenToArray(fields).filter( position =>
        position.x === figureEndPosition.x &&
        position.y === figureEndPosition.y &&
        position.piece !== '');

    const figureColor = figureLetter => figureLetter === figureLetter.toUpperCase() ? 'white':'black';
    
    if (movingFigure === 'r' || movingFigure === 'R') {
        return validRockMove(figureStartPosition, figureEndPosition, fields);
    }
};
