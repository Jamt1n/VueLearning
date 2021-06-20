import h from './mysnabbdom/h'
import patch from "./mysnabbdom/patch";

// let patch = init([classModule, propsModule, styleModule, eventListenersModule]);


const container = document.querySelector(".container");
let btn = document.querySelector("#btn");


let myVnode1 = h("h1", {}, '你好');

patch(container, myVnode1);

// let myVnode2 = h("ul", {}, [
//   h("li", {key:'E'}, "E"),
//   h("li", {key:'A'}, "A"),
//   h("li", {key:'B'}, "B"),
//   h("li", {key:'C'}, "C"),
//   h("li", {key:'D'}, "D"),
// ]);

btn.onclick = function () {
  patch(myVnode1, myVnode2);
};
