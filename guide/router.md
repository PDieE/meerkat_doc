# 路由配置
在项目中，管理菜单路由都规范在 `src/router` 这个目录下进行配置。
::: tip
通常情况下不需要去理解和修改 `index.ts`, 只需要在 `modules` 目录下增删文件，即可自动添加更新路由
:::
配置内容是一个对应菜单层级的可嵌套的数组，如
``` js
[
  {
    path: '/dashboard',
    component: Layout,
    name: 'dashboard',
    meta: { title: '首页', icon: 'home', single: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: { title: '首页', roleCode: '/' },
      },
    ],
  },
];
```

路由配置字段所对应的具体作用：
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

目前菜单最多只允许配置到 `三级菜单`。且由于设计美观的需要一般只配置到二级
::: tip
务必注意，三级菜单需要在二级菜单中的组件包含 `<router-view>` 标签才能正常显示，[详见](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
:::
```js
{
 path: '/menu',
 name: 'menu',
 component: Layout,
 meta: { title: '一级菜单', icon: 'menu-fold' },
 children: [
    {
      path: 'second',
      meta: { title: '二级菜单' },
      component: () => import('@/layouts/blank.vue'),
      children: [
           {
             path: 'third',
             name: 'NestMenu',
             component: () => import('@/pages/nest-menu/index.vue'),
             meta: { title: '三级菜单' },
           },
      ],
    },
  ],
},
```