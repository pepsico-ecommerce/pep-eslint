import { Rule } from "eslint";

const interfaceParameter: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: "Functions parameters must be primitive or its type defined in a interface",
      recommended: true,
    },
    schema: [], // Add a schema if the rule has options
  },
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        function doesParameterContainTypeLiteral(param: any) {
          const typeAnnotation = param?.typeAnnotation?.typeAnnotation;
        
          return typeAnnotation && typeAnnotation.type === 'TSTypeLiteral';
        }

        const params = node.params.map(p => p as any);

        if (params.some(doesParameterContainTypeLiteral)) {
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

export default interfaceParameter;
