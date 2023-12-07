const fs = require('fs')
const lines = []
const stringNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

fs.readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .forEach(function (line) {
    let finalLine = ''
    line.split('').forEach((char, index) => {
      if (!isNaN(parseFloat(char))) {
        finalLine += char
      } else {
        let subStr = line.substring(index)
        stringNumbers.forEach((stringNumber, i) => {
          if (subStr.startsWith(stringNumber)) {
            finalLine += i + 1
          }
        })
      }
    })

    console.log(finalLine)
    lines.push(finalLine)
  })

const results = []
let total = 0
lines.forEach((line) => {
  let firstNumber, lastNumber
  line.split('').forEach((char) => {
    if (!isNaN(parseFloat(char))) {
      lastNumber = char
      if (!firstNumber) {
        firstNumber = char
      }
    }
  })
  const result = parseInt(`${firstNumber}${lastNumber}`)
  results.push(result)
  total += result
})

console.log(results)
console.log(total)
