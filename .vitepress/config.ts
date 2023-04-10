import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '猫鼬云新品前端文档',
  description: '猫鼬云新品前端文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '规范', link: '/standard/', activeMatch: '/standard/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {
      '/standard/': [
        {
          text: '规范',
          items: [
            { text: '基础', link: '/standard/' },
            { text: '项目结构', link: '/standard/structure' },
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
