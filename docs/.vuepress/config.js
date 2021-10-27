module.exports = {
  base: '/daily-reading/',
  dest: 'dist',
  title: '每日阅读',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', { rel: 'manifest', href: '/daily-reading/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  bundler: '@vuepress/webpack',
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: '搜索',
        }
      }
    }]
  ],
  themeConfig: {
    repo: 'Hongbusi/daily-reading',
    docsDir: 'docs',
    docsBranch: 'master',
    logo: '/images/logo.png',
    sidebarDepth: 0,
    sidebar: [
      { text: '介绍', link: '/' },
      { text: '2021 年 10 月', link: '/2021/10.md'},
      { text: '2021 年 09 月', link: '/2021/09.md'},
      { text: '2021 年 08 月', link: '/2021/08.md'}
    ]
  }
}
