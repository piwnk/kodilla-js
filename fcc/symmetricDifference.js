
function sym(...args) {
//   console.log(arguments);
   return Array.from(new Set(Array.from(args).reduce((prev, cur) => {

      console.log(prev, cur);
      const existingNumbers = cur.filter(i => prev.includes(i));
      const newNumbers = cur.filter(i => !prev.includes(i));
      return prev.concat(newNumbers).filter(i => !existingNumbers.includes(i));
   }, [])));
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [7, 8]));
