import createElement from "./createElement";

export default function patchVnode(oldVnode, newVode) {
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
}
