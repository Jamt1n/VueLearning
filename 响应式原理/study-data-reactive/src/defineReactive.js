import observe from "./observe";
import Dep from "./Dep";

export default function defineReactive(data, key, val) {
  const dep = new Dep();
  if (arguments.length == 2) {
    val = data[key];
  }
  // 子元素要进行observe，至此形成递归，不是自己调用自己，而是多个函数、类循环调用
  let childOb = observe(val);
  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可被配置
    configurable: true,
    // getter
    get() {
      console.log("你试图访问" + key + "属性");
      return val;
    },
    // setter
    set(newValue) {
      console.log("你试图改变" + key + "属性", newValue);
      if (val === newValue) {
        return;
      }
      val = newValue;
      // 新值被observe
      childOb = observe(newValue);
      // 发布订阅模式，通知dep
      dep.notify();
    },
  });
}
