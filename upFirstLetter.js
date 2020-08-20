//expect(solution('  hello,   world!')).toBe('  Hello,   World!');

function upFirst(str) {
   if (str === undefined || Number.isInteger(str) || str === ' ') return String(str);
   let reg = /\b[a-z]/;
   let index;
   while (str.search(reg) !== -1) {
      index = str.search(reg);
      str = str.replace(reg, str.toUpperCase.call(str[index]));
   }
   return str;
}

console.log(upFirst('  df hello    world'));