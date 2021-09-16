// Given an array of integers return the indices of the two numbers that add up to a given target.

// Integers are whole numbers, we need to find two ints that add up to a target number. We want to return an array with the indices of the numbers NOT the numbers themselves

// 1. Verify the constraints
// Are all numbers positive or can there be negatives?
// All are positive
// Are there duplicate numbers in the array?
// No duplicates
// Will there always be a solution available?
// No there may not always be a solution, and there may be empty arrays or only one value in the array
// What do we return if no solution?
// Return null
// Can there be multiple pairs that add up to the target?
// Only one pair of numbers will add up to the target

// 2. Write some test cases
// Work with interviewer to come up with some test cases

// Best case scenario
const arr1 = [1, 3, 7, 9, 2]; 
const t1 = 11;
const a1 = [3, 4];

// No solution available
const arr2 = [1, 3, 7, 9, 2]; 
const t2 = 25;
const a2 = null;

const arr3 = [];
const t3 = 1;
const a3 = null;

const arr4 = [5];
const t4 = 5;
const a4 = null;

// Only two nums, they add to target
const arr5 = [1, 6];
const t5 = 7;
const a5 = [0, 1];

// 3. Figure out a solution without code
// Two pointer solution: One stays on the number we are testing, the second moves to the number we are comparing

// 4. Write out solution in code

// const answerArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr1[i] + arr1[j] === t1) {
//       answerArr.push(arr1[i]);
//     }
//   }
// }
// console.log(answerArr)

const findTwoSum = function(nums, target) {
  for (let P1 = 0; P1 < nums.length; P1++) {
    const numberToFind = target - nums[P1];
    for (let P2 = P1 + 1; P2 < nums.length; P2++) {
      if (numberToFind === nums[P2]) {
        return [P1, P2];
      }
    }
  }
  return null;
}


// 5. Double check for errors

// 6. Test our code with our test cases
console.log(findTwoSum(arr1, t1));
console.log(findTwoSum(arr2, t2));
console.log(findTwoSum(arr3, t3));
console.log(findTwoSum(arr4, t4));
console.log(findTwoSum(arr5, t5));

// 7. Space and time complexity
// Nums will scale because it's an array
// How many more iterations does code need to run if nums increases?
// O(n^2) time because of double loop
// No scaling space, only static variables so O(1)
// Space complexity is much better than time so we can optimize (use more space to take less time)

// 8. Can we optimize our solution?
