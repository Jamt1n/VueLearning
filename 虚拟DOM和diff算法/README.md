### snabbdom简介

- **snabbdom是著名的虚拟DOM库，是diff算法的鼻祖，Vue源码借鉴了snabbdom**

### snabbdom的h函数

- h函数用来产生虚拟节点（vnode）

- 比如

  ![image-20210619164212043](README.assets/image-20210619164212043.png)

  得到

  ![image-20210619164227292](README.assets/image-20210619164227292.png)

  真正的dom节点：

  

  ![image-20210619164259596](README.assets/image-20210619164259596.png)

- **一个虚拟节点的属性**

![image-20210619164346394](README.assets/image-20210619164346394.png)

#### h函数可以嵌套

- 比如这样嵌套使用

  ![image-20210619165850050](README.assets/image-20210619165850050.png)

- 将得到

  ![image-20210619165908003](README.assets/image-20210619165908003.png)


- h函数的活用

  ![image-20210619170620987](README.assets/image-20210619170620987.png)

  

### diff算法原理

- 最小量更新。**key是节点的唯一标识，告诉diff算法，在更改前后它们是同一个DOM节点**
- **只有是同一个虚拟节点，才进行精细化比较**，否则就是暴力删除旧的、插入新的。
- 延伸问题：如何定义是同一个虚拟节点？答：选择器相同且key相同
- **只进行同层比较，不会进行跨层比较。**即使是同一片虚拟节点，但是跨层了，精细化不会diff。而是暴力删除旧的、插入新的。

![image-20210620200338930](README.assets/image-20210620200338930.png)

- 旧节点的key要和老节点的key相同，旧节点的选择器要和新节点的选择器相同

![image-20210620200625794](README.assets/image-20210620200625794.png)

#### patch函数的递归

![image-20210620234334812](README.assets/image-20210620234334812.png)



### 手写diff算法