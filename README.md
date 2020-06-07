# Creating Development Environment for Node and React (Full Stack)

## 1. Initializine

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