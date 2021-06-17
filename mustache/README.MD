## mustache库底重点要做两个事情

1. **将模板字符串编译为tokens形式**
2. **将tokens结合数据，解析为dom字符串**



### 简单的正则表达式

```javascript
templateStr.replace(/\{\{(\w+)\}\}/g, function(fildStr, $1)){return data[$1]}
```

### tokens

- tokens是一个JS的嵌套数组，说白就是**模板字符串的JS表示**
- **他是“抽象语法树”、“虚拟节点” 等等的开山鼻祖**

#### 模板字符串

```html
<h1>我买了一个{{thing}}，好{{mood}}啊</h1>
```

#### tokens

```javascript
[
    ['text', "<h1>我买了一个"],
    ['name', "thing"],
    ['text', "，好"],
    ['name', "mood"],
    ['text', "啊</h1>"]
]
```



**当模板字符串中有循环存在时，它将被编译为嵌套更深的tokens**

#### 模板字符串

```html
<div>
    <ul>
        {{#arr}}
        <li>{{.}}</li>
        {{/arr}}
    </ul>
</div>
```

#### tokens

```javascript
[
    ['text', "<div><ul>"],
    ["#", "arr", [
        ["text", "<li>"],
        ["name", "."],
        ["text", "</li>"]
    ]],
    ["text", "</ul></div>"]
]
```



**当循环是双重的，那么tokens会更深一层**

#### 模板字符串

```html
<div>
    <ol>
        {{#students}}
        <li>
        	学生{{item.name}}的爱好是
            <ol>
                {{#item.hobbies}}
                <li>{{.}}</li>
                {{/item.hobbies}}
            </ol>
        </li>
        {{/students}}
    </ol>
</div>
```

#### tokens

```javascript
[
    ['text', "<div><ol>"],
   	["#", "students", null, null, [
        ["text", "<li>学生"],
        ["name", "name"],
        ["text", "的爱好是"]
        ["#", "hobbies", null, null, [
            ["text", "<li>"],
            ["name", "."],
            ["text", "</li>"]
            ["text", "</li>"]
        ]],
        ["text", "</ul></li>"]
    ]],
    ["text", "</ol></div>"]
]
```

