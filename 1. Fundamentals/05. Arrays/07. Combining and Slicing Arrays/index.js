
let first = [1, 2, 3]
let second = [4, 5, 6]
let combined = first.concat(second)   // [1, 2, 3, 4, 5, 6]

console.log(combined)

// Way to duplicate
const slice = combined.slice()
console.log(slice)

// Be careful if array we combined has Reference type element
// we copy the reference not the value itself
first = [{ id: 1 }]
combined = first.concat(second)
first[0].id = 999
console.log(combined)   // 'id' in 'combined' also affected eventhough we modify the 'id' in 'first'
