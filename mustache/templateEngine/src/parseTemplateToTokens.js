import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

export default function parseTemplateToTokens(templateStr) {
  let tokens = [];

  // 实例化扫描器
  let scanner = new Scanner(templateStr);

  let word;
  while (!scanner.eos()) {
    // 收集开始标记
    word = scanner.scanUntil("{{");
    if (word != "") {
      // 智能去空格
      let isInJJH = false;
      let _words = "";
      for (let i = 0; i < word.length; i++) {
        if (word[i] == "<") {
          isInJJH = true;
        } else if (word[i] == ">") {
          isInJJH = false;
        }
        if (!/\s/.test(word[i])) {
          _words += word[i];
        } else {
          if (isInJJH) {
            _words += " ";
          }
        }
      }
      tokens.push(["text", _words]);
      // console.log(word);
    }
    scanner.scan("{{");

    word = scanner.scanUntil("}}");
    if (word != "") {
      if (word[0] == "#") {
        // 懂下标为1开始存
        tokens.push(["#", word.substring(1)]);
      } else if (word[0] == "/") {
        tokens.push(["/", word.substring(1)]);
      } else {
        // console.log(word);
        tokens.push(["name", word]);
      }
    }
    scanner.scan("}}");
  }

  console.log(tokens);
  return nestTokens(tokens);
}
