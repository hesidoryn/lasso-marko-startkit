#  Lasso + Marko Startkit

<img src="/docs/page.png?raw=true" width=600>

<a href="https://github.com/lasso-js/lasso">Lasso</a> &mdash; is an eBay open source 
Node.js-style JavaScript module bundler that also provides first-level support for optimally 
delivering JavaScript, CSS, images and other assets to the browser.

<a href="https://github.com/marko-js/marko">Marko</a> &mdash; is a really fast and lightweight 
HTML-based templating engine from eBay. Marko runs on Node.js and in the browser and it supports 
streaming, async rendering and custom tags. Templates are compiled to readable CommonJS modules.

<a href="https://github.com/marko-js/marko">Marko Widgets</a> &mdash; is a simple and efficient 
mechanism for binding behavior to UI components rendered on either the server or in the browser. 
Marko Widgets has adopted many of the good design principles promoted by the React team, but 
aims to be much lighter and often faster (especially on the server).

<a href="https://github.com/patrick-steele-idem/browser-refresh">Browser Refresh</a> &mdash; is 
a productivity module enabling instant web page refreshes anytime a front-end resource is modified 
on the server. This module supports live reloading of CSS and JavaScript without doing a full 
page refresh.


## Try it

```sh
$ git clone git@github.com:schetnikovich/lasso-marko-startkit.git 
$ npm install
$ npm start
```

Open [http://localhost:8080]() with your browser.

## Static assets and Marko templates

All static assets (JS, CSS, SVG, images etc.) are automatically processed at runtime and
copied to `build/static` folder. Marko templates are also compiled on the fly at runtime. 
It is very handy when you are developing. But when you are ready to deploy, you would like to 
build and compile all resources upfront to make your site load instantly.

You can build all static assets and compile all Marko templates with the following single
command. Static assets will be generated in `build/static` folder:

    npm run build
    
If you want to recompile just all Marko templates, use the following command:

    npm run marko
   
Test again
