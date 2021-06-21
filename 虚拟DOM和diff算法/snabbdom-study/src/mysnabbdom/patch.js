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
    // 精细比较 ！！最复杂！！
    //  判断新旧vnode是否同一节点
    if (newVode === newVode) return;
    // 判断新vnode有没有text属性
    if (
      (newVode.text != undefined && newVode.children == undefined) ||
      newVode.children.length == 0
    ) {
      // 新vnode有text属性
      if (newVode.text != oldVnode.text) {
        // 如果新vnode和老的vnode的text不同，直接新的写入老的
        oldVnode.elm.innerText = newVode.text;
      }
    } else {
      // 新vnode没有text属性
      if (oldVnode.children != undefined && oldVnode.children > 0) {
        // 新老都有children
      } else {
        // 老的没有children，新的有、新的放进老的
        //清空老节点内容
        oldVnode.elm.innerHTML = "";
        // 遍历新节点的children，创建dom 上树
        for (let i = 0; i < newVode.children.length; i++) {
          let dom = createElement(newVode.children[i]);
          oldVnode.elm.appendChild(dom);
        }
      }
    }
  } else {
    //    暴力插入新的，删除旧的
    let newVdomElm = createElement(newVode);
    // 插入到老节点之前
    if (oldVnode.elm.parentNode && newVdomElm) {
      oldVnode.elm.parentNode.insertBefore(newVdomElm, oldVnode.elm);
    }
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
