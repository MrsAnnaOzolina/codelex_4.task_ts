console.log('Ready for coding');

// EXAMPLE
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a
// Return the result
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98
console.log('example');

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result


const sumfunction = (a: number, b: number): number => a + b;
console.log(sumfunction(1, 2)); // 3
console.log(sumfunction(1, 10)); // 11
console.log(sumfunction(99, 1)); // 100
console.log('task 1');

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const typeFunction = (a: any): any => typeof(a);
console.log(typeFunction(1)); //'number'
console.log(typeFunction(false));
console.log(typeFunction({}));
console.log(typeFunction(null));
console.log(typeFunction('string'));
console.log(typeFunction(['array']));
console.log('task 2');


// Task 3 
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const equal = (a: any,  b: any): boolean => a === b;
console.log(equal(2, 3)); //false
console.log(equal(3, 3)); // true
 console.log(equal(1, '1')); // false
console.log(equal('10', '10')); // true
console.log('task 3');

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const chareter = (a: string,  b: number): string => a.charAt(b-1);
console.log(chareter('abcd', 1)); //a
console.log(chareter('zyxbwpl', 5)); //w
console.log(chareter('gfedcba', 3)); //e
console.log('task 4');

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
const removescharecter = (a: string): string => a.slice(3);
console.log(removescharecter('abcdefg')); //defg
console.log(removescharecter('1234')); //4
console.log(removescharecter('fgedcba')); //dcba
console.log('task 5');

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
const last3charecters = (a: string): string => a.slice(-3); 
console.log(last3charecters('abcdefg')); //efg
console.log(last3charecters('1234')); //234
console.log(last3charecters('fgedcba')); //cba
console.log('task 6');

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const first3charecters = (a: string): string => a.substring(0,3); 
console.log(first3charecters('abcdefg')); //abc
console.log(first3charecters('1234')); //234
console.log(first3charecters('fgedcba')); //fge
console.log('task 7');



// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const halfOfString = (a: string): string => a.substring(0, (a.length)/2); 
console.log(halfOfString('abcdefgh')); //abcd
console.log(halfOfString('1234')); //12
console.log(halfOfString('gedcba')); //geb
console.log('task 8');


// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removersLast3Charecters = (a: string): string => a.slice(0,-3); 
console.log(removersLast3Charecters('abcdefg')); //abcd
console.log(removersLast3Charecters('1234')); //1
console.log(removersLast3Charecters('fgedcba')); //fged
console.log('task 9');

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentageBetweenNumbers = (a: number, b: number): number => a*(b/100) ;
console.log(percentageBetweenNumbers(100, 50)); // 50
console.log(percentageBetweenNumbers(10, 1)); // 0.1
console.log(percentageBetweenNumbers(500, 25)); // 125
console.log('Task 10');

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const longFunction = (a: number, b: number, c: number, d: number, e: number, f: number): number => Math.pow(((a+b-c)*d/e), f) ;
console.log(longFunction(6,5,4,3,2,1)); //10.5
console.log(longFunction(6,2,1,4,2,3)); //2744
console.log(longFunction(2,3,6,4,2,3)); //-8
console.log('Task 11');


// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const ifTheNumberIsEven = (a: number): boolean => a % 2 == 0;
console.log(ifTheNumberIsEven(10)); // true
console.log(ifTheNumberIsEven(4)); // true
console.log(ifTheNumberIsEven(5)); // false
console.log(ifTheNumberIsEven(-111)); // false
console.log('Task 12');

// Task13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
const NumberOfTimesAoccursB = (a: string, b:string): number => {
    var n = 0;
    for(let i = 0; i < b.length; i++){
        if(b[i] == a){n++}
    }
    return n;
} ;

console.log(NumberOfTimesAoccursB('m', 'how many times does the character occur in this sentence?')); // 2
console.log(NumberOfTimesAoccursB('h', 'how many times does the character occur in this sentence?')); // 4
console.log(NumberOfTimesAoccursB('?', 'how many times does the character occur in this sentence?')); // 1
console.log(NumberOfTimesAoccursB('z', 'how many times does the character occur in this sentence?')); // 0
console.log('Task 13');

// Task14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
const ifAhasDecimalPlace = (a: number): boolean => a % 1 != 0;
console.log(ifAhasDecimalPlace(4)); // true
console.log(ifAhasDecimalPlace(1.123)); // false
console.log(ifAhasDecimalPlace(1048)); // true
console.log(ifAhasDecimalPlace(10.48)); // false
console.log('Task 14');

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const compareAandB = (a: number, b:number): number => {if(a < b){
    return a/b;
}
else {
    return a * b;
}};
console.log(compareAandB(10, 100)); // 0.1
console.log(compareAandB(90, 45)); // 4050
console.log(compareAandB(8, 20)); // 0.4
console.log(compareAandB(2, 0.5)); // 1
console.log('Task 15');

// Task16 
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation


const ifAcontainsB = (a: string, b:string): string => {if(a.includes(b)){
  return b+a;
}
else {
   return a+b;
}};
console.log(ifAcontainsB('cheese', 'cake')); // cheesecake
console.log(ifAcontainsB('lips', 's')); // 
console.log(ifAcontainsB('Java', 'script')); // 
console.log(ifAcontainsB(' think, therefore I am', 'I')); // 
console.log('Task 16');

// Task17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNumber2digitals = (a: number): number => Number(a.toFixed(2));
console.log(roundNumber2digitals(2.12397)); // 2.12
console.log(roundNumber2digitals(3.136)); // 3.14
console.log(roundNumber2digitals(1.12397)); // 1.12
console.log(roundNumber2digitals(26.1379)); // 26.14
console.log('Task 17');

// Task18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const numberToArray = (a: number): string[] => a.toString().split('');
console.log(numberToArray(10)); // 
console.log(numberToArray(931)); // 
console.log(numberToArray(193278)); // 
console.log('Task 18');

// Task 19 
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const unknownTextToName = (a: string, b: string): string => {
   const c:string[] = a.split('');
   const d:string[] = b.split('');
   
    let n: string[] = []; 
    let m:string='';
    var re = /,/gi ;
    
    for(let i = 0; i < c.length; i++){
        if(c[i] !== "%" ) { n.push(c[i]);}
    }
    for(let j = d.length-1; j > 0; j--){
        if(d[j] !== "%" ) { n.push(d[j]);}
    }
    return m.concat(n.toString()).replace(re, "" );
} ;

console.log(unknownTextToName('java', 'tpi%rcs')); // 
console.log(unknownTextToName('c%ountry', 'edis')); // 
console.log(unknownTextToName('down', 'nw%ot')); // 
console.log('Task 19');

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
// const isPrime = (a: number): number => { 

    function myFunction(a:number) {
        function isPrime(a:number) {
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
  console.log(myFunction(38)); //41
  console.log(myFunction(7)); //7
  console.log(myFunction(115)); //127
  console.log(myFunction(2000)); //2003
  console.log('Task 20');

//   Task 21
//   Write a function that takes two numbers, say x and y, as arguments
//   Check if x is divisible by y
//   If yes, return x
//   If not, return the next higher natural number that is divisible by y
  
const ifXCanDeviseWithY = (x: number, y: number): any => {
            if (x % y == 0) {
              return x;
            }
            while (x % y !== 0) {
                  x++;
                }
              
              return x;
        };

    console.log(ifXCanDeviseWithY(1, 23));//23
    console.log(ifXCanDeviseWithY(23, 23));//23
    console.log(ifXCanDeviseWithY(7, 3));//9
    console.log(ifXCanDeviseWithY(-5, 7));//0
    console.log('Task 21');


// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertElement = (x: string, y: string): any => {
  let n:string='';
  let d:string='';
  for(let i = x.length-1; i > -1; i--){
   
   for(let j = x.length-1; j > -1; j--){
    console.log(x[i], x[j]);
    // n = n += x[i]+x[j];
    // d = d += x[j]+x[j];
      // console.log(d);
   }
   }
  };
  //     if(d[j] !== "%" ) { n.push(d[j]);}
  // }
  // return m.concat(n.toString()).replace(re, "" );
  console.log(insertElement('1234567','.'));//'1.234.567'
  console.log('Task 22');