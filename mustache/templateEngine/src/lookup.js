/**
 * 功能是在dataObj中 寻找用.的KeyName属性
 * 面试题
 */
export default function lookup(dataObj, keyName) {
  if (keyName.indexOf(".") != -1 && keyName != '.') {
    let keys = keyName.split(".");
    // 临时变量用于周转，一层层找
    let temp = dataObj;
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  return dataObj[keyName];
}
