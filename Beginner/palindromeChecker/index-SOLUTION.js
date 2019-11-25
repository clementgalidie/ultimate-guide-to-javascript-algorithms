// AN INTUITIVE APPROACH

function palindromeChecker(text) {

    var reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText
}


// LOOPING THROUGH AND COMPARING CHARACTERS


function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })

    return result
}

// LOOPING THROUGH AND COMPARING CHARACTERS(OPTIMIZED)


function palindromeChecker(text) {
    const textLowered = text.toLowerCase()
    const textLen = text.length

    for (let i = 0; i < textLen / 2; i++) {
        if (textLowered[i] !== textLowered[textLen - i - 1]) {
            return false
        }
    }

    return true
}
