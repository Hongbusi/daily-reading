module.exports = {
  base: '/daily-reading/',
  title: '每日阅读',
  head: [
    ['link', { rel: 'manifest', href: '/daily-reading/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
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
          placeholder: '搜索'
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
    navbar: [
      { text: '首页', link: 'https://hongbusi.github.io' },
      { text: '留言', link: 'https://github.com/Hongbusi/daily-reading/issues' }
    ],
    sidebar: [
      { text: '介绍', link: '/' },
      { text: '2022 年 04 月', link: '/2022/04.md' },
      { text: '2022 年 03 月', link: '/2022/03.md' },
      { text: '2022 年 02 月', link: '/2022/02.md' },
      { text: '2022 年 01 月', link: '/2022/01.md' },
      { text: '2021 年 12 月', link: '/2021/12.md' },
      { text: '2021 年 11 月', link: '/2021/11.md' },
      { text: '2021 年 10 月', link: '/2021/10.md' },
      { text: '2021 年 09 月', link: '/2021/09.md' },
      { text: '2021 年 08 月', link: '/2021/08.md' }
    ]
  }
}
