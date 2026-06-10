import {
  defineConfig,
  globalIgnores
} from 'eslint/config'
import vue from 'eslint-plugin-vue'
import stylistic from './eslint.stylistic.config'
import typescript from 'typescript-eslint'
import markdown from '@eslint/markdown'
import json from '@eslint/json'

export default defineConfig(
  // Global
  globalIgnores([
    'node_modules/',
    '.vitepress/dist/',
    '.vitepress/cache/',
    'package-lock.json'
  ]),

  // Typescript
  {
    files: ['**/*.ts'],
    languageOptions: { parserOptions: { projectService: true } },
    extends: [typescript.configs.recommendedTypeChecked]
  },

  // Vue
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: typescript.parser } },
    extends: [vue.configs['flat/recommended-error']]
  },

  // Vue
  vue.configs['flat/recommended-error'].flatMap(e => ({
    ...e,
    files: ['**/*.vue']
  })),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: typescript.parser,
        extraFileExtensions: ['.vue']
      }
    }
  },

  // Markdown
  {
    files: ['**/*.md'],
    languageOptions: { frontmatter: 'yaml' },
    extends: [markdown.configs.recommended],
    rules: { 'markdown/no-missing-label-refs': 'off' }
  },

  // JSON
  {
    files: ['**/*.json'],
    language: 'json/json',
    extends: [json.configs.recommended]
  },

  // Stylistic
  stylistic
)
