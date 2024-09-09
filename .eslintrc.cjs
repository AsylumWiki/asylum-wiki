module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'markdown'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:markdown/recommended'
	],
	rules: {
		'quotes': ['error', 'single'], // 使用单引号
		'semi': ['error', 'never'], // 无末尾分号
		'comma-dangle': ['error', 'never'], // 无末尾逗号
		'no-multiple-empty-lines': ['error', { max: 1 }], // 空行不超过一行
		'no-trailing-spaces': 'error', // 去除多余空格
		'indent': ['error', 'tab'], // 使用tab缩进
		'@typescript-eslint/indent': ['error', 'tab'], // TypeScript使用tab缩进
		'space-infix-ops': 'error', // 确保操作符前后有空格
		'space-before-blocks': 'error', // 块语句之前强制加空格
		'keyword-spacing': ['error', { before: true, after: true }], // 关键词前后必须有空格
		'space-before-function-paren': ['error', 'always'], // 函数定义时括号前空格
		'space-unary-ops': ['error', { words: true, nonwords: false }], // 一元操作符后面加空格
		'object-curly-spacing': ['error', 'always'], // 对象字面量的大括号内侧有空格
		'array-bracket-spacing': ['error', 'never'], // 数组括号内侧无空格
		'key-spacing': ['error', { beforeColon: false, afterColon: true }] // 冒号后面必须有空格
	}
}
