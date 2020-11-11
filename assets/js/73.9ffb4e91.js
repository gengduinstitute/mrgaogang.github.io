(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{366:function(e,r,t){"use strict";t.r(r);var a=t(1),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"xcode-所遇问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode-所遇问题汇总","aria-hidden":"true"}},[e._v("#")]),e._v(" Xcode 所遇问题汇总")]),e._v(" "),t("h2",{attrs:{id:"xcode-升级到-12-0-所遇问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode-升级到-12-0-所遇问题","aria-hidden":"true"}},[e._v("#")]),e._v(" Xcode 升级到 12.0 所遇问题")]),e._v(" "),t("p",[e._v("升级到"),t("code",[e._v("Xcode12.0")]),e._v("之后，可能会存在如下问题，有兴趣的同学可以尝试一下！")]),e._v(" "),t("h3",{attrs:{id:"_1-objc-msgsend-too-many-arguments-to-function-call-expected-0-have-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-objc-msgsend-too-many-arguments-to-function-call-expected-0-have-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 1: objc_msgsend too many arguments to function call expected 0 have 3")]),e._v(" "),t("p",[e._v("解决办法:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Project -> Clear Builder Folder")])]),e._v(" "),t("li",[e._v("然后 设置 "),t("code",[e._v("Enable Strict Checking of objc_msgSend Calls")]),e._v("为"),t("code",[e._v("NO")])]),e._v(" "),t("li",[e._v("关闭XCode 重新打开")])]),e._v(" "),t("h3",{attrs:{id:"_2-missing-one-or-more-architectures-required-by-this-target-arm64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-missing-one-or-more-architectures-required-by-this-target-arm64","aria-hidden":"true"}},[e._v("#")]),e._v(" 2: missing one or more architectures required by this target: arm64")]),e._v(" "),t("blockquote",[t("p",[e._v("Xcode12 build error. The linked framework 'Pods_projectA.framework'is missing one or more architectures required by this target: arm64")])]),e._v(" "),t("p",[e._v("解决办法: "),t("strong",[e._v("Project -> Build Settings -> Excluded Architecture -> Debug -> Any iOS Simulator SDK")]),e._v(" 添加"),t("code",[e._v("arm64")])]),e._v(" "),t("h3",{attrs:{id:"_3：xxx-h-文件-找不到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3：xxx-h-文件-找不到","aria-hidden":"true"}},[e._v("#")]),e._v(" 3：xxx.h 文件 找不到")]),e._v(" "),t("p",[e._v("解决办法: 在"),t("strong",[e._v("Header Search Path -> Debug 中添加对应搜索目录")])]),e._v(" "),t("h3",{attrs:{id:"_4-no-architectures-to-compile-for-only-active-arch-yes-active-arch-x86-64-valid-archs-arm64-armv7-armv7s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-no-architectures-to-compile-for-only-active-arch-yes-active-arch-x86-64-valid-archs-arm64-armv7-armv7s","aria-hidden":"true"}},[e._v("#")]),e._v(" 4: No architectures to compile for (ONLY_ACTIVE_ARCH=YES, active arch=x86_64, VALID_ARCHS=arm64 armv7 armv7s).")]),e._v(" "),t("p",[e._v("解决办法: "),t("strong",[e._v("Project -> Build Settings -> Build Active Architecture Only -> Debug 设置为"),t("code",[e._v("NO")])])]),e._v(" "),t("h3",{attrs:{id:"_5-command-phasescriptexecution-failed-with-a-nonzero-exit-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-command-phasescriptexecution-failed-with-a-nonzero-exit-code","aria-hidden":"true"}},[e._v("#")]),e._v(" 5: Command PhaseScriptExecution failed with a nonzero exit code")]),e._v(" "),t("p",[e._v("问题原因: "),t("a",{attrs:{href:"https://stackoverflow.com/questions/63607158/xcode-12-building-for-ios-simulator-but-linking-in-object-file-built-for-ios",target:"_blank",rel:"noopener noreferrer"}},[e._v("请见这里"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解决办法 1: 删除 "),t("code",[e._v("User-Defined")]),e._v(" 下面的 "),t("code",[e._v("VALID_ARCHS")]),e._v("设置 ，设置 Excluded Architecture 下 [Any iOS Simjulator]为 "),t("code",[e._v("arm64")])]),e._v(" "),t("p",[e._v("解决办法 2: 在 "),t("code",[e._v("User-Defined")]),e._v(" 下面的 "),t("code",[e._v("VALID_ARCHS")]),e._v("设置，Debug 为 "),t("code",[e._v("arm64 armv7 armv7s x86_64")]),e._v("新增 "),t("code",[e._v("x86_64")]),e._v("机型。")])])}),[],!1,null,null,null);r.default=o.exports}}]);