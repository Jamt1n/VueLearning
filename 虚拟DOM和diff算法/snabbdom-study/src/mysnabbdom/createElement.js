/**
 * 创建真正节点. 将vnode创建为DOM，插入到pivot前
 */
export default function (vnode, pivot) {
  //    把vNode插入到标杆
  let domNode = document.createElement(vnode.sel);
  //    有字节还是文本
  if (
    vnode.text != "" && (vnode.children == undefined ||
    vnode.children.length == 0)
  ) {
    //    它内部是文字
    domNode.innerText = vnode.text;
    //    将孤儿节点上树
    pivot.parentNode.insertBefore(domNode, pivot);
  }else if (Array.isArray(vnode.children) && vnode.children.length > 0) {

  }
}
