// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`)
    }}
}

logAllPairsOfArray(boxes)

// Nested loops always have O(n^2) === Quadratic time (each time the elements increase we have that number ^2 operations to do)
// Interviews often ask to make the solution faster

function compressBoxesTwice(array) {
  array.forEach(function(array) {
    console.log(array)
  })

  boxes.forEach(function(array) {
    console.log(array)
  })
}

compressBoxesTwice(boxes)

// Without nesting this is O(n) === rule 2 is drop the constants so it's not O(2n)