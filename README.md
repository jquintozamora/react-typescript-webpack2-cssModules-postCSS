# Simple Starter Template for React, TypeScript, postCSS, ITCSS, CSS-Modules, Webpack 2 and Live Reloading (React Hot Loader 3)
Use this Starter template to create quickly first scaffolding for your SPA project.

## Features
- [React](https://facebook.github.io/react)
- [TypeScript](https://www.typescriptlang.org) (compiling directly to ES5)
- [Webpack 2](https://webpack.js.org)
- EditorConfig
- Styling
  - General Styling:
      - Methodology: ITCSS
      - Tools: postCSS with import, nesting, custom properties and autoprefixer.
  - Components Styling:
      - CSS Modules + postCSS (import, nesting, custom properties and autoprefixer).
- Linting
  - TSLint: general rules + react rules
  - Stylint: CSS rules
    - Install VS Code extensions:
        - [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
        - [stylefmt](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-stylefmt)
          - Shift + Alt + F (Format Code)
          - Be sure you have these configurations on your .vscode/settings.json:
              - "css.validate": false,
              - "stylelint.enable": true
    - Rules are on .stylelintrc.json
    - [All the rules](https://stylelint.io/user-guide/rules)



## Getting Started
### Install pre-requisites
- Node.js and NPM: [Download and install](https://nodejs.org/). *I have version 6.6.0 of Node and 3.10.6 of NPM on Windows PC*
- Git: [Download and install](https://git-scm.com/). *I have version 2.7.4 installed on Windows PC*

### Clone Repo
1. Get the url of your forked project.
    - Go to https://github.com/username/react-typescript-webpack2-cssModules-postCSS
2. Click on **"Clone or download"** and Copy to clipboard the url ending on .git.
3. Open your command line and go to your directoy
*You don't need to create a specific folder for the project, it will be created by git*
4. Clone your forked repo on your machine:
```
$ git clone https://github.com/username/react-typescript-webpack2-cssModules-postCSS
```
*Note: That will create a new folder called react-typescript-webpack2-cssModules-postCSS with all the files in.*


### Install Project dependencies
```
$ cd react-es6-webpack-minimal-starter-template
$ npm install
```


### Open the project with your Development IDE
I use VS Code https://code.visualstudio.com
Open the project using this command:
```
$ code .
```

### Start development server with Hot Reloading
```
$ npm run start
```

### Done!


## License
(The MIT License) Copyright (c) 2017 Jose Quinto (https://blog.josequinto.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
