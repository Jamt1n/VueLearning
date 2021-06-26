export default function defineReactive(data, key, val) {
    if (arguments.length == 2) {
        val = data[key];
    }
    Object.defineProperty(data, key, {
        // 可枚举
        enumerable: true,
        // 可被配置
        configurable: true,
        // getter
        get() {
            console.log("你试图访问obj的a属性");
            return val
        },
        // setter
        set(newValue) {
            console.log("你试图改变obj的a属性", newValue);
            if (val === newValue) {
                return
            }
            val = newValue
        },
    });
}
