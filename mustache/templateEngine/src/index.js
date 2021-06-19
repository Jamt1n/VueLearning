import parseTemplateToTokens from "./parseTemplateToTokens";

window.templateEngine = {
  render(templateStr, data) {
    // 1. 命令Scanner工作

    // 实例化扫描器
    // let scanner = new Scanner(templateStr);

    // // 测试
    // let words = scanner.scanUntil('{{')
    // console.log(scanner.pos);
    // console.log(words);

    // let word;
    // while(!scanner.eos()) {
    //   word = scanner.scanUntil("{{")
    //   console.log(word);
    //   scanner.scan("{{")

    //   word = scanner.scanUntil("}}");
    //   console.log(word);
    //   scanner.scan("}}")
    // }

    let tokens = parseTemplateToTokens(templateStr);
  },
};
