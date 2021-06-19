### snabbdom简介

- **snabbdom是著名的虚拟DOM库，是diff算法的鼻祖，Vue源码借鉴了snabbdom**

### snabbdom的h函数

- h函数用来产生虚拟节点（vnode）

- 比如

  ![image-20210619164212043](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619164212043.png)

  得到

  ![image-20210619164227292](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619164227292.png)

  真正的dom节点：

  

  ![image-20210619164259596](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619164259596.png)

- **一个虚拟节点的属性**

![image-20210619164346394](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619164346394.png)

#### h函数可以嵌套

- 比如这样嵌套使用

  ![image-20210619165850050](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619165850050.png)

- 将得到

  ![image-20210619165908003](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619165908003.png)


- h函数的活用

  ![image-20210619170620987](G:\vue\源码\虚拟DOM和diff算法\README.assets\image-20210619170620987.png)

  

### diff算法原理
### 手写diff算法
