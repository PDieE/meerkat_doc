# 快速开始

## 启动项目
项目并没有限制使用何种包管理器，您也可以采用Yarn或pnpm做您的包管理器，以下使用npm做演示

安装依赖
::: code-group
```sh [pnpm]
pnpm install
```

```sh [yarn]
yarn install
```

```sh [npm]
npm install
```
:::
运行项目

::: code-group
```sh [pnpm]
# Mock模式启动服务，打开浏览器
pnpm run dev:mock

# 启动服务，打开浏览器
pnpm run dev

# 只启动服务，不打开浏览器
pnpm run dev:linux
```

```sh [yarn]
# Mock模式启动服务，打开浏览器
yarn run dev:mock

# 启动服务，打开浏览器
yarn run dev

# 只启动服务，不打开浏览器
yarn run dev:linux
```

```sh [npm]
# Mock模式启动服务，打开浏览器
npm run dev:mock

# 启动服务，打开浏览器
npm run dev

# 只启动服务，不打开浏览器
npm run dev:linux
```
:::
::: tip
如启动失败，请通过 `node -v` 检查 Node 版本是否在 14.0.0 以上
:::

## 浏览器兼容性
::: warning
兼容数据仅供参考，未经过大规模测试认证，数据综合于项目内所使用的构建工具及各第三方库
:::
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" style="display: inline;" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" style="display: inline;" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" style="display: inline;" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" style="display: inline;" /> |
| :-------: | :-------: | :-------: | :-------: |
| Edge >=91 | Firefox >=83 | Chrome >=91 | Safari >=14.1 |

## 新手知识
[Vue](https://cn.vuejs.org)  
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

[Vue Router](https://router.vuejs.org/zh)  
项目使用Vue Router进行路由管理。 Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

[Pinia](https://pinia.vuejs.org/zh)  
项目使用Pinia进行全局的状态管理。 Pinia 是由vue.js官方成员重新设计的新一代状态管理器，开发者可以使用Pinia提供的各类基于Composition API的封装，更方便地在vue的项目中进行状态管理。