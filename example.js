
const arr = [1, 5, 7, 8, 10];
const sum = 13;

// Find the index from the given array, where sum of the values available at those index, is equal to given parameter.
// For instance, considering above values, output should be [ [0, 1, 2], [1, 3] ]

const findSumInArray = require('./findSumInArray');


console.log(findSumInArray(arr, sum));