(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{406:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("在 Now 上调试 RN 时只需要输入 Bundle 名称和 module name 就可以打开"),s("code",[t._v("RN")]),t._v("页面进行调试，让笔者滋生了"),s("code",[t._v("Android")]),t._v("动态化加载 RN 的想法；众所周知动态化需要加载资源从加载的速度上肯定是稍慢于静态化加载。作为一名前端开发，本着实践的角度，本文将探索动态化及静态化首屏加载具体差异及资源加载占整个首屏的百分比。（再已有"),s("code",[t._v("Android")]),t._v("项目上加载"),s("code",[t._v("RN")]),t._v("资源）")]),t._v(" "),s("h2",{attrs:{id:"二、首屏加载时间指标分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、首屏加载时间指标分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、首屏加载时间指标分析")]),t._v(" "),s("h3",{attrs:{id:"_1-用什么指标度量首屏加载时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-用什么指标度量首屏加载时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 用什么指标度量首屏加载时间")]),t._v(" "),s("p",[t._v("在 web 开发中，常常使用"),s("code",[t._v("FP")]),t._v("、"),s("code",[t._v("FCP")]),t._v("、"),s("code",[t._v("FMP")]),t._v("、"),s("code",[t._v("TTI")]),t._v("等性能指标来衡量一个应用的性能好坏（如下图所示）；本文将采用"),s("code",[t._v("FMP")]),t._v("的衡量指标去衡量 RN 页面加载性能。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/1.png",alt:"/images/react/rn-comp/1.png"}})]),t._v(" "),s("p",[t._v("要使用"),s("code",[t._v("FMP")]),t._v("去衡量首屏加载时间，首先得清楚首屏加载一共有几个步骤，应用加载步骤大致分为：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("js bundle 资源下载")])]),t._v(" "),s("li",[s("strong",[t._v("RN 视图创建并启动应用")])]),t._v(" "),s("li",[s("strong",[t._v("RN 资源加载")])]),t._v(" "),s("li",[s("strong",[t._v("初始化 JS Bridge")])]),t._v(" "),s("li",[s("strong",[t._v("RN 页面加载")])])]),t._v(" "),s("p",[t._v("所以我们可以首先将首屏耗时定义为："),s("strong",[t._v("首屏耗时 ≈js bundle 资源下载及解压耗时+RN 视图创建耗时+RN 资源加载耗时+js bridge 及应用启动耗时+首屏视图渲染耗时。")])]),t._v(" "),s("p",[t._v("由于 RN 视图创建耗时，RN 资源加载耗时，js bridge 及应用启动耗时为 react native 上下文初始化的一个固定开销，所以我们可以将其统称为"),s("strong",[t._v("react native 上下文初始化时间")]),t._v("。所以最终我们暂且使用：")]),t._v(" "),s("p",[s("strong",[t._v("首屏耗时 ≈js bundle 资源下载及解压耗时+react native 上下文初始化时间+首屏视图渲染耗时")])]),t._v(" "),s("h3",{attrs:{id:"_2-如何计算-rn-上下文初始化时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何计算-rn-上下文初始化时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 如何计算 RN 上下文初始化时间")]),t._v(" "),s("p",[t._v("要了解 RN 上下文初始化时间，首先需要理解 RN 加载的整个流程，以及其中比较关键的点。下图是一张 RN 加载的整体流程图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/2.png",alt:"/images/react/rn-comp/2.png"}})]),t._v(" "),s("p",[t._v("我们知道 RN 的页面也是依托"),s("code",[t._v("Activity")]),t._v("，"),s("code",[t._v("React Native")]),t._v("框架里有一个"),s("code",[t._v("ReactActivity")]),t._v("，它就是我们 RN 页面的容器。"),s("code",[t._v("ReactActivity")]),t._v("里有个"),s("code",[t._v("ReactRootView")]),t._v("，最终渲染出来的 view 都会添加到这个"),s("code",[t._v("ReactRootView")]),t._v("上。"),s("code",[t._v("ReactRootView")]),t._v("调用自己的"),s("code",[t._v("startReactApplication")]),t._v("()方法启动了整个 RN 页面，在启动的过程中先去创建页面上下文"),s("code",[t._v("ReactContext")]),t._v("，然后再去加载、执行并将"),s("code",[t._v("JavaScript")]),t._v("映射成"),s("code",[t._v("Native Widget")]),t._v("，最终一个 RN 页面就显示在了用户面前。")]),t._v(" "),s("p",[t._v("理解了 RN 的整体加载流程，我们发现："),s("strong",[t._v("RN 应用初始化时间 ≈AppRegistry 启动 application 的时间-createReactView 的初始化时间；")])]),t._v(" "),s("p",[t._v("但是似乎要获取到 A"),s("strong",[t._v("ppRegistry 启动 application 的时间")]),t._v("是一件比较困难的事情，由于项目只有一个页面，我们姑且可以使用 react 初始化的时间（即 constructor 触发时间）代替启动 app 时间；而"),s("strong",[t._v("createReactView 的初始化时间")]),t._v("时间可以使用启动 RNDynamicActivity 的时间；所以最终我们使用如下方式得到应用初始化时间：")]),t._v(" "),s("p",[s("strong",[t._v("RN 应用初始化时间 ≈React 初始化时间-启动 Activity 时间；")])]),t._v(" "),s("h3",{attrs:{id:"_3-如何计算首屏视图渲染耗时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何计算首屏视图渲染耗时","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 如何计算首屏视图渲染耗时")]),t._v(" "),s("p",[t._v("关注首屏视图渲染耗时，需要理解"),s("code",[t._v("react")]),t._v("框架视图渲染流程，相应的需要了解其生命周期方法。下图是一张 react 组件完整的声明周期图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/3.png",alt:"/images/react/rn-comp/3.png"}})]),t._v(" "),s("p",[t._v("从图中可以看出"),s("code",[t._v("React")]),t._v("组件生命周期分成三个阶段，在第一个阶段挂加载时应用进行初始化并进行第一次的渲染；第二阶段为组件运行及更新阶段，这里可能会再次进行组件渲染；第三阶段组件进行卸载并消亡。")]),t._v(" "),s("p",[t._v("对应上述生命周期方法，我们模拟 RN 页面是一个电影列表；在初始阶段首先渲染 loading 视图，并开始拉取数据。获取数据后，通过改变状态（state），触发视图的再次渲染，在屏幕绘制出视图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/4.png",alt:"/images/react/rn-comp/4.png"}})]),t._v(" "),s("p",[t._v("结合上述分析，我们将首屏视图渲染耗时定义为如下：")]),t._v(" "),s("p",[s("strong",[t._v("首屏视图渲染耗时 ≈compontDidUpdate 结束时间 – componentDidMount 开始时间")])]),t._v(" "),s("h2",{attrs:{id:"三、开启探测之路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、开启探测之路","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、开启探测之路")]),t._v(" "),s("h3",{attrs:{id:"_1-输出耗时时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-输出耗时时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 输出耗时时间")]),t._v(" "),s("p",[t._v("输出耗时时间有两种方法：")]),t._v(" "),s("ul",[s("li",[t._v("使用"),s("code",[t._v("console.log")]),t._v("的方式，并在"),s("code",[t._v("Android")]),t._v("的"),s("code",[t._v("Logcat")]),t._v("中查看对应的时间；")]),t._v(" "),s("li",[t._v("封装"),s("code",[t._v("native")]),t._v("层日志方法给"),s("code",[t._v("react native")]),t._v("调用，将最终结果通过回调的方式展示在 RN 页面上；")])]),t._v(" "),s("p",[t._v("本文采用第二种方式，其记录方法如下：")]),t._v(" "),s("p",[s("strong",[t._v("Native 侧手机耗时时间：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactContextBaseJavaModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...一些方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ReactMethod")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RNDynamicActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bundleType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mStaticLog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentMountedTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"render"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mStaticLog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startRenderTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"constructor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mStaticLog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updated"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mStaticLog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updatedTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...动态化时间记录")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ReactMethod")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showDynamicTimes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Callback")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isDynamic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RNDynamicActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bundleType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hashMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...一些时间统计")]),t._v("\n            callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("React Native 侧触发：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constructor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mounted'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-动态化加载首屏性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态化加载首屏性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 动态化加载首屏性能")]),t._v(" "),s("p",[t._v("React Native 如何实现动态化，详情请见笔者编写的另一篇文章"),s("a",{attrs:{href:"https://mrgaogang.github.io/react/%E5%B7%B2%E6%9C%89Android%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BDRN.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("已有 Android 项目如何实现动态加载 RN bundle"),s("OutboundLink")],1),t._v("；")]),t._v(" "),s("p",[t._v("为了得到相对准确且模拟真实环境下的加载，笔者分别将 js boundle 资源存放在三处：本地 mock 服务，ak 离线包资源平台和外网私人服务器上。得出以下结论：\n"),s("img",{attrs:{src:"/images/react/rn-comp/5.png",alt:"/images/react/rn-comp/5.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/6.png",alt:"/images/react/rn-comp/6.png"}})]),t._v(" "),s("p",[t._v("其对比如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/7.png",alt:"/images/react/rn-comp/4.png"}})]),t._v(" "),s("h3",{attrs:{id:"_3-静态化首屏性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-静态化首屏性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 静态化首屏性能")]),t._v(" "),s("p",[t._v("由于资源是静态化，我们可以默认资源下载时间为 zip 资源加载时间，其对比如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/react/rn-comp/8.png",alt:"/images/react/rn-comp/5.png"}})]),t._v(" "),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[t._v("从静态化加载和动态化加载的真实数据我们可以得出以下两个结论：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("RN 资源初始化和视图渲染时间与是否动态化无关；")])]),t._v(" "),s("li",[s("strong",[t._v("RN 动态化稍慢于静态化加载的主要原因是：资源下载的时间；")])]),t._v(" "),s("li",[s("strong",[t._v("对于本文 bundle 资源为 212KB，所占整个应用白屏时间约为：60%左右；")])])]),t._v(" "),s("p",[t._v("当然本次比较也有一定的局限性，比如：没有考虑 bundle 资源不同大小所占首屏时间占比等等。")]),t._v(" "),s("p",[t._v("其实真实的加载远不止如此简单，还有很多方面需要我我们考虑。比如：")]),t._v(" "),s("ul",[s("li",[t._v("离线包版本管理")]),t._v(" "),s("li",[t._v("离线包加载时机，比如用户在什么时间下载离线包，加载离线包，已经打开了当前离线包，下次打开是否更新？等")]),t._v(" "),s("li",[t._v("离线包缓存机制")]),t._v(" "),s("li",[t._v("权限管理")]),t._v(" "),s("li",[t._v("降级策略")]),t._v(" "),s("li",[t._v("等待")])]),t._v(" "),s("h2",{attrs:{id:"四、源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、源码","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、源码")])])}),[],!1,null,null,null);a.default=e.exports}}]);