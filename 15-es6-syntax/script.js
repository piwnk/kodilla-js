// Task no 1

console.log('Task no 1');

const hello = 'Hello';
const world = 'World';

const helloWorld = `${hello} ${world} (template strings)`;

console.log(helloWorld);

// Task no 2
console.log('Task no 2');

const multiply = (a = 1, b = 1) => `${a} multiplied by ${b} is ${a * b}`;

console.log(multiply(2, 5));
console.log(multiply(2));
console.log(multiply());
console.log(multiply(b=7));

// Task no 3/4
console.log('Task no 3');

const numbers = [1, 2, 3, 5];

const average = (...args) => `Sum of ${args.join(', ')} is equal ${args.reduce((a, b) => a + b)}`;

console.log(average(...numbers));

// Task no 4
console.log('Task no 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(average(...grades));

// Task no 5
console.log('Task no 5');

const weirdDataStructure = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstname, , lastname] = weirdDataStructure;

console.log(`First name: ${firstname}, Last name: ${lastname}`);


// CodeWars
// Task 1


// Task 2
function shuffleIt(arr, ...swaps) {
   const result = arr.slice();
   swaps.map(([i, j]) => {
      const [x, y] = [result[i], result[j]];

      result[i] = y;
      result[j] = x;
   });
   return result;
 }

 shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]);

 // Task 3
const Sum = arr => arr.reduce((a, b) => a + b);

console.log(Sum([1, 2, 3, 4]));

const getOccurrences = (arr) => {
   const result = {};
   arr.map((letter) => {
      const len = arr.filter(item => item === letter).length;
      if (len > 1) {
         result[letter] = len;
      }
   });
   return result;
};

const transform = (s) => {
   const arr = Array.from(s);
   const occurrences = getOccurrences(arr);
   const result = [];
   console.log(occurrences);
   console.log(arr);
   arr.map((letter) => {
      console.log(letter);
      if (Object.keys(occurrences).includes(letter)) {
         result.push(letter);
         result.push()
         // arr.splice(arr.indexOf(letter) + 1, 0, occurrences[letter]);
      }
      // return Object.keys(occurrences).includes(letter)) ? 
   });
   console.log(arr);
   return s;
 };

const word = 'elevation';
transform(word);
