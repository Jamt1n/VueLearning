/*
  折叠tokens
*/

export default function nestTokens(tokens) {
  // 结果
  let nestedTokens = [];
  // 栈，存小token
  let sections = [];
  // 收集器，指向tokens
  let collector = nestedTokens;

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    switch (token[0]) {
      case "#":
        // 收集器放入token
        collector.push(token);
        // 入栈
        sections.push(token);
        //收集器换人
        collector = token[2] = [];
        // console.log(token[1],'入栈了');
        break;
      case "/":
        // 出栈
        sections.pop();
        // console.log(a[1],'出栈了');
        collector =
          sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;

        break;
      default:
        if (sections.length == 0) {
          nestedTokens.push(token);
        } else {
          sections[sections.length - 1][2].push(token);
        }
    }
  }

  return nestedTokens;
}
