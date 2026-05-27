import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import markdownPreferences from 'eslint-plugin-markdown-preferences'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  {
    ignores: [
      'node_modules/',
      '.vitepress/dist/',
      '.vitepress/cache/'
    ]
  },
	{
		files: ['*.{js,mjs,cjs}'],
		...js.configs.recommended
	},
	...tseslint.configs.recommended,
	json.configs.recommended,
	markdown.configs.recommended,
	markdownPreferences.configs.recommended,
	{
		languageOptions: {
			globals: globals.node
		},
		rules: {
			'quotes': [
				'error',
				'single'
			], // 使用单引号
			'semi': [
				'error',
				'never'
			], // 无末尾分号
			'comma-dangle': [
				'error',
				'never'
			], // 无末尾逗号
			'no-multiple-empty-lines': [
				'error',
				{
					max: 1
				}
			], // 空行不超过一行
			'no-multi-spaces': 'error', // 禁止多余连续空格（如连续两个空格缩进之外的）
			'no-whitespace-before-property': 'error', // 禁止对象属性前的空格
			'padded-blocks': [
				'error',
				'never'
			], // 禁止代码块前后出现空行
			'func-call-spacing': [
				'error',
				'never'
			], // 禁止函数调用时函数名与括号间的空格
			'block-spacing': [
				'error',
				'always'
			], // 强制单行代码块大括号内有空格
			'no-trailing-spaces': 'error', // 去除多余空格
			'space-infix-ops': 'error', // 确保操作符前后有空格
			'space-before-blocks': 'error', // 块语句之前强制加空格
			'keyword-spacing': [
				'error',
				{
					before: true,
					after: true
				}
			], // 关键词前后必须有空格
			'space-before-function-paren': [
				'error',
				'always'
			], // 函数定义时括号前空格
			'space-unary-ops': [
				'error',
				{
					words: true,
					nonwords: false
				}
			], // 一元操作符后面加空格
			'object-curly-spacing': [
				'error',
				'always'
			], // 对象字面量的大括号内侧有空格
			'array-bracket-spacing': [
				'error',
				'never'
			], // 数组括号内侧无空格
			'key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true
				}
			], // 冒号后面必须有空格
			'object-curly-newline': [
				'error',
				{
					'ObjectExpression': {
						'minProperties': 1
					},
					'ObjectPattern': {
						'multiline': true
					}
				}
			], // 强制属性换行
			'object-property-newline': [
				'error',
				{
					'allowAllPropertiesOnSameLine': false
				}
			], // 每个属性后面必须换行
			'array-bracket-newline': [
				'error',
				{
					'minItems': 2
				}
			], // 数组object换行
			'array-element-newline': [
				'error',
				'always'
			], // 每个数组元素后面必须换行
			'markdown/no-missing-label-refs': 'off'
		}
	}
)
