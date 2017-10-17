const HowMany = [1,6,5,0];
const Type = ['house', 'car','pen','jeans'];
const compare = function(a,b){return a-b;};

const linkedSort = (aToSort, aLinked, compare) => {
   const aToSortInit = aToSort.slice()
   // const aLinkedInit = aLinked.slice()
   const aSorted = aToSort.sort(compare);
   const order = aSorted.map(item => aToSortInit.indexOf(item))

   console.log(aSorted);

   const a = aLinked.sort((a, b) => {
      return aSorted.indexOf(a) < aSorted.indexOf(b)
   })
   a.sort(compare);
   console.log(a);
   return aSorted
}

// console.log(HowMany);
// console.log(Type);

linkedSort(HowMany,Type, compare);