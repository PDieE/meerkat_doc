# 进入开发

## 项目结构
```
.
├── mock                              # mock 目录
│     └── index.ts
├── node_modules                      # 项目依赖
├── public                            # 静态资源
│     └── favicon.ico
├── src                               # 页面代码（见下方页面代码结构）
├── .env                              # 生产环境变量
├── .env.development                  # 开发环境变量
├── CHANGELOG.md                      # 更新日志
├── commitlint.config.js              # commintlint 规范
├── index.html                        # 主 html 文件
├── package.json
├── README.md                         # 说明文档
├── tsconfig.json                     # typescript 配置文件
└── vite.config.js                    # vite 配置文件
```

## 项目结构
如上图所示，`src` 目录下是页面代码，大部分情况下，只需要增删 `src` 目录下的代码即可。  
`src` 内的结构大致如下所示，在过程过程中，请遵守既有的目录结构，以规范项目代码的组织结构。
```
src
├── api                               # 请求定义
│     ├── model                           # 请求定义所对应的数据类型
│     │     └── systemModel.ts                # system.ts 所对应的数据类型
│     └── system.ts                       # 请求定义
├── assets                            # 资源
├── components                        # 公共组件
├── config                            # 配置文件
│     ├── color.ts                        # 全局主题色彩配置
│     ├── global.ts                       # 全局常量配置
│     ├── proxy.ts                        # host配置
│     └── style.ts                        # 布局样式配置
├── constants                         # 公共常量
│     └── index.ts
├── hooks                             # 公共钩子
│     └── index.ts
├── layouts                           # 布局
│     ├── setting.vue                     # 配置生成组件
│     ├── blank.vue                       # 空白路由
│     └── index.tsx
├── pages                             # 业务模块（页面）
│     ├── dashboard                       # 一个页面组件
│     │     ├── const.ts                      # 该页面组件用到的常量
│     │     ├── index.less                    # 该页面组件的样式文件
│     │     ├── index.ts
│     │     └── index.vue
│     ├── ...
│     └── user
│           ├── index.less
│           └── index.vue
├── router                            # 路由
├── store                             # 状态管理（Pinia）
│     ├── index.ts
│     └── modules
│           ├── general.ts            # 公共状态仓库
│           ├── notification.ts       # 通知中心状态仓库
│           ├── permission.ts         # 权限状态仓库
│           ├── setting.ts            # 布局设置状态仓库
│           ├── user.ts               # 用户状态仓库
│           └── ...
├── style                             # 样式目录
│     ├── font-family.less                # 字体文件（腾讯体W7）
│     ├── index.less                      # 全局样式
│     ├── layout.less                     # 全局样式布局
│     ├── reset.less                      # 对默认样式的重置
│     └── variables.less                  # 模板样式 token 
├── types                             # 类型文件目录
└── utils                             # 工具
│     ├── request                         # 请求工具封装
│     ├── upload                          # 文件上传
│     ├── date.ts                         # 常用时间
│     ├── fileTypeCheck.ts                # 文件类型校验
│     ├── pattern.ts                      # 常用正则
│     └── util.ts                         # 常用工具方法
├── App.vue
├── permission.ts                    # 权限逻辑
└── main.ts                          # 入口逻辑文件
```

## 开始开发
### 新增页面
所有的页面均放置在 `/src/pages` 下，且只允许使用 `Composition API` 编写页面或组件
::: tip
页面级组件或需要包含动画的组件必须外包一个 `<div>` 标签。  
页面级组件如果需要内边距请为最外层 `<div>` 标签添加 `Class`: `padding-wrap`。
:::
``` vue
<template>
  <div>
    {{ count }} <t-button @clic="increment">+</t-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// 生命周期钩子
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})

// 定义变量
const count = ref(0)

// 定义方法
function increment() {
    count.value++
}
</script>
<style lang="less">
// 如果需要导入样式
@import "./index.less";

//...
</style>
```
然后，需要在配置新页面的路由。根据具体的需求，修改 `src/router/modules` 中的文件。
```js
export default [
  // ...其他路由
  {
    path: "/new-page",
    title: "新页面侧边栏标题",
    component: "layout",
    redirect: "/login/index",
    children: [
      {
        title: "新页面",
        path: "index",
        component: "@/pages/new-page/index.vue",
      },
    ],
  },
];
```

### 开发组件
所有的全局组件必须放于 ```src/component``` 目录下，非全局组件，如单独某页面的组件放置于该页面文件同级的 `./component` 目录下