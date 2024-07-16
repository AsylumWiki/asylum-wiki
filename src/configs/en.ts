import type { LocaleSpecificConfig } from 'vitepress'
import nav from '../navs/en'
import sidebar from '../sidebars/en'
import footer from '../footers/en'

export default <LocaleSpecificConfig & { label: string; link?: string }> {
  label: 'English',
  lang: 'en',
  link:'/en/',
  description: 'Asylum.wiki is dedicated to providing information and resources to all those seeking protection from persecution and serious human rights violations',
  themeConfig: {
    nav,
    sidebar,
    footer
  }
}