import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建patch函数  !核心函数！
let patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// 创建虚拟节点
let myVnode1 = h("a", { props: { href: "http://www.atguigu.com" } }, "尚硅谷");
console.log(myVnode1);

const myVnode2 = h("div", { class: { box: true } }, "我是一个盒子");

const myVnode3 = h("ul", [
  h("li", "苹果"),
  h("li", "西瓜"),
  h("li", [
    h("div", [
      h("p", "哈哈"),
      h("p", "嘻嘻"),
    ])
  ]),
  h("li", h("p", "火龙果"))
]);
// 让虚拟节点上树
let container = document.querySelector(".container");
patch(container, myVnode3);
