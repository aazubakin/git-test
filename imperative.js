let smallestDivisor = (num) => {
   if (num < 1) return NaN;
   if (num == 1) return num;
   let acc = 2;
   while (acc <= num) {
      if (num % acc === 0) return acc;
      acc++;
   }
}
// END
console.log(smallestDivisor(15));