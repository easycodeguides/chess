import React from 'react';
import {validMove} from './ValidMove';

test('Are there a function to validMove', () => {
   expect(validMove()).toBeDefined;
});

test('White pawn one field forward from start position', () => {
    expect(validMove('e3', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('White pawn two fields forward from start position', () => {
    expect(validMove('e4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('White pawn two fields forward from b3 position', () => {
    expect(validMove('b5', 'rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR')).toBeFalsy();
});

test('Black pawn one field forward from start position', () => {
    expect(validMove('e6', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black pawn two fields forward from start position', () => {
    expect(validMove('e5', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black pawn two fields forward from b6 position', () => {
    expect(validMove('b4', 'rnbqkbnr/p1pppppp/1p6/8/8/8/PPPPPPPP/RNBQKBNR')).toBeFalsy();
});

test('White rook one field forward from start position, with pawn on the way', () => {
    expect(validMove('Ra2', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeFalsy();
});

test('White rook one field forward from start position', () => {
    expect(validMove('Ra2', 'rnbqkbnr/p1pppppp/1p6/8/8/8/1PPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black rook one field forward from start position', () => {
    expect(validMove('ra7', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black rook one field sideway from start position', () => {
    expect(validMove('rb8', 'r1bqkbnr/p1pppppp/1pn5/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black rook one field diagonaly from start position', () => {
    expect(validMove('rb7', 'r1bqkbnr/p1pppppp/1pn5/8/8/8/PPPPPPPP/RNBQKBNR')).toBeFalsy();
});

test('White bishop one field forward, from start position', () => {
    expect(validMove('Bd2', 'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR')).toBeTruthy();
});

test('Black bishop one field forward, diagonally, from start position', () => {
    expect(validMove('bg7', 'rnbqkbnr/pppppp1p/6p1/8/8/8/PPPPP1PP/RNBQKBNR')).toBeTruthy();
});

test('Black bishop one field forward, diagonally, from start position', () => {
    expect(validMove('be7', 'rnbqkbnr/pppppp1p/6p1/8/8/8/PPPPP1PP/RNBQKBNR')).toBeFalsy();
});

test('White knight one step forward, from start position', () => {
    expect(validMove('Nc3', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black knight one step forward, from start position', () => {
    expect(validMove('na6', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black knight one step forward, from start position', () => {
    expect(validMove('nc6', 'rnbqkbnr/pp1ppppp/2p5/8/8/8/PPPPP1PP/RNBQKBNR')).toBeFalsy();
});

test('White queen one field forward, diagonaly, from start position', () => {
    expect(validMove('Qd2', 'rnbqkbnr/pp1ppppp/2p5/8/8/3P4/PPP1P1PP/RNBQKBNR')).toBeTruthy();
});

test('Black queen, sideways from start position', () => {
    expect(validMove('qh4', 'rnbqkbnr/pppp1ppp/4p3/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});

test('Black queen one field sideways from start position', () => {
    expect(validMove('qg4', 'rnb1kbnr/pppp1p1p/4p3/8/6pq/8/PPPPPPPP/RNBQKBNR')).toBeFalsy();
});

test('White king one field forward from start position', () => {
    expect(validMove('Ke2', 'rnb1kbnr/pppp1p1p/4p3/8/6pq/4P3/PPPP1PPP/RNBQKBNR')).toBeTruthy();
});

test('Black king one field forward from start position', () => {
    expect(validMove('ke7', 'rnb1kbnr/pppp1p1p/4p3/8/6pq/4P3/PPPP1PPP/RNBQKBNR')).toBeTruthy();
});

test('Black king one field forward from start position', () => {
    expect(validMove('kd7', 'rnb1kbnr/pppp1p1p/4p3/8/6pq/4P3/PPPP1PPP/RNBQKBNR')).toBeFalsy();
});

