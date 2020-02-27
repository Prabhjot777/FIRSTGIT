'use strict'

const temperature = 21.3
const fruits = ['apple', 'pear', 'orange']

console.log(temperature)
console.log(fruits)
console.log('the temperature is ' + temperature)
console.log('the collection of fruits is ', fruits)
console.log('<h1>no html interpreter</h>')
console.log(18 + ' eighteen' + true, null, undefined)
console.log('this is a group')
console.group()
console.log('group content')
console.groupEnd()
console.log('this is a second group')
console.group()
console.log('second group content')