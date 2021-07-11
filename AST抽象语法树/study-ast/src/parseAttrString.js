/**
 *
 * @param attrString
 * @returns {*[]}
 */
export default function (attrsString) {
  if (attrsString == undefined) return [];

  let isYinhao = false;
  let point = 0;
  let res = [];
  // 遍历attrsString
  for (let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i];
    if (char == '"') {
      isYinhao = !isYinhao;
    } else if (char == " " && !isYinhao) {
      // 遇见空格且不在引号中
      if (!/^\s*$/.test(attrsString.substring(point, i))) {
        res.push(attrsString.substring(point, i).trim());
        point = i;
      }
    }
  }
  // 循环结束后还剩一个属性 k=‘v’
  res.push(attrsString.substring(point).trim());
  res = res.map((item) => {
    // 等号拆分
    const o = item.match(/^(.+)="(.+)"$/);
    return {
      name: o[1],
      value: o[2],
    };
  });
  return res;
}
