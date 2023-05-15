/*setInterval(() => {
    console.log('Play')
}, 1000)*/
const names = require('./3-names')
const temp = require('./4-utils')
const data = require('./5-alternate-module-export')
require('./6-mind-grenade')
console.log(data)
temp.sayHi(names.john)
temp.sayHiAgain(names.peter)
