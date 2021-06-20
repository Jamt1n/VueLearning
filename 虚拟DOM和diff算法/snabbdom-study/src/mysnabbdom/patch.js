import vnode from "./vnode";
import createElement from "./createElement";

export default function (oldVnode, newVode) {
  // 判断传入的第一个参数，是DOM节点还是虚拟节点?
  if (oldVnode.sel == "" || oldVnode.sel == undefined) {
    //    传入的第一个参数是DOM节点，此时要包装为虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  //判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key == newVode.key && oldVnode.sel == newVode.sel) {
    //    精细比较
  } else {
    //    暴力
      createElement(newVode, oldVnode.elm)
      console.log(newVode)
  }
  console.log(oldVnode);
}
