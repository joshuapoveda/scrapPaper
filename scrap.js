function miniMaxSum(arr) {
  // Write your code here
  let leastSum = 0
  let highestSum = 0

  arr.sort(function(a, b) {
    return a - b;
  });

  for(i=0; i < arr.length - 1; i++){
    leastSum += arr[i]
  }
  for(i=1; i < arr.length; i++){
    highestSum += arr[i]
  }
  console.log(leastSum + " " + highestSum)
}

console.log(miniMaxSum([1,2,3,4,5]))

