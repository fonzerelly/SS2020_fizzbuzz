function createConvertToFn(num, placeholder) {
    return function (number) {
        if (number % num === 0){
            return  placeholder
        }
        return '';
    }    
}

const convertToFizz = createConvertToFn(3, 'fizz')
const convertToBuzz = createConvertToFn(5, 'buzz')
const convertToTuzz = createConvertToFn(7, 'tuzz')
const convertToRuzz = createConvertToFn(11, 'ruzz')

function fizzbuzz(number) {
    var result = convertToFizz(number) + 
                 convertToBuzz(number) + 
                 convertToTuzz(number) + 
                 convertToRuzz(number);
    
    if (result !== '') {
        return result;
    }

    return String(number)
}

module.exports = {
    fizzbuzz: fizzbuzz
}