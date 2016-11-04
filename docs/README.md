## Knowhow

1. When bundling a JavaScript module file, lasso will automatically 
include any dependencies in a `browser.json` file in the same directory 
(if it exists).

2. `browser.json` at the page level should only declare it's direct dependencies and if you 
use an index.js file for all of your UI components then you should not need any other 
browser.json files as long as you switch to require:

```
{
  "dependencies": [
    // ...
    "require: ./some/nice-module",
  ]
}
```

3. Lasso will only find dependencies in JavaScript files that it bundles up to send to the 
browser. If you never send a tag's renderer JS file to the browser then Lasso will not find 
those dependencies in the renderer

## Features

1. The Marko compiler will remove unnecessary whitespaces in generated HTML


