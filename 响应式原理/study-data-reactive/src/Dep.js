let uid = 0;
export default class Dep {
    constructor() {
        this.id = uid++;
        // 用数组存储自己的订阅者,subscribes订阅者。
        // 这个数组放的是Watcher的实例
        this.subs = [];
    }
    // 添加订阅
    addSub(sub) {
        this.subs.push(sub)
    }
    // 添加依赖
    depend() {
        // Dep.target就是一个自己指定的全局位置，只要全局唯一就行
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }
    // 通知更新
    notify() {
        // 浅拷贝一份
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}
