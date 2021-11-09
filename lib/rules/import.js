"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @type {import('eslint').Rule.RuleModule}
 */
exports.default = {
    meta: {
        type: 'suggestion',
        docs: {
            description: "asdf",
            category: "Fill me in",
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: null,
        schema: [], // Add a schema if the rule has options
    },
    // @ts-ignore
    create: function (context) {
        return {
            // @ts-ignore
            FunctionDeclaration(node) {
                const firstParam = node.params[0];
                const typeAnnotation = firstParam
                    && firstParam.typeAnnotation
                    && firstParam.typeAnnotation.typeAnnotation;
                if (typeAnnotation && typeAnnotation.type === 'TSTypeLiteral') {
                    context.report({
                        node: node,
                        message: `You must define the params in a interface file`,
                    });
                }
            },
        };
    },
};
// fixable: "code",
// type: "problem",
//# sourceMappingURL=import.js.map