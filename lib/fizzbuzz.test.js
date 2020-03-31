const { fizzbuzz } = require('./fizzbuzz')
describe('fizzbuzz', () => {
    it('should convert 1 to "1" ', () => {
        expect(fizzbuzz(1)).toBe("1");
    })
    it('should convert 2 to "2"', () => {
        expect(fizzbuzz(2)).toBe("2");
    })
    it('should convert 3 to "fizz" ', () => {
        expect(fizzbuzz(3)).toBe("fizz");
    })
    it('should convert 4 to "4"', () => {
        expect(fizzbuzz(4)).toBe("4");
    })
    it('should convert 5 to "buzz"', () => {
        expect(fizzbuzz(5)).toBe("buzz");
    })
    it('should convert 7 to "tuzz"', () => {
        expect(fizzbuzz(7)).toBe("tuzz");
    })
    it('should convert 15 to "fizzbuzz"', () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz");
    })
    it('should convert 21 to "fizztuzz"', () => {
        expect(fizzbuzz(21)).toBe("fizztuzz");
    })
    it('should convert 35 to "buzztuzz"', () => {
        expect(fizzbuzz(35)).toBe("buzztuzz");
    })
    it('should convert 105 to "fizzbuzztuzz"', () => {
        expect(fizzbuzz(105)).toBe("fizzbuzztuzz");
    })
    it('should convert 11 to "ruzz"', () => {
        expect(fizzbuzz(11)).toBe("ruzz");
    })
    it('should convert 33 to "fizzruzz"', () => {
        expect(fizzbuzz(33)).toBe("fizzruzz");
    })
    it('should convert 55 to "buzzruzz"', () => {
        expect(fizzbuzz(55)).toBe("buzzruzz");
    })
    it('should convert 77 to "tuzzruzz"', () => {
        expect(fizzbuzz(77)).toBe("tuzzruzz");
    })
    it('should convert 231 to "fizztuzzruzz"', () => {
        expect(fizzbuzz(231)).toBe("fizztuzzruzz");
    })
    it('should convert 165 to "ruzz"', () => {
        expect(fizzbuzz(165)).toBe("fizzbuzzruzz");
    })
    it('should convert 385 to "buzztuzzruzz"', () => {
        expect(fizzbuzz(385)).toBe("buzztuzzruzz");
    })
    it('should convert 1155 to "fizzbuzztuzzruzz"', () => {
        expect(fizzbuzz(1155)).toBe("fizzbuzztuzzruzz");
    })
})