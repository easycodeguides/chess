import React from 'react';
import {validMove} from './ValidMove';

test('Are there a function to validMove', () => {
   expect(validMove()).toBeDefined;
});

test('Validate move with validMove function', () => {
   expect(validMove('Qe4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')).toBeTruthy();
});
