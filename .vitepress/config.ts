import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '猫鼬云新品前端文档',
  description: '猫鼬云新品前端文档',
  lastUpdated: true,
  
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '规范', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: '组件', link: '/components/rich-editor', activeMatch: '/components/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '上手',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
        {
          text: '规范',
          items: [
            { text: '进入开发', link: '/guide/develop' },
            { text: '开发规范', link: '/guide/develop-rules' },
            { text: '路由与菜单', link: '/guide/router' },
            { text: '样式与静态资源', link: '/guide/style' },
            { text: '依赖库选用标准', link: '/guide/modules' }
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '富文本 - RichEditor', link: '/components/rich-editor' },
            { text: '文件上传 - Uploader', link: '/components/uploader' },
          ],
        },
        {
          text: '列表元素',
          items: [
            { text: '数据分析 - Analysis', link: '/components/list-item/analysis' },
            { text: '品类发展史 - CategoryHistory', link: '/components/list-item/category-history' },
            { text: '竞品/产品 - Competitor', link: '/components/list-item/competitor' },
            { text: '核心竞品 - CoreCompetitor', link: '/components/list-item/core-competitor' },
          ],
        },
        {
          text: '图',
          items: [
            { text: '行业发展史 - IndustryNodeGraph', link: '/components/graph-editor/industry-node-graph' },
            { text: '品类发展史 - CategoryNodeGraph', link: '/components/graph-editor/category-node-graph' },
            { text: '趋势图 - TrendNodeGraph', link: '/components/graph-editor/trend-node-graph' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
