import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './index.js'

test('Takes a astring and returns it with the first character capitalized', () => {
    expect(capitalize('word')).toEqual('Word')
})

test('Takes a string and returns it reversed', () => {
    expect(reverseString('word')).toEqual('drow')
})

test('add', () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test('subtract', () => {
    expect(calculator.subtract(3, 2)).toBe(1)
})

test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

test('multiply', () => {
    expect(calculator.multiply(3, 2)).toBe(6)
})

test('Takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr')
})

test('Takes an array of numbers and returns an object wiyth the following average, min, max and length properties', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
})
