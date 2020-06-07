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
