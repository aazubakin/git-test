const smallestDivisor = (num) => {
   // BEGIN (write your solution here)
   const iter = (counter, acc) => {
      if (counter % acc === 0) {
         return acc;
      }
      return iter(counter, acc + 1);
   };

   return iter(num, 2);
   // END
};

console.log(smallestDivisor(15));