// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

// 1. Verify the constraints
// Does thickness of lines affect the area
// No they take up no space

// Do the left and right sides of the graph count as walls?
// No the sides cannot be used to form a container

// Does a higher line inside our container affect our area?
// No lines inside a container don't affect the area

// 2. Write out some test cases
const t1 = [7, 1, 2, 3, 9]
// Forming a container from 7 and 9, 7 is the largest value our area can go up to in length since beyond that water would spill out of the container
// Width is calculated by the number of elements between the elements forming the container, in this case 4 - 0 (indices) = 4
// 7 x 4 (l x w) = 28

const t2 = [] // = 0
const t3 = [7] // = 0, need min 2 elements

const t4 = [6, 9, 3, 4, 5, 8] // 8 X 4 = 32

// 3. Figure out a solution without code

// 4. Write out a solution in code

const findMaxWaterContainer = (heightsArr) => {
  let maxArea = 0;
  
  for (let p1 = 0; p1 < heightsArr.length; p1++) {
    for (let p2 = p1 + 1; p2 < heightsArr.length; p2++) {
      const height = Math.min(heightsArr[p1], heightsArr[p2]);
      const width = p2 - p1;
      const area = height * width;
      
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

console.log(findMaxWaterContainer(t1));
console.log(findMaxWaterContainer(t2));
console.log(findMaxWaterContainer(t3));
console.log(findMaxWaterContainer(t4));

// Time: O(n^2)
// Space: O(1)

// 8. Optimize solution

const findMaxWaterContainerOptimized = (heightsArr) => {
  let p1 = 0, p2 = heightsArr.length - 1, maxArea = 0;

  while(p1 < p2) {
    const height = Math.min(heightsArr[p1], heightsArr[p2]);
    const width = p2 - p1
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heightsArr[p1] <= heightsArr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}

console.log(findMaxWaterContainerOptimized(t1));
console.log(findMaxWaterContainerOptimized(t2));
console.log(findMaxWaterContainerOptimized(t3));
console.log(findMaxWaterContainerOptimized(t4));