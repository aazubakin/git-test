/*

Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true
comparers.js
Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0.
*/

const bigLettersCount = (str) => {
   // BEGIN (write your solution here)
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === str[i]) {
         counter++;
      }
   }
   return counter;
   // END
};


const compare = (first, second) => {
   const firstCount = bigLettersCount(first);
   const secondCount = bigLettersCount(second);

   // BEGIN (write your solution here)
   if (firstCount > secondCount) {
      return 1;
   } else if (firstCount < secondCount) {
      return -1;
   } else return 0;
   // END
};

const greaterThan = (first, second) => (
   compare(first, second) === 1);

const lessThan = (first, second) => (
   compare(first, second) === -1);

const isEqual = (first, second) => (
   compare(first, second) === 0);

console.log(compare('ssdfgDFDFDDGSDGSDGDS', 'sfdfDFDGDFG'));