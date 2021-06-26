import h from "./mysnabbdom/h";
import patch from "./mysnabbdom/patch";

const myVnode1 = h("ul", {}, [
  h("li", { key: "A" }, "A"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "C" }, "C"),
]);

const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
patch(container, myVnode1);

const myVnode2 = h("ul", {}, [
  h("li", { key: "A" }, "A"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "M" }, "M"),
  h("li", { key: "N" }, "N"),
  h("li", { key: "C" }, "C"),
  h("li", { key: "D" }, "D"),
]);
// const myVnode2 = h("ul", {}, [
//   h("li", { key: "A" }, "A"),
//   h("li", { key: "B" }, "B"),
//   h("li", { key: "C" }, "C"),
//   h("li", { key: "D" }, "D"),
// ]);

btn.onclick = function () {
  patch(myVnode1, myVnode2);
};
