
const numbers = [1, 2, 3]

// 'join(seperator?: string): string' whenever you see question mark in intellisense it means optional
const joined = numbers.join(',')    // 'joined' datatype become 'string'
console.log(joined)

const message = 'This is my first message'
const parts = message.split(' ')    // returns an array
console.log(parts)

const combined = parts.join('-')
console.log(combined)
