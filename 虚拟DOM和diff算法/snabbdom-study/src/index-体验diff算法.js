import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

let container = document.querySelector(".container");
let btn = document.querySelector("#btn");

let patch = init([classModule, propsModule, styleModule, eventListenersModule]);

let myVnode1 = h("ul", {}, [
  h("li", {key:'A'}, "A"),
  h("li", {key:'B'}, "B"),
  h("li", {key:'C'}, "C"),
  h("li", {key:'D'}, "D"),
]);
patch(container, myVnode1);

let myVnode2 = h("ul", {}, [
  h("li", {key:'E'}, "E"),
  h("li", {key:'A'}, "A"),
  h("li", {key:'B'}, "B"),
  h("li", {key:'C'}, "C"),
  h("li", {key:'D'}, "D"),
]);

btn.onclick = function () {
  patch(myVnode1, myVnode2);
};
