# 项目结构

## 根目录
```
.
├── README.md                         # 说明文档
├── index.html                        # 主 html 文件
├── docs
├── mock                              # mock 目录
│     └── index.ts
├── package.json
├── package-lock.json
├── node_modules                      # 项目依赖
├── public                            # 静态资源
│     └── favicon.ico
├── src                               # 页面代码（见下方页面代码结构）
├── .env                              # 生产环境变量
├── .env.development                  # 开发环境变量
├── commitlint.config.js              # commintlint 规范
├── tsconfig.json                     # typescript 配置文件
└── vite.config.js                    # vite 配置文件
```

## 页面代码
如上图所示，src 目录下是页面代码，大部分情况下，只需要增删 src 目录下的代码即可。  
src 内的结构大致如下所示，在过程过程中，请遵守既有的目录结构，以规范项目代码的组织结构。
```
src
├── App.vue
├── api                               # 请求定义
├── assets                            # 资源
├── components                        # 公共组件
│     ├── breadcrumb.vue
│     ├── ...
│     └── tvision
│          └── index.vue
├── config                            # 配置文件
│     ├── global.ts                       # 全局常量配置
│     ├── color.ts                        # 全局主题色彩配置
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
│     ├── dashboard-base                  # 一个页面组件
│     │     ├── const.ts                      # 该页面组件用到的常量
│     │     ├── index.less                    # 该页面组件的样式文件
│     │     ├── index.ts
│     │     └── index.vue
│     ├── ...
│     └── user
│           ├── index.less
│           └── index.vue
├── router                            # 路由（只允许修改components内的）
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
│     ├── color.ts                        # 色彩工具封装
│     ├── date.ts                         # 常用时间
│     ├── pattern.ts                      # 常用正则
│     ├── util.ts                         # 常用方法
│     ├── upload                          # 工具具封装
│     └── request                         # 请求工具封装
├── permission.ts                    # 权限逻辑
└── main.ts                          # 入口逻辑文件
```