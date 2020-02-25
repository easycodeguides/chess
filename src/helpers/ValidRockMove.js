import {fenToArray} from "./FenToArray";

export const validRockMove = (figureStartPosition, figureEndPosition, fen) => {

    const fenArray = fenToArray(fen);
    let clearRoadAhead = true;

    //  Ako se pomera samo levo/desno, po x osi
    if (figureEndPosition.x !== figureStartPosition.x && figureEndPosition.y === figureStartPosition.y) {
        if (figureEndPosition.x > figureStartPosition.x) {
            for (let i = figureStartPosition.x + 1; i <= figureEndPosition.x; i++) {
                //  Proveri da li do te pozicije ima prepreka
                if (fenArray.find(elem => elem.x === i && elem.y === figureEndPosition.y).piece !== '')
                    clearRoadAhead = false
            }
        } else if (figureEndPosition.x < figureStartPosition.x) {
            for (let i = figureStartPosition.x - 1; i > figureEndPosition.x; i--) {
                if (fenArray.find(elem => elem.x === i && elem.y === figureEndPosition.y).piece !== '')
                    clearRoadAhead = false
            }
        }
    }

    //  Ako se pomera samo napred/nazad, po y osi
    else if (figureEndPosition.y !== figureStartPosition.y && figureEndPosition.x === figureStartPosition.x) {
        if (figureEndPosition.y > figureStartPosition.y) {
            for (let i = figureStartPosition.y + 1; i < figureEndPosition.y; i++) {
                //  Proveri da li do te pozicije ima prepreka
                if (fenArray.find( elem => elem.y === i && elem.x === figureEndPosition.x).piece !== '')
                    clearRoadAhead = false
            }
        } else if (figureEndPosition.y < figureStartPosition.y) {
            for (let i = figureStartPosition.y - 1; i > figureEndPosition.y; i--) {
                if (fenArray.find(elem => elem.y === i && elem.x === figureEndPosition.x).piece !== '')
                    clearRoadAhead = false
            }
        }
    }
    //  Ako je pomeranje i po x i po y osi u isto vreme
    else if (figureEndPosition.x !== figureStartPosition.x && figureEndPosition.y !== figureStartPosition.y) {
        clearRoadAhead = false
    }
    return clearRoadAhead
};
