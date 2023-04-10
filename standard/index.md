# 企赋云前端项目规范
为了维护项目的代码质量，项目中内置了格式化代码的工具 `Prettier` 和代码检测质量检查工具 `ESlint`。

## 代码编写规范
### [Prettier](https://prettier.io)
在搭建好的项目中，已经内置了符合 企赋云 开发规范的 `.prettierrc.js` 文件。只需要安装 `Prettier` 插件，即可使用代码自动格式化的功能。

### [ESlint](https://eslint.org)
ESlint 可以用来检查代码质量和风格问题。
在架搭建好的项目中，也已经内置了 `.eslintrc` 文件。可以通过下面命令来进行代码检查和自动修复。
执行以下指令，会进行问题的检查及修复，在 `pre-commit` 的 `git hook` 中，项目也内置了检查指令，帮助您在提交代码前发现问题。
```shell
# 代码检查
npm run lint

# 自动修复问题
npm run lint:fix
```

## 换行
换行符全部采用LF
对于 `windows` 系统 必须要使用以下命令关闭自动换行符转换
```shell
git config --global core.autocrlf false
```

## 组件
1. 页面级组件必须外包一个 `<div>` 标签
```vue
<template>
  <div>
    <!-- 编写区域 -->
  </div>
</template>
```
2. 如果页面需要内边距请为最外层 `<div>` 标签添加 `Class`: `padding-wrap`
```vue
<template>
  <div class="padding-wrap">
    <!-- 编写区域 -->
  </div>
</template>
```
3. 全局公共组件必须放入 `/src/components` 文件夹


## 路由配置
所有开发人员在一半情况下只能通过 `/src/router/modules/components.ts` 文件添加或修改路由。
路由配置字段对的具体作用：
<ul>
  <li><code>path</code> 是当前路由的路径，会与配置中的父级节点的 path 组成该页面路由的最终路径；如果需要跳转外部链接，可以将 <code>path</code> 设置为 http 协议开头的路径。</li>
  <li><code>name</code> 影响多标签 Tab 页的 keep-alive 的能力，如果要确保页面有 keep-alive 的能力，请保证该路由的 <code>name</code> 与对应页面（SFC)的 <code>name</code> 保持一致。</li>
  <li><code>component</code> 渲染该路由时使用的页面组件</li>
  <li><code>redirect</code> 重定向的路径</li>
  <li>
    <code>meta</code> 主要用途是路由在菜单上展示的效果的配置
    <ul>
      <li><code>meta.title</code> 该路由在菜单上展示的标题</li>
      <li><code>meta.icon</code> 该路由在菜单上展示的图标</li>
      <li><code>meta.expanded</code> 决定该路由在菜单上是否默认展开</li>
      <li><code>meta.orderNo</code> 该路由在菜单上展示先后顺序，数字越小越靠前，默认为零</li>
      <li><code>meta.hidden</code> 决定该路由是否在菜单上进行展示</li>
      <li><code>meta.hiddenBreadcrumb</code> 如果启用了面包屑，决定该路由是否在面包屑上进行展示</li>
      <li><code>meta.single</code> 如果是多级菜单且只存在一个节点，想在菜单上只展示一级节点，可以使用该配置。<em>请注意该配置需配置在父节点</em></li>
      <li><code>meta.frameSrc</code> 内嵌 iframe 的地址</li>
      <li><code>meta.frameBlank</code> 内嵌 iframe 的地址是否以新窗口打开</li>
    </ul>
  </li>
  <li><code>children</code> 子菜单的配置</li>
</ul>

## 样式
1. 所有样式均采用 `less` 编写
1. 全局样式只可在 `/src/style/index.less` 文件添加或修改
1. 组件内样式必须使用 `scoped`
1. 全局 `token` 必须放入 `/src/style/variables.less` 文件
1. 全局样式重置，如：重置标签默认样式，重置组件库样式，必须放入 `/src/style/rest.less` 文件

## 资源文件
图片资源放入 `/src/assets/images` 文件夹，并通过在 `@/assets/images/parth-to` 方式引入

## 接口请求
所有的接口请求需要再 `/src/api` 文件夹内定义，且接口定义要与接口相关的Model文件对应，如: `/api/system.ts` 对应 `/api/model/systemModel.ts`

## 目录的命名规范
目录名全部使用小写，单词需采用复数形式，`kebab-case` 形式命名，如果需要有多个单词表达，使用中划线连接。如 `new-page`、`components`

## 文件的命名规范
文件的命名规范按照不同情况进行命名
1. 如果该文件是单文件组件/类，采用 `PascalCase` 形式命名，方便导入和使用。如 `StaffSelect.vue`
1. 如果该文件是目录下的主文件，采用 `index` 名称命名，方便导入。如 `index.vue`
1. 如果该文件是接口定义文件，采用 `camelCase` 形式命名，方便区分文件关联性。如 `system.ts` 和 `systemModel.ts`
1. 如果该文件是资源/样式文件，采用 `kebab-case` 形式命名。

## 类、接口、方法、变量等命名规范
1. 类名、接口名采用 `PascalCase` 形式命名，如 `UserInfo`
1. 方法名、变量名采用 `camelCase` 形式命名，如 `userInfo`
1. `constants`文件夹内的常量或其他常量采用 `CONTRACT_TYPES` 形式命名

## 分支规范
- 主干分支 -- `master`
- 功能分支 -- `feat/xxx`
- 修复分支 -- `fix/xxx`
`master` 分支只接受通过 `Pull Request` 合入功能分支
为保证提交的记录干净整洁，其他分支合入之前需要先 `rebase master` 分支
分支命名规则: `feat/20210401_功能名称`
一个分支只代表一个功能/页面/bugfix

## commit 规范
除特殊项目以外所有项目均使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 规范作为 message 的格式。
- feat：新功能
- fix：修补 bug
- docs：文档类变动
- style：样式
- refactor：重构
- test：增加测试
- chore：构建过程或辅助工具的变动

## 包管理器
包管理器推荐优先级 pnpm > yarn > npm
禁止使用cnpm




第三方依赖库选用标准
推荐依赖库如下图所示，如需使用其他依赖库或没有推荐，请报上级
使用场景	推荐依赖库	说明
主组件库	TDesgin	-
日期时间处理	dayjs	-
富文本编辑器	wangeditor（V5）	-
xxs攻击防护	xss	一般配合富文本编辑器使用
图片云存储	qiniu-js	公司内部一般推荐客户使用七牛云
图表可视化	@antv/g2plot	按需引入
高德地图	amap-jsapi-loader	按需引入，高德地图必须以这种方式引入
动态脚本加载	load-script	按需引入，主要用于某些js需要远程加载的情况
获取/判断UA	ua-parser-js	按需引入
滚动条	perfect-scrollbar	按需引入，一般用不上，使用场景有限
二维码生成	qrcode	按需引入




