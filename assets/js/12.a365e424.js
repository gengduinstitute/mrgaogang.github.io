(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{279:function(t,a,s){t.exports=s.p+"assets/img/tabbar-config.8d6135b3.png"},280:function(t,a,s){t.exports=s.p+"assets/img/bar-controller.9554796b.png"},281:function(t,a,s){t.exports=s.p+"assets/img/bar-lines.45f35210.png"},282:function(t,a,s){t.exports=s.p+"assets/img/bar-controllers.6d01057b.png"},369:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一、tabbar-的基础使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、tabbar-的基础使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、TabBar 的基础使用")]),t._v(" "),n("h3",{attrs:{id:"_1-storyboard-使用-tabbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-storyboard-使用-tabbar","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Storyboard 使用 TabBar")]),t._v(" "),n("p",[t._v("底部菜单栏的使用，可以在底部拖入一个 TabBar 进入即可，其中你可以设置：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("底部背景色 Bar Tint")])]),t._v(" "),n("li",[n("p",[t._v("每个 Item 被点击的时候颜色")])]),t._v(" "),n("li",[n("p",[t._v("自定义每个 Item 的文字及图片")])]),t._v(" "),n("li",[n("p",[t._v("每个 Item 的角标 Badge\n等等")]),t._v(" "),n("p",[n("img",{attrs:{src:s(279),alt:""}})])])]),t._v(" "),n("h3",{attrs:{id:"_2-代码设置-tabbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码设置-tabbar","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 代码设置 TabBar")]),t._v(" "),n("p",[t._v("此处只是简单列举了几个常用的修改 Tabbar 的属性，所有在 Storyboard 中的都是可以手动修改的。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do any additional setup after loading the view.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    Active时候的颜色")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tintColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    使用自定义颜色修改Tabbar背景色")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("barTintColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),t._v(" colorWithRed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" alpha"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    修改某个Item的角标值")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badgeValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    修改角标的背景色")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badgeColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),t._v(" greenColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    默认选中第一个")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedItem"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"_3-使用-tabbar-的-delegate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-tabbar-的-delegate","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 使用 TabBar 的 Delegate")]),t._v(" "),n("p",[t._v("日常开发中我们必须监听每一个 Item 的选中事件，这个时候我们就需要使用到 Delegate。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ViewController.h"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记得实现代理")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBarDelegate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@property")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weak"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonatomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IBOutlet")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@implementation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewController")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置代理")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件点击的方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBar didSelectItem"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBarItem")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%@ === %@"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badgeValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    如何点击关闭badge呢？")]),t._v("\n    item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badgeValue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"二、uitabbarcontroller-的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、uitabbarcontroller-的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、UITabBarController 的使用")]),t._v(" "),n("h3",{attrs:{id:"_1-使用-uitabbarcontroller-创建四个平行的-tab-页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-uitabbarcontroller-创建四个平行的-tab-页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 使用 UITabBarController 创建四个平行的 Tab 页面")]),t._v(" "),n("p",[t._v("之前我们有使用过 UINavigationController 创建导航，"),n("strong",[t._v("那么使用 UITabBarController 不同的点在于，他缩关联的几个页面都是平行的关系")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("第一步:添加 UITabBarController")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(280),alt:""}})]),t._v(" "),n("p",[n("strong",[t._v("第二步:拖如多个 ViewController 并按住 Control 键指向其余的 ViewController")]),t._v("\n拖动的时候记得选择 view controllers;\n"),n("img",{attrs:{src:s(281),alt:""}})]),t._v(" "),n("p",[t._v("拖入多个进来并关联之后，你会发现自动生成了多个 TabBarItem；"),n("strong",[t._v("拖拽的顺序决定显示的顺序")]),t._v(" "),n("img",{attrs:{src:s(282),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_2-自定义-uitabbarcontroller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义-uitabbarcontroller","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 自定义 UITabBarController")]),t._v(" "),n("p",[t._v("如果我们需要手动的监听 UITabBarController,则需要使用自定义的方式:")]),t._v(" "),n("ul",[n("li",[t._v("创建一个文件 CustomUITabBarController，集成自 UITabBarController")]),t._v(" "),n("li",[t._v("更改 Stroboard 中的 UITabBarController 的 Class 为 CustomUITabBarController")])]),t._v(" "),n("p",[t._v("我们可以通过 "),n("code",[t._v("UITabBarController")]),t._v("的定义文件查看到其有如下属性：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("viewControllers")]),t._v(" : 获取关联的所有 Controllers")]),t._v(" "),n("li",[n("code",[t._v("selectedViewController")]),t._v(": 当前选中的 controller")]),t._v(" "),n("li",[n("code",[t._v("selectedIndex")]),t._v(": 当前选择的下标")]),t._v(" "),n("li",[n("code",[t._v("tabBar")]),t._v(": 当前的 tabbar")]),t._v(" "),n("li",[n("code",[t._v("delegate")]),t._v(": UITabBarController 的代理方法")])]),t._v(" "),n("p",[t._v("要实现自定义选中效果，需要实现"),n("code",[t._v("UITabBarControllerDelegate")]),t._v("并设置代理为自己。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  CustomUITabBarController.m")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  TabBarController的使用")]),t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomUITabBarController.h"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomUITabBarController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBarControllerDelegate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@implementation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomUITabBarController")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do any additional setup after loading the view.")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义选中的tabbar")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBar"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBar didSelectItem"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBarItem")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    item.badgeValue=nil;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前选中的控制器，也可以获取到当前选中的tabbar")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBarController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITabBarController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tabBarController didSelectViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    viewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBarItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badgeValue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n")])])]),n("p",[n("strong",[t._v("参考")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://ke.qq.com/webcourse/index.html#cid=1583910&term_id=101682609&taid=7928380780981030&vid=5285890788197354936",target:"_blank",rel:"noopener noreferrer"}},[t._v("IOS12+Objective-C+Xcode 教程"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);