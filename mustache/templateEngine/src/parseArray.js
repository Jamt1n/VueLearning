import lookup from "./lookup";
import renderTemplate from "./renderTemplate";
/**
 * 处理数组，实现renderTemplate的递归
 * @param token ['#', 'student', []]
 * @param data
 */
export default function parseArray(token, data) {
  let v = lookup(data, token[1]);
  let resStr = "";
  // 最难的地方，遍历数据而不是tokens
  for (let i = 0; i < v.length; i++) {

    resStr += renderTemplate(token[2], {
        ...v[i],
        '.':v[i]
    });
  }
  return resStr;
}
