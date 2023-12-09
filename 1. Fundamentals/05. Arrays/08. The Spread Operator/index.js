
const first = [1, 2, 3]
const second = [4, 5, 6]

// combine using '.concat()'
const combined1 = first.concat(second)      // [1, 2, 3, 4, 5, 6]

// combine using spread operator '...'
const combined2 = [...first, ...second]     // [1, 2, 3, 4, 5, 6]

console.log("combined1", combined1)
console.log("combined2", combined2)

// copy using '.slice()'
const copy1 = combined2.slice()

// copy using '.slice()'
const copy2 = [...combined2]

console.log("copy1", copy1)
console.log("copy1", copy2)