// 创建observe函数
import Observer from "./Observer";
export default function (value) {
  // 只为对象服务
  if (typeof value != "object") return;
  let ob;
  if (typeof value.__ob__ !== "undefined") {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
};
