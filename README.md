# eslint-plugin-pep-imports

Sort import declerations consistently

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-pep-imports`:

```sh
npm install eslint-plugin-pep-imports --save-dev
```

## Usage

Add `pep-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pep-imports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pep-imports/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


