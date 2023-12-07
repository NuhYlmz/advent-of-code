const fs = require('fs')
const lines = []
fs.readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .forEach(function (line) {
    lines.push(line)
  })

  const results = []
  let total= 0
lines.forEach((line) => {
  let firstNumber, lastNumber
  line.split('').forEach((char) => {
    if (!isNaN(parseFloat(char))){
      lastNumber = char
      if(!firstNumber){
        firstNumber = char
      }
    }
  })
  const result = parseInt(`${firstNumber}${lastNumber}`)
  results.push(result)
  total+= result
})

console.log(results)
console.log(total)

