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
        console.log('啦啦啦');
        // 恢复原来的功能
        original.apply(this, arguments);
    }, false);
})

