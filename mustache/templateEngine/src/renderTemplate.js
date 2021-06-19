/**
 * 让tokens变为dom字符串
 * @param tokens
 * @param data
 */
import lookup from "./lookup";
import parseArray from "./parseArray";
export default function renderTemplate(tokens, data) {
  console.log(tokens);
  let resStr = "";
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    if (token[0] == "text") {
      resStr += token[1];
    } else if (token[0] == "name") {
      resStr += lookup(data, token[1]);
    } else if (token[0] == "#") {
        resStr += parseArray(token, data)
    }
  }
}
