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
function whileExponent(base, expo) {
  var result = base;

  while (expo !== 1) {
    result = result * base;

    expo--;
  }

  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursionExponent(base, expo) {
  if (expo === 1) {
    return base;
  } else {
    return base * recursionExponent(base, expo - 1);
  }
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value by num and returns an array of the values.
function recursiveMultiplierWithInnerRecursion(arr, num) {
  var result = [];

  var innerRecursion = function(arr, num) {
    if (!arr.length) {
      return result;
    } else {
      result.push(arr[0] * num);
      return innerRecursion(arr.slice(1), num, result);
    }
  };

  innerRecursion(arr, num);
  return result;
}

// pure recursion
function recursiveMultiplier(arr, num, result) {
  if (!arr.length) {
    return result;
  } else {
    result.push(arr[0] * num);
    return recursiveMultiplier(arr.slice(1), num, result);
  }
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverseWithInnerRecursion(array) {
  var result = [];

  var innerRecursion = function(array) {
    if (!array.length) {
      return;
    } else {
      result.unshift(array.slice(0, 1)[0]);
      return innerRecursion(array.slice(1));
    }
  };

  innerRecursion(array);
  return result;
}

// pure recursion
function recursiveReverse(array, result) {
  if (!array.length) {
    return result;
  } else {
    result.unshift(array.slice(0, 1)[0]);
    return recursiveReverse(array.slice(1), result);
  }
}
