(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{340:function(a,t,_){"use strict";_.r(t);var v=_(1),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"企业级微服务方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#企业级微服务方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 企业级微服务方案")]),a._v(" "),_("p",[a._v("整体思路：\n"),_("img",{attrs:{src:"/images/gmtc/muti-route/total.png",alt:""}})]),a._v(" "),_("h2",{attrs:{id:"一、spa-开发存在的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、spa-开发存在的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、SPA 开发存在的问题")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("维护困难（应用会越来越庞大）")])]),a._v(" "),_("li",[_("p",[a._v("技术栈的更替和变迁（SPA 开发模式会绑定框架，似的技术更替比较困难）")])]),a._v(" "),_("li",[_("p",[a._v("跨系统复用困难(大型业务功能模块的跨系统复用)")])]),a._v(" "),_("li",[_("p",[a._v("跨多团队合作开发困难")])])]),a._v(" "),_("h2",{attrs:{id:"二、什么是微前端？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是微前端？","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、什么是微前端？")]),a._v(" "),_("blockquote",[_("p",[a._v("多个小型前端应用合并为一个应用。并做到项目分离和运营聚合。")])]),a._v(" "),_("h2",{attrs:{id:"三、微前端方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、微前端方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、微前端方案")]),a._v(" "),_("h3",{attrs:{id:"mpa-路由分发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mpa-路由分发","aria-hidden":"true"}},[a._v("#")]),a._v(" MPA+路由分发")]),a._v(" "),_("blockquote",[_("p",[a._v("在多个独立的 spa 应用中跳转，通过吧界面、导航、皮肤做成类似的样子，让用户感觉是一个应用")])]),a._v(" "),_("ul",[_("li",[_("p",[a._v("优点：")]),a._v(" "),_("ul",[_("li",[a._v("框架无关")]),a._v(" "),_("li",[a._v("独立开发，测试部署")]),a._v(" "),_("li",[a._v("应用隔离100%")])])]),a._v(" "),_("li",[_("p",[a._v("缺点")]),a._v(" "),_("ul",[_("li",[a._v("割裂导致复用困难")])])])]),a._v(" "),_("h3",{attrs:{id:"类-single-spa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类-single-spa","aria-hidden":"true"}},[a._v("#")]),a._v(" 类 Single-SPA")]),a._v(" "),_("blockquote",[_("p",[a._v("主应用比较简单，主要做为加载容器，管理子应用的生命周期。主应用捕捉全局的路由事件，基于当前路由判断需要加载哪个子应用，比如：路由为/vue，我们就加载/vue 的子应用。路由切走之后需要卸载此应用。")])]),a._v(" "),_("ul",[_("li",[_("p",[a._v("优点")]),a._v(" "),_("ul",[_("li",[a._v("框架无关")]),a._v(" "),_("li",[a._v("独立开发，测试部署")]),a._v(" "),_("li",[a._v("项目自由分割，组合")]),a._v(" "),_("li",[a._v("便于自由扩展功能")])])]),a._v(" "),_("li",[_("p",[a._v("缺点")]),a._v(" "),_("ul",[_("li",[a._v("子应用需要实现生命周期钩子")]),a._v(" "),_("li",[a._v("全局污染和资源竞争")])])])]),a._v(" "),_("h3",{attrs:{id:"基座式-spa-主从应用设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基座式-spa-主从应用设计","aria-hidden":"true"}},[a._v("#")]),a._v(" 基座式 SPA,主从应用设计")]),a._v(" "),_("blockquote",[_("p",[a._v("原理和 single-span 类似。\n不同点在于基座会包含应用依赖的绝大多数环境，包括基础框架，基础组件和第三方依赖包。最后子应用一般会把自己的路由注册到主应用中，并不接管系统路由。子应用更像是主应用的一个“路由模块”")])]),a._v(" "),_("ul",[_("li",[a._v("优点：子应用智慧包含业务代码，体积小，加载快，用户体验好")]),a._v(" "),_("li",[a._v("缺点：基座就觉得了框架强相关\n基座版本升级可能导致子应用无法使用")])]),a._v(" "),_("h3",{attrs:{id:"传统-spa-组件化-私有-npm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传统-spa-组件化-私有-npm","aria-hidden":"true"}},[a._v("#")]),a._v(" 传统 SPA+组件化+私有 Npm")]),a._v(" "),_("blockquote",[_("p",[a._v("吧通用 的一些功能发布成组件，通过私有 Npm 的方式去维护和管理，其中根框架无关又比较有代表性的方案就是 Web Component 了。当然这种方式更像是业务组件或者说业务模块，而不是应用了")])]),a._v(" "),_("ul",[_("li",[a._v("优点：对现有项目进行渐进式增强")]),a._v(" "),_("li",[a._v("缺点：组件数量可能爆发式增长")])]),a._v(" "),_("h2",{attrs:{id:"四、网易严选微前端方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、网易严选微前端方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、网易严选微前端方案")]),a._v(" "),_("h3",{attrs:{id:"_1、整体架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、整体架构","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、整体架构")]),a._v(" "),_("p",[_("img",{attrs:{src:"/images/gmtc/muti-route/stract.jpg",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"_2、应用加载及路由方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、应用加载及路由方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、应用加载及路由方案")]),a._v(" "),_("p",[_("img",{attrs:{src:"/images/gmtc/muti-route/route.jpg",alt:""}})]),a._v(" "),_("ul",[_("li",[a._v("主应用是微前端的承载体：包括主框架的渲染，路由监听，应用隔离和应用通信。")]),a._v(" "),_("li",[a._v("子应用启动后接管系统路由")]),a._v(" "),_("li",[a._v("按照约定 Path 的规则获取 entry statics【约定优先于配置】")])]),a._v(" "),_("h3",{attrs:{id:"_3、应用隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、应用隔离","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、应用隔离")]),a._v(" "),_("ol",[_("li",[_("p",[a._v("为什么进行应用隔离？")]),a._v(" "),_("ul",[_("li",[a._v("添加，修改删除全局变量 - 绑定全局事件 - 修改原生方法或者对象 - css 样式冲突 - 修改原生方法或者原型链 - 等等....")])])]),a._v(" "),_("li",[_("p",[a._v("子应用和子应用隔离")])])]),a._v(" "),_("ul",[_("li",[_("p",[a._v("硬隔离")]),a._v(" "),_("blockquote",[_("p",[a._v("Window Reload+白屏优化（也就是刷新整个浏览器）\n1： 浏览器 snapshot+resume\n2： 服务端 SSR")])])]),a._v(" "),_("li",[_("p",[a._v("软隔离（使用 js 沙箱）\n"),_("img",{attrs:{src:"/images/gmtc/muti-route/jx-box.jpg",alt:""}})]),a._v(" "),_("ul",[_("li",[a._v("记住全局变量的修改，接触应用时恢复原有的值")]),a._v(" "),_("li",[a._v("记住全局事件监听 - 记住 setTimeout/requestAnimationFrame，卸载清除")]),a._v(" "),_("li",[a._v("加载子应用时生成一个快照，卸载时加载按照快照恢复")])])]),a._v(" "),_("li",[_("p",[a._v("主应用和子应用隔离")]),a._v(" "),_("ul",[_("li",[a._v("JS 隔离")])]),a._v(" "),_("blockquote",[_("p",[a._v("本身使用webpack的方式就已经做到Js大部分隔离，其余使用代码规范")])]),a._v(" "),_("ul",[_("li",[a._v("css隔离\n"),_("ul",[_("li",[a._v("shadow dom")]),a._v(" "),_("li",[a._v("设计上，使用同一套基础规范")])])])])])]),a._v(" "),_("h3",{attrs:{id:"_4、应用通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、应用通信","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、应用通信")]),a._v(" "),_("p",[_("img",{attrs:{src:"/images/gmtc/muti-route/event.jpg",alt:""}})]),a._v(" "),_("ul",[_("li",[a._v("通过中央事件总线，提供事件的收发")])]),a._v(" "),_("h3",{attrs:{id:"_5、应用请求分发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、应用请求分发","aria-hidden":"true"}},[a._v("#")]),a._v(" 5、应用请求分发")]),a._v(" "),_("p",[_("img",{attrs:{src:"/images/gmtc/muti-route/fenfa.jpg",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"_6、配置中心及配套设施"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、配置中心及配套设施","aria-hidden":"true"}},[a._v("#")]),a._v(" 6、配置中心及配套设施")])])}),[],!1,null,null,null);t.default=r.exports}}]);