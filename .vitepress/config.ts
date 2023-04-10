import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '猫鼬云新品前端文档',
  description: '猫鼬云新品前端文档',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '规范', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Examples', link: '/markdown-examples' },
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
          ],
        },
      ],
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'markdown', link: '/markdown-examples' },
            { text: 'api', link: '/api-examples' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
