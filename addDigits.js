/*
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Примеры
addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
*/

const addDigit = (num) => {
   let str = String(num);

   function addSumNumbers(str) {
      let result = 0;
      for (let i = 0; i < str.length; i++) {
         result += Number(str[i]);
      }
      return result;
   }
   while (str.length != 1) {
      str = String(addSumNumbers(str));
   }
   return addSumNumbers(str);
}
// END

console.log(addDigit(1259));