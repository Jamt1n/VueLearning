import {def} from "./utils";

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型，创建arrayMethods对象，并暴露
export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse"
]

methodsNeedChange.forEach(methodName => {
    // backup，因为push、pop等7个函数功能不能被剥夺
    const original = arrayPrototype[methodName];
    // 定义新的方法
    def(arrayMethods, methodName, function () {
        // 恢复原来的功能
        const result = original.apply(this, arguments);
        // 把类数组对象变为数组
        const args = [...arguments];
        // 把数组身上的__ob__取出来，__ob__已经被添加了，因为数组不是最高层
        // 第一次遍历是obj这个对象的第一层时，已经给g(就是这个数据)属性添加了__ob__；
        const ob = this.__ob__;

        // 有三种方法push\unshift\splice\能够插入新项，现在把新项也变为observe的
        let inserted = [];
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = arguments;
                break;
            case 'splice':
                // splice格式是splice(index, count, item)
                inserted = args.slice(2);
                break;
        }
        // 判断有没有插入的新项
        if (inserted.length) {
            ob.observeArray(inserted);
        }

        console.log('啦啦啦');
        return result;
    }, false);
})

