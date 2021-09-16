const strings = ['a', 'b', 'c', 'd'];
// 4 items * 4 shelves of memory = 16 bytes of storage in RAM

// Go to the array in memory and grab the third item in the array
strings[2]; // O(1), we know exactly where it is in memory

// Push (add something at end of array)
strings.push('e'); // O(1)

// Pop (remove last item of array)
strings.pop();
strings.pop(); // O(1)

// Unshift (add item to beginning of array)
strings.unshift('x'); // O(n) because we are moving the indexes in the memory, we are literally shifting the array from one location to another. This requires a loop!

// splice (add to the middle of the array)
strings.splice(2, 0, 'alien') // O(n) because we are shifting elements again (looping)

console.log(strings);