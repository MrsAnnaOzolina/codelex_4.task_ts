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


