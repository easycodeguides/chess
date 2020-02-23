import {fenToArray} from "./FenToArray";

export const validRockMove = (figure, x, y, fen) => {

    const fenArray = fenToArray(fen);
    const rockPositions = fenArray.filter( position => position.piece === figure);
    const occupied = fenArray.filter( position =>
        position.x === x &&
        position.y === y &&
        position.piece !== '');

    const color = figureLetter => figureLetter === figureLetter.toUpperCase() ? 'white':'black';
    //  Proveri da li na putu postoji figura
    const checkValidMovement = positions => {

        let clearRoadAhead = true;

        positions.forEach( position => {
            //  Ako se pomera samo levo/desno, po x osi
            if (x !== position.x && y === position.y) {
                for (let i = position.x - 1 ; i > x; i--) {
                    if (fenArray.find( elem => elem.x === i && elem.y === y).piece !== '')
                        clearRoadAhead = false
                }
            }
            //  Ako se pomera samo napred/nazad, po y osi
            if (y !== position.y && x === position.x) {
                if (y > position.y) {
                    for (let i = position.y + 1; i < y; i++) {
                        if (fenArray.find( elem => elem.y === i && elem.x === x).piece !== '')
                            clearRoadAhead = false
                    }
                } else if (y < position.y) {
                    for (let i = position.y - 1; i > y; i--) {
                        if (fenArray.find(elem => elem.y === i && elem.x === x).piece !== '')
                            clearRoadAhead = false
                    }
                }
            }
            //  Ako je pomeranje i po x i po y osi u isto vreme
            else if (x !== position.x && y !== position.y)
                clearRoadAhead = false
                //allowedFigure.push({id: position.id, x: position.x, y: position.y});
        });
        return clearRoadAhead
    };

    if (occupied.length === 1 && color(occupied[0].piece) === color(figure)) {
        return false
    }
    //  Ako na zadatom polju postoji figura i ako je ta figura suprotne boje
    else if (occupied.length === 1 && color(occupied[0].piece) !== color(figure)) {
        //  Ako na putu nema prepreka onda moze da jede
        return checkValidMovement(rockPositions)
    }
    // Ako na zadatom polju ne postoji figura
    else if (occupied.length === 0) {
        //  Prvo proveri da li postoji na putu neka figura
        return checkValidMovement(rockPositions)
    }
};
