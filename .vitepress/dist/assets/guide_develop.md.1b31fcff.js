import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ed3fd7ea.js";const F=JSON.parse('{"title":"进入开发","description":"","frontmatter":{},"headers":[],"relativePath":"guide/develop.md","filePath":"guide/develop.md","lastUpdated":1681124342000}'),p={name:"guide/develop.md"},o=l(`<h1 id="进入开发" tabindex="-1">进入开发 <a class="header-anchor" href="#进入开发" aria-label="Permalink to &quot;进入开发&quot;">​</a></h1><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── mock                              # mock 目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├── node_modules                      # 项目依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">├── public                            # 静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── favicon.ico</span></span>
<span class="line"><span style="color:#A6ACCD;">├── src                               # 页面代码（见下方页面代码结构）</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .env                              # 生产环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .env.development                  # 开发环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">├── CHANGELOG.md                      # 更新日志</span></span>
<span class="line"><span style="color:#A6ACCD;">├── commitlint.config.js              # commintlint 规范</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.html                        # 主 html 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md                         # 说明文档</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tsconfig.json                     # typescript 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">└── vite.config.js                    # vite 配置文件</span></span></code></pre></div><h2 id="项目结构-1" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构-1" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><p>如上图所示，<code>src</code> 目录下是页面代码，大部分情况下，只需要增删 <code>src</code> 目录下的代码即可。<br><code>src</code> 内的结构大致如下所示，在过程过程中，请遵守既有的目录结构，以规范项目代码的组织结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── api                               # 请求定义</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── model                           # 请求定义所对应的数据类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│     │     └── systemModel.ts                # system.ts 所对应的数据类型</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── system.ts                       # 请求定义</span></span>
<span class="line"><span style="color:#A6ACCD;">├── assets                            # 资源</span></span>
<span class="line"><span style="color:#A6ACCD;">├── components                        # 公共组件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config                            # 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── color.ts                        # 全局主题色彩配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── global.ts                       # 全局常量配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── proxy.ts                        # host配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── style.ts                        # 布局样式配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├── constants                         # 公共常量</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├── hooks                             # 公共钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├── layouts                           # 布局</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── setting.vue                     # 配置生成组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── blank.vue                       # 空白路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── index.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">├── pages                             # 业务模块（页面）</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── dashboard                       # 一个页面组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│     │     ├── const.ts                      # 该页面组件用到的常量</span></span>
<span class="line"><span style="color:#A6ACCD;">│     │     ├── index.less                    # 该页面组件的样式文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│     │     ├── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│     │     └── index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── ...</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── user</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── index.less</span></span>
<span class="line"><span style="color:#A6ACCD;">│           └── index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├── router                            # 路由</span></span>
<span class="line"><span style="color:#A6ACCD;">├── store                             # 状态管理（Pinia）</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── modules</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── general.ts            # 公共状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── notification.ts       # 通知中心状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── permission.ts         # 权限状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── setting.ts            # 布局设置状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── user.ts               # 用户状态仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">│           └── ...</span></span>
<span class="line"><span style="color:#A6ACCD;">├── style                             # 样式目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── font-family.less                # 字体文件（腾讯体W7）</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── index.less                      # 全局样式</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── layout.less                     # 全局样式布局</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── reset.less                      # 对默认样式的重置</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── variables.less                  # 模板样式 token </span></span>
<span class="line"><span style="color:#A6ACCD;">├── types                             # 类型文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">└── utils                             # 工具</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── request                         # 请求工具封装</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── upload                          # 文件上传</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── date.ts                         # 常用时间</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── fileTypeCheck.ts                # 文件类型校验</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├── pattern.ts                      # 常用正则</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └── util.ts                         # 常用工具方法</span></span>
<span class="line"><span style="color:#A6ACCD;">├── App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├── permission.ts                    # 权限逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">└── main.ts                          # 入口逻辑文件</span></span></code></pre></div><h2 id="开始开发" tabindex="-1">开始开发 <a class="header-anchor" href="#开始开发" aria-label="Permalink to &quot;开始开发&quot;">​</a></h2><h3 id="新增页面" tabindex="-1">新增页面 <a class="header-anchor" href="#新增页面" aria-label="Permalink to &quot;新增页面&quot;">​</a></h3><p>所有的页面均放置在 <code>/src/pages</code> 下，且只允许使用 <code>Composition API</code> 编写页面或组件</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>页面级组件或需要包含动画的组件必须外包一个 <code>&lt;div&gt;</code> 标签。<br> 页面级组件如果需要内边距请为最外层 <code>&lt;div&gt;</code> 标签添加 <code>Class</code>: <code>padding-wrap</code>。</p></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ count }} </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">t-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@clic</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">t-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 生命周期钩子</span></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">The initial count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义变量</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义方法</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果需要导入样式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>然后，需要在配置新页面的路由。根据具体的需求，修改 <code>src/router/modules</code> 中的文件。<a href="/guide/router.html">详见</a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...其他路由</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/new-page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">新页面侧边栏标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/login/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">新页面</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/pages/new-page/index.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="开发组件" tabindex="-1">开发组件 <a class="header-anchor" href="#开发组件" aria-label="Permalink to &quot;开发组件&quot;">​</a></h3><p>所有的全局组件必须放于 <code>src/component</code> 目录下，非全局组件，如单独某页面的组件放置于该页面文件同级的 <code>./component</code> 目录下</p>`,15),e=[o];function t(c,r,D,y,i,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
