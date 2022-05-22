import { choice, remove } from './helpers'
import fruits from './fruits'

let fruit = choice(fruits)

console.log(`I'd like one ${fruit}, please`)
console.log(`Here's one ${fruit}`)
console.log(`Delicious, may I have another?`)

let remaining = remove(fruits, fruit)

console.log(`We have ${remaining.length} left`)