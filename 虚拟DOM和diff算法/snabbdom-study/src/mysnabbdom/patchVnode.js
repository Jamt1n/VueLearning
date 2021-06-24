import createElement from "./createElement";

export default function patchVnode(oldVnode, newVode) {
//  判断新旧vnode是否同一节点
    if (oldVnode === newVode) return;
    // 判断新vnode有没有text属性
    if (
        newVode.text != undefined && (newVode.children == undefined ||
        newVode.children.length == 0)
    ) {
        // 新vnode有text属性
        if (newVode.text != oldVnode.text) {
            // 如果新vnode和老的vnode的text不同，直接新的写入老的
            oldVnode.elm.innerText = newVode.text;
        }
    } else {
        // 新vnode没有text属性，有children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 新老都有children
            // 所有未处理节点的开头
            let un = 0;
            for (let i = 0; i < newVode.children.length; i++) {
                let ch = newVode.children[i];
                // 再次遍历，看看欧oldVnode中有没有节点和它的same的
                let isExist = false;
                for (let j = 0; j < oldVnode.children.length; j++) {
                    if (oldVnode.children[j].sel == ch.sel && oldVnode.children[j].k == ch.key) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    console.log(ch);
                    let dom = createElement(ch)
                    ch.elm = dom;
                    if (un < oldVnode.children.length) {
                        oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm)
                    }else {
                        oldVnode.elm.appendChild(dom)
                    }

                }else {
                    // 让处理的指针下移
                    un++;
                    if (i == j) {

                    }
                }
            }

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
