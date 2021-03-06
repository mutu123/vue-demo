- forEach 语法：
    arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
    参数
callback
    为数组中每个元素执行的函数，该函数接收三个参数：
    currentValue
        数组中正在处理的当前元素。
    index 可选
        数组中正在处理的当前元素的索引。
    array 可选
        forEach() 方法正在操作的数组。
thisArg 可选
    可选参数。当执行回调函数 callback 时，用作 this 的值。
返回值
    undefined。

- let 和 const
    - let 和 var 的差异
        - let 允许声明一个在作用域限制在块级中的变量、语句或者表达式
            - 块级作用域
        - var 声明的变量只能是全局或者整个函数块的
        - let 不能重复声明
        - let 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let
    - const 常量
        - 常量不能重新赋值
        - 不能重复声明
        - 块级作用域
        - const 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const
- 解构赋值
    - 对象的解构赋值
    - 数组的解构赋值
    - 字符串的解构赋值
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- 展开运算符
    - 对象展开
    - 数组展开
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Set 对象    
    - Set 对象的数据结构
    - Set 相关属性与方法
        - size 属性
        - clear()、delete()、get()、has()、add()    
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
- Map 对象
    - Map 对象的数据结构
    - Map 相关属性与方法
    - size 属性
    - clear()、delete()、get()、has()、set()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
    
- 函数新增扩展
    - 箭头函数
        - 箭头函数的各种写法
        - 箭头函数的 this 问题
        - 箭头函数的不定参问题
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    - rest 参数设置
    - 参数默认值设置
- 新增数组扩展
    - Array.from()、Array.of() 
    - find()、findIndex()、includes()
    - flat()、flatMap()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
- 新增字符串扩展
    - includes(), startsWith(), endsWith()
    - repeat()
    - 模版字符串   
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
- 新增对象扩展
    - 属性简洁表示法
    - 属性名表达式
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
- babel 使用
    - Babel 是一个 JavaScript 编译器
    - 手册地址：https://www.babeljs.cn/
    - Babel 基本是否方法