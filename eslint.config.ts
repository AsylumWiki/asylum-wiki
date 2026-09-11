import { defineConfig } from '@yumix/eslint'

export default defineConfig({
  config: {
    global: {
      ignores: [
        '.vitepress/dist',
        '.vitepress/cache',
        'dist/',
        'node_modules/',
        'package-lock.json',
        'README.md'
      ]
    },
    markdownlint: {
      rules: {
        'markdownlint/md013': 'off',
        'markdownlint/md033': 'off',
        'markdownlint/md036': 'off'
      }
    }
  }
})
