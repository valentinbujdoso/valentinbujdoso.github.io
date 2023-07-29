function myFunctionTest(expected, function2test) {
  if (expected === function2test()) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
  ;
}

console.log("Expected output of sum([1,2,3,4]) is 10 "  + myFunctionTest(10, function() {
  return sum([1,2,3,4]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, function() {
  return multiply([1,2,3,4]);
}));

console.log("Expected output of reverse(\"jag testar\") is ratset gaj " + myFunctionTest("ratset gaj", function() {
  return reverse("jag testar");
}));
console.log("Expected output of filterLongwords([\"jag\", \"testar\"]) is testar " + myFunctionTest("testar", function() {
  return filterLongwords(["jag", "testar"], 4);
}));

/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers */
function sum(array){
  return array.reduce( (i, j) => {return i+j;});
}

function multiply(array) {
  return array.reduce( (i, j) => {return i*j;});
}

/* 5 Define a function reverse() that computes the reversal of a string. */
function reverse(array) {
  return array.split('').reduce((first, second) => second + first, "");
}

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

function filterLongwords(arrayOfString, minLength) {
  return arrayOfString.filter(word => word.length > minLength).toString();

}
