//1

var arr1 = [1, 7, 9, 45];

var arr1 = ["Str", "alex", "moh"];

var arr1 = ["the", "fox", "over", "lazy", "dog"];

console.log("***********2*************");

var fruits = ["Tomato", "Banana", "Watermelon"];

console.log("The index of Banana is: " + fruits.indexOf("Banana"));

console.log("The index of Tomato is: " + fruits.indexOf("Tomato"));

console.log("***********3*************");

var food = ["Mansaf", "Kabs7", "Maqluba", "Masaf", "Mansaf"];

var sport = ["Football", "Paddel", "Swimming"];

var movie = [
  "Interstiller",
  "No country for old men",
  "The dark knight",
  "Avengars",
];

console.log("***********4*************");

function firstOfArray(array) {
  return array[0];
}

console.log(firstOfArray(["first", "sec", "third"]));
console.log(firstOfArray([9, "sec", "third"]));

console.log("***********5*************");

function lastOfArray(array) {
  return array[array.length - 1];
}

console.log(lastOfArray(["first", "sec", "third"]));
console.log(lastOfArray(["first", "sec", "third", 99]));

console.log("***********6*************");

var array = [0, 5, 7, 9]; //[1,3,4,6,8,9,10]

//remove 0
array.shift();

console.log(array); //[5, 7, 9]

//remove 5

array.shift();

console.log(array); // [7, 9]

//remove 7

array.shift();

console.log(array); //[9]

//add elements

array.unshift(1, 3, 4, 6, 8);

console.log(array);

//add 10

array.push(10);

console.log(array);

console.log("***********7*************");

var array2 = [];

array2.push(5, 9, -7, 3.5);

console.log(array2);

console.log("***********8*************");

function middleOfArray(array) {
  if (array.length % 2 !== 0) {
    console.log(
      `The middle elemnet of array is: ${array[Math.floor(array.length / 2)]}`
    );
  } else
    console.log(
      `The middle elemnets of array are: ${array[array.length / 2 - 1]} & ${
        array[Math.floor(array.length / 2)]
      }`
    );
}

middleOfArray([1, 2, 3, 4, 6, 99, 88, 65, 34, 33]);

middleOfArray([400, 800, 205, 342, 767]);

console.log("***********9*************");

var animals = ["cat", "ele", "bird"]; //=> ['zebra', 'elephant']

animals[0] = "zebra";

animals[1] = "elephant";

animals.pop();

console.log(animals);

console.log("***********10*************");

function indexOfArray(array, element) {
  if (element >= 0 && element < array.length) {
    console.log(array[element]);
  } else {
    console.log("Num out of array range");
  }
}

var nums = [1, 2, 3, 8, 9];

indexOfArray(nums, 3);
indexOfArray(nums, 5);

console.log("***********11*************");

function arrayExceptLast(array) {
  array.pop();

  console.log(array);
}

var nums = [1, 2, 3, 8, 9];

arrayExceptLast(nums);

arrayExceptLast(["M", "N", "O", "P"]);

console.log("***********12*************");

function addToEnd(array, element) {
  array.push(element);

  console.log(array);
}

var nums = [1, 2, 3, 8, 9];

addToEnd(nums, 66);

console.log("***********13*************");

function sumArray(array) {
  let sum = 0;

  //   for (i = 0; i < array.length; i++) {
  //     sum += array[i];
  //   }

  //   console.log(sum);

  //while:

  var i = 0;
  while (i < array.length) {
    sum += array[i];

    i++;
  }

  console.log(sum);
}

sumArray([1, 2, 3, 8, 9]);

console.log("***********14*************");

function minInArray(array) {
  //   var smallest = array[0];

  //   for (i = 1; i < array.length; i++) {
  //     if (array[i] < smallest) {
  //       smallest = array[i];
  //     }
  //   }

  //   console.log(smallest);

  //while

  var smallest = array[0];

  var i = 1;

  while (i < array.length) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    i++;
  }
  console.log(smallest);
}

minInArray([8, 4, 3, 1, 99]);
minInArray([8, 4, -3, 1, 99]);

console.log("***********15*************");

function removeFromArray(array, element) {
  //   for (i = 0; i < array.length; i++) {
  //     if (index === array[i]) {
  //       delete array[i];
  //     }
  //   }

  array = array.filter((el) => el !== element);

  console.log(array);
}
var nums = [1, 2, 3, 8, 9];

removeFromArray(nums, 3);

removeFromArray(nums, 9);

console.log("***********16*************");

var nums = [1, 2, 3, 8, 9];

var oddArray = nums.filter((el) => el % 2 !== 0);

console.log(oddArray);

// way 2

// function oddArray(array) {
//   var oddElements;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       console.log(`Odd element: ${array[i]}`);
//     }
//   }
// }

// oddArray([1, 4, 6, 5, 9]);

console.log("***********17*************");

function aveArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum / array.length);
}

var nums = [1, 2, 3, 8, 9];

aveArray(nums);

console.log("***********18*************");

function shorterInArray(array) {
  var shortest = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  }

  console.log(shortest);
}

var strings = ["alex", "mer", "madrasa", "rashed2", "emad", "hala"];

shorterInArray(strings);

strings.sort(function (a, b) {
  return a.length - b.length;
});

console.log(strings);

console.log("***********19*************");

function repeatChar(str, char) {
  var counter = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }

  console.log(counter);
}

var string = "alex mercer madrasa rashed2 emad hala";

repeatChar(string, "a");

repeatChar(string, "e");

console.log("***********20*************");

function evenIndexOddLength(array) {
  var newArr;

  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i].length % 2 !== 0) {
      newArr = array[i];
      break;
    }
  }

  console.log(newArr);
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

evenIndexOddLength(strings);

console.log("***********21*************");

function powerElementIndex(array) {
  return array.map((el, index) => Math.pow(el, index));
}

var nums = [44, 5, 4, 3, 2, 10];

console.log(powerElementIndex(nums));

console.log("***********22*************");

function evenNumberEvenIndex(array) {
  var newArr = [];

  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
evenNumberEvenIndex(nums); //[2,8,34]
