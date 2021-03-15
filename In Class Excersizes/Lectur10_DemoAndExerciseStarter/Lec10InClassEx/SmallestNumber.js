//linked to SmallestNumber.html
/* jshint esversion: 6 */

function findMin(arr){
  // let min = arr[0];
  //
  // for (let i in arr){
  //   if (i < min){
  //       min = i;
  //   }
  //
  //   return min;
  // }

  return Math.min(...arr);


}

function DisplayMin(){
  arr = [1,4,6,3,-76,2,0, 99];

  document.write("Finding min in: " + arr + "<br>");


  document.write("The min is: " + findMin(arr))
}
