import patchVnode from "./patchVnode";
import createElement from "./createElement";
// 判断是否同一个
function checkSameVnode(a, b) {
    return a.sel === b.sel && a.key === b.key
}

export default function updateChildren(parentElm, oldCh, newCh) {
    console.log("我是updateChildren")
    console.log(oldCh, newCh)
    // 旧前
    let oldStartIdx = 0;
    // 新前
    let newStartIdx = 0;
    // 旧后
    let oldEndIdx = oldCh.length - 1;
    // 新后
    let newEndIdx = newCh.length - 1;
    // 旧前节点
    let oldStartVnode = oldCh[0];
    // 新前节点
    let newStartVnode = newCh[0];
    // 旧后节点
    let oldEndVnode = oldCh[oldEndIdx];
    // 旧后节点
    let newEndVnode = newCh[newEndIdx];

    let keyMap = null; // 缓存key

    // 开始while
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        // 先略过undefined标记的
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx];
        }else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx];
        }else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            newStartVnode = newCh[++newStartIdx];
        }else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            newEndVnode = newCh[--newEndIdx];
        }else if (checkSameVnode(oldStartVnode, newStartVnode)) {
            // 新前旧前
            patchVnode(oldStartVnode, newStartVnode);
            console.log(1)
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            // 新后旧后
            patchVnode(oldEndVnode, newEndVnode);
            console.log(2)
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            // 新后旧前
            patchVnode(oldStartVnode, newEndVnode);
            console.log(3)
            // 3、旧前节点插入到旧后之后
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            // 新前旧后
            patchVnode(oldEndVnode, newStartVnode);
            console.log(4)
            // 4、新前节点插入到旧前之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }else {
            // 1234都没找到，循环查找
            // 制作keymap，不用每次遍历老对象了
            if (!keyMap) {
                keyMap = {};
                // 从oldStartIdx开始，到oldEndIdx结束，创建keyMap
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if (key != undefined) {
                        keyMap[key] = i;
                    }
                }
            }
            console.log(keyMap);
            // 寻找当前这项（newStartIdx）这项在keyMap中映射的位置序号
            const idxInOld = keyMap[newStartVnode.key];
            if (idxInOld == undefined) {
                // 判断如果idInOld是undefined表示它是全新的项
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
            }else {
                // 如果不是undefined则要移动
                const elmToMove = oldCh[idxInOld];
                patchVnode(elmToMove, newStartVnode);
                // 把这项设置为undefined
                oldCh[idxInOld] = undefined;
                // 移动
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
            }
            // 指针下移
            newStartVnode = newCh[++newStartIdx]
        }
    }

    // 循环结束还有剩余，插入剩余新节点
    if (newStartIdx <= newEndIdx) {
        console.log('插入new剩余的');
        // 找标杆，遍历新的newCh，添加到老的没处理的之前
        // const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // insertBefore方法可识别null，自动排到队尾
            // newCh[i]不是真DOM，要用createElement
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
        }
    }else if (oldStartIdx <= oldEndIdx) {
        console.log('old还有节点没处理完,要删除项')
        // 批量删除oldStart和oldEnd指针之间
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            if (oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm);
            }
        }
    }
}
