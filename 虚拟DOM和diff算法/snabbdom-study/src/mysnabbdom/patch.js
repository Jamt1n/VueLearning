import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";

export default function patch(oldVnode, newVnode) {
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
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
    // 精细比较 ！！最复杂！！
    patchVnode(oldVnode, newVnode);
  } else {
    //    暴力插入新的，删除旧的
    let newVnodeElm = createElement(newVnode);
    let oldVnodeElm = oldVnode.elm;
    // 插入到老节点之前
    if (oldVnodeElm) {
      oldVnodeElm.parentNode.insertBefore(newVnodeElm, oldVnodeElm);
    }
    // 删除老节点
    oldVnodeElm.parentNode.removeChild(oldVnodeElm);
  }
}
