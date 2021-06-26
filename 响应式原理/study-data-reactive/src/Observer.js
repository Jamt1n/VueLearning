import { def } from "./utils";
import defineReactive from "./defineReactive";
import {arrayMethods} from './array'
import observe from "./observe";
import Dep from "./Dep";

export default class Observer {
  constructor(value) {
    // 每一个Observer的实例上都有一个dep
    this.dep = new Dep();
    // 给实例（this，一定要注意，构造函数中的this不是表示类本身，而是实例本身）
    //  添加__ob__属性，值的这次new的实例
    def(value, "__ob__", this, false);
    // console.log("我是Observer构造器", value);
    // 目的是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
    // 检查数组还是对象
    if (Array.isArray(value)) {
      // 如果是数组，强行将数组原型指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods);
      //  让数组变observe
      this.observeArray(value);
    }else {
      this.walk(value);
    }
  }
  // 遍历
  walk(value) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }
  // 数组的特殊遍历
  observeArray(arr) {
    for (let i = 0,l = arr.length; i < l; i++) {
      // 逐项进行observe
      observe(arr[i]);
    }
  }
}
