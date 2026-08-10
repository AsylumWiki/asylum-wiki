import { defineConfig } from '@yumix/vitepress'
import path from 'node:path'

export default defineConfig({
  srcDir: 'docs',
  vite: {
    publicDir: path.resolve(
      import.meta.dirname, 'public'
    ),
    ssr: { noExternal: ['@yumix/vitepress'] }
  },
  sitemap: { hostname: 'https://asylum.wiki' },
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    },
    'zh-hant': {
      label: '繁体中文',
      lang: 'zh-Hant',
      link: '/zh-hant/',
      themeConfig: {
        outline: { label: '頁面導覽' },
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },
        lastUpdated: { text: '最後更新於' },
        langMenuLabel: '多語言',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換至淺色模式',
        darkModeSwitchTitle: '切換至深色模式'
      }
    },
    'zh-hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh-hans/',
      themeConfig: {
        outline: { label: '页面导航' },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: { text: '最后更新于' },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },
  titleTemplate: ':title | AsylumWiki',
  themeConfig: {
    logo: '/logo-blue.svg',
    siteTitle: false,
    footer: {
      message: 'All contents are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.',
      copyright: 'Copyright © 2024-2026 AyslumWiki.'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/AsylumWiki/asylum-wiki'
      },
      {
        icon: 'twitter',
        link: 'https://x.com/AsylumWiki'
      },
      {
        icon: { svg: '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12zm-11.57-3.14107c-1.1671.48547-3.49985 1.49027-6.99809 3.01437-.56806.2259-.86563.4469-.89272.663-.04579.3652.41154.509 1.0343.7048.08471.0267.17249.0543.26247.0835.6127.1992 1.43688.4322 1.86535.4414.38865.0084.82244-.1518 1.30135-.4807 3.26854-2.2063 4.95574-3.32149 5.06164-3.34553.0748-.01696.1783-.03829.2485.02408.0701.06235.0633.18045.0558.21215-.0453.1931-1.8405 1.8621-2.7695 2.7258-.2896.2692-.495.4602-.537.5038-.0941.0978-.19.1902-.2821.279-.5692.5487-.99607.9602.0236 1.6322.4901.3229.8822.5899 1.2734.8563.4272.291.8533.5812 1.4046.9426.1405.0921.2746.1877.4053.2808.4972.3545.9439.6729 1.4957.6221.3207-.0295.6519-.331.8201-1.2302.3975-2.1252 1.1789-6.7299 1.3595-8.62742.0159-.16625-.004-.37901-.02-.4724-.016-.0934-.0494-.22647-.1708-.32498-.1438-.11666-.3657-.14126-.465-.13952-.4514.00796-1.1438.24874-4.4764 1.63485z" fill-rule="evenodd"/></svg>' },
        link: 'https://t.me/AsylumWiki'
      }
    ],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: text => text.match(/[a-zA-Z0-9_]+|[\u4e00-\u9fa5\u3400-\u4dff]/g) || [],
            processTerm: term => term.toLowerCase()
          }
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          },

          'zh-hant': {
            translations: {
              button: {
                buttonText: '搜尋文件',
                buttonAriaLabel: '搜尋文件'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '清除查詢條件',
                backButtonTitle: '關閉搜尋',
                noResultsText: '找不到相關結果',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          },

          'zh-hans': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }

        }
      }
    },
    autoSidebar: [
      'en',
      'zh-hans',
      'zh-hant'
    ].flatMap(lang => [
      'i',
      'c',
      'e',
      'm'
    ].flatMap(link => ({
      link: `${lang}/${link}`,
      deep: 5
    }))),
    autoNavbar: Object.fromEntries([
      'en',
      'zh-hans',
      'zh-hant'
    ].map(lang => [
      lang === 'en' ? 'root' : lang,
      [
        'i',
        'c',
        'e',
        'm'
      ].map(cont => ({
        link: `${lang}/${cont}`,
        deep: 2
      }))
    ])),
    useSlug: true,
    useRedirect: true,
    autoRedirectToFirstChild: true
  }
})
