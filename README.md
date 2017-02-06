# react-typescript-es6-webpack2-postCSS
TypeScript + React + ES6 + Webpack 2 + postCSS + ITCSS starter template


## Linting tools
We will use linting tools in order to analyse code for potential errors.

### CSS (PostCSS) Lint
As we are using postCSS using plain CSS file type, we should carefully configure VS Code and CSS Linter (stylelint).
1. Install VS extensions
  - [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
  - [stylefmt](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-stylefmt)
    - Shift + Alt + F (Format Code)

2. Install npm package
```
  npm install --save-dev stylelint
```

3. .vscode/settings.json
```
  "css.validate": false,
  "stylelint.enable": true
```

4. Add .stylelintrc.json file to the roor
  - [All the rules](https://stylelint.io/user-guide/rules)


