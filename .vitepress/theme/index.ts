// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Layout from './DefaultLayout.vue'
import './style.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout
} satisfies Theme
