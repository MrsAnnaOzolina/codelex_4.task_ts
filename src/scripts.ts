console.log('Ready for coding');

// EXAMPLE
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a
// Return the result
const subtract = (a: number, b: number): number => a - b;

console.log('example');
console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98


// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result


const sumfunction = (a: number, b: number): number => a + b;

console.log('      task 1');
console.log(sumfunction(1, 2)); // 3
console.log(sumfunction(1, 10)); // 11
console.log(sumfunction(99, 1)); // 100


// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const typeFunction = (a: any): any => typeof (a);

console.log('        task 2');
console.log(typeFunction(1)); //'number'
console.log(typeFunction(false));
console.log(typeFunction({}));
console.log(typeFunction(null));
console.log(typeFunction('string'));
console.log(typeFunction(['array']));



// Task 3 
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const equal = (a: any, b: any): boolean => a === b;

console.log('      task 3');
console.log(equal(2, 3)); //false
console.log(equal(3, 3)); // true
console.log(equal(1, '1')); // false
console.log(equal('10', '10')); // true

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const chareter = (a: string, b: number): string => a.charAt(b - 1);

console.log('       task 4');
console.log(chareter('abcd', 1)); //a
console.log(chareter('zyxbwpl', 5)); //w
console.log(chareter('gfedcba', 3)); //e


// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
const removescharecter = (a: string): string => a.slice(3);

console.log('       task 5');
console.log(removescharecter('abcdefg')); //defg
console.log(removescharecter('1234')); //4
console.log(removescharecter('fgedcba')); //dcba


// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
const last3charecters = (a: string): string => a.slice(-3);

console.log('       task 6');
console.log(last3charecters('abcdefg')); //efg
console.log(last3charecters('1234')); //234
console.log(last3charecters('fgedcba')); //cba


// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const first3charecters = (a: string): string => a.substring(0, 3);

console.log('task 7');
console.log(first3charecters('abcdefg')); //abc
console.log(first3charecters('1234')); //234
console.log(first3charecters('fgedcba')); //fge




// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const halfOfString = (a: string): string => a.substring(0, (a.length) / 2);

console.log('         task 8');
console.log(halfOfString('abcdefgh')); //abcd
console.log(halfOfString('1234')); //12
console.log(halfOfString('gedcba')); //geb



// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removersLast3Charecters = (a: string): string => a.slice(0, -3);

console.log('         task 9');
console.log(removersLast3Charecters('abcdefg')); //abcd
console.log(removersLast3Charecters('1234')); //1
console.log(removersLast3Charecters('fgedcba')); //fged


// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentageBetweenNumbers = (a: number, b: number): number => a * (b / 100);

console.log('           Task 10');
console.log(percentageBetweenNumbers(100, 50)); // 50
console.log(percentageBetweenNumbers(10, 1)); // 0.1
console.log(percentageBetweenNumbers(500, 25)); // 125


// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const longFunction = (a: number, b: number, c: number, d: number, e: number, f: number): number => Math.pow(((a + b - c) * d / e), f);

console.log('          Task 11');
console.log(longFunction(6, 5, 4, 3, 2, 1)); //10.5
console.log(longFunction(6, 2, 1, 4, 2, 3)); //2744
console.log(longFunction(2, 3, 6, 4, 2, 3)); //-8



// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const ifTheNumberIsEven = (a: number): boolean => a % 2 == 0;

console.log('           Task 12');
console.log(ifTheNumberIsEven(10)); // true
console.log(ifTheNumberIsEven(4)); // true
console.log(ifTheNumberIsEven(5)); // false
console.log(ifTheNumberIsEven(-111)); // false


// Task13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
const NumberOfTimesAoccursB = (a: string, b: string): number => {
  var n = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] == a) { n++ }
  }
  return n;
};

console.log('         Task 13');
console.log(NumberOfTimesAoccursB('m', 'how many times does the character occur in this sentence?')); // 2
console.log(NumberOfTimesAoccursB('h', 'how many times does the character occur in this sentence?')); // 4
console.log(NumberOfTimesAoccursB('?', 'how many times does the character occur in this sentence?')); // 1
console.log(NumberOfTimesAoccursB('z', 'how many times does the character occur in this sentence?')); // 0


// Task14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
const ifAhasDecimalPlace = (a: number): boolean => a % 1 == 0;

console.log('           Task 14');
console.log(ifAhasDecimalPlace(4)); // true
console.log(ifAhasDecimalPlace(1.123)); // false
console.log(ifAhasDecimalPlace(1048)); // true
console.log(ifAhasDecimalPlace(10.48)); // false


// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const compareAandB = (a: number, b: number): number => {
  if (a < b) {
    return a / b;
  }
  else {
    return a * b;
  }
};

console.log('         Task 15');
console.log(compareAandB(10, 100)); // 0.1
console.log(compareAandB(90, 45)); // 4050
console.log(compareAandB(8, 20)); // 0.4
console.log(compareAandB(2, 0.5)); // 1

// Task16 
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation


const ifAcontainsB = (a: string, b: string): string => {
  if (a.includes(b)) {
    return b + a;
  }
  else {
    return a + b;
  }
};
console.log('         Task 16');
console.log(ifAcontainsB('cheese', 'cake')); // cheesecake
console.log(ifAcontainsB('lips', 's')); // 
console.log(ifAcontainsB('Java', 'script')); // 
console.log(ifAcontainsB(' think, therefore I am', 'I')); // 


// Task17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNumber2digitals = (a: number): number => Number(a.toFixed(2));

console.log('           Task 17');
console.log(roundNumber2digitals(2.12397)); // 2.12
console.log(roundNumber2digitals(3.136)); // 3.14
console.log(roundNumber2digitals(1.12397)); // 1.12
console.log(roundNumber2digitals(26.1379)); // 26.14


// Task18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

console.log('           Task 18');
const numberToArray = (a: number): string[] => a.toString().split('');
console.log(numberToArray(10)); // 
console.log(numberToArray(931)); // 
console.log(numberToArray(193278)); // 


// Task 19 
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const unknownTextToName = (a: string, b: string): string => {
  const c: string[] = a.split('');
  const d: string[] = b.split('');

  let n: string[] = [];
  let m: string = '';
  var re = /,/gi;

  for (let i = 0; i < c.length; i++) {
    if (c[i] !== "%") { n.push(c[i]); }
  }
  for (let j = d.length - 1; j > 0; j--) {
    if (d[j] !== "%") { n.push(d[j]); }
  }
  return m.concat(n.toString()).replace(re, "");
};

console.log('            Task 19');
console.log(unknownTextToName('java', 'tpi%rcs')); // 
console.log(unknownTextToName('c%ountry', 'edis')); // 
console.log(unknownTextToName('down', 'nw%ot')); // 


// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
// const isPrime = (a: number): number => { 

function myFunction(a: number) {
  function isPrime(a: number) {
    for (var i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (isPrime(a)) {
    return a;
  } else {
    while (isPrime(a) === false) {
      a++;
    }
  }
  return a;
}
console.log('         Task 20');
console.log(myFunction(38)); //41
console.log(myFunction(7)); //7
console.log(myFunction(115)); //127
console.log(myFunction(2000)); //2003


//   Task 21
//   Write a function that takes two numbers, say x and y, as arguments
//   Check if x is divisible by y
//   If yes, return x
//   If not, return the next higher natural number that is divisible by y

const ifXCanDeviseWithY = (x: number, y: number): number => {
  if (x % y == 0) {
    return x;
  }
  while (x % y !== 0) {
    x++;
  }

  return x;
};

console.log('         Task 21');
console.log(ifXCanDeviseWithY(1, 23));//23
console.log(ifXCanDeviseWithY(23, 23));//23
console.log(ifXCanDeviseWithY(7, 3));//9
console.log(ifXCanDeviseWithY(-5, 7));//0



// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertElement = (a: string, b: string): any => {
  let c: string[] = a.split('');
  let d:string[] = c.reverse();
  let e:string[] =[];
  let f:string[] =[];
  let re= /,/gi;
    for (let i=-1; i<d.length; i++ ){
   if( i % 3 === 0 && i !==0 ) {
     e.push(d[i]+b);
} else{
  e.push(d[i]);

   }
}

return e.reverse().toString().replace(re,"");
};
console.log('          Task 22');
console.log(insertElement('1234567', '.'));//'1.234.567'
console.log(insertElement('abcde','$'));//'ab$cde'
console.log(insertElement('zxyzxyzxyzxyzxyz','w'));//'zwxyzwxyzwxyzwxyzwxyz'



// c.splice(x.length - 1, 0,)

//  Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function nextLetter(a: string): string {
  let b: string = '';
  const c: string = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= c.length - 1; j++) {
      if (a[i] === c[j]) {
        b = b + c[j + 1];
      }
    }
  }
  return b;
};
console.log('           Task 23');
console.log(nextLetter('bnchmf'));//'coding'
console.log(nextLetter('bgddrd'));//'cheese'
console.log(nextLetter('sdrshmf'));//'testing'


// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const numberInTheRow = (a:number[], b:number) => {
  return a[b-1];
}


console.log('           Task 24');
console.log(numberInTheRow([1,2,3,4,5],3));//3
console.log(numberInTheRow([10,9,8,7,6],5));//6
console.log(numberInTheRow([7,2,1,6,3],1));//7

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeThreeElements = (a: number[]) => {
  let b = a.splice(3, a.length - 1);
  return b;
}

console.log('           Task 25');
console.log(removeThreeElements([1,2,3,4]));//4
console.log(removeThreeElements([5,4,3,2,1,0]));// [2,1,0]
console.log(removeThreeElements([99,1,1]));//[]

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractLastThreeElements = (a: number[]) => {
  let b = a.splice(a.length - 3, a.length);

  return b;
};
console.log('           Task 26');
console.log(extractLastThreeElements([1,2,3,4]));//[2,3,4]
console.log(extractLastThreeElements([5,4,3,2,1,0]));//[2,1,0]
console.log(extractLastThreeElements([99,1,1]));// [99,1,1]

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
const extractFirstThreeElements = (a: number[]) => {
  let b = a.splice(0,3);

  return b;
};

console.log('           Task 27');
console.log(extractFirstThreeElements([1,2,3,4]));//[1,2,3]
console.log(extractFirstThreeElements([5,4,3,2,1,0]));//[5,4,3]
console.log(extractFirstThreeElements([99,1,1]));//[99,1,1]

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastElementofN = (a: number[], n: number) => {
  let b = a.splice(a.length - n, a.length);

  return b;
};

console.log('           Task 28');
console.log(lastElementofN([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(lastElementofN([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(lastElementofN([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanValuesBfromArrayA = (a: (string | number | boolean)[], b: string | number | boolean) => {
  let c: (string | number | boolean)[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b) {
      c.push(a[i]);
    }
  }

  return c;
}

console.log('           Task 29');
console.log(cleanValuesBfromArrayA([1,2,3], 2)); //[1, 3]
console.log(cleanValuesBfromArrayA([1,2,'2'], '2')); //[1, 2]
console.log(cleanValuesBfromArrayA([false,'2',1], false)); //['2', 1]
console.log(cleanValuesBfromArrayA([1,2,'2',1], 1)); //[2, '2']

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a
const numberOfElementsInArrayA = (a: number[]) => {
  return a.length;
}

console.log('           Task 30');
console.log(numberOfElementsInArrayA([1,2,2,4])); //4
console.log(numberOfElementsInArrayA([9,9,9])); //3
console.log(numberOfElementsInArrayA([4,3,2,1,0])); //5

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
const negativeValuesInArray = (a:number[]) =>{
  let c: number[] = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      c.push(a[i]);
    }
  }
  return c.length;
};

console.log('           Task 31');
console.log(negativeValuesInArray([1,-2,2,-4])); //2
console.log(negativeValuesInArray([0,9,1])); //0
console.log(negativeValuesInArray([4,-3,2,1,0])); //1


// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
const descendingFunction = (a:number[]) =>{

 return a.sort((a, b) => (a > b ? -1 : 1));
};


console.log('           Task 32');
console.log(descendingFunction([1,3,2])); //[3,2,1]
console.log(descendingFunction([4,2,3,1])); //[4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
const sortFuntion = (a:string[]) => {
 return a.sort();
};

console.log('           Task 33');
console.log(sortFuntion(['b', 'c', 'd', 'a'])); //['a', 'b', 'c', 'd']
console.log(sortFuntion(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); //['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34 
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
const averageFunction = (a:number[]) => {

  return a.reduce((a, b) => a + b, 0) / a.length;
}

console.log('           Task 34');
console.log(averageFunction([10,100,40])); //50
console.log(averageFunction([10,100,1000])); //370
console.log(averageFunction([-50,0,50,200])); //50


// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string
const longestStringFromArray = (a:string[]) => {

  return a.reduce((a, b) => a.length > b.length ? a : b);
}; 

console.log('           Task 35');
console.log(longestStringFromArray(['help', 'me'])); //'help'
console.log(longestStringFromArray(['I', 'need', 'candy'])); //'candy'


// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
const allElementsInArrayAreEqual = (a:(string | number | boolean )[]) =>{

//  for (let i=0; i < a.length-1; i++ ){
//     for (let j=1; j<a.length; j++)
//   if (a[i] === a[j] ){  
//   }
//   return false; 
//  }
// return true; 

 return a.every(val => val === a[0]);
}

console.log('           Task 36');
console.log(allElementsInArrayAreEqual([true, true, true, true])); //true
console.log(allElementsInArrayAreEqual(['test', 'test', 'test'])); //true
console.log(allElementsInArrayAreEqual([1,1,1,2])); //false
console.log(allElementsInArrayAreEqual(['10',10,10,10])); //false


// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

//const allArraysInOne = (a:(string|number)[], b:a:(string|number)[], c?:string ): (number| string| boolean)[] =>{
const allArraysInOne = (...arrays: any ): (number| string| boolean)[] =>{
 
return arrays.flat();
};

console.log('           Task 37');
 console.log(allArraysInOne([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]
console.log(allArraysInOne(['a', 'b', 'c'], [4, 5, 6])); //['a', 'b', 'c', 4, 5, 6]
console.log(allArraysInOne([true, true], [1, 2], ['a', 'b'])); //[true, true, 1, 2, 'a', 'b']

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
type NumberToSort = Record<string, number>
const sortArraysByPropertyB = (array: NumberToSort[] ) => {

 return array.sort((a, b) => (a.b > b.b ? 1 : -1));
}

console.log('           Task 38');
console.log(sortArraysByPropertyB([{a:1,b:2},{a:5,b:4}])); //[{a:1,b:2},{a:5,b:4}]
console.log(sortArraysByPropertyB([{a:2,b:10},{a:5,b:4}])); //[{a:5,b:4},{a:2,b:10}]
 console.log(sortArraysByPropertyB([{a:1,b:7},{a:2,b:1}])); //[{a:2,b:1},{a:1,b:7}]


// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeTwoArraysAndSort = (a:number[], b:number[]) => {
 
 return a.concat(b).sort((a, b) => (a > b ? 1 : -1));
}


console.log('           Task 39');
console.log(mergeTwoArraysAndSort([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(mergeTwoArraysAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]


// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeTwoArraysAndRemoveDublicates = (a: number[], b: number[]) => {
  let c = a.concat(b); 
  let u: number[] = [];
  c.forEach(element => {
    if (!u.includes(element)) {
      u.push(element)
    }
  });

  return u.sort((a, b) => a - b);

};
 
 console.log('           Task 39');
 console.log(mergeTwoArraysAndRemoveDublicates([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
 console.log(mergeTwoArraysAndRemoveDublicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]


//  Task 40
//  Write a function that takes an array (a) and a number (b) as arguments
//  Sum up all array elements with a value greater than b
//  Return the sum

const sumUpValuesGreaterThenB = (a: number[], b: number) => {
  let c: number[] = [];
  a.forEach(element => {
    if (element > b) {
      c.push(element)
    }
  });

  return c.reduce((a, b) => a + b, 0);

}

console.log('           Task 40');
 console.log(sumUpValuesGreaterThenB([1, 2, 3, 4, 5, 6, 7], 2)); // 25
 console.log(sumUpValuesGreaterThenB([-10, -11, -3, 1, -4], -3)); // 1
 console.log(sumUpValuesGreaterThenB([78, 99, 100, 101, 401], 99)); // 602

 
//  Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
const createArrayFromMaxAndMinValue = (min: number, max: number) => {
  let newArray: number[] = [];
  let count = min;
  for (count = min; count <= max; count++) {
    newArray.push(count);
  }
  return newArray;
};

console.log('           Task 41');
console.log(createArrayFromMaxAndMinValue(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10] 
console.log(createArrayFromMaxAndMinValue(1, 3)); // [1, 2, 3] 
console.log(createArrayFromMaxAndMinValue(2, 7)); // [2, 3, 4, 5, 6, 7]

//  Task 42
//  Write a function that takes an array of strings as argument
//  Group those strings by their first letter
//  Return an object that contains properties with keys representing first letters
//  The values should be arrays of strings containing only the corresponding strings
//  For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//  { a: ['Alf', 'Alice'], b: ['Ben']}
type NewArray = {
  [key: string]: string[];
}
const arrayString = (a: string[]) => {
  let b: NewArray = {};
  a.forEach(element => {
    const c = element[0].toLocaleLowerCase();
    if (b[c]) {
      b[c].push(element);
    } else {
      b[c] = [element];
    }
  })

  return b;
};

console.log('           Task 42');
console.log(arrayString(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(arrayString(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
console.log(arrayString(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const arrayAndArbitraryElement = (a: (number | string | boolean)[], b: number) => {
  let c: (number | string | boolean)[] = a;
  if (b > 5) {
    c.unshift(b);
  } else {
    c.unshift('0');
  }
  return c;
}

console.log('           Task 43');
console.log(arrayAndArbitraryElement([1,2,3], 6)); //[6,1,2,3]
console.log(arrayAndArbitraryElement(['a','b'], 2)); //[0,'a','b']
console.log(arrayAndArbitraryElement([null,false], 11)); //[11,null,false]

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const everyNthElementInNewArray = (a: number[], b: number) => {
  let c: number[] = [];
  a.forEach((element, index) => {
    if ((index + 1) % b === 0) {
      c.push(element);
    }
  })

  return c;
}

console.log('           Task 44');
console.log(everyNthElementInNewArray([1,2,3,4,5,6,7,8,9,10],3)); //[3,6,9]
console.log(everyNthElementInNewArray([10,9,8,7,6,5,4,3,2,1],5)); //[6,1]
console.log(everyNthElementInNewArray([7,2,1,6,3,4,5,8,9,10],2)); //[2,6,4,8,10]

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

type CountryAndContinentP = {
  continent: string
  country: string
}
const getCountryFromObejct = (a: CountryAndContinentP) => {
  return a.country;
};

console.log('           Task 45');
console.log(getCountryFromObejct({  continent: 'Asia',  country: 'Japan'})); //'Japan'
console.log(getCountryFromObejct({  country: 'Sweden',  continent: 'Europe'})); //'Sweden'


// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
// type TwoPropertyObject = {
//   one: number
//   'prop-2': number | string
//   prop: string
// }
type TwoPropertyObject = Record<string | number,  string | number>
const getPropertyWithKeyProp2 = (a: TwoPropertyObject): string | number => {
  return a['prop-2'];
}

console.log('           Task 46');
console.log(getPropertyWithKeyProp2({  one: 1,  'prop-2': 2})); //2
console.log(getPropertyWithKeyProp2({  'prop-2': 'two',  prop: 'test'})); //two


// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
type CountryAndContinent = {
  continent: string
  country: string
}
const getCountryFromArguementB = (a: CountryAndContinent, b:string) => {
 if (b === "country"){
  return a.country;
 } else{
  return a.continent;
 }

};

console.log('           Task 47');
console.log(getCountryFromArguementB({  continent: 'Asia',  country: 'Japan'}, 'continent')); //'Asia'
console.log(getCountryFromArguementB({  country: 'Sweden',  continent: 'Europe'}, 'country')); //'Sweden'


// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

type DifferentValues = {
  a: number;
  b: number;
  c: number;
}
type DifferentValuesELSE = {
  x: string;
  y: string;
  z: string;
}


const getTruOrFalse = (a: DifferentValues| DifferentValuesELSE, b:string) => {
  let keys:string[] = Object.keys(a);
  for (let i=0; i<keys.length; i++){
    if( keys[i] === b ){
      return true; 
    }
  }
  return false; 

};


console.log('           Task 48');
console.log(getTruOrFalse({a:1,b:2,c:3},'b')); //true
console.log(getTruOrFalse({x:'a',y:'b',z:'c'},'a')); //false
console.log(getTruOrFalse({x:'a',y:'b',z:'c'},'z')); //true


// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
type CreatesNewArray = {
  key: string
}
const createsNewObejct = (a: string) => {

  return { key: a };

};

console.log('           Task 49');
console.log(createsNewObejct('a')); //{key:'a'}
console.log(createsNewObejct('z')); //{key:'z'}
console.log(createsNewObejct('b')); //{key:'b'}

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

type WillCreateNewArray = {
  a: string;
}
const createsNewObejctFromTwoArguments = (a: string, b: string) => {

  return { [a]: b };

};

console.log('           Task 50');
console.log(createsNewObejctFromTwoArguments('a','b')); //{a:'b'}
console.log(createsNewObejctFromTwoArguments('z','x')); //{z:'x'}
console.log(createsNewObejctFromTwoArguments('b','w')); //{b:'w'}

// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// type ObjectElement = {
//   [a:string|number]: string | number
// }


// const createFromTwoArraysOneObject = (a: (string | number)[], b: (string | number)[]) => {
//   //let c: ObjectElement[]= {}
//  for (let i=0; i<a.length; i++){

//   // for(let j=0; j<b.length; j++){
//   // }
//  // console.log(a[i])

//  }

//   return { [a[0]] };

// };


// console.log('           Task 51');
// console.log(createFromTwoArraysOneObject(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
// console.log(createFromTwoArraysOneObject(['w','x','y','z'],[10,9,5,2])); //{w:10,x:9,y:5,z:2}
// console.log(createFromTwoArraysOneObject([1,'b'],['a',2])); //{1:'a',b:2}

// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

type AllObjectsInArray = {
  [a:string]:number;
}
const getOnlyAllObjectFromObjectArray = (a: AllObjectsInArray):string[] => {
    let keys:string[] = Object.keys(a);
    return keys;
 
};


console.log('           Task 52');
console.log(getOnlyAllObjectFromObjectArray({a:1,b:2,c:3})); //['a','b','c']
console.log(getOnlyAllObjectFromObjectArray({j:9,i:2,x:3,z:4})); //['j','i','x','z']
console.log(getOnlyAllObjectFromObjectArray({w:15,x:22,y:13})); //['w','x','y']

// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

type Object53 = {
  [a:string]:number;
}
const getSumOfObjectValues = (a: Object53):number => {
    let values :number[] = Object.values(a);
 

    let sum:number = 0;

    values.forEach((element) => {
      sum += element;
    });

  return sum; 
 
};

console.log('           Task 53');
console.log(getSumOfObjectValues({a:1,b:2,c:3})); // 6
console.log(getSumOfObjectValues({j:9,i:2,x:3,z:4})); // 18
console.log(getSumOfObjectValues({w:15,x:22,y:13})); // 50


// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

type Object54 = {
  [a:string]:number;
}
const removeKeyBFromList = (a: Object54) :Object54 => {
  let keys:string[] = Object.keys(a);
  let d:Object54 = {};
  for (let i=0; i<keys.length; i++  ){
    if (Object.keys(a)[i] !== 'b'){
      d[Object.keys(a)[i]] = (Object.values(a)[i])
    }
  
  }
  return  d;
 
};


console.log('           Task 54');
console.log(removeKeyBFromList({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(removeKeyBFromList({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(removeKeyBFromList({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 }


// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
type Object55 = {
  [a:string]:number;
}


const mergeArrayAndReplaceCwithD = (a:Object55, b:Object55):Object55 =>{
  let keys:string[] = Object.keys(b);
  let d:Object55 = {};
  for (let i=0; i<keys.length; i++  ){
    if (Object.keys(b)[i] !== 'b'){
      d[Object.keys(b)[i]] = (Object.values(b)[i])
    } else {
      d['d'] = (Object.values(b)[i])
    }
  }

  
  const f = { ...a, ...d };
  return f; 
}

console.log('           Task 55');
console.log(mergeArrayAndReplaceCwithD({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeArrayAndReplaceCwithD({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
type Object56 = {
  [a:string]:number;
}

const takeObjectAValuesAndMultiplyByB = (a:Object56, b:number) =>{
  let keys:string[] = Object.keys(a);
  let d:Object56 = {};
  for (let i=0; i<keys.length; i++  ){
  d[Object.keys(a)[i]] = (Object.values(a)[i] * b)

  }
  return d;
};

console.log('           Task 56');
console.log(takeObjectAValuesAndMultiplyByB({a:1,b:2,c:3},3)); // {a:3,b:6,c:9}
console.log(takeObjectAValuesAndMultiplyByB({j:9,i:2,x:3,z:4},10)); // {j:90,i:20,x:30,z:40}
console.log(takeObjectAValuesAndMultiplyByB({w:15,x:22,y:13},6)); // {w:90,x:132,y:78}


// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

type Object57 = {
  [a:string]:string| number;
}

const swapKeysAndValuesForObject = (a:Object57):Object57 =>{
  // let keys:string[] = Object.keys(a);
  // let d:Object56 = {};
  // for (let i=0; i<keys.length; i++  ){
  // d[Object.values(a)[i]] = (Object.keys(a)[i])

  // }
  // return d;
// }
  const swapped = Object.entries(a).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(swapped);
}

console.log('           Task 57');
console.log(swapKeysAndValuesForObject({z:'a',y:'b',x:'c',w:'d'})); // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeysAndValuesForObject({2:'a',4:'b',6:'c',8:'d'})); // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeysAndValuesForObject({a:1,z:24})); // {1:'a',24:'z'}

// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

type Object58 = {
  [a:string]:string| boolean;
}

const changeBlankSpaceWithNullValue = (a:Object58,) =>{
  let values:(string|boolean)[] = Object.values(a);
  let d:Object58 = {};
  for (let i=0; i<values.length; i++  ){
    
    if ( Object.values(a)[i] !== ''){
      
      d[Object.keys(a)[i]] = (Object.values(a)[i])
    } else {
      d[Object.keys(a)[i]] = null;
    }
  }

  
  return d; 
};

console.log('           Task 58');
console.log(changeBlankSpaceWithNullValue({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(changeBlankSpaceWithNullValue({ a: '', b: 'b', c: ' ', d: 'd' })); //{ a: null, b: 'b', c: null, d: 'd' }
console.log(changeBlankSpaceWithNullValue({ a: 'a', b: 'b ', c: ' ', d: '' })); //{ a: 'a', b: 'b ', c: null, d: null }


// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

type Object59 = {
    [a:string]:string| number;
  }
  
const printSpecificValuesFromObject = (a: Object59) => {
  let newArr: Object59 = {};
  let keys: (string | boolean)[] = Object.keys(a);
  let d: Object59 = {};
  for (let i = 0; i < keys.length; i++) {
    if (Object.keys(a)[i] === 'fn' || Object.keys(a)[i] === 'ln') {
      d[Object.keys(a)[i]] = (Object.values(a)[i]);
    } else if (Object.keys(a)[i] === 'size') {
      d[Object.keys(a)[i]] = (Object.values(a)[i] + " cm");
    } else if (Object.keys(a)[i] === 'weight') {
      d[Object.keys(a)[i]] = (Object.values(a)[i] + " kg")
    }

  }

  return d;
};

console.log('           Task 59');
console.log(printSpecificValuesFromObject({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(printSpecificValuesFromObject({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(printSpecificValuesFromObject({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(printSpecificValuesFromObject({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})); // {fn: 'Matthew', ln: 'Müller'}

// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
type Object60 = {
  [a:string]:string;
}

const addNewPropertyContinent = (a: Object60[], b:string):Object60[] => {
 let d: Object60 = {};
 let f: Object60[]= [];
 const g = a.map(object =>{
  object["continent"]= b;
  
 }) 
 return a;
};

console.log('           Task 60');
console.log(addNewPropertyContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')); //[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addNewPropertyContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')); //[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

type Object61 = {
  [a:number]:number;
}

const numberArrayConvertToObject = (a: number[]):any => {
  let b:Object61 ={};
  let c: number; 
  a.sort();
  
  a.forEach(element => {
    if(element !== c ){
      c=element;
      b[element]= 1;
    } else {
      b[element] += 1 ; 
    }
  })
return b;
};

console.log('           Task 61');
console.log(numberArrayConvertToObject([1,2,2,3])); //{1:1,2:2,3:1}
console.log(numberArrayConvertToObject([9,9,9,99])); //{9:3,99:1}
console.log(numberArrayConvertToObject([4,3,2,1])); //{1:1,2:1,3:1,4:1}


// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise


const twoDateInstancesToCheck = (a: Date, b: Date) => {
 let c:number = a.getTime();
 let d:number = b.getTime();
if(c === d){
  return true;
} else {
  return false
}
};

console.log('           Task 62');
console.log(twoDateInstancesToCheck(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //false
console.log(twoDateInstancesToCheck(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //true
console.log(twoDateInstancesToCheck(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false

// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const differenceBetweenTwoDates = (a: Date, b: Date) => {
  let diff: number = Math.abs(a.getTime() - b.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  return diffDays;
};

console.log('           Task 63');
console.log(differenceBetweenTwoDates(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(differenceBetweenTwoDates(new Date('2000-01-01'), new Date('2020-06-01'))); //7457


// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const exactSameDay = (a: Date, b: Date) => {
  let c:number = a.getFullYear()+a.getDate()+a.getMonth();
  let d:number = b.getFullYear()+b.getDate()+b.getMonth();
  if(c === d){
    return true;
  }else {
    return false
  }
};


console.log('           Task 64');
console.log(exactSameDay(new Date('2000/01/01'), new Date('2000/01/01'))); //true
console.log(exactSameDay(new Date('2000/01/01'), new Date('2000/01/02'))); //false
console.log(exactSameDay(new Date('2001/01/01'), new Date('2000/01/01'))); //false
console.log(exactSameDay(new Date('2000/11/01'), new Date('2000/01/01'))); //false

// Task 65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

const spreadOperatorFunction= (a: number[], b:number[]) => {
  let c:number[] = [...a, ...b] 
  return c; 
}

console.log('           Task 65');
console.log(spreadOperatorFunction([1, 2], [3, 4])); //[1, 2, 3, 4]
console.log(spreadOperatorFunction([1, 2], [3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6]

// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

const spreadOperatorFunctionaddOneValue= (a: string[], b:string) => {
  let c:string[] = [...a, b] 
  return c; 
}

console.log('           Task 66');
console.log(spreadOperatorFunctionaddOneValue(['Apple', 'Orange', 'Banana'], 'Kiwi')); //['Apple', 'Orange', 'Banana', 'Kiwi']

// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element



const spreadOperatorFunctionaddOneValueToBeginning= (a: string[], b:string) => {
  let c:string[] = [b, ...a] 
  return c; 
}

console.log('           Task 67');
console.log(spreadOperatorFunctionaddOneValueToBeginning(['Apple', 'Orange', 'Banana'], 'Kiwi')); //['Kiwi', 'Apple', 'Orange', 'Banana']

// Task 68
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

type Object68 = {
  [a:string]:number;
}

const concatTwoObjects= (a: Object68, b:Object68) => {
  let c:Object68 = {...b, ...a}
  return c; 
}

console.log('           Task 68');
console.log(concatTwoObjects({ a:1, b:2 }, { c:3, d:4 })); //{ a:1, b:2, c:3, d:4 }
console.log(concatTwoObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })); //{ a:1, b:2, c:3, d:4, e:5, f:6 }

// Task 69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

type Object69 = {
  [a:string|number]:string|number;
}

const addNewKeyandValueToObejct= (a: Object69, b:string) => {
  let c:Object69 = {...a,favoriteMovie:b}

  return c; 
}

console.log('           Task 69');
console.log(addNewKeyandValueToObejct({ eyeColor: 'green', age: 10 }, 'Garfield')); //{ eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(addNewKeyandValueToObejct({ eyeColor: 'blue', age: 15 }, 'Twilight')); //{ eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

