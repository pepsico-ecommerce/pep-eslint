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
                "simple-import-sort/imports": ["error", {
                  groups: [
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ["^@?\\w"],
                    // Absolute imports and other imports such as Vue-style `@/foo`.
                    // Anything not matched in another group.
                    ["^"],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ["^\\."],
                    // Side effect imports.
                    ["^\\u0000"],
                  ]
                }],
                "simple-import-sort/exports": "error",
                "import/first": "error",
                "import/newline-after-import": "error",
                "import/no-duplicates": "error",
                'etc/prefer-interface': [1],
            }
        },
    },
    rules: {
        'interface-parameter': interfaceParameter,
    }
}
