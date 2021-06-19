import h from "./mysnabbdom/h";

let myVnode1 = h("div", {}, [
    h("p", {}, "哈哈"),
    h("p", {}, "嘻嘻"),
    h("p", {}, "呵呵"),
    h("p", {}, [
        h("span", {}, "么么")
    ])
]);

console.log(myVnode1);
