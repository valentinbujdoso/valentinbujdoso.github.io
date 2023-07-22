function myFunctionTest(expected, function2test) {
  if (expected === function2test()) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
  ;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
  return max(20, 10);
}));
console.log("Expected output of maxOfThree(5,4,44) is 44 " + myFunctionTest(44, function() {
  return maxOfThree(5,4, 44);
}));
console.log("Expected output of isVowel(\"a\") is true " + myFunctionTest(true, function() {
  return isVowel("a");
}));
console.log("Expected output of isVowel(\"a\") is true " + myFunctionTest(true, function() {
  return isVowel("A");
}));
console.log("Expected output of isVowel(\"a\") is false " + myFunctionTest(false, function() {
  return isVowel("b");
}));
console.log("Expected output of sum([1,2,3,4]) is 10 "  + myFunctionTest(10, function() {
  return sum([1,2,3,4]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, function() {
  return multiply([1,2,3,4]);
}));
console.log("Expected output of reverse(\"jag testar\") is ratset gaj " + myFunctionTest("ratset gaj", function() {
  return reverse("jag testar");
}));
console.log("Expected output of findLongestWord([\"jag\", \"testar\", \"werthjyykmhngfdsa\"]) is 17 " + myFunctionTest(17, function() {
  return findLongestWord(["jag", "testar", "werthjyykmhngfdsa"]);
}));
console.log("Expected output of filterLongwords([\"jag\", \"testar\"]) is testar " + myFunctionTest("testar", function() {
  return filterLongwords(["jag", "testar"], 4);
}));
jsfiddle_modification()

function max(num1, num2) {
  if(num1 > num2)
    return num1;
  else
    return num2;
}

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

function isVowel(char) {
  switch (char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
      break
    default:
      return false;
  }
}

function sum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function multiply(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }

  return sum;
}

function reverse(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

function findLongestWord(arrayOfString) {
  let longest = 0;

  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > longest)
      longest = arrayOfString[i].length;
  }

  return longest;
}

function filterLongwords(arrayOfString, minLength) {
  let result = [];

  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > minLength)
      result.push(arrayOfString[i]);
  }

  return result.toString();
}




function jsfiddle_modification() {
  console.log("Modify jsfiddle")
  const a = [1,3,5,3,3];
  console.log("Original list:" + a)
  const b = a.map(function(elem, i, array) {
    return elem / 10;
  })
  console.log("multiply each element by 10: " + b);

  const c = a.filter(function(elem, i, array){
    return elem === 3;});
  console.log("return array with all elements equal to 3: " + c);


  const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
  });
  console.log("return the product of all elements: " + d);

}
