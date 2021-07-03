// 试编写“智能重复”smartRepeat函数，实现：
// 将2[1[a]3[b]2[3[c]4[d]]] 变成abbbcccddddcccddddabbbcccddddcccdddd

let str = "2[1[a]3[b]2[3[c]4[d]]]";

function smartRepeat(templateStr) {
  // 指针
  let index = 0;
  // 存放数字
  let stack1 = [];
  // 剩余部分
  let stack2 = [];

  let rest = templateStr;

  while (index < templateStr.length - 1) {
    // 剩余部分
    rest = templateStr.substring(index);
    if (/^\d+\[/.test(rest)) {
      let times = Number(rest.match(/^(\d+)\[/)[1]);
      stack1.push(times);
      stack2.push("");
      index += times.toString().length + 1;
    } else if (/^\w+\]/.test(rest)) {
      let word = rest.match(/^(\w+)\]/)[1];
      stack2[stack2.length - 1] = word;
      index += word.length;
    } else if (rest[0] == "]") {
      let times = stack1.pop();
      let word = stack2.pop();
      stack2[stack2.length - 1] += word.repeat(times);
      index++;
    }
  }
  return stack2[0].repeat(stack1[0]);
}

console.log(smartRepeat(str))
