"use strict";

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "asdf",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        const firstParam = node.params[0];
        const typeAnnotation = firstParam
          && firstParam.typeAnnotation
          && firstParam.typeAnnotation.typeAnnotation;
        
        if (typeAnnotation && typeAnnotation.type === 'TSTypeLiteral') {
          context.report({
            node: node, // shallow
            message:
              `You must define the params in a interface file`,
          });
        }
      },
    };
  },
};

    // fixable: "code",
    // type: "problem",