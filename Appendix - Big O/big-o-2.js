function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooooooo!')
  }
}

booooo([1, 2, 3, 4, 5])

// Time complexity is O(n), space complexity (memory) is O(1) since the only thing we are creating is the i = 0
// We don't consider how big the input is for space complexity

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}

arrayOfHiNTimes([6])

// This is creating an array of 6 items so space complexity is O(n) === new data structure plus variables n times