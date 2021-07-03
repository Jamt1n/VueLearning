export default function (templateStr) {
  //指针
  let index = 0;
  // 剩余部分
  let rest = "";
  // 开始标记
  let startRegExp = /^\<([a-z]+[1-6]?)\>/;
  // 结束标记
  let endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
  // 抓取结束标记前的文字
  let wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;
  // 准备两个栈
  let stack1 = [];
  let stack2 = [];

  while (index < templateStr.length - 1) {
    rest = templateStr.substring(index);
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1];
      console.log("检测到开始标志", tag);
      stack1.push(tag);
      stack2.push([]);
      // 指针移动标签的长度+2，为什么要+2，因为<>占两位
      index += tag.length + 2;
    } else if (endRegExp.test(rest)) {
      let tag = rest.match(endRegExp)[1];
      console.log("检测到结束标志", tag);
      if (tag == stack1[stack1.length - 1]) {
        stack1.pop();
      } else {
        throw new Error(stack1[stack1.length - 1] + "标签没有闭封");
      }
      index += tag.length + 3;
    } else if (wordRegExp.test(rest)) {
      let word = rest.match(wordRegExp)[1];
      if (!/^\s+$/.test(word)) {
        // 不是全是空
        console.log("检测到文字");
      }

      index += word.length;
    } else {
      index++;
    }
  }

  console.log(stack1, stack2);
}
