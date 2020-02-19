import {fenToArray} from "./FenToArray";

export const validRockMove = (figure, x, y, fen) => {

    const fenArray = fenToArray(fen);
    const rockPositions = fenArray.filter( position => position.piece === figure);
    const occupied = fenArray.filter( position =>
        position.x === x &&
        position.y === y &&
        position.piece !== '');


    let validMovement;
    let allowedFigure = [];

    if (occupied.length === 1) {
        return validMovement = false;
    } else if (occupied.length === 0) {
        rockPositions.forEach(position => {
            if (x !== position.x && y !== position.y) {
                validMovement = false;
            } else if ((x !== position.x && y === position.y) || (y !== position.y && x === position.x)) {
                allowedFigure.push({id: position.id, x: position.x, y: position.y});
                validMovement = true;
            }
        });
        return validMovement
    }
};

// TODO Ako se pomera samo po x osi onda ok, ako se pomera samo po y osi onda ok.
// TODO Ako postoji neko na tom polju to bolje staviti u validMove.
