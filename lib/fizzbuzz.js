function fizzbuzz(number) {
    if(number%7 === 0 && number%5 === 0 && number%3 === 0 ) {
        return 'fizzbuzztuzz'
    }
    if(number%7 === 0 && number%5 === 0 ) {
        return 'buzztuzz'
    }
    if(number%7 === 0 && number%3 === 0 ) {
        return 'fizztuzz'
    }
    if(number%5 === 0 && number%3 === 0 ) {
        return 'fizzbuzz'
    }
    if(number%7 === 0) {
        return 'tuzz'
    }
    if(number%5 === 0) {
        return 'buzz'
    }
    if(number%3 === 0 ) {
        return 'fizz'
    }

    return String(number)
}

module.exports = {
    fizzbuzz: fizzbuzz
}