(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{431:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("此文列举出一些工作中经常使用的 git 操作")]),t._v(" "),a("h2",{attrs:{id:"如何更新-git-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何更新-git-message","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何更新 git message")]),t._v(" "),a("p",[t._v("日常工作中我们经常会遇到，自己已经提交的代码 "),a("code",[t._v("message")]),t._v(" 编写有误，需要重新更改，本文就列出一些常用的更改 "),a("code",[t._v("message")]),t._v(" 的方式.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("更改上一次的提交信息")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),a("p",[t._v("然后会进入一个文本编辑器界面，修改 "),a("code",[t._v("commit")]),t._v(" 的描述内容，然后"),a("code",[t._v(":wq")]),t._v("，即可完成操作。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("rebase 修改任意提交历史位置的 commit")])])]),t._v(" "),a("p",[t._v("使用 rebase 的方式修改提交记录，首先 使用 "),a("code",[t._v("git log")]),t._v(" 查看所有的提交记录")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的提交记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rebase到指定的commitId,此处假设要修改最后提交的三次记录")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3\n\n")])])]),a("p",[t._v("将会得到如下的信息,这里的提交日志是和"),a("code",[t._v("git log")]),t._v("倒叙排列的,我们要修改的日志信息位于第一位.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" pick "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2275781")]),t._v(" feat: should "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" method from parent\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" pick 223fc80 feat: unit "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" pick 9ac1179 feat: update "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Rebase 79db0bd..9ac1179 onto 79db0bd (3 commands)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Commands:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# p, pick = use commit")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# r, reword = use commit, but edit the commit message")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e, edit = use commit, but stop for amending")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# s, squash = use commit, but meld into previous commit")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# f, fixup = like "squash", but discard this commit\'s log message')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x, exec = run command (the rest of the line) using shell")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# d, drop = remove commit")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# These lines can be re-ordered; they are executed from top to bottom.")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you remove a line here THAT COMMIT WILL BE LOST.")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# However, if you remove everything, the rebase will be aborted.")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note that empty commits are commented out")]),t._v("\n")])])]),a("p",[t._v("我们现在要修改修改要"),a("code",[t._v("feat: update test case")]),t._v("和"),a("code",[t._v("feat: unit test case")]),t._v("这条日志,那么修改的日志为,将对应的 "),a("code",[t._v("pick")]),t._v(" 修改为 "),a("code",[t._v("edit")]),t._v(", 然后 "),a("code",[t._v(":wq")]),t._v("退出.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" pick "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2275781")]),t._v(" feat: should "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" method from parent\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" edit 223fc80 feat: unit "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" edit 9ac1179 feat: update "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\n")])])]),a("p",[t._v("将会看到如下信息,意思就是如果要改日志,执行"),a("code",[t._v("git commit --amend")]),t._v(",如果修改完成后,执行"),a("code",[t._v("git rebase --continue")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("client_java git:git rebase -i HEAD~3\nStopped at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2275781")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".  feat: should "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" method from parent\nYou can amend the commit now, with\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n\nOnce you are satisfied with your changes, run\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n➜  client_java git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2275781")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("然后输入"),a("code",[t._v("git commit --amend")]),t._v("进入修改"),a("code",[t._v("feat: update test case")]),t._v("的 message,"),a("code",[t._v("feat: update test case")]),t._v("修改完成之后"),a("code",[t._v(":wq")]),t._v("退出，")]),t._v(" "),a("li",[t._v("输入"),a("code",[t._v("git rebase --continue")]),t._v("继续修改下一个;")]),t._v(" "),a("li",[t._v("输入"),a("code",[t._v("git commit --amend")]),t._v("进入修改"),a("code",[t._v("feat: unit test case")]),t._v("的 message,修改完成之后"),a("code",[t._v(":wq")]),t._v("退出，")]),t._v(" "),a("li",[t._v("输入"),a("code",[t._v("git rebase --continue")]),t._v("继续修改下一个;")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("cherry-pick 修改任意提交历史位置的 commit")])])]),t._v(" "),a("p",[t._v("在网上很多的方式是使用"),a("code",[t._v("git rebase -i commitId")]),t._v("变基到指定的版本，但是在比较复杂的情况处理可能并非如你所愿，最好的方式是"),a("strong",[t._v("基于 Master 重新 checkout 出一个新的干净分支，然后使用 cherry-pick 的方式将要提交的记录挑拣到干净分支")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch public "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者使用 git fetch origin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b feat_xx_xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#换成自己的名字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行挑拣操作，建议使用一些辅助工具进行挑拣，当然也可以使用命令行的方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick commitId "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挑拣指定的提交记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果顺利的话，就可以正常提交了。如果遇到冲突，使用 git diff 解决冲突即可，工作中，不推荐手工解决冲突，最好还是使用一些 diff 工具来处理，毕竟手工处理容易出错。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git cherry-pick <start-commit-id>…<end-commit-id> 可以连续pick多个")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cherry-pick之后如果当前commit需要修改message就使用")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上述命令会进入编辑页面，修改message，然后esc+:wq")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如此循环往复，直到所有的都已经修改，最后再push")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"如何合并提交多次的记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何合并提交多次的记录","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何合并提交多次的记录")]),t._v(" "),a("p",[t._v("在使用 Git 作为版本控制的时候，我们可能会由于各种各样的原因提交了许多临时的 commit，而这些 commit 拼接起来才是完整的任务。那么我们为了避免太多的 commit 而造成版本控制的混乱，通常我们推荐将这些 commit 合并成一个。")]),t._v(" "),a("h3",{attrs:{id:"_1-查看提交历史，git-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看提交历史，git-log","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 查看提交历史，git log")]),t._v(" "),a("p",[t._v("首先你要知道自己想合并的是哪几个提交，可以使用 "),a("code",[t._v("git log")]),t._v(" 命令来查看提交历史，假如最近 4 条历史如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("commit 3ca6ec340edc66df13423f36f52919dfa3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n\ncommit 1b4056686d1b494a5c86757f9eaed844"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n\ncommit 53f244ac8730d33b353bee3b24210b07"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n\ncommit 3a4226b4a0b6fa68783b07f1cee7b688"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("历史记录是按照时间排序的，时间近的排在前面。")]),t._v(" "),a("h3",{attrs:{id:"_2-git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. git rebase")]),t._v(" "),a("p",[t._v("想要合并 1-3 条，有两个方法")]),t._v(" "),a("ol",[a("li",[t._v("从 HEAD 版本开始往过去数 3 个版本")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3\n")])])]),a("p",[t._v("2.指名要合并的版本之前的版本号")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i 3a4226b\n")])])]),a("p",[t._v("请注意 "),a("code",[t._v("3a4226b")]),t._v(" 这个版本是不参与合并的，可以把它当做一个坐标")]),t._v(" "),a("h3",{attrs:{id:"_3-选取要合并的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选取要合并的提交","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 选取要合并的提交")]),t._v(" "),a("ol",[a("li",[t._v("执行了 rebase 命令之后，会弹出一个窗口，头几行如下：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pick 3ca6ec3 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit记录'")]),t._v("\n\npick 1b40566 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit记录'")]),t._v("\n\npick 53f244a "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit记录'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("将 "),a("code",[t._v("pick")]),t._v(" 改为 "),a("code",[t._v("squash")]),t._v(" 或者 "),a("code",[t._v("s")]),t._v(",之后保存并关闭文本编辑窗口即可。改完之后文本内容如下：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pick 3ca6ec3 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit 记录'")]),t._v("\n\nsquash 1b40566 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit 记录'")]),t._v("\n\nsquash 53f244a "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit 记录'")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("然后保存退出，Git 会压缩提交历史，如果有冲突，需要修改，修改的时候要注意，保留最新的历史，不然我们的修改就丢弃了。修改以后要记得敲下面的命令：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n")])])]),a("p",[t._v("如果你想放弃这次压缩的话，执行以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --abort\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("如果没有冲突，或者冲突已经解决，则会出现如下的编辑窗口：")])]),t._v(" "),a("h1",{attrs:{id:"this-is-a-combination-of-4-commits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-is-a-combination-of-4-commits","aria-hidden":"true"}},[t._v("#")]),t._v(" This is a combination of 4 commits.")]),t._v(" "),a("p",[t._v("#The first commit’s message is:"),a("br"),t._v("\n注释......")]),t._v(" "),a("h1",{attrs:{id:"the-2nd-commit’s-message-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-2nd-commit’s-message-is","aria-hidden":"true"}},[t._v("#")]),t._v(" The 2nd commit’s message is:")]),t._v(" "),a("p",[t._v("注释......")]),t._v(" "),a("h1",{attrs:{id:"the-3rd-commit’s-message-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-3rd-commit’s-message-is","aria-hidden":"true"}},[t._v("#")]),t._v(" The 3rd commit’s message is:")]),t._v(" "),a("p",[t._v("注释......")]),t._v(" "),a("h1",{attrs:{id:"please-enter-the-commit-message-for-your-changes-lines-starting-with-‘-’-will-be-ignored-and-an-empty-message-aborts-the-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#please-enter-the-commit-message-for-your-changes-lines-starting-with-‘-’-will-be-ignored-and-an-empty-message-aborts-the-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" Please enter the commit message for your changes. Lines starting # with ‘#’ will be ignored, and an empty message aborts the commit.")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("输入 wq 保存并推出, 再次输入 git log 查看 commit 历史信息，你会发现这两个 commit 已经合并了。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);