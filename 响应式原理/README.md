### Vue2数据更新原理

![data](README.assets/data.png)

### MVVM模式

![image-20210626195901212](README.assets/image-20210626195901212.png)



### 侵入式和非侵入式

![image-20210626195926215](README.assets/image-20210626195926215.png)



### 尤大大找到了"上帝的钥匙"

## Object.defineProperty()

- 数据劫持/数据代理

  利用JavaScript引擎赋予的功能，检测对象属性变化仅有"上帝的钥匙"不够，还需要设计一套精密的系统

- Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

![image-20210626202734193](README.assets/image-20210626202734193.png)

- 可以设置一些额外隐藏的属性

  writable、enumerable、

### get

​	属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。	**默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

### set

​	属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。	**默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

![image-20210626203745281](README.assets/image-20210626203745281.png)

### getter/setter需要变量周转才能工作

![image-20210626204420242](README.assets/image-20210626204420242.png)



### defineReactive函数（利用闭包）

![image-20210626204803749](README.assets/image-20210626204803749.png)



## Observer

​	将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object

![image-20210626211123258](README.assets/image-20210626211123258.png)

![image-20210626210954641](README.assets/image-20210626210954641.png)



## 对数组的处理（7种方法改写）

### Array.prototype

![image-20210626235030059](README.assets/image-20210626235030059.png)

#### - push

#### - pop

#### - shift

#### - unshift

#### - splice

#### - sort

#### - reverse

**以Array.prototype为原型，创建arrayMethods对象，利用Object.setPrototypeOf,强制让数组指向arrayMethods**

![image-20210626235556299](README.assets/image-20210626235556299.png)

### Object.setPrototypeOf(o, arrayMethods) == o.\_\_proto\_\_ = arrayMethods