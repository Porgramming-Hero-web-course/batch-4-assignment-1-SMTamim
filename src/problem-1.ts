{
  /**
     * Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // Sample Input:
    sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    15;
    */

  const sumArray = (numberArray: number[]) => {
    const sum: number = numberArray.reduce((i, j) => i + j, 0);
    console.log(sum);
  };
  sumArray([1, 2, 3, 4, 5]);
}
