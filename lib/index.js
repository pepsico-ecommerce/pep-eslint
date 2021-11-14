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
                "simple-import-sort/exports": 1,
                "import/first": 1,
                "import/newline-after-import": 1,
                "import/no-duplicates": 1,
                'etc/prefer-interface': [1],
            }
        },
    },
    rules: {
        'interface-parameter': interface_parameter_1.default,
    }
};
//# sourceMappingURL=index.js.map