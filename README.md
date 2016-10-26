#  Lasso + Marko Startkit

<a href="https://github.com/lasso-js/lasso">Lasso</a> &mdash; is an eBay open source Node.js-style JavaScript module bundler that also
provides first-level support for optimally delivering JavaScript, CSS, images and other
assets to the browser.

<a href="https://github.com/marko-js/marko">Marko</a> &mdash; is a really fast and lightweight HTML-based templating engine from eBay. Marko
runs on Node.js and in the browser and it supports streaming, async rendering and custom
tags. Templates are compiled to readable CommonJS modules.

<a href="https://github.com/patrick-steele-idem/browser-refresh">Browser Refresh</a> &mdash; is a productivity module enabling instant web page refreshes
anytime a front-end resource is modified on the server. This module supports live
reloading of CSS and JavaScript without doing a full page refresh.


## Try it

```sh
$ git clone git@github.com:schetnikovich/lasso-marko-startkit.git 
$ npm install
$ npm start
```

Open [http://localhost:8080]() with your browser.

## Build

    NODE_ENV=production node src/build.js
    
Assets will be generated in `build/static` folder