# Building Blockchain In JavaScript #

The project contains the code for creating a Blockchain and decentralized network in JavaScript programming language.

## Prerequisites ##
node.js

## Important ##
### All blockchain technology should be hosted across a decentralized network ###
So to build this decentralized blockchain network many different instances of the API should be made and each instance of the API is going to be a network node in the blockchain network and they are all going to work together to host the blockchain.

## How to use the project ##
Clone the project and in the terminal navigate to the Blockchain folder. All commands against node.js should be executed from this folder - e.g. 
```
$ npm run node_1
```
or
```
$ npm i sha256 --save
```

This project has 5 nodes - node_1, node_2, node_3, node_4 and node_5. 
In order to add more or remove some of the existing nodes open package.json and in **scripts** section add one or remove one.

Example how to add a new node:

```
"node_6": "nodemon --watch dev -e js dev/network_node.js 3006 http://localhost:3006"
```

*This means that **nodemon** will start the node at URI http://localhost and port 3006 and will restart it after every one change of any one file that is in **dev** folder and has extension **js**.*

### In order to run all nodes ###
open a different terminal for every one node and type the example in Section **Additional notes, p.3** (start the server using nodemon).

### In order to connect all different nodes in one network ###
create a POST request (e.g. using Postman).
The POST request should be against *<http://any_one_existing_node_url/register-and-broadcast-node>* endpoint.
In the JSON body of the request put an object with property **newNodeUrl** and value the url of the node that want to connect to the network. For example:
```
Url:
http://localhost:3001/register-and-broadcast-node

Method: POST

Headers:
Content-Type : application/json

Body:
{
    "newNodeUrl": "http://localhost:3002"
}
``` 
Run such request for every one node that want to add to network. After executing all requests everyone node in the network will be connected to all other nodes.

In order to create a transaction and broadcast it to the all network create a POST request (e.g. using Postman).
The POST request should be against *<http://any_one_existing_node_url/transaction/broadcast>* endpoint.
In the JSON body of the request put an object with the transaction data. The object should have the properties **amount**, **sender** and **recipient**:

For example:
```
Url:
http://localhost:3001/transaction/broadcast

Method: POST

Headers:
Content-Type : application/json

Body:
{
	"amount": 10,
	"sender": "3001W21SHDGHGASSAADJS324DGJSDGJS",
	"recipient": "3001W34KLKLKSAASSALDKLSDKSDKSL"
}
```
After executing this request the created transaction should be present in every one node!

### In order to mine some block ###
just navigate to *<http://any_one_existing_node_url/mine>*

Then the new block should b mined & broadcast successfully.

## Additional notes ##
In order to install some npm library navigate to root dir and type for example:

```
npm i sha256 --save
```
*Use **--save** in order to save the library as a dependency* 

Used npm libraries:

1. [sha256](https://www.npmjs.com/package/sha256) - to convert the data into sha256 hash
1. [express](https://www.npmjs.com/package/express) - to build a server for an API. In order to start the server:
```
$ node dev/api.js
```
3. [nodemon](https://www.npmjs.com/package/nodemon) - to watch for file changes and automatically to restart your node application if there is any.

*In **package.json** in object **scripts** add "<node_name>": "nodemon --watch dev -e js dev/api.js". This mean that when **npm run node_name** command is put in the console nodemon will **watch** the **dev** folder for any change made in file with **js** extension. When such change is made nodemon will restart dev/network_node.js file.*

In order to start the server using nodemon on some node:
```
/*
    node_1 is the name of the node in package.json, scripts section
*/

$ npm run node_1  
```
To run multiple nodes execute the above command in different terminal with the corresponding node name.

4. [body-parser](https://www.npmjs.com/package/body-parser) - to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

*In order to use body-parser add:*
```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```
*For more information check [body-parser](https://www.npmjs.com/package/body-parser)!*

5. [uuid](https://www.npmjs.com/package/uuid) - to create some unique values.

1. [request-promise](https://www.npmjs.com/package/request-promise) - to make requests to all other nodes in the network
