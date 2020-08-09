const reverse = (str) => {
   let revStr = '';
   for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
   }
   return revStr;
}

let a = 4;
console.log(a -= 8 - a);
