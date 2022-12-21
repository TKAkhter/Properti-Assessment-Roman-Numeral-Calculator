import calculateNumberToRoman from '../helpers/functions'

describe('Test Calculator Function', () => {

    test('Sends a number and expect roman number in return', () => {
        const roman = calculateNumberToRoman("5", function () { });
        expect(roman).toMatch(/V/);
    });

    test('Sends 0 and expect empty in return', () => {
        const roman = calculateNumberToRoman("0", function () { });
        expect(roman).toMatch("");
    });

    test('Sends deciamal number expect empty in return', () => {
        const roman = calculateNumberToRoman("10.01", function () { });
        expect(roman).toMatch("");
    });

    test('Sends negative number expect empty in return', () => {
        const roman = calculateNumberToRoman("-108", function () { });
        expect(roman).toMatch("");
    });

    test('Sends special character with number expect empty in return', () => {
        const roman = calculateNumberToRoman("$08", function () { });
        expect(roman).toMatch("");
    });

    test('Sends alphabet with number expect empty in return', () => {
        const roman = calculateNumberToRoman("10e8", function () { });
        expect(roman).toMatch("");
    });

    test('Sends number exceeds 3,999,999 expect empty in return', () => {
        const roman = calculateNumberToRoman("4000000", function () { });
        expect(roman).toMatch("");
    });
});
