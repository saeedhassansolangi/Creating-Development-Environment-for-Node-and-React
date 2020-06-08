#  Development Environment for Node and React (Full Stack)

## 1. Initializing

First create a package.json file. 

You can create this file using the __npm init__ command:

```
$ npm init
```

## 2. Installing Main Dependencies

* Install Express 
  * Express is a Framework for creating a Nodejs Web Server

```
$ npm i express
```

* Install React and ReactDOM
  * React for Creating UI and ReactDOM to render that UI to the DOM
  
```
$ npm i react react-dom
```

* Install Webpack 
  * Webpack is a Modular Bundler . This will bundle all our Javascript files/others into a single file 

```
 $ npm i webpack webpack-cli
```

* Install Babel 
  * Babel is the Package/tool that compiles JSX into a Regular API Call that means babel compiles JSX into React.createElement() API behind the Scene because browsers dont understand JSX Syntax .

```
$ npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
```

> These Dependencies are Production Dependencies OR Main Dependencies that means when we install things on a production server then we are going to get all these Dependencies with it.

## 3. Installing Development Dependencies

* Install Nodemon 
  * Nodeomon is a Package that will automatically restart node when we change something in node OR it is a Watcher top of the Node Command and it will automatically restart that node command when we save changes to files.

```
$ npm i -D nodemon
```

* Install Eslint 
  * It will Analyze Our Code and tell us that we have a problem Or Our Code is Lacking in Certain Qualities.

```
$ npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
```

and Now We need to configure Eslint . We need to add a __.eslintrc.js__ file in the root of the project and paste below object in it .

__eslintrc.js__
```javascript
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
  },
};

```

## 4. Creating an Initial Directory Structure

NOw this is Really Depend upon us but if we do this then configuration for webpack is goint to be a little bit easier  

```text
/
  dist/
    main.js
  src/
    index.js
    components/
      App.js
    server/
      server.js

```
* mkdir dist src 
* cd src 
* mkdir components 


## 5. Configuring Webpack and Babel

### Configure Babel

 * To configure Babel to compile JSX and modern JavaScript code, create a __babel.config.js__ file under the root of the project and put the following module.exports object in it:

__babel.config.js__
```javascript
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```


### Configure Webpack

 * To configure Webpack to bundle our application into a single bundle file, create a __webpack.config.js__  file under the root of the project and put the following module.exports object in it:
  
__webpack.config.js__
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

## 6. Creating npm Scripts for Development

* we need 2 commands to run this environment. we need to run our web server and need to run Webpack to bundle the frontend application for browsers.
  
Now , goto the package.json and put below two lines under the scripts

```json
  "dev-server": "nodemon --exec babel-node src/server/server.js --ignore dist/"
```

The other script that you need is a simple runner for Webpack:

```json
"dev-bundle": "webpack -w -d"
```

Here’s the whole scripts section in package.json after adding these 2 new scripts

```json
scripts: {
  "dev-server": "nodemon --exec babel-node src/server/server.js --ignore dist/",
  "dev-bundle": "webpack -w -d"
}
```

##  7. Testing Everything with a Sample React Application

Here is a sample server-side ready React application that we can test with it .

__src/components/App.js__
```javascript
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
       <p>Increament</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
```

__src/index.js__
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

```

__src/server/server.js__
```javascript
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));
```

That’s it.now run both npm dev-server and dev-bundle scripts (in 2 separate terminals):

```
$ npm run dev-server
$ npm run dev-bundle
```

#### Then open up  browser on http://localhost:4242/ and it will run react app on that port. 

## Optional 
 
* If we want to run both __npm run dev-server__ and __npm run-dev-bundle__ with a Single Command , we need to install this package [npm-run-all](https://www.npmjs.com/package/npm-run-all) , it will run both the scripts with one command then we dont need to run both scripts in two different terminal .

```
npm i npm-run-all
```
Now goto the package.json file and add a __start__ script like below

```json
"scripts": {
    "start": "run-p dev-server dev-bundle",
}
```

run-p is for parallel 

NOw whole scripts section in package.json file after adding start script

```json
 "scripts": {
    "start": "run-p dev-server dev-bundle",
    "dev-server": "nodemon --exec babel-node src/server/server.js --ignore dist/",
    "dev-bundle": "webpack -w -d"
  },
```

Now Run like below command instead of dev-server and dev-bundle

```
npm start 
```

## Then open up  browser on http://localhost:4242/ and we will see our react app on port 4242. 
