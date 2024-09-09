import type { LocaleSpecificConfig } from 'vitepress'
import nav from '../navs/zh-hant'
import sidebar from '../sidebars/zh-hant'
import footer from '../footers/zh-hant'

export default <LocaleSpecificConfig & { label: string; link?: string }> {
	label: '繁体中文',
	lang: 'zh-hant',
	link: '/zh-hant/',
	description: 'Asylum.wiki致力於為所有尋求保護以免遭受迫害和嚴重侵犯人權行為的人們提供資訊和資源',
	themeConfig: {
		nav,
		sidebar,
		footer,
		docFooter: {
			prev: '上一頁',
			next: '下一頁'
		},
		outlineTitle: '頁面內容'
	}
}