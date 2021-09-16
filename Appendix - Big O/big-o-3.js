// Find 1st, find Nth tweet
const array = [{
    tweet: 'hi',
    date: 2012
  }, {
    tweet: 'my',
    date: 2014
  }, {
      tweet: 'teddy',
      date: 2018
  }];

// array[0] //O(1)
// array[array.length - 1] //O(1)

// To find first and last tweet it's O(n^2), nested loops for comparing

'ihihijiojojiohi'.length // Big O depends on language and how it finds the length, in JS .length is a simple lookup, a property so it's O(1)