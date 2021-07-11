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
  let stack2 = [{'children': []}];

  while (index < templateStr.length - 1) {
    rest = templateStr.substring(index);
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1];
      console.log("检测到开始标志", tag);
      stack1.push(tag);
      stack2.push({'tag':tag, "children":[]});
      // 指针移动标签的长度+2，为什么要+2，因为<>占两位
      index += tag.length + 2;
    } else if (endRegExp.test(rest)) {
      let tag = rest.match(endRegExp)[1];
      console.log("检测到结束标志", tag);
      let pop_tag = stack1.pop();
      // 此时tag一定是和栈1顶部相同的
      if (tag == pop_tag) {
        let pop_arr = stack2.pop();
        if (stack2.length>0) {
            stack2[stack2.length-1].children.push(pop_arr);
        }

      } else {
        throw new Error(stack1[stack1.length - 1] + "标签没有闭封");
      }
      index += tag.length + 3;
    } else if (wordRegExp.test(rest)) {
      let word = rest.match(wordRegExp)[1];
      if (!/^\s+$/.test(word)) {
        // 不是全是空
        console.log("检测到文字", word);
        // 推入到stack2栈顶
        stack2[stack2.length-1].children.push({'text':word, 'type':3});
      }

      index += word.length;
    } else {
      index++;
    }
  }
  // 此时stack2就是我们之前默认放置的一项，返回这一项即可
  console.log(stack2[0].children[0])
  return stack2[0].children[0];
}
