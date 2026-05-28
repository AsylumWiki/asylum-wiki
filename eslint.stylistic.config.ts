import stylistic from '@stylistic/eslint-plugin'
import { ConfigWithExtends } from 'typescript-eslint'

const config = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
  arrowParens: false,
  braceStyle: '1tbs',
  blockSpacing: true,
  quoteProps: 'as-needed',
  commaDangle: 'never'
})

config.rules = {
  ...config.rules,
  '@stylistic/array-bracket-newline': [
    'error',
    {
      multiline: true,
      minItems: 2
    }
  ],
  '@stylistic/array-element-newline': [
    'error',
    'always'
  ],
  '@stylistic/curly-newline': [
    'error',
    'always'
  ],
  '@stylistic/function-call-argument-newline': [
    'error',
    'consistent'
  ],
  '@stylistic/function-call-spacing': [
    'error',
    'never'
  ],
  '@stylistic/function-paren-newline': [
    'error',
    { minItems: 2 }
  ],
  '@stylistic/implicit-arrow-linebreak': [
    'error',
    'beside'
  ],
  '@stylistic/linebreak-style': [
    'error',
    'unix'
  ],
  '@stylistic/newline-per-chained-call': [
    'error',
    { ignoreChainWithDepth: 1 }
  ],
  '@stylistic/no-confusing-arrow': [
    'error',
    {
      allowParens: true,
      onlyOneSimpleParam: false
    }
  ],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/nonblock-statement-body-position': [
    'error',
    'beside'
  ],
  '@stylistic/object-curly-newline': [
    'error',
    {
      multiline: true,
      minProperties: 2
    }
  ],
  '@stylistic/object-property-newline': 'error',
  '@stylistic/one-var-declaration-per-line': [
    'error',
    'initializations'
  ],
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: [
        'const',
        'let',
        'var',
        'function',
        'directive',
        'class',
        'enum',
        'interface',
        'type',
        'import',
        'export',
        'return',
        'throw'
      ],
      next: '*'
    },
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'const',
        'let',
        'var',
        'function',
        'directive',
        'class',
        'enum',
        'interface',
        'type',
        'import',
        'export',
        'return',
        'throw'
      ]
    },
    {
      blankLine: 'never',
      prev: [
        'const',
        'let',
        'var'
      ],
      next: [
        'const',
        'let',
        'var'
      ]
    },
    {
      blankLine: 'never',
      prev: 'import',
      next: 'import'
    },
    {
      blankLine: 'never',
      prev: 'export',
      next: 'export'
    },
    {
      blankLine: 'never',
      prev: 'directive',
      next: 'directive'
    }
  ],
  '@stylistic/semi-style': [
    'error',
    'last'
  ],
  '@stylistic/switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/wrap-regex': 'error'
}

export default config satisfies ConfigWithExtends
