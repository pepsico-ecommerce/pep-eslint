import interfaceParameter from './rules/interface-parameter';

export = {
    extends: [
        'eslint-plugin-etc',
        'eslint-plugin-import',
        'eslint-plugin-simple-import-sort',
    ],
    configs: {
        recommended: {
            plugins: [
                'eslint-plugin-etc',
                'eslint-plugin-import',
                'eslint-plugin-simple-import-sort',
            ],
            rules: {
                'pep-eslint/interface-parameter': [1],
                "simple-import-sort/exports": 1,
                "import/first": 1,
                "import/newline-after-import": 1,
                "import/no-duplicates": 1,
                'etc/prefer-interface': [1],
                'comma-spacing': [1, {"before": false, "after": true}],
                'no-multi-spaces': 1,
            }
        },
    },
    rules: {
        'interface-parameter': interfaceParameter,
    }
}
