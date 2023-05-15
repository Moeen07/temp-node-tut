// This will import all functions and properties from fs module
//const fs = require('fs')

//This will import only the necessary functions
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./content/third.txt', `Here is the third file ${first},${second}`
    , { flag: 'a' })

console.log('done with this task')
console.log('starting next task')