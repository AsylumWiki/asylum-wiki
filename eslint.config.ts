import { defineConfig } from 'eslint/config'
import stylistic from './eslint.stylistic.config'
import tseslint from 'typescript-eslint'
import markdown from '@eslint/markdown'
import json from '@eslint/json'

export default defineConfig(
  // General
  {
    ignores: [
      'node_modules/',
      '.vitepress/dist/',
      '.vitepress/cache/',
      'package-lock.json'
    ]
  },
  stylistic,

  // Typescript
  tseslint.configs.recommendedTypeChecked.flatMap(e => ({
    ...e,
    files: ['**/*.ts']
  })),
  {
    files: ['**/*.ts'],
    languageOptions: { parserOptions: { projectService: true } }
  },

  // Markdown
  markdown.configs.recommended,
  {
    files: ['**/*.md'],
    languageOptions: { frontmatter: 'yaml' },
    rules: { 'markdown/no-missing-label-refs': 'off' }
  },

  // JSON
  json.configs.recommended
)
