import defineReactive from "./defineReactive";
import Observer from "./Object";

var obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 4,
};

// 创建observe函数
function observe(value) {
  // 只为对象服务
  if (typeof value != "object") return;
  let ob;
  if (typeof value.__ob__ !== "undefined") {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}

observe(obj)
