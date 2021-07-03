let str = "aaaaaaabbbbbbcccccccccddddddd";

function fn(arr) {
  let i = 0;
  let j = 1;
  let max = 0;
  let maxChar = '';
  while (j <= str.length) {
    if (str[i] != str[j]) {
      console.log(i, j, j - i);
      if (j - i > max) {
        max = j - i;
        maxChar = str[i];
      }
      i = j;
    }
    j++;
  }
  return [maxChar, max]
}

console.log(fn(str));
