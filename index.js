export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}
export function reverseString(string) {
    let reversed = []
    for (let i = string.length; i > 0; i--) {
        reversed.push(string[i - 1])
    }
    return reversed.join('')
}
export const calculator = {
    add(x, y) {
        return x + y
    },

    subtract(x, y) {
        return x - y
    },

    divide(x, y) {
        return x / y
    },

    multiply(x, y) {
        return x * y
    },
}
export function caesarCipher(string, factor) {
    let shifted = []
    for (let char of string) {
        let code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
            code = code + factor
            if (code > 90) {
                code = code - 26
            }
        } else if (code >= 97 && code <= 122) {
            code = code + 3
            if (code > 122) {
                code = code - 26
            }
        }
        shifted.push(String.fromCharCode(code))
    }
    return shifted.join('')
}
export function analyzeArray(array) {
    const average = Math.round(
        array.reduce((sum, cur) => sum + cur, 0) / array.length
    )
    const min = Math.min(...array)
    const max = Math.max(...array)
    const length = array.length

    return {
        average: average,
        min: min,
        max: max,
        length: length,
    }
}
