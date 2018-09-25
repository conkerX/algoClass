//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function whileLoop(n) {
  while (n !== 0) {
    console.log("number: ", n);

    n--;
  }

  console.log("complete");
}

//2. Next, try looping just like above except using recursion
function recursionLoop(n) {
  if (n === 0) {
    console.log("complete");
    return;
  } else {
    console.log("number: ", n);
    return loop(n - 1);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
