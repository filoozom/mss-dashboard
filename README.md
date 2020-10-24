# My Success Squared

This example repository contains a few useful examples, including:

- LaTeX rendering
- A few widgets, mostly to present to components library and responsiveness
- Interactive charts
- Drag and drop of arbitrary content
- Charts
  - Dynamic graph that charts functions
  - A few examples of functions and relations
  - A small geometry example with the translation of a square by a vector

## Run the dashboard

Start by installing NodeJS: https://nodejs.org/en/download/. Then, run the following commands:

```
$ npm i
$ npm run dev
```

You should get a similar message:

```
Compiled successfully!

You can view the application in browser.

Local:            http://localhost:8080
On Your Network:  http://10.0.0.20:8080
```

At this point, you can just open your browser and navigate to the given URL to see the application running.

## Tools

This example uses a bunch of tools that make development more enjoyable. For example, `prettier` and `eslint` make sure that your code corresponds to pre-defined coding styles and automatically fix issues on each commit thanks to `husky` and `lint-staged`.

To make this tooling more practical, you can install extensions for your IDE. For example, on VSCode, you should install:

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
- https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
- https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
