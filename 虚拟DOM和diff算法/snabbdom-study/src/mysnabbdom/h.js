import vnode from "./vnode";

export default function (sel, data, c) {
  if (arguments.length != 3) throw new Error("请传三个参数");
  //    检查参数c 的类型
  if (typeof c == "string" || typeof c == "number") {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = [];
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel"))) {
        throw new Error("传入的数组参数中有项不是h函数");
      }
      children.push(c[i]);
    }
    //    循环结束说明children收集完毕
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
      // 说明C才是唯一children
      let children = [c];
      return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("传入的第三个类型不对。");
  }
}
