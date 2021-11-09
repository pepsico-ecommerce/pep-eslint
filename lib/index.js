"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const interface_parameter_1 = __importDefault(require("./rules/interface-parameter"));
module.exports = {
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
        'interface-parameter': interface_parameter_1.default,
    }
};
//# sourceMappingURL=index.js.map