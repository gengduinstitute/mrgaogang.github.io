(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{352:function(e,t,n){"use strict";n.r(t);var a=n(1),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能优化")]),e._v(" "),n("h3",{attrs:{id:"一、如何优化构建速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、如何优化构建速度","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、如何优化构建速度")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("缩小文件搜索范围")])]),e._v(" "),n("ul",[n("li",[e._v("合理配置resolve.extensions[];")]),e._v(" "),n("li",[e._v("module.noParse[]字段告诉webpack不解析那些模块;")]),e._v(" "),n("li",[e._v("配置loader的时候使用include，exclude缩小搜索范围")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("使用DllPlugin减少基础模块编译次数")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("使用HappyPack开启多进程Loader转换")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("使用webpack的externals配合html引入js减少打包")])])])]),e._v(" "),n("h3",{attrs:{id:"二、优化开发体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、优化开发体验","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、优化开发体验")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("启动自动刷新")])]),e._v(" "),n("ul",[n("li",[e._v("启动webpack时加上--watch参数")]),e._v(" "),n("li",[e._v("在配置文件中设置watch:true")]),e._v(" "),n("li",[e._v("启动时使用webpack-dev-server")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("开启模块热替换HMR")])]),e._v(" "),n("ul",[n("li",[e._v("webpack-dev-server --hot")]),e._v(" "),n("li",[e._v("使用HotModuleReplacementPlugin")])])])]),e._v(" "),n("h3",{attrs:{id:"三、如何优化打包质量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、如何优化打包质量","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、如何优化打包质量")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("压缩文件体积")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("压缩JS,CSS")]),e._v("（使用webpack4内置的UglifyJSPlugin和mini-css-extract-plugin/ExtractTextPlugin）")]),e._v(" "),n("li",[e._v("剔除无用代码(webpack4默认支持);")]),e._v(" "),n("li",[n("strong",[e._v("babel-polyfill按需加载")]),e._v(" "),n("ul",[n("li",[e._v("babel6解决方案：使用transform-runtime，但是会存在重复引用问题")]),e._v(" "),n("li",[e._v('babel7解决方案：引入@babel/polyfill，使用"@babel/preset-env"设置useBuiltIns按需加载 babel.config.js')])])])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("加速网络请求")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("图片压缩")]),e._v("(较小图片使用base64)")]),e._v(" "),n("li",[n("strong",[e._v("使用CDN加速")]),e._v(" "),n("ul",[n("li",[e._v("html不缓存，js和css/img放在cdn中")]),e._v(" "),n("li",[e._v("js/css 使用chunkhash命名")]),e._v(" "),n("li",[e._v("不同的资源放在不同的cdn中")])])]),e._v(" "),n("li",[n("strong",[e._v("代码分割，组件按需加载")]),e._v("(常常配合@babel/plugin-syntax-dynamic-import使用)")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("多入口应用抽取公共库")])]),e._v(" "),n("ul",[n("li",[e._v("使用webpack自带的CommonsChunkPlugin"),n("code",[e._v("单独分离出第三方库、自定义公共模块、webpack运行文件")])]),e._v(" "),n("li",[e._v("抽离步骤\n"),n("ul",[n("li",[e._v("将第三方库node_modules抽离为vendor")]),e._v(" "),n("li",[e._v("按照admin/index将vendor抽离为admin-vendor和index-vendor")]),e._v(" "),n("li",[e._v("将admin的入口文件和index的入口文件的依赖抽成公共库common-api")]),e._v(" "),n("li",[e._v("将webpack运行时资源抽成chunk")]),e._v(" "),n("li",[e._v("一个 chunk 的多个子 chunk 会有公共的依赖。为了防止重复，使用新的异步加载的额外公共app")])])])])])]),e._v(" "),n("h3",{attrs:{id:"四、用户体验优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、用户体验优化","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、用户体验优化")]),e._v(" "),n("ol",[n("li",[e._v("添加Skeleton或者Loading")])]),e._v(" "),n("h2",{attrs:{id:"常见的内存泄漏情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的内存泄漏情况","aria-hidden":"true"}},[e._v("#")]),e._v(" 常见的内存泄漏情况")]),e._v(" "),n("ul",[n("li",[e._v("大量使用全局变量，且没有清理机制；")]),e._v(" "),n("li",[e._v("生产环境使用console.log、error输出对象")]),e._v(" "),n("li",[e._v("dom的内存泄漏，常常大量对dom进行增加删除操作，若在删除时没有将对应dom对象置空，可能会操作全局对象引用；")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    var refA = document.getElementById('refA');\n    var refB = document.getElementById('refB');\n    document.body.removeChild(refA);\n\n    // #refA不能GC回收，因为存在变量refA对它的引用。将其对#refA引用释放，但还是无法回收#refA。\n    refA = null;\n\n    // 还存在变量refB对#refA的间接引用(refB引用了#refB，而#refB属于#refA)。将变量refB对#refB的引用释放，#refA就可以被GC回收。\n    refB = null;\n")])])]),n("ul",[n("li",[e._v("定时器：setTimeout和setInternal")])]),e._v(" "),n("blockquote",[n("p",[e._v("setInternal没有在关闭是使用clearInternal")])]),e._v(" "),n("ul",[n("li",[e._v("不断对组件进行匿名事件绑定")])]),e._v(" "),n("blockquote",[n("p",[e._v("解决办法：将匿名事件函数换成命名事件函数；"),n("strong",[e._v("学会解除事件绑定的习惯")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    var resizeCallback = function (init) {\n      createHtml(10, ++counter);\n      // 事件委托\n      container.addEventListener('click', function (event){//匿名函数\n        var target = event.target;\n          if(target.tagName === 'INPUT'){\n              container.removeChild(target.parentElement)\n          }\n      }, false);\n    }\n    window.addEventListener('resize', resizeCallback, false);\n")])])]),n("h2",{attrs:{id:"javascript优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript优化","aria-hidden":"true"}},[e._v("#")]),e._v(" JavaScript优化")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("做防抖和节流")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("减少dom操作")])]),e._v(" "),n("ul",[n("li",[e._v("结果统一保存，一并输出")]),e._v(" "),n("li",[e._v("使用DocumentFragment文档片段")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("node2fragment(node) {\nlet fragment = document.createDocumentFragment()\n// 把el中所有的子节点挨个添加到文档片段中\nlet childNodes = node.childNodes\n// 由于childNodes是一个类数组,所以我们要把它转化成为一个数组,以使用forEach方法\nthis.toArray(childNodes).forEach(node => {\n    // 把所有的字节点添加到fragment中\n    fragment.appendChild(node)\n})\nreturn fragment\n}\n")])])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("事件委托")])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("window.onload = function(){\n\tvar oUl = document.getElementById(\"ul1\");\n\t\toUl.onclick = function(ev){\n\t\tvar ev = ev || window.event;\n\t\tvar target = ev.target || ev.srcElement;\n\t\tif(target.nodeName.toLowerCase() == 'li'){\n\t\t    alert(123);\n\t\t　　alert(target.innerHTML);\n\t    }\n\t}\n}\n")])])]),n("ul",[n("li",[n("p",[n("strong",[e._v("避免使用构造器")])]),e._v(" "),n("blockquote",[n("p",[e._v("eval('1+2')")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("使用Object/Array直接量")])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n//bad\nvar myObject = new Object();\nmyObject.name = "xxxx";\n\n//good\nvar myObject = {\n    name: "xxxx"\n}\n')])])]),n("h3",{attrs:{id:"重绘和回流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流","aria-hidden":"true"}},[e._v("#")]),e._v(" 重绘和回流")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("重绘的情况")])]),e._v(" "),n("ul",[n("li",[e._v("当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("回流的情况")])]),e._v(" "),n("ul",[n("li",[e._v("页面初次渲染")]),e._v(" "),n("li",[e._v("浏览器窗口大小改变")]),e._v(" "),n("li",[e._v("元素尺寸、位置、内容发生改变")]),e._v(" "),n("li",[e._v("元素字体大小变化")]),e._v(" "),n("li",[e._v("添加或者删除可见的 dom 元素")]),e._v(" "),n("li",[e._v("激活 CSS 伪类（例如：:hover）")]),e._v(" "),n("li",[e._v("查询某些属性或调用某些方法\nclientWidth、clientHeight、clientTop、clientLeft\noffsetWidth、offsetHeight、offsetTop、offsetLeft\nscrollWidth、scrollHeight、scrollTop、scrollLeft\ngetComputedStyle()\ngetBoundingClientRect()\nscrollTo()")])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);