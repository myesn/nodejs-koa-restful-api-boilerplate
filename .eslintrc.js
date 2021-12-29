module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        // 统一在语句某位加分号 ;
        'semi': [
            'error',
            'always'
        ],
        // 统一使用单引号 ''
        'quotes': [
            'error',
            'single'
        ]
    }
};
