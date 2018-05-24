# Building Blockchain In JavaScript #

The project contains the code for creating a Blockchain and decentralized network in the JavaScript programming language.

In order ot run the code in the test file:
```
$ node dev/test.js
```
In order to install some npm library navigate to root dir and type for example:

*Use **--save** in order to save the library as a dependency* 
```
npm i sha256 --save
```

Used npm libraries:

1. [sha256](https://www.npmjs.com/package/sha256) - to convert the data into sha256 hash
1. [express](https://www.npmjs.com/package/express) - to build a server for an API. In order to start the server:
```
$ node dev/api.js
```
3. [nodemon](https://www.npmjs.com/package/nodemon) - to watch for file changes and automatically to restart your node application if there is any.

*In **package.json** in object **scripts** add "start": "nodemon --watch dev -e js dev/api.js". This mean that when **start** command is run in the console nodemon will **watch** the **dev** folder for any change made in file with **js** extension. When such change is made nodemon will restart dev/api.js file.*

In order to start the server using nodemon:
```
$ npm start
```
4. [body-parser](https://www.npmjs.com/package/body-parser) - to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

*In order to use body-parser add:*
```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```
*For more information check [body-parser](https://www.npmjs.com/package/body-parser)!*

5. [uuid](https://www.npmjs.com/package/uuid) - to create some unique values.
