import type { LocaleSpecificConfig } from 'vitepress'
import nav from '../navs/zh-hans'
import sidebar from '../sidebars/zh-hans'
import footer from '../footers/zh-hans'

export default <LocaleSpecificConfig & { label: string; link?: string }> {
  label: '简体中文',
  lang: 'zh-hans',
  link: '/zh-hans/',
  description: "Asylum.wiki致力于为所有寻求保护以免遭受迫害和严重侵犯人权行为的人们提供信息和资源",
  themeConfig: {
    nav,
    sidebar,
    footer
  }
}