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
})