import vnode from "./vnode";
import createElement from "./createElement";

export default function patch(oldVnode, newVode) {
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
    //    暴力插入新的，删除旧的
    let newVdomElm = createElement(newVode);
    // 插入到老节点之前
    if (oldVnode.elm.parentNode && newVdomElm) {
      oldVnode.elm.parentNode.insertBefore(newVdomElm, oldVnode.elm);
    }
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}
