const {circle, square, triangle } = require('./shapes')

describe('shape', () => {

    describe('triangle', () => {
        it('should return svg code for a triangle with blue background, the letters ABC in white text', () => {
            const resultTriangle = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="75,10 0,140, 150,140" stroke="black" stroke-width="3" fill="blue" />
        <text x="75" y="100" font-size="30" text-anchor="middle" fill="white">ABC</text>
        </svg>`
            const testTriangle = new triangle('blue', 'ABC', 'white');
            expect(testTriangle.render()).toEqual(resultTriangle);


        });
    });

    describe('square', () => {
        it('should return svg code for a square with red background, the letters BOB in black text', () => {
            const resultSquare = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="150" height="150" stroke="black" stroke-width="3" fill="red" />
        <text x="80" y="80" font-size="60" text-anchor="middle" alignment-baseline="central" fill="black">BOB</text>
        </svg>`;
            const testSquare = new square('red', 'BOB', 'black');
            expect(testSquare.render()).toEqual(resultSquare);
        });
    });

    describe('circle', () => {
        it('should return svg code for a white circle with black text that says "undefined"', () => {
            const resultCircle = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="100" stroke="black" stroke-width="3" fill="white" />
        <text x="150" y="150" font-size="70" text-anchor="middle" alignment-baseline="central" fill="black">undefined</text>
        </svg>`
            const testCircle = new circle('white', undefined, 'black');
            expect(testCircle.render()).toEqual(resultCircle);
        });
    });
});
