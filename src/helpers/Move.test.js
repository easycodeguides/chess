import { move } from "./Move";

test('White player starts with pawn on b3 ', () => {
    expect(move('b3', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toEqual('rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR');
})

test('Black player starts with pawn on a6', () => {
    expect(move('a6','rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR')).toEqual('rnbqkbnr/1ppppppp/p7/8/8/1P6/P1PPPPPP/RNBQKBNR');
})

test('White bishop moves on a3', () => {
    expect(move('Ba3','rnbqkbnr/1ppppppp/p7/8/8/1P6/P1PPPPPP/RNBQKBNR')).toEqual('rnbqkbnr/1ppppppp/p7/8/8/BP6/P1PPPPPP/RN1QKBNR');
})

test('Black knight moves on c6', () => {
    expect(move('nc6','rnbqkbnr/1ppppppp/p7/8/8/BP6/P1PPPPPP/RN1QKBNR')).toEqual('r1bqkbnr/1ppppppp/p1n5/8/8/BP6/P1PPPPPP/RN1QKBNR');
})

test('White knight moves on c3', () => {
    expect(move('Nc3','r1bqkbnr/1ppppppp/p1n5/8/8/BP6/P1PPPPPP/RN1QKBNR')).toEqual('r1bqkbnr/1ppppppp/p1n5/8/8/BPN5/P1PPPPPP/R2QKBNR');
})

test('Black pawn moves on g6', () => {
    expect(move('g6','r1bqkbnr/1ppppppp/p1n5/8/8/BPN5/P1PPPPPP/R2QKBNR')).toEqual('r1bqkbnr/1ppppp1p/p1n3p1/8/8/BPN5/P1PPPPPP/R2QKBNR');
})

test('White knight moves on d5', () => {
    expect(move('Nd5','r1bqkbnr/1ppppp1p/p1n3p1/8/8/BPN5/P1PPPPPP/R2QKBNR')).toEqual('r1bqkbnr/1ppppp1p/p1n3p1/3N4/8/BP6/P1PPPPPP/R2QKBNR');
})

test('Black pawn moves on e6', () => {
    expect(move('e6','r1bqkbnr/1ppppp1p/p1n3p1/3N4/8/BP6/P1PPPPPP/R2QKBNR')).toEqual('r1bqkbnr/1ppp1p1p/p1n1p1p1/3N4/8/BP6/P1PPPPPP/R2QKBNR');
})

test('White bishop moves on b2', () => {
    expect(move('Bb2','r1bqkbnr/1ppp1p1p/p1n1p1p1/3N4/8/BP6/P1PPPPPP/R2QKBNR')).toEqual('r1bqkbnr/1ppp1p1p/p1n1p1p1/3N4/8/1P6/PBPPPPPP/R2QKBNR');
})

test('Black pawn from e eats on d5', () => {
    expect(move('exd5','r1bqkbnr/1ppp1p1p/p1n1p1p1/3N4/8/1P6/PBPPPPPP/R2QKBNR')).toEqual('r1bqkbnr/1ppp1p1p/p1n3p1/3p4/8/1P6/PBPPPPPP/R2QKBNR');
})

test('White bishop eats on h8', () => {
    expect(move('Bxh8','r1bqkbnr/1ppp1p1p/p1n3p1/3p4/8/1P6/PBPPPPPP/R2QKBNR')).toEqual('r1bqkbnB/1ppp1p1p/p1n3p1/3p4/8/1P6/P1PPPPPP/R2QKBNR');
})