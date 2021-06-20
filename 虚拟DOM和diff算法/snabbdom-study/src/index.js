import h from "./mysnabbdom/h";
import patch from "./mysnabbdom/patch";

let myVnode1 = h("ul", {}, [
  h("li", {}, "E"),
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, [
    h("div", {}, [h("ol", {}, [h("li", {}, "haha"), h("li", {}, "xixi")])]),
  ]),
  h("li", {}, "D"),
]);

const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
patch(container, myVnode1);

let myVnode2 = h("section", {}, [
  h("h1", {}, "我是新的h1"),
  h("h2", {}, "我是新的h2"),
]);

btn.onclick = function () {
  patch(myVnode1, myVnode2);
};
