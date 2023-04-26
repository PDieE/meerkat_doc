# 企赋云前端项目规范
为了维护项目的代码质量，项目中内置了格式化代码的工具 `Prettier` 和代码检测质量检查工具 `ESlint`。

# 开发规范
为了维护项目的代码质量，项目中内置了格式化代码的工具 Prettier 和代码检测质量检查工具 ESlint。  
同时，也确保你在开发过程中遵循提交规范，以保持项目仓库的分支、提交信息的清晰整洁。

## 包管理器
::: danger
禁止使用 `cnpm` 作为包管理工具
:::
包管理器推荐优先级 pnpm > yarn > npm
如果依赖项安装缓慢可以切换镜像
::: code-group
```sh [pnpm]
pnpm config set registry https://registry.npmmirror.com
```

```sh [yarn]
yarn config set registry https://registry.npmmirror.com
```

```sh [npm]
npm config set registry https://registry.npmmirror.com
```
:::

## 代码编写规范
项目内已经内置了符合本公司规范的 [Prettier](https://prettier.io) 和 [ESlint](https://eslint.org) 配置及相关功能
执行以下指令，会进行问题的检查及修复，在 `pre-commit` 的 `git hook` 中，项目也内置了检查指令，帮助你在提交代码前发现问题
::: code-group
```sh [pnpm]
# 代码检查
pnpm run lint

# 自动修复问题
pnpm run lint:fix
```

```sh [yarn]
# 代码检查
yarn run lint

# 自动修复问题
yarn run lint:fix
```

```sh [npm]
# 代码检查
npm run lint

# 自动修复问题
npm run lint:fix
```
:::

## 换行
换行符全部采用LF
对于 `windows` 系统 必须要使用以下命令关闭 `git` 自动换行符转换
```shell
git config --global core.autocrlf false
```

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
为保证提交的记录干净整洁，其他分支合入之前需要先 `git rebase master` 分支
::: tip
如果发生冲突解决后需要执行 `git add . && git rebase --continue` 继续进行rebase
:::
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